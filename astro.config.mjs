import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';
import tailwindVite from '@tailwindcss/vite';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.roveratigiardini.com',
  output: 'static',
  adapter: netlify(),
  integrations: [react(), keystatic(), icon(), sitemap()],
  vite: {
    plugins: [tailwindVite()],
  }
});
