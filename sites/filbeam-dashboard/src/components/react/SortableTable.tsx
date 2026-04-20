import { useMemo, useState, type ReactNode } from 'react'

export interface Column<T> {
  key: keyof T & string
  header: string
  format?: (value: T[keyof T & string], row: T) => ReactNode
  align?: 'left' | 'right'
}

interface SortableTableProps<T> {
  data: ReadonlyArray<T>
  columns: ReadonlyArray<Column<T>>
  defaultSort?: { key: string; dir: 'asc' | 'desc' }
  emptyMessage?: string
}

export default function SortableTable<T>({
  data,
  columns,
  defaultSort,
  emptyMessage = 'No data yet',
}: SortableTableProps<T>) {
  const [sort, setSort] = useState(defaultSort ?? null)

  const sorted = useMemo(() => {
    if (!sort) return data
    const { key, dir } = sort
    return [...data].sort((a, b) => {
      const av = (a as Record<string, unknown>)[key]
      const bv = (b as Record<string, unknown>)[key]
      if (av == null && bv == null) return 0
      if (av == null) return 1
      if (bv == null) return -1
      if (typeof av === 'number' && typeof bv === 'number') {
        return dir === 'asc' ? av - bv : bv - av
      }
      const as = String(av)
      const bs = String(bv)
      return dir === 'asc' ? as.localeCompare(bs) : bs.localeCompare(as)
    })
  }, [data, sort])

  function clickHeader(key: string) {
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, dir: 'desc' }
      if (prev.dir === 'desc') return { key, dir: 'asc' }
      return null
    })
  }

  if (!data.length) return <div className="loading">{emptyMessage}</div>

  return (
    <div className="dashboard-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              const indicator =
                sort?.key === col.key
                  ? sort.dir === 'asc'
                    ? ' ▲'
                    : ' ▼'
                  : ''
              return (
                <th
                  key={col.key}
                  style={{ textAlign: col.align ?? 'left', cursor: 'pointer', userSelect: 'none' }}
                  onClick={() => clickHeader(col.key)}
                >
                  {col.header}
                  {indicator}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => {
            const record = row as Record<string, unknown>
            return (
              <tr key={i}>
                {columns.map((col) => {
                  const value = record[col.key]
                  return (
                    <td key={col.key} style={{ textAlign: col.align ?? 'left' }}>
                      {col.format
                        ? col.format(value as T[keyof T & string], row)
                        : String(value ?? '')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
