import type { ImgHTMLAttributes } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string | { src: string; height?: number; width?: number }
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
  placeholder?: string
  blurDataURL?: string
}

function Image({ src, alt, width, height, fill, priority, quality, sizes, placeholder, blurDataURL, ...rest }: ImageProps) {
  const imgSrc = typeof src === 'object' ? src.src : src
  const imgWidth = width ?? (typeof src === 'object' ? src.width : undefined)
  const imgHeight = height ?? (typeof src === 'object' ? src.height : undefined)

  const style: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {}

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : imgWidth}
      height={fill ? undefined : imgHeight}
      loading={priority ? 'eager' : 'lazy'}
      style={style}
      {...rest}
    />
  )
}

export default Image
export { Image }
export type { ImageProps as StaticImageData }
