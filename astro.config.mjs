import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { stubViteClientEntryPlugin } from './scripts/stub-vite-client-entry.mjs'

export const SITE_URL = import.meta.env.PROD
  ? 'https://unitel-liard.vercel.app/'
  : 'http://localhost:4321'
export const SITE_BASE = '/'

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,

  vite: {
    plugins: [tailwindcss(), stubViteClientEntryPlugin()],
  },

  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'eu-west-2.graphassets.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'tailwindcss.com' },
    ],
  },

  integrations: [icon({ iconDir: 'src/assets/icons' }), sitemap()],
})
