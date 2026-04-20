import * as Plot from '@observablehq/plot'
import { index as d3index } from 'd3'
import { useEffect, useRef, useState } from 'react'

interface Distribution {
  country: string
  count: number
}

type Geo = { features?: Array<{ properties?: Record<string, unknown> }> } & Record<string, unknown>

export default function WorldMap({ data }: { data: Distribution[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [countries, setCountries] = useState<Geo | null>(null)
  const [width, setWidth] = useState<number>(1200)

  useEffect(() => {
    fetch('/media/countries.geojson')
      .then((r) => r.json())
      .then(setCountries)
      .catch(() => setCountries(null))
  }, [])

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const update = () => setWidth(el.getBoundingClientRect().width || 1200)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!ref.current || !countries) return
    const lookup = d3index(data, (d) => d.country)
    // biome-ignore lint/suspicious/noExplicitAny: @observablehq/plot types don't accept our geojson shape cleanly
    const plot = Plot.geo(countries as any, {
      fill: (d: { properties?: { iso_a2?: string } }) =>
        lookup.get(d.properties?.iso_a2 ?? '')?.count,
      stroke: 'gray',
      strokeWidth: 0.5,
    }).plot({
      width,
      height: 600,
      projection: 'equirectangular',
      color: {
        scheme: 'blues',
        unknown: '#ccc',
        legend: true,
        label: 'Requests by Country',
      },
    })
    ref.current.append(plot)
    return () => plot.remove()
  }, [countries, data, width])

  if (!countries) {
    return <div ref={ref} className="loading">Loading world map…</div>
  }
  return <div ref={ref} style={{ width: '100%' }} />
}
