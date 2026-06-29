# Harvest Festival — Website

The event website for the **Harvest Festival** — October 24, 2026 at Maranatha Farms,
Forest, Virginia. A ministry event of Reap the Harvest Foundation, Inc.

Built with **Astro** (static output) and **plain CSS**. The brand system is translated
directly from the official `Harvest Festival Brand Guide.ai`, and the horse mascot
(“Harvey”), wordmarks, and marks are **real vectors extracted from that file**.

Live target: `festival.reaptheharvestfoundation.com`

---

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the production build locally
```

Node 18+ recommended (built and verified on Node 24).

---

## Project structure

```
public/
  brand/            # colored SVG exports of every brand mark (reference/download)
  og/               # social share image
  favicon.svg
src/
  assets/brand/     # themeable SVG marks (currentColor) — inlined via <BrandMark/>
  components/       # reusable .astro components
  content/
    artists/        # one .md per speaker/headliner/artist
    sponsors/       # one .md per sponsor tier
    config.ts       # content-collection schemas
  data/site.ts      # confirmed event facts, nav, ticket tiers, stats, benefits matrix
  layouts/
    BaseLayout.astro  # <head>, SEO/OG, fonts, header + footer, JSON-LD
  pages/            # routes
  styles/
    tokens.css      # ALL design tokens — edit colors/fonts here first
    global.css      # reset + base + button/utility classes
CLAUDE.md           # project memory / guardrails for AI sessions
```

---

## Pages

**Phase 1 (built):** `/` · `/lineup` · `/tickets` · `/sponsors` ·
`/sponsors/artist-dinner` · `/why-it-matters`

**Phase 2 (placeholder stubs, no 404s):** `/venue` · `/schedule` · `/sponsors/current` ·
`/volunteer` · `/faq` · `/press` — each renders the `ComingSoon` component until built.

A custom `/404` page is included.

---

## Design system

All colors and fonts are CSS custom properties in **`src/styles/tokens.css`** — never
hard-code a hex in a component, and never use pure white/black. See `CLAUDE.md` for the
full palette and the brand guardrails.

Fonts load from Google Fonts as substitutes for the licensed brand faces
(Kepler Std → Playfair Display, Noto Serif, Neue Haas → Inter, Luxurious Script →
Pinyon Script). To switch to the licensed fonts later, self-host them and change the
`--font-*` variables in `tokens.css` — one edit, site-wide.

---

## Brand marks (`<BrandMark/>`)

The marks in `src/assets/brand/` use `currentColor`, so they take the CSS `color` of
their context. Use them like this:

```astro
---
import BrandMark from '../components/BrandMark.astro';
---
<BrandMark name="harvey-rearing" decorative class="my-horse" />
<style>.my-horse { width: 320px; color: var(--hf-rust); }</style>
```

Available `name`s: `wordmark-horizontal`, `wordmark-stacked`, `hf-monogram`, `hf-oval`,
`hf-stars`, `hf-script`, `hf-script-ring`, `cross-of-stars`, `harvey-running`,
`harvey-rearing`. Pass `title="…"` for meaningful marks (logos) or `decorative` for
texture (sets `aria-hidden`).

### Logo swap

The wordmarks are already the real Kepler-built logo from the `.ai` file. If updated
exports arrive, replace the matching files in `src/assets/brand/` (keep the `currentColor`
fill so theming still works) and regenerate `public/favicon.svg` / `public/og/` if needed.

---

## Common edits

| Task | Where |
|---|---|
| Add a confirmed artist | new `.md` in `src/content/artists/` (`status: confirmed`) |
| Hold an artist as TBA | set `status: tba` + `tbaLabel` in that artist's `.md` |
| Update ticket price / tiers | `src/data/site.ts` → `ticketTiers` (set `price` to a string when confirmed) |
| Update event facts (gates, parking, contact) | `src/data/site.ts` → `event` |
| Adjust a sponsor tier | `src/content/sponsors/*.md` |
| Change the benefits matrix | `src/data/site.ts` → `sponsorBenefits` |
| Edit nav | `src/data/site.ts` → `nav` |

> **Guardrails:** the headliner stays **TBA** until publicly confirmed, and the ticket
> price stays **TBD** until confirmed — do **not** publish the $25 figure from the brand
> mockup as a live price. No street address anywhere (city/state only). See `CLAUDE.md`.

---

## Forms

The Group Inquiry (`/tickets`) and Sponsor (`/sponsors`) forms are wired for
**Netlify Forms** (`data-netlify="true"` + honeypot). On Netlify they work with no
backend. On another host, point the `<form action>` at your handler (e.g. Formspree) and
confirm the destination inbox.

---

## Deploy

Static output — host the `dist/` folder anywhere.

- **Netlify:** build `npm run build`, publish `dist`. Forms work out of the box.
- **Vercel:** framework preset “Astro”, no config needed.

Set the production domain to `festival.reaptheharvestfoundation.com`.

---

## SEO / performance

- Per-page `<title>` + meta description, Open Graph + Twitter card, canonical URL.
- `Event` JSON-LD on the homepage (confirmed date/venue; no price).
- Inline themeable SVGs (no icon-font requests), lazy-loaded images, system-font fallback.
- Cream canvas, AA-contrast color pairings (cream-on-tomato, cream-on-rust verified).

---

## Regenerating brand assets from the `.ai` file

The marks were extracted from `Harvest Festival Brand Guide.ai` (a PDF-compatible Adobe
Illustrator file). Each mark is exported on its own artboard in seven color variants; the
soot variant was converted to `currentColor`. If you need to re-extract or add a mark,
use PyMuPDF (`pip install pymupdf`) to read the soot-variant artboard with
`page.get_svg_image()` and replace `#231f20` → `currentColor`.
