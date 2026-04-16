import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: ReactNode
  prefetch?: boolean | 'auto' | null
  replace?: boolean
  scroll?: boolean
  locale?: string
  onNavigate?: (event: { preventDefault: () => void }) => void
}

function Link({ href, children, prefetch, replace, scroll, locale, onNavigate, onClick, ...rest }: LinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (onNavigate && !e.defaultPrevented) {
      onNavigate({ preventDefault: () => e.preventDefault() })
    }
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default Link
export { Link }
