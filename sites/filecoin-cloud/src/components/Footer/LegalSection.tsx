import { LegalSection as SharedLegalSection } from '@filecoin-foundation/ui-filecoin/Footer/LegalSection'

import { FIL_OZ_URL, FILECOIN_FOUNDATION_URL } from '@/constants/site-metadata'
import FilecoinFoundationLogo from '@/assets/logos/filecoin-foundation-logo.svg?react'
import FilozLogo from '@/assets/logos/filoz-logo.svg?react'

import { legalLinks } from './data/legal-links'

export function LegalSection() {
  return (
    <SharedLegalSection
      legalItems={legalLinks}
      creators={[
        {
          companyName: 'FilOz',
          websiteUrl: FIL_OZ_URL,
          LogoComponent: FilozLogo,
        },
        {
          companyName: 'Filecoin Foundation',
          websiteUrl: FILECOIN_FOUNDATION_URL,
          LogoComponent: FilecoinFoundationLogo,
        },
      ]}
    />
  )
}
