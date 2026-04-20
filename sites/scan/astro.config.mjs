import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

const isProd = process.env.PROD_BUILD === '1'

export default defineConfig({
  site: isProd ? 'https://scan.filecoin.cloud' : 'https://scan.filecoincloud.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
})
