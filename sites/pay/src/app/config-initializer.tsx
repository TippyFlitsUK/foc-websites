import { setUIConfig, resetUIConfig } from '@filecoin-foundation/ui-filecoin/config/ui-config'

function AstroLink({ href, children, className, ...rest }: { href: string; children?: React.ReactNode; className?: string; [key: string]: unknown }) {
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

let initialized = false

export function initUIConfig(): void {
  if (initialized) return
  try { resetUIConfig() } catch { /* not yet initialized */ }
  setUIConfig({
    baseDomain: 'https://pay.filecoin.cloud',
    Link: AstroLink,
  })
  initialized = true
}
