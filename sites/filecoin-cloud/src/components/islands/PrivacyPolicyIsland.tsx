import { MarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'

import { HostedOnFOCBadge } from '@/components/HostedOnFOCBadge'
import { MarkdownPage } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownPage'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { AppProviders } from '@/components/AppProviders'
import { FeedbackButton } from '@/components/FeedbackButton'
import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { PRIVACY_POLICY_SEO } from '@/app/privacy-policy/constants/seo'
import { generateStructuredData } from '@/app/privacy-policy/utils/generate-structured-data'

export default function PrivacyPolicyIsland({ body }: { body: string }) {
  return (
    <AppProviders>
      <StructuredDataScript structuredData={generateStructuredData(PRIVACY_POLICY_SEO)} />
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
