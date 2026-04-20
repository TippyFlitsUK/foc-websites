export const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p>
          Made with ❤️ by{' '}
          <a href="https://github.com/FilOzone" target="_blank" rel="noopener noreferrer">
            FilOz
          </a>
        </p>
      </div>
      <div
        className="foc-badge"
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '2rem 0 3rem',
          marginTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <a
          href="https://filecoin.cloud"
          target="_blank"
          rel="noopener"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <span style={{ fontSize: '0.875rem', color: '#6f6f6f' }}>Hosted on</span>
          <img
            src="/foc-logo-dark.svg"
            alt="Filecoin Onchain Cloud"
            loading="lazy"
            style={{ height: '48px', width: 'auto' }}
            className="foc-badge-dark"
          />
          <img
            src="/foc-logo-light.svg"
            alt="Filecoin Onchain Cloud"
            loading="lazy"
            style={{ height: '48px', width: 'auto', display: 'none' }}
            className="foc-badge-light"
          />
        </a>
      </div>
      <style>{`:root.dark .foc-badge-dark{display:none!important}:root.dark .foc-badge-light{display:inline!important}`}</style>
    </>
  )
}
