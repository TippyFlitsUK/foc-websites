import { Suspense } from 'react'

import { HostedOnFOCBadge } from '@/components/HostedOnFOCBadge'

import { AppProviders } from '@/components/AppProviders'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { FeedbackButton } from '@/components/FeedbackButton'
import { Footer } from '@/components/Footer/Footer'
import { ServiceProvidersClient } from '@/app/service-providers/components/ServiceProvidersClient'

import { SERVICE_PROVIDERS_SEO } from '@/app/service-providers/constants/seo'
import { generateStructuredData } from '@/app/service-providers/utils/generate-structured-data'

export default function ServiceProvidersIsland() {
  return (
    <AppProviders>
      <StructuredDataScript structuredData={generateStructuredData(SERVICE_PROVIDERS_SEO)} />
      <Suspense>
        <ServiceProvidersClient />
      </Suspense>
      <Footer />
      <FeedbackButton />
      <HostedOnFOCBadge />
    </AppProviders>
  )
}
