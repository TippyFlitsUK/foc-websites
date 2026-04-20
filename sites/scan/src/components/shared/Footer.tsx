export const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p>
          Made with ❤️ by{' '}
          <a href="https://github.com/FilOzone" target="_blank" rel="noopener">
            FilOz
          </a>
        </p>
      </div>
      <div
        className="w-full text-center pt-8 pb-4 mt-8"
        style={{ borderTop: '1px solid var(--sl-color-gray-5, #e0e0e0)' }}
      >
        <a
          href="https://filecoin.cloud"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 no-underline"
        >
          <span className="text-sm text-gray-500">Hosted on</span>
          <img
            src="/foc-logo-dark.svg"
            alt="Filecoin Onchain Cloud"
            loading="lazy"
            className="h-12 w-auto"
          />
        </a>
      </div>
    </>
  )
}
