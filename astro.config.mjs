import { defineConfig } from 'astro/config';

// Static event site for the Harvest Festival.
// GitHub Pages: https://jackjskywalker.github.io/harvest-festival-website/
// Production target: festival.reaptheharvestfoundation.com (add CNAME in repo settings)
export default defineConfig({
  site: 'https://jackjskywalker.github.io',
  base: '/harvest-festival-website',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
