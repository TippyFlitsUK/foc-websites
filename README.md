# foc-websites

Mono-repo for all Filecoin Onchain Cloud web properties. Each site is an [Astro](https://astro.build) project under `sites/`, built to static output, and deployed to Filecoin Onchain Cloud by [filecoin-nova](https://github.com/FilOzone/filecoin-nova).

Plan + rollout tracker: [FilOzone/tpm-utils#2](https://github.com/FilOzone/tpm-utils/issues/2)

## Architecture

```
Browser → *.filecoincloud.io (staging) / *.filecoin.cloud (prod)
        → Cloudflare edge → Worker → KV[hostname] → current CID
        → fallback IPFS gateways: dweb.link → ipfs.io → 4everland.io
        → FOC-pinned content
```

Both the Worker and the deploy pipeline live in [filecoin-nova](https://github.com/FilOzone/filecoin-nova). This repo only carries site content.

ENS fallback: `*.filnova.eth` (staging) / `*.filecoincloud.eth` (prod), resolvable via `eth.limo`.

## Repo layout

```
foc-websites/
  .github/workflows/deploy.yml   10-line caller for nova's reusable workflow
  sites/<name>/
    deploy.json                   hostname + cf_zone_id + ens_name
    package.json                  build scripts
    src/, public/                 site content
```

## Sites

| Site | Production | Staging | ENS |
|---|---|---|---|
| filecoin-cloud | filecoin.cloud | cloud.filecoincloud.io | cloud.filnova.eth |
| docs | docs.filecoin.cloud | docs.filecoincloud.io | docs.filnova.eth |
| demo | demo.filecoin.cloud | demo.filecoincloud.io | demo.filnova.eth |
| pay | pay.filecoin.cloud | pay.filecoincloud.io | pay.filnova.eth |
| pin | pin.filecoin.cloud | pin.filecoincloud.io | pin.filnova.eth |
| scan | scan.filecoin.cloud | scan.filecoincloud.io | scan.filnova.eth |
| filbeam | filbeam.com | beam.filecoincloud.io | beam.filnova.eth |
| filbeam-docs | docs.filbeam.com | beam-docs.filecoincloud.io | beam-docs.filnova.eth |
| filbeam-dashboard | dashboard.filbeam.com | beam-dash.filecoincloud.io | beam-dash.filnova.eth |
| filbeam-dashboard-cal | calibration.dashboard.filbeam.com | beam-dash-cal.filecoincloud.io | beam-dash-cal.filnova.eth |

## Development

```bash
cd sites/<name>
npm install
npm run dev      # local preview
npm run build    # production build to dist/
```

## Deploy

Push to `main` touching `sites/**`. CI calls filecoin-nova's reusable workflow which builds each changed site, pins to FOC, updates KV, DNSLink, and ENS.

`.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push: { branches: [main], paths: ['sites/**'] }
  workflow_dispatch:
jobs:
  deploy:
    uses: FilOzone/filecoin-nova/.github/workflows/deploy-sites.yml@v0.7.6
    secrets:
      NOVA_PIN_KEY:         ${{ secrets.NOVA_PIN_KEY }}
      NOVA_WALLET_ADDRESS:  ${{ secrets.NOVA_WALLET_ADDRESS }}
      NOVA_ENS_KEY:         ${{ secrets.NOVA_ENS_KEY }}
      NOVA_RPC_URL:         ${{ secrets.NOVA_RPC_URL }}
      CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

Repo variables (for reusing FOC's existing `foc-gateway-proxy` Worker rather than spinning up a new one per-repo):

```
NOVA_WORKER_NAME       = foc-gateway-proxy
NOVA_KV_NAMESPACE_ID   = 6f6e9038f48742e7b7e4a7de8733460a
NOVA_WORKER_UPLOAD     = skip
```

Required GitHub secrets: `NOVA_PIN_KEY`, `NOVA_WALLET_ADDRESS`, `NOVA_ENS_KEY`, `NOVA_RPC_URL`, `CLOUDFLARE_API_TOKEN`.

## Per-site `deploy.json`

```json
{
  "hostname": "demo.filecoincloud.io",
  "cf_zone_id": "ec64112d49365c91cf3c8db1424b5632",
  "ens_name": "demo.filnova.eth"
}
```

Optional extras: `"dist": "site"` for pre-built sites, `"apiProxy": { "/api": "https://backend.example.com" }` for reverse-proxied API routes.

## Why not Cloudflare Web3 Gateway

We tried. For FOC CIDs, the paid Web3 Gateway served root + `/_astro/*` but returned 524 timeouts on every other subpath, not fixable via cache purge / DNSLink re-PATCH / gateway recreate. Cloudflare decommissioned their public IPFS backend in Aug 2024 and their own troubleshooting docs now disclaim content-layer reliability. The nova-managed Worker is the replacement.
