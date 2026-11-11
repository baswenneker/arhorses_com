// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Temporary address: https://baswenneker.github.io/arhorses_com/
// To move to arhorses.com: set site to 'https://arhorses.com', remove base,
// and add public/CNAME containing "arhorses.com".
export default defineConfig({
  site: 'https://baswenneker.github.io',
  base: '/arhorses_com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
