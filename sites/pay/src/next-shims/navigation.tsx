// next/navigation shim for react-router
import { useNavigate, useLocation, useParams as useRouterParams } from 'react-router-dom'

export function useRouter() {
  const navigate = useNavigate()
  return {
    push: (href: string) => navigate(href),
    replace: (href: string) => navigate(href, { replace: true }),
    back: () => navigate(-1),
    refresh: () => {},
    prefetch: () => {},
  }
}

export function usePathname() {
  return useLocation().pathname
}

export function useSearchParams() {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

export function useParams<T extends Record<string, string> = Record<string, string>>() {
  return useRouterParams() as T
}

export function notFound(): never {
  throw new Error('notFound() called — in React Router use <Navigate to="/404" /> or a 404 route')
}
