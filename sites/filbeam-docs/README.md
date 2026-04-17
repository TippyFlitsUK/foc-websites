# filbeam-docs

Astro + Starlight port of [docs.filbeam.com](https://docs.filbeam.com/) for the FOC Websites monorepo.

Staging URL: https://beam-docs.filecoincloud.io
Production target: https://docs.filbeam.com

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Updating content

Source of truth is the GitBook repo [filbeam/docs](https://github.com/filbeam/docs). To re-sync after an upstream change:

```bash
node ~/claude/filbeam-docs-import.mjs
```

The import script:
- Strips GitBook-only frontmatter keys (`icon`, `layout`)
- Converts `{% hint style="info|warning" %}` → Starlight `:::note` / `:::caution`
- Rewrites `.gitbook/assets/` refs to `/gitbook-assets/`
- Maps dirs (`explanation` → `how-it-works`, `how-to` → `how-to-guides`) to match live URLs
- Applies per-page title overrides where the source H1 differs from SUMMARY.md

## Deployment

Deployed via the monorepo's `.github/workflows/deploy.yml` — pushes to `main` under `sites/filbeam-docs/**` trigger a build and FOC pin.
