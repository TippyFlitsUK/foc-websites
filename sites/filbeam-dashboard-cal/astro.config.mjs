import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

const isProd = process.env.PROD_BUILD === '1'
const NETWORK = process.env.NETWORK || 'calibration'
const SITES = {
  mainnet: {
    prod: 'https://dashboard.filbeam.com',
    staging: 'https://beam-dash.filecoincloud.io',
  },
  calibration: {
    prod: 'https://calibration.dashboard.filbeam.com',
    staging: 'https://beam-dash-cal.filecoincloud.io',
  },
}

const DEV_API_TARGET = process.env.DEV_API_TARGET || 'http://localhost:8788'

export default defineConfig({
  site: isProd ? SITES[NETWORK].prod : SITES[NETWORK].staging,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  // Dev-only: proxy /api/* to the local dev-api.mjs server so the site can be
  // served from the same origin whether browsed from this machine or another.
  // In production the Cloudflare Worker owns /api/* on the same origin.
  vite: {
    server: {
      proxy: {
        '/api': {
          target: DEV_API_TARGET,
          changeOrigin: true,
        },
      },
    },
  },
})
