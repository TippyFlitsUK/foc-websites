import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath } from 'node:url'

const isProd = process.env.PROD_BUILD === '1'
const srcPath = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  site: isProd ? 'https://pay.filecoin.cloud' : 'https://pay.filecoincloud.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      svgr({ svgrOptions: { exportType: 'default' } }),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        { find: /^@\/public\//, replacement: srcPath + '/svg-assets/' },
        { find: 'next/link', replacement: srcPath + '/next-shims/link.tsx' },
        { find: 'next/image', replacement: srcPath + '/next-shims/image.tsx' },
        { find: 'next/navigation', replacement: srcPath + '/next-shims/navigation.tsx' },
        { find: 'next/script', replacement: srcPath + '/next-shims/script.tsx' },
        { find: 'next/font/local', replacement: srcPath + '/next-shims/font-local.ts' },
        { find: /^@filecoin-pay\/ui(\/|$)/, replacement: srcPath + '/ui-filecoin$1' },
        { find: /^@filecoin-pay\/types(\/|$)/, replacement: srcPath + '/pay-types$1' },
        { find: /^@\//, replacement: srcPath + '/' },
      ],
    },
  },
})
