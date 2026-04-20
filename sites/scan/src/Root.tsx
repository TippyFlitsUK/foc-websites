// React root — everything that was in the upstream main.tsx minus the
// ReactDOM.createRoot call. Astro mounts this via <Root client:only="react" />.
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import AppRoutes from './router/routes'
import { ThemeProvider } from './components/shared/ThemeProvider'
import { fetcher } from './utility/fetcher'
import { NetworkProvider } from './contexts/NetworkContext'
import { Toaster } from './components/ui/toaster'
import { ProgressBar } from './components/shared/ProgressBar'
import { Footer } from './components/shared/Footer'
import './styles/index.css'

export function Root() {
  return (
    <StrictMode>
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
          errorRetryCount: 2,
          errorRetryInterval: 5000,
          onError: (err) => console.error('GraphQL SWR error:', err),
        }}
      >
        <ThemeProvider>
          <BrowserRouter>
            <NetworkProvider>
              <ProgressBar />
              <AppRoutes />
              <Footer />
              <Toaster />
            </NetworkProvider>
          </BrowserRouter>
        </ThemeProvider>
      </SWRConfig>
    </StrictMode>
  )
}
