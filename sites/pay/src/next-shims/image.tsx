// next/image → plain img. Strips Next-specific props.
import type { ImgHTMLAttributes } from 'react'

interface NextImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  placeholder?: string
  blurDataURL?: string
  unoptimized?: boolean
}

export default function Image({
  priority: _p,
  quality: _q,
  fill,
  placeholder: _pl,
  blurDataURL: _b,
  unoptimized: _u,
  style,
  ...rest
}: NextImageProps) {
  const fillStyle = fill
    ? { position: 'absolute' as const, inset: 0, width: '100%', height: '100%', objectFit: 'cover' as const }
    : {}
  return <img loading="lazy" {...rest} style={{ ...fillStyle, ...style }} />
}
