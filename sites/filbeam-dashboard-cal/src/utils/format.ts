export function formatBytesIEC(bytes: number | null | undefined): string {
  if (!bytes) return '0 B'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB']
  const index = Math.min(
    units.length - 1,
    Math.floor(Math.log2(Math.abs(bytes)) / 10),
  )
  const converted = bytes / Math.pow(2, index * 10)
  return `${converted.toFixed(2)} ${units[index]}`
}

export function formatNumber(n: number | null | undefined): string {
  if (n == null) return 'N/A'
  return n.toLocaleString('en-US')
}

export function formatMs(n: number | null | undefined): string {
  if (n == null) return 'N/A'
  return `${Math.round(n)} ms`
}

export function formatMbps(n: number | null | undefined): string {
  if (n == null) return 'N/A'
  return `${n.toFixed(2)} Mbps`
}

export function formatPercent(n: number | null | undefined): string {
  if (n == null) return 'N/A'
  return `${n.toFixed(2)}%`
}

export function truncateAddr(addr: string): string {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`
}

export function isoToDate(iso: string): Date {
  return new Date(iso + 'T00:00:00Z')
}

export function daysAgoIso(days: number): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - days)
  return d.toISOString().slice(0, 10)
}
