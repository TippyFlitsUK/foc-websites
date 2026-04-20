// next/link → plain anchor. Kept API-compatible with common upstream usage.
import type { ReactNode, AnchorHTMLAttributes } from 'react'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  children?: ReactNode
}

export default function Link({ href, prefetch: _p, replace: _r, scroll: _s, ...rest }: LinkProps) {
  return <a href={href} {...rest} />
}
