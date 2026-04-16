export function usePathname(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname
  }
  return '/'
}

export function useRouter() {
  return {
    push: (url: string) => { if (typeof window !== 'undefined') window.location.href = url },
    replace: (url: string) => { if (typeof window !== 'undefined') window.location.replace(url) },
    back: () => { if (typeof window !== 'undefined') window.history.back() },
    forward: () => { if (typeof window !== 'undefined') window.history.forward() },
    refresh: () => { if (typeof window !== 'undefined') window.location.reload() },
    prefetch: () => {},
  }
}

export function useSearchParams() {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search)
  }
  return new URLSearchParams()
}

export function useParams() {
  return {}
}

export function notFound(): never {
  throw new Error('Page not found')
}
