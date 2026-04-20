// Client-side fetch helper for the Worker /api/*.json proxy.
// During dev (no Worker), relative fetch still works because astro preview proxies
// same-origin — but dev users should run against the deployed Worker URL via the
// API_BASE env (or just develop against staging beam-dash.filecoincloud.io).
const API_BASE = import.meta.env.PUBLIC_API_BASE || ''

export async function apiFetch<T>(path: string): Promise<T> {
  const url = `${API_BASE}/api/${path}.json`
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`GET ${url} → ${res.status}: ${body.slice(0, 200)}`)
  }
  return (await res.json()) as T
}
