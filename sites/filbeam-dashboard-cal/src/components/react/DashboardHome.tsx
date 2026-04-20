import { useEffect, useState } from 'react'
import { apiFetch } from '../../utils/api'
import {
  formatBytesIEC,
  formatMbps,
  formatMs,
  formatNumber,
  formatPercent,
  truncateAddr,
} from '../../utils/format'
import LineChart from './LineChart'
import MultiLineChart from './MultiLineChart'
import ResponseCodeChart from './ResponseCodeChart'
import SortableTable, { type Column } from './SortableTable'
import WorldMap from './WorldMap'

interface PlatformStats {
  total_requests: number
  cache_hit_requests: number
  cache_miss_requests: number
  total_egress_bytes: number
  worker_ttfb_p5: number
  worker_ttfb_p50: number
  worker_ttfb_p95: number
  worker_ttfb_p99: number
}
interface DailyPoint {
  day: string
  total_requests?: number
  total_egress_gib?: number
}
interface RetrievalSpeed {
  day: string
  avg_retrieval_speed_mbps: number
  p95_retrieval_speed_mbps: number
}
interface ResponseCode {
  day: string
  code: number
  rate: number
}
interface GeoRow {
  country: string
  count: number
}
interface SpRow {
  service_provider_id: number | null
  service_url: string | null
  cache_miss_requests: number
  cache_miss_egress_bytes: number
  cache_miss_egress_invalid_bytes: number
  avg_ttfb: number
  avg_cache_miss_retrieval_speed_mbps: number
  p95_cache_miss_retrieval_speed_mbps: number
  cache_miss_rsr: number
}
interface ClientRow {
  payer_address: string
  total_requests: number
  cache_miss_requests: number
  total_egress_bytes: number
  cache_miss_egress_bytes: number
  remaining_cdn_egress_bytes: number
  remaining_cache_miss_egress_bytes: number
}

interface Bundle {
  platformStats: PlatformStats
  dailyRequests: DailyPoint[]
  dailyEgress: DailyPoint[]
  retrievalSpeed: RetrievalSpeed[]
  responseCodes: ResponseCode[]
  geo: GeoRow[]
  spStats: SpRow[]
  clientStats: ClientRow[]
}

export default function DashboardHome() {
  const [data, setData] = useState<Bundle | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      apiFetch<PlatformStats>('platform-stats'),
      apiFetch<DailyPoint[]>('daily-requests'),
      apiFetch<DailyPoint[]>('daily-egress'),
      apiFetch<RetrievalSpeed[]>('daily-retrieval-speed'),
      apiFetch<ResponseCode[]>('response-code-breakdown'),
      apiFetch<GeoRow[]>('request-geodistribution'),
      apiFetch<SpRow[]>('storage-provider-stats'),
      apiFetch<ClientRow[]>('client-stats'),
    ])
      .then(
        ([
          platformStats,
          dailyRequests,
          dailyEgress,
          retrievalSpeed,
          responseCodes,
          geo,
          spStats,
          clientStats,
        ]) =>
          setData({
            platformStats,
            dailyRequests,
            dailyEgress,
            retrievalSpeed,
            responseCodes,
            geo,
            spStats,
            clientStats,
          }),
      )
      .catch((err: Error) => setError(err.message))
  }, [])

  if (error) return <div className="error">Failed to load dashboard: {error}</div>
  if (!data) return <div className="loading">Loading dashboard data…</div>

  const { platformStats: ps } = data
  const cacheHitRate = ps.total_requests
    ? (ps.cache_hit_requests / ps.total_requests) * 100
    : 0

  const ttfbRows = [
    { percentile: 'p5', ttfb: ps.worker_ttfb_p5 },
    { percentile: 'p50', ttfb: ps.worker_ttfb_p50 },
    { percentile: 'p95', ttfb: ps.worker_ttfb_p95 },
    { percentile: 'p99', ttfb: ps.worker_ttfb_p99 },
  ]

  const spCols: Column<SpRow>[] = [
    { key: 'service_provider_id', header: 'id' },
    { key: 'service_url', header: 'url' },
    { key: 'cache_miss_requests', header: 'requests', align: 'right', format: (v) => formatNumber(v as number) },
    { key: 'cache_miss_egress_bytes', header: 'egress', align: 'right', format: (v) => formatBytesIEC(v as number) },
    { key: 'cache_miss_egress_invalid_bytes', header: 'egress (invalid)', align: 'right', format: (v) => formatBytesIEC(v as number) },
    { key: 'avg_ttfb', header: 'avg ttfb', align: 'right', format: (v) => formatMs(v as number) },
    { key: 'avg_cache_miss_retrieval_speed_mbps', header: 'avg speed', align: 'right', format: (v) => formatMbps(v as number) },
    { key: 'p95_cache_miss_retrieval_speed_mbps', header: 'p95 speed', align: 'right', format: (v) => formatMbps(v as number) },
    { key: 'cache_miss_rsr', header: 'rsr', align: 'right', format: (v) => formatPercent(v as number) },
  ]

  const clientCols: Column<ClientRow>[] = [
    {
      key: 'payer_address',
      header: 'address',
      format: (v) => <a href={`/client/${v}/`}>{v as string}</a>,
    },
    { key: 'total_requests', header: 'requests', align: 'right', format: (v) => formatNumber(v as number) },
    { key: 'cache_miss_requests', header: 'cache misses', align: 'right', format: (v) => formatNumber(v as number) },
    { key: 'total_egress_bytes', header: 'egress', align: 'right', format: (v) => formatBytesIEC(v as number) },
    { key: 'cache_miss_egress_bytes', header: 'cache miss egress', align: 'right', format: (v) => formatBytesIEC(v as number) },
    { key: 'remaining_cdn_egress_bytes', header: 'available cdn egress', align: 'right', format: (v) => formatBytesIEC(v as number) },
    { key: 'remaining_cache_miss_egress_bytes', header: 'available cache miss egress', align: 'right', format: (v) => formatBytesIEC(v as number) },
  ]

  return (
    <>
      <h2>30d Stats</h2>
      <div className="grid grid-cols-3">
        <div>
          <h4 className="font-normal">Requests Served</h4>
          <div className="card card-figure">{formatNumber(ps.total_requests)}</div>
        </div>
        <div>
          <h4 className="font-normal">Bytes Served</h4>
          <div className="card card-figure">{formatBytesIEC(ps.total_egress_bytes)}</div>
        </div>
        <div>
          <h4 className="font-normal">Cache Hit Rate</h4>
          <div className="card card-figure">{cacheHitRate.toFixed(2)}%</div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <h4 className="font-normal">Worker Response Time</h4>
          <div className="card" style={{ padding: 0 }}>
            <SortableTable
              data={ttfbRows}
              columns={[
                { key: 'percentile', header: 'Percentile' },
                {
                  key: 'ttfb',
                  header: 'TTFB (ms)',
                  format: (v) => (typeof v === 'number' ? v.toFixed(2) : 'N/A'),
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="divider" />

      <h2>Daily Stats</h2>
      <div className="grid grid-cols-2" style={{ gridAutoRows: '500px' }}>
        <div className="card">
          <LineChart
            data={data.dailyRequests}
            xKey="day"
            yKey="total_requests"
            title="Requests Served"
            yLabel="Requests Served"
          />
        </div>
        <div className="card">
          <LineChart
            data={data.dailyEgress}
            xKey="day"
            yKey="total_egress_gib"
            title="Daily Egress (GiB)"
            yLabel="Bytes Served (GiB)"
          />
        </div>
      </div>

      <div className="divider" />

      <div className="grid grid-cols-2" style={{ gridAutoRows: '500px' }}>
        <div>
          <h4>Daily Retrieval Speeds (Cache-Miss)</h4>
          <p>This section shows the retrieval speeds for all storage providers on cache-miss.</p>
          <div className="card">
            <MultiLineChart
              data={data.retrievalSpeed}
              xKey="day"
              yLabel="Mpbs"
              series={[
                { yKey: 'avg_retrieval_speed_mbps', stroke: '#4FF8C9', label: 'avg' },
                { yKey: 'p95_retrieval_speed_mbps', stroke: '#FFA500', label: 'p95' },
              ]}
            />
          </div>
        </div>
        <div>
          <h4>Response Codes</h4>
          <p>This section shows the response codes breakdown.</p>
          <div className="card">
            <ResponseCodeChart data={data.responseCodes} />
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="map-container" style={{ marginTop: 60 }}>
        <WorldMap data={data.geo} />
      </div>

      <div className="divider" />
      <h2>Storage Provider Stats</h2>
      <div className="card" style={{ padding: 0 }}>
        <SortableTable
          data={data.spStats}
          columns={spCols}
          defaultSort={{ key: 'cache_miss_egress_bytes', dir: 'desc' }}
        />
      </div>

      <div className="divider" />
      <h2>Client Stats</h2>
      <div className="card" style={{ padding: 0 }}>
        <SortableTable
          data={data.clientStats}
          columns={clientCols}
          defaultSort={{ key: 'total_egress_bytes', dir: 'desc' }}
        />
      </div>
    </>
  )
}
