// next/font/local stub. Returns a fake font object; real fonts declared via
// @font-face in globals.css (see fonts copied from upstream).
export default function localFont(_config: {
  src: string | Array<{ path: string; weight?: string; style?: string }>
  display?: string
  fallback?: string[]
  variable?: string
  preload?: boolean
}) {
  return {
    variable: _config.variable ?? '',
    className: '',
    style: { fontFamily: 'sans-serif' },
  }
}
