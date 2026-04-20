// next/script shim — render a plain <script> tag. Strip Next-only props.
import type { ReactNode } from 'react'

interface ScriptProps {
  id?: string
  src?: string
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker'
  async?: boolean
  defer?: boolean
  onLoad?: () => void
  onError?: () => void
  dangerouslySetInnerHTML?: { __html: string }
  children?: ReactNode
}

export default function Script({ strategy: _s, onLoad: _o, onError: _e, ...rest }: ScriptProps) {
  return <script {...rest} />
}
