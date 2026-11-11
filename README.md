# arhorses.com

Static website for AR Horses, built with [Astro](https://astro.build) and Tailwind CSS 4.
The build output is plain HTML and CSS; the only JavaScript is the mobile menu toggle.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output in dist/
```

## Where to change what

| What | File |
|---|---|
| Address, email, phone, Instagram, menu | `src/data/site.ts` |
| Horse cards on the homepage | `src/data/horses.ts` + photo in `src/assets/horses/` |
| The five rearing steps | `src/data/opfok.ts` + photo in `src/assets/opfok/` |
| Colours and fonts | `src/styles/global.css` (`@theme`) |
| Header / footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| Page text | `src/pages/*.astro` |

Photos are converted to WebP and resized at build time; drop in the original JPG.

## Deploy

Every push to `main` builds the site and publishes it on GitHub Pages
(`.github/workflows/deploy.yml`).

The site currently runs at the temporary address
https://baswenneker.github.io/arhorses_com/. To move it to arhorses.com, follow
the comment in `astro.config.mjs`. Internal links go through `url()` in
`src/lib/url.ts`, so they keep working after the move.
