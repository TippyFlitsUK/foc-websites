// Post-build: convert dist/<name>.html into dist/<name>/index.html so IPFS
// gateways resolve pretty URLs. Rewrites `../` → `../../` in moved files so
// asset paths still resolve to dist root after the extra depth.
//
// Example: dist/client/0xabc.html → dist/client/0xabc/index.html,
// and inside that file `../_observablehq/x.css` → `../../_observablehq/x.css`.
import {
  readdirSync,
  statSync,
  renameSync,
  mkdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import { join, relative } from 'node:path'

const DIST = new URL('../dist', import.meta.url).pathname

function rewriteRelativePaths(filePath) {
  const html = readFileSync(filePath, 'utf8')
  const rewritten = html.replace(
    /((?:href|src)=")((?:\.\/|\.\.\/)[^"]*)"/g,
    (_, attr, path) => `${attr}../${path}"`,
  )
  if (rewritten !== html) writeFileSync(filePath, rewritten)
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('_')) continue
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      walk(full)
    } else if (entry.endsWith('.html') && entry !== 'index.html') {
      const base = full.slice(0, -'.html'.length)
      const target = join(base, 'index.html')
      if (existsSync(base)) continue
      mkdirSync(base, { recursive: true })
      renameSync(full, target)
      rewriteRelativePaths(target)
      console.log(`moved ${relative(DIST, full)} → ${relative(DIST, target)}`)
    }
  }
}

walk(DIST)
