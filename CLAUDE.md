# Harvest Festival Website — Project Memory

This file is read by Claude Code at the start of every session. Standing context,
conventions, and guardrails. Do not delete or rename it.

---

## What this is

The event website for the Harvest Festival — a ministry event of Reap the Harvest
Foundation, Inc. Hosted at festival.reaptheharvestfoundation.com. Completely separate
from the main RTH site (different repo, different brand).

Event: October 24, 2026 · Maranatha Farms · Forest, Virginia
Expected: 10,000–15,000 attendees

---

## Stack

- Astro 4 — static output (`output: 'static'`)
- Plain CSS — no Tailwind, no utility framework
- Markdown content collections (`src/content/`) — artists, sponsor tiers
- Central typed data in `src/data/site.ts` — event facts, nav, tickets, stats
- Deploy: Netlify or Vercel (static)

---

## Brand assets — extracted from the official .ai file

The real vector marks were extracted from `Harvest Festival Brand Guide.ai` and live in
`src/assets/brand/` as themeable SVGs (their soot fill was converted to `currentColor`,
so they inherit CSS `color`). Inline them with the `BrandMark` component; tint via `color`.

Available: `wordmark-horizontal`, `wordmark-stacked`, `hf-monogram`, `hf-oval`,
`hf-stars`, `hf-script`, `hf-script-ring`, `cross-of-stars`, `harvey-running`,
`harvey-rearing`. A colored copy of each also sits in `public/brand/` for download/reference.

The signature hero aesthetic (brand guide page 8 ticket mockup): Tomato background,
**soot** Kepler wordmark, rust-tinted rearing Harvey, faded stars, script tagline.

---

## Design tokens — always use by variable name (`src/styles/tokens.css`)

Never hard-code a hex value in a component.

```
--hf-cream:       #F8EFD2   DEFAULT background
--hf-tomato:      #B23B24   PRIMARY — buttons, CTAs, hero bands
--hf-rust:        #47241D   Dark sections, footer
--hf-clear-skies: #BCD0D3   Accent — sparingly
--hf-moss:        #827852   Earthy accent
--hf-soot:        #231F20   Body text
--tomato-deep:    #8E2D1A   Hover on tomato
--tomato-soft:    #D4614A   Secondary tomato
--rust-deep:      #2F1410   Deep dark
--cream-warm:     #FDF6E3   Lightest surface
```

Never use #FFFFFF or #000000.

Typography (substitutes for the licensed brand faces — swap in tokens.css):
```
--font-display: 'Playfair Display'  (Kepler Std SemiCondensed Italic substitute)
--font-head:    'Noto Serif'        (direct match)
--font-body:    'Inter'             (Neue Haas Grotesk substitute)
--font-script:  'Pinyon Script'     (Luxurious Script substitute — decorative only)
```

---

## Navigation

Home · Lineup · Tickets · Sponsors · Venue + Info · About RTH ↗

About RTH ↗ → https://reaptheharvestfoundation.com (external, new tab). It is the only
link back to the org site.

---

## Confirmed facts

```
Event:        Harvest Festival
Date:         October 24, 2026
Venue:        Maranatha Farms, Forest, Virginia
Attendance:   10,000–15,000 expected
Speakers:     Tim Tebow, Jonathan Pokluda (confirmed)
Headliner:    TBA — do not name until publicly confirmed
Ticket price: TBD — do not display until confirmed
Parent org:   Reap the Harvest Foundation, Inc.
EIN:          99-1683886
```
No street address displayed anywhere. City/state only.

Sponsorship tiers: Presenting $50,000 ×1 · Stage $25,000 ×2 · Field $10,000 ×3 ·
Banner $5,000 ×4 · Total $150,000. Artist Dinner = Presenting + Stage only.

---

## Key components (`src/components/`)

- `BrandMark.astro` — inlines a real brand SVG, themeable via `color`
- `Header.astro` / `Footer.astro` — nav (outbound RTH) / columns + 501c3 + verse
- `HeroFestival.astro` — the page-8 ticket aesthetic
- `PageHero.astro` — interior hero (rust / tomato / cream variants)
- `ArtistCard.astro` / `TBACard.astro` — confirmed vs "To Be Announced" slots
- `SponsorTierCard.astro` / `BenefitsTable.astro` — tiers + comparison matrix
- `TicketTier.astro` — renders a "Price — TBD" state when price is null
- `StatBlock.astro` · `PhotoPlaceholder.astro` · `Star.astro` · `StarScatter.astro`
- `ComingSoon.astro` — Phase 2 placeholder pages

---

## Hard rules

- No #FFFFFF, no #000000 — use token variables. No hard-coded hex in components.
- No Tailwind or utility CSS.
- Headliner shown as TBA until publicly confirmed — never name unconfirmed artists.
- Ticket price shown as TBD until confirmed — never display the $25 brand-mockup price live.
- No street address anywhere — city/state only.
- No stock photography — `PhotoPlaceholder` labeled slots only.
- Do not build RTH org pages here — this is the festival site only.
- Artist Dinner page is sponsor-gated context — not promoted in primary nav.

---

## Phase plan

Phase 1 (DONE): `/` · `/lineup` · `/tickets` · `/sponsors` · `/sponsors/artist-dinner` ·
`/why-it-matters` + global header/footer. Phase-2 routes exist as `ComingSoon` stubs so
nav/footer links don't 404.

Phase 2 (after approval): build out `/venue` · `/schedule` · `/sponsors/current` ·
`/volunteer` · `/faq` · `/press`.

---

## Pending content (marked TODO in code)

- Headliner / Elevation Worship (hold as TBA)        - Gate open time
- Ticket price and VIP tier benefits                 - Parking details
- Artist Dinner date and venue                       - Additional artists
- Sponsor + group form endpoint (Netlify Forms wired; confirm inbox)
- Real photography for every `PhotoPlaceholder`

---

## Maintainer notes

- Add a confirmed artist: new `.md` in `src/content/artists/` (set `status: confirmed`).
- Update tickets/event facts: edit `src/data/site.ts`.
- Add/adjust a sponsor tier: edit files in `src/content/sponsors/`.
- Swap to licensed fonts: change `--font-*` in `src/styles/tokens.css` only.
- Re-extract or add brand marks: see "Regenerating brand assets" in README (PyMuPDF from the .ai file).
