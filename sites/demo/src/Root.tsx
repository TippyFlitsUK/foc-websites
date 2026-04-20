// React root — everything that was in the upstream main.tsx minus
// the ReactDOM.createRoot call. Astro mounts this component via
// <Root client:only="react" /> so no SSR leaks window/localStorage.
import { calibration, mainnet } from '@filoz/synapse-core/chains'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { ledger } from 'iso-ledger/ledger-connector'
import { createConfig, deserialize, http, serialize, WagmiProvider } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { App } from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      networkMode: 'offlineFirst',
      retry: false,
    },
  },
})

if (typeof window !== 'undefined') {
  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
    key: 'synapse-playground-cache',
    serialize,
    deserialize,
  })
  persistQueryClient({ queryClient, persister: localStoragePersister })
}

export const config = createConfig({
  chains: [mainnet, calibration],
  connectors: [injected(), ledger({ forceBlindSigning: true })],
  transports: {
    [mainnet.id]: http(),
    [calibration.id]: http(undefined, { batch: false }),
  },
  batch: { multicall: false },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

export function Root() {
  return (
    <ThemeProvider storageKey="synapse-theme">
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config} reconnectOnMount={true}>
          <App />
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
