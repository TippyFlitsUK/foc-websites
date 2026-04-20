"use client";

import { useBackground } from "@filecoin-foundation/ui-filecoin/Section/Section";
import Link from "@/next-shims/link";
import useNetwork from "@/hooks/useNetwork";
import LogoDark from "@/svg-assets/foc-logo-dark.svg?react";
import LogoLight from "@/svg-assets/foc-logo-light.svg?react";

export function HomeLogoIconLink() {
  const { network } = useNetwork();
  const { theme } = useBackground();

  const Logo = theme === "light" ? LogoDark : LogoLight;
  return (
    <Link href={`/${network}`} className='focus:brand-outline inline-block' aria-label='Go to homepage'>
      <Logo height={40} />
      <span className='sr-only'>Home</span>
    </Link>
  );
}
