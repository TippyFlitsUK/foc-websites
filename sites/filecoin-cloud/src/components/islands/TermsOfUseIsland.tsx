import { MarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'

import { HostedOnFOCBadge } from '@/components/HostedOnFOCBadge'
import { MarkdownPage } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownPage'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { AppProviders } from '@/components/AppProviders'
import { FeedbackButton } from '@/components/FeedbackButton'
import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { TERMS_OF_USE_SEO } from '@/app/terms-of-use/constants/seo'
import { generateStructuredData } from '@/app/terms-of-use/utils/generate-structured-data'

export default function TermsOfUseIsland({ body }: { body: string }) {
  return (
    <AppProviders>
      <StructuredDataScript structuredData={generateStructuredData(TERMS_OF_USE_SEO)} />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <MarkdownPage>
          <MarkdownContent>{body}</MarkdownContent>
        </MarkdownPage>
      </PageSection>
      <Footer />
      <FeedbackButton />
      <HostedOnFOCBadge />
    </AppProviders>
  )
}
