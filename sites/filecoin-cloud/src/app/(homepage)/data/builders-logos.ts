import type { LogoItemProps } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoItem'

import AkaveLogo from '@/assets/logos/akave-logo.svg?react'
import ChaChingLogo from '@/assets/logos/chaching-logo.svg?react'
import EastoreLogo from '@/assets/logos/eastore-logo.svg?react'
import EnsLogo from '@/assets/logos/ens-logo.svg?react'
import ERC8004Logo from '@/assets/logos/erc8004-logo.svg?react'
import FilosignLogo from '@/assets/logos/filosign-logo.svg?react'
import GeoLogo from '@/assets/logos/geo-logo.svg?react'
import GroundlineLogo from '@/assets/logos/groundline-logo.svg?react'
import KyveLogo from '@/assets/logos/kyve-logo.svg?react'
import MonadLogo from '@/assets/logos/monad-logo.svg?react'
import SafeLogo from '@/assets/logos/safe-logo.svg?react'
import StorachaLogo from '@/assets/logos/storacha-logo.svg?react'

export const buildersLogos: Array<LogoItemProps> = [
  {
    logo: EnsLogo,
    alt: 'ENS Logo',
    href: 'https://ens.domains/',
  },
  {
    logo: MonadLogo,
    alt: 'Monad Logo',
    href: 'https://www.monad.xyz/',
  },
  {
    logo: AkaveLogo,
    alt: 'Akave Logo',
    href: 'https://akave.com/',
  },
  {
    logo: ERC8004Logo,
    alt: 'ERC-8004 Logo',
    href: 'https://docs.filecoin.io/builder-cookbook/filecoin-pin/erc-8004-agent-registration',
  },
  {
    logo: SafeLogo,
    alt: 'Safe Logo',
    href: 'https://safe.global/',
    size: 36,
  },
  {
    logo: KyveLogo,
    alt: 'KYVE Logo',
    href: 'https://www.kyve.network/',
    size: 32,
  },
  {
    logo: FilosignLogo,
    alt: 'FilOsign Logo',
    href: 'https://app.filosign.xyz/',
  },
  {
    logo: ChaChingLogo,
    alt: 'ChaChing Logo',
    href: 'https://cha-ching.it/',
  },
  {
    logo: GroundlineLogo,
    alt: 'Groundline Logo',
  },
  {
    logo: EastoreLogo,
    alt: 'Eastore Logo',
    href: 'https://www.eastore.xyz/',
  },
  {
    logo: GeoLogo,
    alt: 'Geo Logo',
    href: 'https://geoweb.network/',
    size: 56,
  },
  {
    logo: StorachaLogo,
    alt: 'Storacha Logo',
    href: 'https://storacha.network/',
    size: 48,
  },
]
