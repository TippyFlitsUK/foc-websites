import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const isProd = process.env.PROD_BUILD === '1'

export default defineConfig({
  site: isProd ? 'https://pin.filecoin.cloud' : 'https://pin.filecoincloud.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      nodePolyfills({ globals: { Buffer: true, global: true, process: false }, protocolImports: false }),
    ],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
})
