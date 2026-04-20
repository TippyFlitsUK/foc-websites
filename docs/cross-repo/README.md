# Cross-repo docs refresh

docs.filecoin.cloud is built from typedoc output generated in
`FilOzone/synapse-sdk`. We keep the two sites in sync via a
`repository_dispatch` handshake rather than a polling cron.

## Flow

```
SDK push/release  →  synapse-sdk workflow "Notify foc-websites"
                 →   POST /repos/TippyFlitsUK/foc-websites/dispatches
                 →   our "Deploy" workflow runs the docs site only, cloning
                     synapse-sdk fresh to regenerate the Reference tree
                 →   docs.filecoincloud.io (staging) / docs.filecoin.cloud (prod)
                     redeployed via nova + Worker KV + ENS
```

## Files

- `synapse-sdk-dispatch-foc.yml` — workflow to commit to
  `FilOzone/synapse-sdk/.github/workflows/dispatch-foc.yml`. Fires on
  release + on push to main that touches `packages/**` or `docs/src/**`.
- foc-websites side: see `.github/workflows/deploy.yml`. The `on:` block
  includes `repository_dispatch: [sdk-released]` and the build step for
  the `docs` site clones synapse-sdk fresh to regenerate typedoc output.

## Setup

**Once, coordinated between the two repos:**

1. On a user account with access to both repos, mint a fine-grained PAT with:
   - Repository: `TippyFlitsUK/foc-websites`
   - Permissions: Contents (read), Actions (read + write)
2. Add the PAT to `FilOzone/synapse-sdk` as the repo secret
   `FOC_WEBSITES_DISPATCH_TOKEN`.
3. Open a PR to `FilOzone/synapse-sdk` adding
   `.github/workflows/dispatch-foc.yml` (contents = this folder's
   `synapse-sdk-dispatch-foc.yml`).

After merge, any SDK change triggers a `sdk-released` dispatch →
foc-websites rebuilds + deploys docs.filecoin.cloud.

## Manual refresh

If the docs need to redeploy without an SDK change:

```bash
gh workflow run Deploy --repo TippyFlitsUK/foc-websites -f site=docs
```
