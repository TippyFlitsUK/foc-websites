# foc-websites

Mono-repo for all Filecoin Onchain Cloud web properties. Each site is an [Astro](https://astro.build) project under `sites/`, built to static output, deployed to Filecoin Onchain Cloud via [Nova](https://github.com/FilOzone/filecoin-nova), and served through a shared Cloudflare Worker proxy.

Plan + rollout tracker: [FilOzone/tpm-utils#2](https://github.com/FilOzone/tpm-utils/issues/2)

## Architecture

```
Browser -> *.filecoincloud.io (staging) / *.filecoin.cloud (prod)
        -> Cloudflare edge (TLS, cache)
        -> Worker route -> foc-gateway-proxy (shared across all sites)
        -> KV[hostname] -> current CID
        -> fallback IPFS gateways: dweb.link -> ipfs.io -> 4everland.io
        -> FOC-pinned content
```

ENS fallback: `*.filnova.eth` (staging) / `*.filecoincloud.eth` (prod) resolvable via `eth.limo` for a fully trustless access path.

## Repo layout

```
foc-websites/
  .github/workflows/deploy.yml    path-filtered matrix deploy
  infra/workers/proxy/            shared Cloudflare Worker + scripts
  sites/<name>/                   one Astro project per site
    deploy.json                   per-site zone / hostname / ENS name
```

See [`infra/workers/proxy/README.md`](infra/workers/proxy/README.md) for the Worker + deploy scripts.

## Sites

| Site | Production | Staging | Status |
|---|---|---|---|
| Filecoin Cloud | filecoin.cloud | cloud.filecoincloud.io | Astro rebuild live on staging |
| FOC Docs | docs.filecoin.cloud | docs.filecoincloud.io | Pending |
| FOC Demo | demo.filecoin.cloud | demo.filecoincloud.io | Pending |
| Filecoin Pay | pay.filecoin.cloud | pay.filecoincloud.io | Pending |
| Filecoin Pin | pin.filecoin.cloud | pin.filecoincloud.io | Pending |
| PDP Explorer | scan.filecoin.cloud | scan.filecoincloud.io | Pending |
| Filbeam | filbeam.com | beam.filecoincloud.io | Pending |
| Filbeam Docs | docs.filbeam.com | beam-docs.filecoincloud.io | Pending |
| Filbeam Dashboard | dashboard.filbeam.com | beam-dash.filecoincloud.io | Pending |
| Filbeam Dashboard (cal) | calibration.dashboard.filbeam.com | beam-dash-cal.filecoincloud.io | Pending |

## Development

```bash
cd sites/<name>
npm install
npm run dev
npm run build
```

## Deploy (manual)

```bash
export CLOUDFLARE_API_TOKEN=...
cd sites/<name>
npm run build
CID=$(nova deploy dist --json | jq -r .cid)              # never use --clean
../../infra/workers/proxy/deploy-site.sh <name> "$CID"    # KV update
../../infra/workers/proxy/dnslink.sh <name> "$CID"        # DNSLink TXT
NOVA_RPC_URL=https://ethereum-rpc.publicnode.com \
  nova ens "$CID" --ens $(jq -r .ens_name deploy.json)    # ENS contenthash
```

CI runs the same sequence on push to `main`.

## Deploy (automated)

Push to `main` touching `sites/<name>/**` → `.github/workflows/deploy.yml` detects the changed site, builds, deploys to FOC, updates KV, DNSLink, and ENS.

Required GitHub secrets: `NOVA_PIN_KEY`, `NOVA_WALLET_ADDRESS`, `NOVA_ENS_KEY`, `NOVA_RPC_URL`, `CLOUDFLARE_API_TOKEN`.

## Why not Cloudflare Web3 Gateway

We tried. For FOC CIDs, the paid Web3 Gateway served root + `/_astro/*` but returned 524 timeouts on every other subpath, not fixable via cache purge / DNSLink re-PATCH / gateway recreate. Cloudflare decommissioned their public IPFS backend in Aug 2024 and their own troubleshooting docs now disclaim content-layer reliability. The Worker proxy pattern in this repo is the replacement.
