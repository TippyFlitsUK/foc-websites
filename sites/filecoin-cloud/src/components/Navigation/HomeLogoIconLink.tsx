'use client'

import { HomeLogoLink } from '@filecoin-foundation/ui-filecoin/HomeLogoLink'
import { useBackground } from '@filecoin-foundation/ui-filecoin/Section/Section'

import LogoDark from '@/assets/logos/foc-logo-dark.svg?react'
import LogoLight from '@/assets/logos/foc-logo-light.svg?react'

export function HomeLogoIconLink() {
  const { isLight } = useBackground()

  return <HomeLogoLink logo={isLight ? LogoDark : LogoLight} height={40} />
}
