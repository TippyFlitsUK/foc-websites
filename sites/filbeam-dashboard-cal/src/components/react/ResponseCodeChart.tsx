import * as Plot from '@observablehq/plot'
import { useEffect, useRef, useState } from 'react'

interface Row {
  day: string
  code: number
  rate: number
}

export default function ResponseCodeChart({ data }: { data: Row[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(640)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const update = () => setWidth(el.getBoundingClientRect().width || 640)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!ref.current) return
    const tidy = data.map((d) => ({ ...d, day: new Date(d.day) }))
    const plot = Plot.plot({
      title: 'Response codes (daily share)',
      width,
      height: Math.round(width * 0.55),
      x: { label: null, type: 'band', ticks: 'week' },
      y: { percent: true, grid: true },
      color: { scheme: 'accent', legend: 'swatches', label: 'code' },
      marks: [
        Plot.rectY(tidy, {
          x: 'day',
          y: 'rate',
          fill: 'code',
          offset: 'normalize',
          sort: { color: null, x: '-y' },
          interval: 'day',
          tip: true,
        }),
      ],
    })
    ref.current.append(plot)
    return () => plot.remove()
  }, [data, width])

  return <div ref={ref} style={{ width: '100%' }} />
}
