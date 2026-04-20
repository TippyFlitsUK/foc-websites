// React root — wraps vendored upstream providers + react-router around the Next-app page components.
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './ui-filecoin/components/theme-provider'
import Providers from './components/shared/Providers'
import Navigation from './components/shared/Navigation/Navigation'
import Footer from './components/shared/Footer'
import NetworkHomePage from './views/NetworkHomePage'
import AccountsPage from './views/AccountsPage'
import OperatorsPage from './views/OperatorsPage'
import RailsPage from './views/RailsPage'
import ConsolePage from './views/ConsolePage'

import './styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

function HomeRedirect() {
  return <Navigate to="/mainnet" replace />
}

export function Root() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" enableSystem disableTransitionOnChange>
        <BrowserRouter>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Navigation backgroundVariant="dark" />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomeRedirect />} />
                  <Route path="/console" element={<ConsolePage />} />
                  <Route path="/:network" element={<NetworkHomePage />} />
                  <Route path="/:network/accounts" element={<AccountsPage />} />
                  <Route path="/:network/operators" element={<OperatorsPage />} />
                  <Route path="/:network/rails" element={<RailsPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Providers>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  )
}
