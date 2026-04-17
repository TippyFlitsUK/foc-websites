import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const isProd = process.env.PROD_BUILD === '1'

export default defineConfig({
  site: isProd ? 'https://filbeam.com' : 'https://beam.filecoincloud.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
})
