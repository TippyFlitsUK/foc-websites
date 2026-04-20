import * as Plot from '@observablehq/plot'
import { useEffect, useRef, useState } from 'react'

interface LineChartProps<T> {
  data: ReadonlyArray<T>
  xKey: string
  yKey: string
  title?: string
  yLabel?: string
  stroke?: string
  height?: number
}

export default function LineChart<T>({
  data,
  xKey,
  yKey,
  title,
  yLabel,
  stroke = '#4FF8C9',
  height,
}: LineChartProps<T>) {
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
    const tidy = data.map((d) => {
      const rec = d as Record<string, unknown>
      return {
        ...rec,
        [xKey]: typeof rec[xKey] === 'string' ? new Date(rec[xKey] as string) : rec[xKey],
      }
    })
    const plot = Plot.plot({
      title,
      width,
      height: height ?? Math.round(width * 0.55),
      x: { type: 'utc', label: null },
      y: { grid: true, inset: 10, label: yLabel ?? yKey },
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(tidy, { x: xKey, y: yKey, stroke, strokeWidth: 1.5 }),
        Plot.tip(tidy, Plot.pointerX({ x: xKey, y: yKey })),
      ],
    })
    ref.current.append(plot)
    return () => plot.remove()
  }, [data, xKey, yKey, title, yLabel, stroke, height, width])

  return <div ref={ref} style={{ width: '100%' }} />
}
