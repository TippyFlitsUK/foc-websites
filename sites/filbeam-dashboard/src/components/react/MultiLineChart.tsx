import * as Plot from '@observablehq/plot'
import { useEffect, useRef, useState } from 'react'

interface Series {
  yKey: string
  stroke: string
  label: string
}

interface MultiLineChartProps<T> {
  data: ReadonlyArray<T>
  xKey: string
  series: Series[]
  title?: string
  yLabel?: string
  height?: number
}

export default function MultiLineChart<T>({
  data,
  xKey,
  series,
  title,
  yLabel,
  height,
}: MultiLineChartProps<T>) {
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
      y: { grid: true, inset: 10, label: yLabel ?? null },
      color: {
        domain: series.map((s) => s.label),
        range: series.map((s) => s.stroke),
        legend: true,
      },
      marks: [
        Plot.ruleY([0], { stroke: '#272a30' }),
        ...series.map((s) =>
          Plot.lineY(tidy, {
            x: xKey,
            y: s.yKey,
            stroke: s.stroke,
            strokeWidth: 1.5,
          }),
        ),
        Plot.tip(
          tidy,
          Plot.pointerX({
            x: xKey,
            y: series[0].yKey,
            title: (d: Record<string, unknown>) =>
              series
                .map(
                  (s) =>
                    `${s.label}: ${(d[s.yKey] as number | null | undefined)?.toFixed(2) ?? 'N/A'}`,
                )
                .join('\n'),
          }),
        ),
      ],
    })
    ref.current.append(plot)
    return () => plot.remove()
  }, [data, xKey, series, title, yLabel, height, width])

  return <div ref={ref} style={{ width: '100%' }} />
}
