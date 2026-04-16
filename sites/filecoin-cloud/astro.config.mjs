import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

const shimDir = fileURLToPath(new URL('./src/shims', import.meta.url))

export default defineConfig({
  site: 'https://filecoin.cloud',
  trailingSlash: 'never',
  prefetch: true,
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss(), svgr({ svgrOptions: { exportType: 'default' } })],
    resolve: {
      alias: {
        'next/image': `${shimDir}/next-image.tsx`,
        'next/link': `${shimDir}/next-link.tsx`,
        'next/navigation': `${shimDir}/next-navigation.ts`,
        'next/font/local': `${shimDir}/next-font-local.ts`,
      },
    },
  },
})
