import { query } from './src/data/cloudflare-client.js'

const NETWORK = process.env.NETWORK || 'calibration'
const NETWORK_LABEL = NETWORK.charAt(0).toUpperCase() + NETWORK.slice(1)

const {
  result: [{ results: clients }],
} = await query(`
  SELECT
    DISTINCT payer_address
  FROM
    data_sets
  WHERE
    with_cdn = true
  ORDER BY
    payer_address;
`)

const clientPaths = clients.map((c) => `/client/${c.payer_address}`)

const builtDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export default {
  title: `FilBeam Dashboard (${NETWORK_LABEL})`,
  head: `
    <link rel="icon" href="media/filbeam-logo.png" type="image/png" sizes="32x32">
    <style>
      #observablehq-footer > div { display: flex; flex-direction: column; align-items: center; gap: 0; padding: 0; }
      #observablehq-footer .built-line { padding: 1rem 0; }
      .foc-badge { width: 100%; text-align: center; padding: 2rem 0 1rem; border-top: 1px solid var(--theme-foreground-faintest, #ddd); }
      .foc-badge a { display: inline-flex; align-items: center; gap: 0.75rem; text-decoration: none; }
      .foc-badge span { font-size: 0.875rem; color: var(--theme-foreground-muted, #8a8580); }
      .foc-badge img { height: 48px; width: auto; }
    </style>
  `,
  root: 'src',
  theme: 'light',
  footer: `<span class="built-line">Built on ${builtDate} | <a href="https://github.com/TippyFlitsUK/foc-websites" target="_blank" rel="noopener noreferrer">View Source on GitHub</a></span><div class="foc-badge"><a href="https://filecoin.cloud" target="_blank" rel="noopener"><span>Hosted on</span><img src="./media/foc-logo-light.svg" alt="Filecoin Onchain Cloud"></a></div>`,
  sidebar: false,
  dynamicPaths: [...clientPaths],
}
