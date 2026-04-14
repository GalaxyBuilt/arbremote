import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arbremote.com',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [],
});
