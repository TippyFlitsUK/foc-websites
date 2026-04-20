import { StrictMode } from 'react'
import { Toaster } from 'sonner'
import App from './app.tsx'
import { FilecoinPinProvider } from './context/filecoin-pin-provider.tsx'
import { UploadHistoryProvider } from './context/upload-history-context.tsx'

import './index.css'

export function Root() {
  return (
    <StrictMode>
      <FilecoinPinProvider>
        <UploadHistoryProvider>
          <Toaster mobileOffset={0} offset={0} position="bottom-right" />
          <App />
        </UploadHistoryProvider>
      </FilecoinPinProvider>
    </StrictMode>
  )
}
