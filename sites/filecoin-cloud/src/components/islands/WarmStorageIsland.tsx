import { Suspense } from 'react'

import { HostedOnFOCBadge } from '@/components/HostedOnFOCBadge'

import { AppProviders } from '@/components/AppProviders'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { FeedbackButton } from '@/components/FeedbackButton'
import { Footer } from '@/components/Footer/Footer'
import { WarmStorageServicesClient } from '@/app/warm-storage-service/components/WarmStorageServicesClient'

import { WARM_STORAGE_SERVICE_SEO } from '@/app/warm-storage-service/constants/seo'
import { generateStructuredData } from '@/app/warm-storage-service/utils/generate-structured-data'

export default function WarmStorageIsland() {
  return (
    <AppProviders>
      <StructuredDataScript structuredData={generateStructuredData(WARM_STORAGE_SERVICE_SEO)} />
      <Suspense>
        <WarmStorageServicesClient />
      </Suspense>
      <Footer />
      <FeedbackButton />
      <HostedOnFOCBadge />
    </AppProviders>
  )
}
