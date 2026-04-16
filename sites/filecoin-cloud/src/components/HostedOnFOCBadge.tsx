export function HostedOnFOCBadge() {
  return (
    <div className="dark-section bg-zinc-950 text-center pt-0 pb-16" data-version="v2">
      <a
        href="https://filecoin.cloud"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3.5 no-underline"
      >
        <span className="text-sm font-normal text-zinc-400" style={{ fontFamily: 'var(--font-funnel-sans)' }}>
          Hosted on
        </span>
        <img
          src="/assets/logos/foc-logo-light.svg"
          alt="Filecoin Onchain Cloud"
          style={{ height: '64px' }}
          loading="lazy"
        />
      </a>
    </div>
  )
}
