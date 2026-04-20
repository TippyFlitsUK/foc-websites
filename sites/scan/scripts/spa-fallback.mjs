// Post-build: copy dist/index.html to dist/<route>/index.html for every
// react-router path listed in spa-routes.json. IPFS gateways have no
// server-side fallback, so each deep-linkable route needs a real file.
import { mkdirSync, copyFileSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
const ROOT = dirname(fileURLToPath(import.meta.url)) + '/..'
const DIST = join(ROOT, 'dist')
const routes = JSON.parse(readFileSync(join(ROOT, 'spa-routes.json'), 'utf8'))
const source = join(DIST, 'index.html')
for (const route of routes) {
  const dir = join(DIST, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(source, join(dir, 'index.html'))
}
console.log(`spa-fallback: ${routes.length} routes written`)
