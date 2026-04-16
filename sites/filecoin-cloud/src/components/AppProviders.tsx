'use client'

import { setUIConfig, resetUIConfig } from '@filecoin-foundation/ui-filecoin/config/ui-config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { type ReactNode, useState } from 'react'

import { BASE_DOMAIN } from '@/constants/site-metadata'

function AstroLink({ href, children, className, ...rest }: any) {
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

try { resetUIConfig() } catch {}
setUIConfig({
  baseDomain: BASE_DOMAIN,
  Link: AstroLink,
})

type AppProvidersProps = Readonly<{ children: ReactNode }>

export function AppProviders({ children }: AppProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </QueryClientProvider>
  )
}
