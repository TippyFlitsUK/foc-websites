type FontOptions = {
  src: string | Array<{ path: string; weight?: string; style?: string }>
  display?: string
  variable?: string
  fallback?: string[]
  preload?: boolean
  weight?: string
  style?: string
}

type FontResult = {
  className: string
  variable: string
  style: { fontFamily: string }
}

export default function localFont(options: FontOptions): FontResult {
  const variable = options.variable || '--font-local'
  return {
    className: '',
    variable,
    style: { fontFamily: variable },
  }
}
