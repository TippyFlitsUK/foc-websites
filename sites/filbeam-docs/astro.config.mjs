import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'
import rehypeExternalLinks from 'rehype-external-links'

const isProd = process.env.PROD_BUILD === '1'
const site = isProd ? 'https://docs.filbeam.com' : 'https://beam-docs.filecoincloud.io'

export default defineConfig({
  site,
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank' }],
    ],
  },
  vite: {
    // Mermaid is ~750KB on its own; bump the warning threshold so it doesn't
    // show up as a vite warning on every build.
    build: { chunkSizeWarningLimit: 2000 },
  },
  integrations: [
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'Filecoin Beam Docs',
      description:
        'Documentation for Filecoin Beam — the blazing-fast data delivery layer for Filecoin.',
      logo: {
        light: './src/assets/filbeam-logo-black.png',
        dark: './src/assets/filbeam-logo-white.png',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      customCss: ['./src/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: isProd
        ? []
        : [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/TippyFlitsUK/foc-websites' },
      ],
      editLink: {
        baseUrl: 'https://github.com/TippyFlitsUK/foc-websites/edit/main/sites/filbeam-docs/',
      },
      lastUpdated: true,
      sidebar: [
        { label: 'Welcome', slug: 'index' },
        { label: 'Benefits', slug: 'benefits' },
        {
          label: 'Getting Started',
          items: [
            { label: 'Set Up Your Wallet', slug: 'getting-started/quickstart' },
          ],
        },
        {
          label: 'Using Demo Web App',
          items: [
            { label: 'About', slug: 'using-demo-web-app/about' },
            { label: 'Initial Payment Setup', slug: 'using-demo-web-app/initial-payment-setup' },
            { label: 'Upload File', slug: 'using-demo-web-app/upload-file' },
            { label: 'Retrieve File', slug: 'using-demo-web-app/retrieve-file' },
          ],
        },
        {
          label: 'How it works',
          items: [
            { label: 'Quota System', slug: 'how-it-works/quota-system' },
            { label: 'Pay-per-byte Payment Model', slug: 'how-it-works/payment-model' },
            { label: 'Usage Reporting', slug: 'how-it-works/usage-reporting' },
            { label: 'Pricing', slug: 'how-it-works/pricing' },
            { label: 'Retrieval and Fallback Mechanism', slug: 'how-it-works/retrieval-and-fallback' },
          ],
        },
        {
          label: 'How To Guides',
          items: [
            { label: 'Monitor Usage', slug: 'how-to-guides/monitor-usage' },
            { label: 'Observe Reported Usage', slug: 'how-to-guides/observe-reported-usage' },
            { label: 'Settle Payment Rails', slug: 'how-to-guides/settle-payment-rails' },
            { label: 'Top Up CDN Quota', slug: 'how-to-guides/top-up-cdn-quota' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Synapse SDK', slug: 'reference/synapse-sdk' },
            { label: 'FilBeamOperator Contract', slug: 'reference/filbeam-operator' },
            { label: 'Payment Rails', slug: 'reference/payment-rails' },
            { label: 'FilBeam Stats API', slug: 'reference/stats-api' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
})
