import { useEffect, useMemo, useState } from 'react'
import { apiFetch } from '../../utils/api'
import { formatBytesIEC, formatNumber } from '../../utils/format'
import LineChart from './LineChart'
import SortableTable, { type Column } from './SortableTable'

interface DailyRow {
  day: string
  payer_address: string
  total_requests: number
  total_egress_gib: number
  cache_miss_requests: number
  cache_hit_requests: number
}

interface ProofSetRow {
  data_set_id: number
  total_requests: number
  total_egress_used: number
  cache_miss_requests: number
  cache_hit_requests: number
  cdn_egress_quota: number
  cache_miss_egress_quota: number
}

interface ClientBundle {
  daily: DailyRow[]
  proofSets: ProofSetRow[]
}

// 2025-07-22 = date when proof-set id was added to retrieval_logs (per upstream note).
const MIN_START = '2025-07-22'

function daysAgo(n: number): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - n)
  return d.toISOString().slice(0, 10)
}

export default function ClientDetail({
  address,
  network,
}: {
  address: string
  network: string
}) {
  const [bundle, setBundle] = useState<ClientBundle | null>(null)
  const [error, setError] = useState<string | null>(null)
  const defaultStart = useMemo(() => {
    const candidate = daysAgo(180)
    return candidate >= MIN_START ? candidate : MIN_START
  }, [])
  const [start, setStart] = useState(defaultStart)
  const [end, setEnd] = useState(daysAgo(1))

  useEffect(() => {
    apiFetch<ClientBundle>(`client/${address}`)
      .then(setBundle)
      .catch((err: Error) => setError(err.message))
  }, [address])

  if (error) return <div className="error">Failed to load client data: {error}</div>
  if (!bundle) return <div className="loading">Loading client data…</div>

  const filtered = bundle.daily.filter(
    (d) => d.day >= start && d.day <= end,
  )
  const totalRequests = filtered.reduce((a, r) => a + r.total_requests, 0)
  const totalEgressGib = filtered.reduce(
    (a, r) => a + r.total_egress_gib,
    0,
  )
  const cacheHit = filtered.reduce((a, r) => a + r.cache_hit_requests, 0)
  const hitRate = totalRequests ? (cacheHit / totalRequests) * 100 : 0

  const proofSetCols: Column<ProofSetRow & { explorer: string; cache_hit_rate: string }>[] = [
    { key: 'data_set_id', header: 'data_set_id' },
    {
      key: 'total_requests',
      header: 'total_requests',
      align: 'right',
      format: (v) => formatNumber(v as number),
    },
    {
      key: 'total_egress_used',
      header: 'total_egress_used',
      align: 'right',
      format: (v) => formatBytesIEC(v as number),
    },
    {
      key: 'cache_miss_requests',
      header: 'cache_miss_requests',
      align: 'right',
      format: (v) => formatNumber(v as number),
    },
    {
      key: 'cache_hit_requests',
      header: 'cache_hit_requests',
      align: 'right',
      format: (v) => formatNumber(v as number),
    },
    {
      key: 'cdn_egress_quota',
      header: 'remaining_cdn_egress',
      align: 'right',
      format: (v) => formatBytesIEC(v as number),
    },
    {
      key: 'cache_miss_egress_quota',
      header: 'remaining_cache_miss_egress',
      align: 'right',
      format: (v) => formatBytesIEC(v as number),
    },
    {
      key: 'explorer',
      header: 'explorer',
      format: (_v, row) => (
        <a href={row.explorer} target="_blank" rel="noopener">
          View in Explorer 🔎
        </a>
      ),
    },
    { key: 'cache_hit_rate', header: 'cache_hit_rate', align: 'right' },
  ]

  const proofSetsWithExplorer = bundle.proofSets.map((ps) => ({
    ...ps,
    explorer: `https://pdp.vxb.ai/${network}/proofsets/${ps.data_set_id}`,
    cache_hit_rate: ps.total_requests
      ? ((ps.cache_hit_requests / ps.total_requests) * 100).toFixed(2)
      : '0',
  }))

  return (
    <>
      <h3>Client Stats Summary for {address}</h3>
      <p>This sections shows the summary of client statistics over the selected date range.</p>

      <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ width: '3rem' }}>Start</span>
          <input
            type="date"
            value={start}
            min={MIN_START}
            max={end}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ width: '3rem' }}>End</span>
          <input
            type="date"
            value={end}
            min={start}
            max={daysAgo(1)}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-3" style={{ margin: '1rem 0' }}>
        <h4 className="font-normal">Total Requests: {formatNumber(totalRequests)}</h4>
        <h4 className="font-normal">
          Total Egress: {totalEgressGib.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} GiB
        </h4>
        <h4 className="font-normal">Cache Hit Rate: {hitRate.toFixed(2)}%</h4>
      </div>

      <div className="divider" />
      <h4>Daily Stats</h4>
      <div className="grid grid-cols-2" style={{ gridAutoRows: '500px' }}>
        <div className="card">
          <LineChart
            data={filtered}
            xKey="day"
            yKey="total_requests"
            title="Requests Served"
            yLabel="Requests Served"
          />
        </div>
        <div className="card">
          <LineChart
            data={filtered}
            xKey="day"
            yKey="total_egress_gib"
            title="Daily Egress (GiB)"
            yLabel="Bytes Served (GiB)"
          />
        </div>
      </div>

      <div className="divider" />
      <h4>Proof-Set Stats</h4>
      <div className="card" style={{ padding: 0 }}>
        <SortableTable
          data={proofSetsWithExplorer}
          columns={proofSetCols}
          defaultSort={{ key: 'total_requests', dir: 'desc' }}
        />
      </div>
    </>
  )
}
