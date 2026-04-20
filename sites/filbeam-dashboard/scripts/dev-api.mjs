// Local-only HTTP server mirroring the production Worker's /api/* routes.
// Used during `npm run dev` when the real Worker isn't reachable. Talks
// directly to filbeam's D1 HTTP API with the creds in process.env.
//
// NOT USED IN PRODUCTION — the deployed Worker serves /api/* at the edge.
import { createServer } from 'node:http'

const NETWORK = process.env.NETWORK || 'calibration'
const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID
const KEY = process.env.CLOUDFLARE_API_KEY
const DB =
  NETWORK === 'mainnet'
    ? process.env.CLOUDFLARE_D1_MAINNET
    : process.env.CLOUDFLARE_D1_CALIBRATION
const PORT = Number(process.env.DEV_API_PORT || 8788)

if (!ACCOUNT || !KEY || !DB) {
  console.error(
    '[dev-api] missing env: need CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_KEY, CLOUDFLARE_D1_' +
      (NETWORK === 'mainnet' ? 'MAINNET' : 'CALIBRATION'),
  )
  process.exit(1)
}

const QUERIES = {
  'platform-stats': {
    sql: `WITH ttfb_ranked AS (
            SELECT worker_ttfb, NTILE(100) OVER (ORDER BY worker_ttfb) AS pr
            FROM retrieval_logs WHERE timestamp > DATETIME('now','-30 day')
          ),
          percentiles AS (
            SELECT
              MIN(worker_ttfb) FILTER (WHERE pr = 5)  AS worker_ttfb_p5,
              MIN(worker_ttfb) FILTER (WHERE pr = 50) AS worker_ttfb_p50,
              MIN(worker_ttfb) FILTER (WHERE pr = 95) AS worker_ttfb_p95,
              MIN(worker_ttfb) FILTER (WHERE pr = 99) AS worker_ttfb_p99
            FROM ttfb_ranked
          )
          SELECT
            SUM(CASE WHEN cache_miss THEN 1 ELSE 0 END) AS cache_miss_requests,
            SUM(CASE WHEN NOT cache_miss THEN 1 ELSE 0 END) AS cache_hit_requests,
            SUM(egress_bytes) AS total_egress_bytes,
            COUNT(*) AS total_requests,
            worker_ttfb_p5, worker_ttfb_p50, worker_ttfb_p95, worker_ttfb_p99
          FROM retrieval_logs, percentiles
          WHERE retrieval_logs.timestamp > DATETIME('now','-30 day');`,
    first: true,
  },
  'daily-requests': {
    sql: `SELECT DATE(timestamp) AS day, COUNT(id) AS total_requests
          FROM retrieval_logs WHERE DATE(timestamp) < DATE('now')
          GROUP BY day ORDER BY day;`,
  },
  'daily-egress': {
    sql: `SELECT DATE(timestamp) AS day,
            ROUND(SUM(egress_bytes) / 1073741824.0, 2) AS total_egress_gib
          FROM retrieval_logs WHERE DATE(timestamp) < DATE('now')
          GROUP BY day ORDER BY day;`,
  },
  'daily-retrieval-speed': {
    sql: `WITH retrieval_speeds AS (
            SELECT DATE(timestamp) AS day,
              (egress_bytes * 8.0) / (fetch_ttlb / 1000.0) / 1000000 AS mbps
            FROM retrieval_logs
            WHERE cache_miss = 1 AND fetch_ttlb > 0
              AND timestamp >= datetime('now','-90 days')
              AND DATE(timestamp) < DATE('now')
          ),
          pb AS (
            SELECT day, mbps, NTILE(100) OVER (ORDER BY mbps) AS bucket
            FROM retrieval_speeds
          )
          SELECT day,
            ROUND(AVG(mbps), 2) AS avg_retrieval_speed_mbps,
            (SELECT MIN(mbps) FROM pb WHERE pb.day = rs.day AND pb.bucket = 96)
              AS p95_retrieval_speed_mbps
          FROM retrieval_speeds rs
          GROUP BY day ORDER BY day;`,
  },
  'response-code-breakdown': {
    sql: `WITH daily_totals AS (
            SELECT DATE(timestamp) AS day, COUNT(*) AS total_requests
            FROM retrieval_logs WHERE DATE(timestamp) < DATE('now')
            GROUP BY day
          )
          SELECT DATE(r.timestamp) AS day, r.response_status AS code,
            (COUNT(*) * 1.0) / dt.total_requests AS rate
          FROM retrieval_logs r JOIN daily_totals dt ON DATE(r.timestamp) = dt.day
          WHERE DATE(r.timestamp) < DATE('now')
          GROUP BY day, code ORDER BY day, code;`,
  },
  'request-geodistribution': {
    sql: `SELECT request_country_code AS country, COUNT(*) AS count
          FROM retrieval_logs
          WHERE timestamp >= DATE('now','-30 days')
            AND request_country_code IS NOT NULL
            AND request_country_code != 'XX' AND request_country_code != 'T1'
          GROUP BY request_country_code ORDER BY count;`,
  },
  'storage-provider-stats': {
    sql: `WITH spr AS (
            SELECT rl.*, ds.service_provider_id, sp.service_url
            FROM retrieval_logs rl
            LEFT JOIN data_sets ds ON ds.id = rl.data_set_id
            LEFT JOIN service_providers sp ON sp.id = ds.service_provider_id
          ),
          rs AS (
            SELECT service_provider_id,
              (egress_bytes * 8.0) / (fetch_ttlb / 1000.0) / 1000000 AS mbps
            FROM spr WHERE cache_miss = 1 AND fetch_ttlb > 0
              AND timestamp >= datetime('now','-90 days')
          ),
          pb AS (
            SELECT service_provider_id, mbps,
              NTILE(100) OVER (ORDER BY mbps) AS bucket
            FROM rs
          )
          SELECT spr.service_provider_id, spr.service_url,
            SUM(CASE WHEN spr.cache_miss THEN 1 ELSE 0 END) AS cache_miss_requests,
            SUM(CASE WHEN spr.cache_miss AND spr.cache_miss_response_valid OR spr.cache_miss_response_valid IS NULL THEN spr.egress_bytes ELSE 0 END) AS cache_miss_egress_bytes,
            SUM(CASE WHEN spr.cache_miss AND spr.cache_miss_response_valid = 0 THEN spr.egress_bytes ELSE 0 END) AS cache_miss_egress_invalid_bytes,
            AVG(CASE WHEN spr.cache_miss THEN spr.fetch_ttfb ELSE NULL END) AS avg_ttfb,
            ROUND(AVG(CASE WHEN spr.cache_miss THEN (spr.egress_bytes * 8.0)/(spr.fetch_ttlb/1000.0)/1000000 ELSE NULL END), 2) AS avg_cache_miss_retrieval_speed_mbps,
            (SELECT MIN(pb.mbps) FROM pb WHERE pb.service_provider_id = spr.service_provider_id AND pb.bucket = 96) AS p95_cache_miss_retrieval_speed_mbps,
            ROUND(100.0 * SUM(CASE WHEN spr.cache_miss AND spr.response_status = 200 THEN 1 ELSE 0 END)
                  / NULLIF(SUM(CASE WHEN spr.cache_miss THEN 1 ELSE 0 END), 0), 2) AS cache_miss_rsr
          FROM spr
          GROUP BY spr.service_provider_id
          ORDER BY cache_miss_requests DESC;`,
  },
  'client-stats': {
    sql: `WITH client_stats AS (
            SELECT cs.payer_address,
              COUNT(rl.id) AS total_requests,
              SUM(CASE WHEN rl.cache_miss THEN 1 ELSE 0 END) AS cache_miss_requests,
              SUM(rl.egress_bytes) AS total_egress_bytes,
              SUM(CASE WHEN rl.cache_miss AND (rl.cache_miss_response_valid OR rl.cache_miss_response_valid IS NULL) THEN rl.egress_bytes ELSE 0 END) AS cache_miss_egress_bytes
            FROM retrieval_logs rl JOIN data_sets cs ON cs.id = rl.data_set_id
            GROUP BY cs.payer_address
          ),
          client_quotas AS (
            SELECT cs.payer_address,
              SUM(cseqs.cdn_egress_quota) AS remaining_cdn_egress_bytes,
              SUM(cseqs.cache_miss_egress_quota) AS remaining_cache_miss_egress_bytes
            FROM data_sets cs JOIN data_set_egress_quotas cseqs ON cs.id = cseqs.data_set_id
            GROUP BY cs.payer_address
          )
          SELECT cs.*, cq.remaining_cdn_egress_bytes, cq.remaining_cache_miss_egress_bytes
          FROM client_stats cs LEFT JOIN client_quotas cq ON cs.payer_address = cq.payer_address
          ORDER BY cs.total_requests DESC;`,
  },
  'client-daily': {
    sql: `SELECT DATE(rl.timestamp) AS day, ds.payer_address,
            COUNT(rl.id) AS total_requests,
            ROUND(SUM(rl.egress_bytes) / 1073741824.0, 2) AS total_egress_gib,
            SUM(CASE WHEN rl.cache_miss = 1 THEN 1 ELSE 0 END) AS cache_miss_requests,
            SUM(CASE WHEN rl.cache_miss = 0 THEN 1 ELSE 0 END) AS cache_hit_requests
          FROM retrieval_logs rl JOIN data_sets ds ON rl.data_set_id = ds.id
          WHERE ds.payer_address = ?1 AND day < DATE('now')
          GROUP BY day, ds.payer_address ORDER BY day DESC;`,
  },
  'client-proof-sets': {
    sql: `SELECT ds.id AS data_set_id,
            COUNT(rl.id) AS total_requests,
            SUM(rl.egress_bytes) AS total_egress_used,
            SUM(CASE WHEN rl.cache_miss = 1 THEN 1 ELSE 0 END) AS cache_miss_requests,
            SUM(CASE WHEN rl.cache_miss = 0 THEN 1 ELSE 0 END) AS cache_hit_requests,
            dseqs.cdn_egress_quota, dseqs.cache_miss_egress_quota
          FROM data_sets ds
          LEFT JOIN retrieval_logs rl ON rl.data_set_id = ds.id
          JOIN data_set_egress_quotas dseqs ON ds.id = dseqs.data_set_id
          WHERE ds.payer_address = ?1 AND ds.with_cdn = 1
            AND (rl.timestamp IS NULL OR DATE(rl.timestamp) < DATE('now'))
          GROUP BY ds.id ORDER BY total_requests DESC;`,
  },
}

const cache = new Map() // key -> { body, expires }
const CACHE_TTL_MS = 60_000

async function runQuery(sql, params = []) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/d1/database/${DB}/query`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      body: JSON.stringify({ sql, params }),
    },
  )
  if (!res.ok) throw new Error(`D1 ${res.status}: ${await res.text()}`)
  const json = await res.json()
  return json.result[0].results
}

function reply(res, status, body, contentType = 'application/json') {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
  })
  res.end(body)
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const path = url.pathname
  console.log(`[dev-api] ${req.method} ${path}`)

  if (!path.startsWith('/api/')) return reply(res, 404, 'not found', 'text/plain')

  const cached = cache.get(path)
  if (cached && cached.expires > Date.now()) {
    res.setHeader('X-Cache', 'HIT')
    return reply(res, 200, cached.body)
  }

  try {
    let body
    if (path.startsWith('/api/client/') && path.endsWith('.json')) {
      const addr = path.slice('/api/client/'.length, -'.json'.length).toLowerCase()
      if (!/^0x[0-9a-f]{40}$/.test(addr)) return reply(res, 400, '{"error":"invalid address"}')
      const [daily, proofSets] = await Promise.all([
        runQuery(QUERIES['client-daily'].sql, [addr]),
        runQuery(QUERIES['client-proof-sets'].sql, [addr]),
      ])
      body = JSON.stringify({ daily, proofSets })
    } else {
      const m = path.match(/^\/api\/([a-z-]+)\.json$/)
      if (!m) return reply(res, 404, 'not found', 'text/plain')
      const q = QUERIES[m[1]]
      if (!q) return reply(res, 404, `unknown query ${m[1]}`, 'text/plain')
      const rows = await runQuery(q.sql, [])
      body = JSON.stringify(q.first ? (rows[0] ?? null) : rows)
    }
    cache.set(path, { body, expires: Date.now() + CACHE_TTL_MS })
    res.setHeader('X-Cache', 'MISS')
    reply(res, 200, body)
  } catch (err) {
    console.error(`[dev-api] ${path}: ${err.message}`)
    reply(res, 502, JSON.stringify({ error: err.message }))
  }
}).listen(PORT, '0.0.0.0', async () => {
  console.log(`[dev-api] listening on http://0.0.0.0:${PORT} (network=${NETWORK})`)
  // Pre-warm cache: kick off every parameterless query at startup so the first
  // visitor doesn't wait 20+ seconds on heavy D1 queries (calibration in
  // particular — the NTILE window over 500K rows is right at the CPU limit).
  console.log('[dev-api] pre-warming cache...')
  const names = Object.entries(QUERIES)
    .filter(([, q]) => !q.sql.includes('?1'))
    .map(([n]) => n)
  await Promise.all(
    names.map(async (name) => {
      const path = `/api/${name}.json`
      try {
        const rows = await runQuery(QUERIES[name].sql, [])
        const body = JSON.stringify(QUERIES[name].first ? (rows[0] ?? null) : rows)
        cache.set(path, { body, expires: Date.now() + CACHE_TTL_MS })
        console.log(`  ${name} warmed (${body.length} bytes)`)
      } catch (err) {
        console.error(`  ${name} FAILED: ${err.message}`)
      }
    }),
  )
  console.log('[dev-api] cache warm')
})
