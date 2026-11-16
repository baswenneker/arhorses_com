// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served by GitHub Pages on the custom domain arhorses.com (see public/CNAME).
export default defineConfig({
  site: 'https://arhorses.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
