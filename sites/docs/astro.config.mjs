import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'
import rehypeExternalLinks from 'rehype-external-links'

const isProd = process.env.PROD_BUILD === '1'
const site = isProd
  ? 'https://docs.filecoin.cloud'
  : 'https://docs.filecoincloud.io'

export default defineConfig({
  site,
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  },
  integrations: [
    sitemap(),
    mermaid({ theme: 'forest', autoTheme: true }),
    starlight({
      title: 'Filecoin Onchain Cloud Documentation',
      description:
        'Filecoin Onchain Cloud provides transparent storage, retrieval, and payments on the Filecoin network.',
      logo: { src: './src/assets/foc-logo.svg', alt: 'foc' },
      favicon: 'favicon.ico',
      customCss: ['./src/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-96x96.png',
            sizes: '96x96',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: new URL('og2.jpg?v=1', site).href,
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TippyFlitsUK/foc-websites',
        },
        {
          icon: 'x.com',
          label: 'X',
          href: 'https://x.com/_FilOz',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/TippyFlitsUK/foc-websites/edit/main/sites/docs/',
      },
      lastUpdated: true,
      sidebar: [
        { label: 'Introduction', autogenerate: { directory: 'introduction' } },
        { label: 'Core Concepts', autogenerate: { directory: 'core-concepts' } },
        { label: 'Getting Started', autogenerate: { directory: 'getting-started' } },
        {
          label: 'Developer Guides',
          collapsed: false,
          autogenerate: { directory: 'developer-guides', collapsed: true },
        },
        { label: 'CookBooks', collapsed: true, autogenerate: { directory: 'cookbooks' } },
        { label: 'Resources', collapsed: true, autogenerate: { directory: 'resources' } },
        {
          label: 'Reference',
          collapsed: true,
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
  vite: {
    build: { chunkSizeWarningLimit: 2000 },
  },
})
