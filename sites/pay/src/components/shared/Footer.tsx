import { Container } from "@filecoin-foundation/ui-filecoin/Container";
import { LegalSection } from "@filecoin-foundation/ui-filecoin/Footer/LegalSection";
import { Section } from "@filecoin-foundation/ui-filecoin/Section/Section";
import { PATHS } from "@/constants/paths";
import { FIL_OZ_URL, FILECOIN_FOUNDATION_URL, FOC_URLS } from "@/constants/site-metadata";
import FilecoinFoundationLogo from "@/svg-assets/filecoin-foundation-logo.svg?react";
import FilozLogo from "@/svg-assets/filoz-logo.svg?react";

const legalLinks = [
  {
    label: PATHS.PRIVACY_POLICY.label,
    href: `${FOC_URLS.filecoinCloud}${PATHS.PRIVACY_POLICY.path}`,
  },
  { label: PATHS.TERMS_OF_USE.label, href: `${FOC_URLS.filecoinCloud}${PATHS.TERMS_OF_USE.path}` },
];

function Footer() {
  return (
    <Section as='footer' backgroundVariant='dark'>
      <Container>
        <LegalSection
          legalItems={legalLinks}
          creators={[
            {
              companyName: "FilOz",
              websiteUrl: FIL_OZ_URL,
              LogoComponent: FilozLogo,
            },
            {
              companyName: "Filecoin Foundation",
              websiteUrl: FILECOIN_FOUNDATION_URL,
              LogoComponent: FilecoinFoundationLogo,
            },
          ]}
        />
        <div className='foc-badge' style={{ textAlign: 'center', padding: '2rem 0 1rem', borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '2rem' }}>
          <a
            href='https://filecoin.cloud'
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontSize: '0.875rem', opacity: 0.75 }}>Hosted on</span>
            <img src='/foc-logo-light.svg' alt='Filecoin Onchain Cloud' style={{ height: '48px', width: 'auto', display: 'block' }} loading='lazy' />
          </a>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
