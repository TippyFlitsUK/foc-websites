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

export default {
  title: `FilBeam Dashboard (${NETWORK_LABEL})`,
  head: '<link rel="icon" href="media/filbeam-logo.png" type="image/png" sizes="32x32">',
  root: 'src',
  theme: 'light',
  footer: `
    Built on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} |
    <a href="https://github.com/TippyFlitsUK/foc-websites" target="_blank" rel="noopener noreferrer">View Source on GitHub</a>
    | Hosted on <a href="https://filecoin.cloud" target="_blank" rel="noopener"><img src="./media/foc-logo-light.svg" alt="Filecoin Onchain Cloud" height="16" style="vertical-align: middle; margin-bottom: 2px;"></a>
  `,
  sidebar: false,
  dynamicPaths: [...clientPaths],
}
