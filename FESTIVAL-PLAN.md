# Harvest Festival — Website Build Plan
## festival.reaptheharvestfoundation.com

**Event:** Harvest Festival · October 24, 2026 · Maranatha Farms, Forest, VA
**Expected attendance:** 10,000–15,000
**Site purpose:** Tickets, sponsorships, artist lineup, logistics — fully self-contained event site

This document is the complete build plan for the festival subdomain. It contains:
1. Brand system (translated from the official brand guide)
2. Full site architecture
3. Page-by-page copy with all content blocks
4. Claude Code build prompt
5. CLAUDE.md persistent memory file

The festival site is **separate from** `reaptheharvestfoundation.com`. Same Astro + plain CSS stack. Different repo. Different brand. The only back-link to RTH is the "About RTH" nav item and the "Why It Matters" page.

---

# PART 1 — BRAND SYSTEM

## The visual identity

The Harvest Festival brand is intentionally distinct from RTH's institutional green brand. Where RTH is agricultural, reverent, and organizational — the festival is warm, energetic, and event-driven. Think American harvest fair meets Christian music festival.

---

## Color palette

Six named colors from the official brand guide. **Tomato is the primary action color.** Cream is still the canvas. Rust is the dark anchor. Clear Skies and Moss are supporting accents used sparingly.

```css
/* Core palette — Harvest Festival */
--hf-cream:        #F8EFD2;   /* DEFAULT background — warmer than RTH cream */
--hf-tomato:       #B23B24;   /* PRIMARY — buttons, hero bands, CTAs */
--hf-rust:         #47241D;   /* DARK anchor — deep backgrounds, footer */
--hf-clear-skies:  #BCD0D3;   /* Accent — used sparingly, sky/air moments */
--hf-moss:         #827852;   /* Accent — earthy, supporting roles */
--hf-soot:         #231F20;   /* Text, near-black — same as RTH black */

/* Web-extended tints */
--tomato-deep:     #8E2D1A;   /* Hover / pressed on tomato */
--tomato-soft:     #D4614A;   /* Lighter tomato for secondary elements */
--rust-deep:       #2F1410;   /* Darker footer / dark sections */
--cream-warm:      #FDF6E3;   /* Lightest surface on festival site */
```

**Color usage rules:**
- Cream is the default page canvas — never pure white
- Tomato is the primary CTA color — one primary tomato button per screen
- Rust is used for dark hero sections, footer, and deep background bands
- Clear Skies used only as an accent — never as a primary block background
- Moss used sparingly for texture — labels, dividers, secondary elements
- Soot Black for all body text

---

## Typography

Four typefaces. Kepler Std leads — it is the wordmark font and the hero display face. Noto Serif handles subheadings. Neue Haas Grotesk handles body. Script faces are decorative only.

```
Display / Wordmark:   Kepler Std SemiCondensed Italic
                      (-30 kerning, +3 stroke, rounded corners on logo)
                      → All hero headlines, the wordmark itself

Subheading:           Noto Serif ExtraCondensed SemiBold
                      → Section titles, card headings

Body:                 Neue Haas Grotesk Display Pro, 35 ExtraLight
                      → All body copy, captions, labels

Decorative:           Luxurious Script Regular (+1 stroke)
                      Sloop Script Pro (+1 stroke)
                      → Pull quotes, verse callouts ONLY — never body text
```

**Web font substitutes** (licensed fonts are not Google Fonts):
```css
--font-display:  'Playfair Display', serif;          /* Kepler substitute */
--font-head:     'Noto Serif', serif;                /* Direct Google Fonts match */
--font-body:     'Inter', sans-serif;               /* Neue Haas substitute */
--font-script:   'Pinyon Script', cursive;          /* Script substitute */
```
Centralize in `tokens.css` — swap to licensed fonts in one edit when available.

---

## Logo system

Three variants from the brand guide:

| Variant | Use |
|---|---|
| **Primary Wordmark** — "Harvest Festival" horizontal | Nav, hero, primary brand presence |
| **Secondary Wordmark** — "Harvest Festival" stacked | Square contexts, social avatars |
| **Primary Icon** — "HF" italic monogram | Favicon, app icon, embroidery |

Logo production: **Kepler Std SemiCondensed Italic with +3 stroke and refined rounded corners.** Export from the official `.ai` file. Do not rebuild.

---

## Brand assets (Harvey the Horse + marks)

From the assets page of the brand guide:

| Asset | Use |
|---|---|
| **Harvey the Horse (running mustang)** | Primary mascot — hero sections, merch, stage graphics |
| **Harvey the Horse (rearing)** | Premium use — posters, event materials |
| **Stars** (single, double, constellation ring) | Decorative texture throughout |
| **"937" text mark** | Matthew 9:37 reference — footer, subtle callbacks |
| **Cross of stars** | Spiritual/Gospel emphasis moments |
| **HF monogram** | Compact brand identifier |
| **Checkerboard** | Background texture, race-day energy |
| **Oval horse mark** | RTH callback — bridge between the two brands |

Dominant applied look (from ticket mockup page 8): **Tomato background, Rust-tinted Harvey silhouette, Cream text, script flourishes.** This is the festival's signature aesthetic.

---

## Voice and feel

The festival site should feel like a **premium outdoor Christian music event** — not a church event, not a generic festival. Warm, Southern, faith-first. Energy in the visuals; clarity in the copy. Every line should make someone want to be there.

- Bold, not corporate
- Warm, not generic
- Gospel-forward without being preachy
- The tagline is: **"The Harvest is Plentiful"** (Matthew 9:37)
- The secondary line: **"Reap What You Sow"**

---

# PART 2 — SITE ARCHITECTURE

## Navigation

```
Primary nav:  Home · Lineup · Tickets · Sponsors · Venue + Info · About RTH ↗
```

"About RTH ↗" links back to `reaptheharvestfoundation.com` — external.

---

## Page map

### Phase 1 — Build first (minimum viable event site)
| Page | URL | Priority |
|---|---|---|
| Festival Home | `/` | 🔴 Phase 1 |
| Artist Lineup | `/lineup` | 🔴 Phase 1 |
| Tickets | `/tickets` | 🔴 Phase 1 |
| Sponsor Tiers | `/sponsors` | 🔴 Phase 1 |
| Artist Dinner | `/sponsors/artist-dinner` | 🔴 Phase 1 |
| Why It Matters | `/why-it-matters` | 🔴 Phase 1 |

### Phase 2 — After Phase 1 reviewed
| Page | URL | Priority |
|---|---|---|
| Venue + Logistics | `/venue` | 🟡 Phase 2 |
| Day Schedule | `/schedule` | 🟡 Phase 2 — publish 60 days out |
| Current Sponsors | `/sponsors/current` | 🟡 Phase 2 |
| Volunteer | `/volunteer` | 🟡 Phase 2 |
| FAQ | `/faq` | 🟡 Phase 2 |
| Press + Media | `/press` | 🟡 Phase 2 |

---

# PART 3 — PAGE COPY

> **Placeholders:** anything in `[BRACKETS]` is a confirmed gap. All are collected at the end of this section.

---

## PAGE 1 — Festival Home (`/`)

**Purpose:** Convert every type of visitor — ticket buyer, sponsor, artist inquiry, media — from a single page. Must communicate the event's scale, date, and spirit in under 10 seconds.

---

### Block 1 — Hero

*Design note: Full-bleed Tomato (#B23B24) background. Harvey the Horse (rearing, large) as the centerpiece. Cream wordmark on top. Stars scattered. This is the ticket mockup aesthetic — faithful to page 8 of the brand guide.*

**Wordmark:** Harvest Festival *(Kepler Std / Playfair Display)*

**Eyebrow (script):** The Harvest is Plentiful

**Date + Venue:**
> October 24, 2026 · Maranatha Farms · Forest, Virginia

**Subline:**
> A day of worship, music, and the Gospel — for the whole family.

**Expected attendance:**
> 10,000–15,000 expected

**Primary CTA:** Get Tickets
**Secondary CTA:** Become a Sponsor

---

### Block 2 — Artist Lineup Tease

*Design note: Cream background section. Logo / artist name plates. Mystery slots for unconfirmed acts.*

**Eyebrow:** Lineup

**Heading:**
> *The artists.* *(Kepler Std italic)*

**Artist grid:**
> - `[ELEVATION WORSHIP]` — Headliner *(unconfirmed — hold as "Headlining Artist TBA" unless confirmed before launch)*
> - **Tim Tebow** — Speaker
> - **Jonathan Pokluda** — Speaker
> - More artists to be announced

**CTA:** See Full Lineup

---

### Block 3 — What It Is

*Design note: Rust (#47241D) dark band. Cream text. Harvey running silhouette as texture. This breaks the page and grounds the mission before the ticket ask.*

**Heading:**
> More than a festival.

**Body:**
> The Harvest Festival is a full day of live worship, nationally recognized speakers, and Gospel outreach — set on the fields of Maranatha Farms in Forest, Virginia. Family-friendly. All ages. And every ticket helps send a kid to a free sports camp.

**Mission tie-in:**
> *A ministry of Reap the Harvest Foundation, Inc.*

---

### Block 4 — Ticket CTA Band

*Design note: Tomato band. Cream text. Bold and direct. This is the primary conversion moment.*

**Heading:**
> Tickets are `[$PRICE]`.

**Body:**
> General admission. Family packages available. Group rates for churches and schools.

**Primary CTA:** Buy Tickets
**Secondary CTA:** Group Inquiry

*Note: Price shown as $25 in the brand guide mockup — confirm before publishing. Do not display a price until confirmed.*

---

### Block 5 — Sponsorship Callout

*Design note: Cream background. Subtle checkerboard texture. Bold typographic section.*

**Eyebrow:** Founding Sponsors

**Heading:**
> Be part of what God is doing here.

**Body:**
> Sponsorship opportunities are available for businesses and organizations who want to put their name on one of the largest Christian events in Central Virginia. From the Presenting Sponsor to Banner partners — every level funds free camps and reaches thousands.

**Tier preview:**
> Presenting · Stage · Field · Banner

**CTA:** View Sponsorship Tiers

---

### Block 6 — Venue Preview

*Design note: Full-width photo of Maranatha Farms. Cream overlay card with logistics.*

**Heading:**
> Maranatha Farms · Forest, Virginia

**Body:**
> Set on the rolling fields of Maranatha Farms just outside Lynchburg — easy access, wide open space, and a backdrop built for a day like this.

**Details:**
> Gates open: `[TIME]` · Parking: `[FREE / DETAILS]` · Rain or shine

**CTA:** Venue + Info

---

### Block 7 — Why It Matters

*Design note: Cream. Quiet section. The mission anchor before the footer.*

**Heading:**
> Every ticket funds a free camp.

**Body:**
> Reap the Harvest Foundation runs free sports camps for kids who can't afford them. The Harvest Festival is how we keep them free. Your ticket isn't just a ticket — it's a kid on a field, hearing the Gospel for the first time.

**CTA:** About RTH ↗ *(links to reaptheharvestfoundation.com)*

---

## PAGE 2 — Artist Lineup (`/lineup`)

**Purpose:** Drive ticket purchases and media pickup. Updated dynamically as artists confirm.

---

### Block 1 — Page Hero

*Design note: Rust dark background. Cream Kepler wordmark. Stars.*

**Heading:**
> *The Lineup.* *(Kepler Std italic)*

**Subhead:**
> October 24, 2026 · Maranatha Farms, Forest VA

---

### Block 2 — Headliner

**Label:** Headlining Worship

> `[ELEVATION WORSHIP — full feature: photo, short bio, confirmed status. Hold as "Headlining Artist — To Be Announced" until confirmed. Do not imply confirmation that hasn't happened.]`

---

### Block 3 — Speakers

**Label:** Speakers

**Tim Tebow**
> Tim Tebow is a two-sport professional athlete, Heisman Trophy winner, and founder of the Tim Tebow Foundation — a ministry dedicated to bringing faith, hope, and love to those needing a brighter day. He'll be bringing that message to the Harvest Festival stage on October 24.

**Jonathan Pokluda**
> Jonathan Pokluda (JP) is the lead pastor of Harris Creek Baptist Church in Waco, Texas and author of several books on faith and identity. He is the voice behind the *Becoming Something* podcast and has reached a generation of young people searching for purpose in Christ.

---

### Block 4 — Supporting Artists

**Label:** More Artists

> `[Additional confirmed artists — add as deals close. Show TBA slots to signal more is coming rather than leaving the section empty.]`

**CTA:** Get Tickets

---

## PAGE 3 — Tickets (`/tickets`)

**Purpose:** Minimal friction. One job: complete the ticket purchase.

---

### Block 1 — Page Hero

**Heading:**
> Get your tickets.

**Subhead:**
> October 24, 2026 · Maranatha Farms · Forest, Virginia · Gates open `[TIME]`

---

### Block 2 — Ticket Tiers

*Design note: Card grid. Tomato accent on the featured/recommended tier.*

**General Admission**
> `[$PRICE]` per person
> Full festival access · All stages · Gospel outreach area · Kids zone

**Family Pack** *(if applicable)*
> `[$PRICE]` — `[X adults + X kids]`
> Best value for families attending together

**VIP** *(if applicable)*
> `[$PRICE]`
> `[VIP benefits TBD — early entry, dedicated section, etc.]`

**Purchase CTA:** Buy Tickets *(links to ticketing platform)*

---

### Block 3 — Group + Church Tickets

**Heading:**
> Coming as a group?

**Body:**
> We offer group rates for churches, schools, and youth organizations. Bring your whole community.

**CTA:** Group Inquiry *(simple form: name, org, estimated group size, email)*

---

### Block 4 — What to Know

> - All ages welcome · Family-friendly event
> - Rain or shine
> - `[Refund / transfer policy]`
> - Questions? `[contact email]`

---

## PAGE 4 — Sponsor Tiers (`/sponsors`)

**Purpose:** Where $150,000 in sponsorships closes. Sponsors need a clear destination to review tiers, understand value, and contact RTH directly.

---

### Block 1 — Page Hero

*Design note: Rust background, cream Kepler heading, stars.*

**Heading:**
> *Be a founding sponsor.*

**Body:**
> The Harvest Festival is one of the largest Christian events Central Virginia has ever seen — 10,000 to 15,000 expected attendees, national artists, and a Gospel mission at the center. Your brand belongs here.

---

### Block 2 — Why Sponsor

**Heading:**
> More than a logo placement.

**Body:**
> Every sponsor is a partner in the mission. Your investment puts your brand in front of thousands of families, funds free sports camps for kids who can't afford them, and plants your name on a day that matters. This is not a table at a gala — it's a field full of people who will remember who showed up.

---

### Block 3 — Tier Overview

*Design note: Four-column card grid. Presenting tier visually dominant — different background, larger card.*

**Presenting Sponsor** — 1 available · $50,000
> The highest visibility position at the Harvest Festival. Your name is in the event title — *"[Your Name] Presents: The Harvest Festival."* One slot. First and only.

**Stage Sponsor** — 2 available · $25,000 each
> Your brand on the main stage. Live in front of 10,000+ people all day. Named in every stage announcement, every livestream frame, and all event materials.

**Field Sponsor** — 3 available · $10,000 each
> Prominent on-site branding across the festival grounds. Logo on signage, programs, and digital materials.

**Banner Sponsor** — 4 available · $5,000 each
> Banner placement throughout the festival with logo in event materials and social recognition.

---

### Block 4 — Benefits Comparison Table

| Benefit | Presenting $50K | Stage $25K | Field $10K | Banner $5K |
|---|:---:|:---:|:---:|:---:|
| Name in event title | ✓ | — | — | — |
| Main stage naming rights | ✓ | ✓ | — | — |
| Artist Dinner invitation | ✓ | ✓ | — | — |
| On-site signage (large) | ✓ | ✓ | ✓ | — |
| Banner placement | ✓ | ✓ | ✓ | ✓ |
| Logo in event program | ✓ | ✓ | ✓ | ✓ |
| Social media recognition | ✓ | ✓ | ✓ | ✓ |
| Dedicated sponsor post | ✓ | ✓ | — | — |
| Website logo placement | ✓ | ✓ | ✓ | ✓ |
| RTH newsletter feature | ✓ | ✓ | — | — |
| VIP tickets included | `[#]` | `[#]` | `[#]` | `[#]` |

---

### Block 5 — Artist Dinner Callout

*Design note: Cream card with Tomato left border. Kepler italic heading.*

**Heading:**
> *The Artist Dinner.*

**Body:**
> Presenting and Stage Sponsors receive an exclusive invitation to the Harvest Festival Artist Dinner — an intimate evening with the headlining artists and RTH leadership the night before the festival. Limited seats. This is not a public event.

**CTA:** Learn More → *(links to `/sponsors/artist-dinner`)*

---

### Block 6 — Claim Form

**Heading:**
> Ready to sponsor?

**Body:**
> Tell us which tier you're interested in and we'll follow up within 24 hours.

**Form fields:** Name · Organization · Tier interest · Phone · Email · Message (optional)

*Form routes to Austin/leadership — confirm email endpoint.*

---

## PAGE 5 — Artist Dinner (`/sponsors/artist-dinner`)

**Purpose:** Maximize perceived value of the top two tiers. This perk is what differentiates a $25K Stage sponsor from a $10K Field sponsor in the mind of a prospect.

---

### Block 1 — Hero

*Design note: Dark Rust background. Cream Kepler heading. Intimate, premium feel — different from the high-energy festival pages.*

**Heading:**
> *An evening with the artists.*

**Subhead:**
> By invitation only · Presenting and Stage Sponsors

---

### Block 2 — What It Is

**Body:**
> The night before the Harvest Festival, our top sponsors gather for an exclusive dinner with the headlining artists and RTH leadership. It is an intimate, unhurried evening — a chance to hear from the artists personally, connect with the ministry, and celebrate what God is doing through the Harvest Festival.

> **Date:** `[Evening of October 23, 2026 — confirm]`
> **Location:** `[Venue TBD]`
> **Guests:** Presenting Sponsor + Stage Sponsors and their invited guests

---

### Block 3 — Access

**Heading:**
> How to receive an invitation.

**Body:**
> The Artist Dinner is exclusively available to Presenting Sponsors ($50,000) and Stage Sponsors ($25,000). Claim your sponsorship and your invitation follows.

**CTA:** Claim a Sponsorship → *(links back to `/sponsors`)*

---

## PAGE 6 — Why It Matters (`/why-it-matters`)

**Purpose:** Connect the festival brand to the RTH mission. Critical for donor-attendees and sponsors who want to understand the *why* behind the event. This page is the soul of the site.

---

### Block 1 — Hero

*Design note: Cream background, Noto Serif italic large pull quote, stars.*

**Heading (script):**
> *The harvest is plentiful.*

**Verse:**
> "The harvest is plentiful, but the laborers are few." — Matthew 9:37

---

### Block 2 — The Mission Behind the Music

**Heading:**
> Every ticket funds a free camp.

**Body:**
> Reap the Harvest Foundation runs free football and sports camps for kids across Virginia, Louisiana, Tennessee, and Minnesota — kids who could never afford to play otherwise. The Harvest Festival is the annual event that makes those camps possible. When you buy a ticket or sponsor a stage, you're putting a kid on a field and giving them a chance to hear the Gospel.

---

### Block 3 — By the Numbers

| 2,500+ | Kids served at free camps |
|---|---|
| 6,000+ | People reached since 2024 |
| 5 | Worship nights hosted |
| 4 states | Where RTH has run camps |

---

### Block 4 — About RTH

**Heading:**
> About Reap the Harvest Foundation.

**Body:**
> Reap the Harvest Foundation, Inc. is a registered 501(c)(3) public charity (EIN 99-1683886) based in Lynchburg, Virginia. Founded in 2024, RTH runs free sports camps, community worship nights, and street outreach — all with the mission to reach the next generation with the Gospel of Jesus Christ.

**CTA:** Visit reaptheharvestfoundation.com ↗

---

## FOOTER (Global — Festival Site)

**Columns:**
- **Festival:** Lineup · Tickets · Venue + Info · Schedule · FAQ
- **Sponsors:** Tiers · Artist Dinner · Current Sponsors
- **Get Involved:** Volunteer · Press + Media
- **Mission:** Why It Matters · About RTH ↗

**Bottom bar:**
> The Harvest Festival is a ministry event of Reap the Harvest Foundation, Inc. — a registered 501(c)(3) public charity (EIN 99-1683886) · Lynchburg, VA
> *"The harvest is plentiful, but the laborers are few."* — Matthew 9:37

---

## INFORMATION NEEDED (Festival site)

| # | Item | Status |
|---|---|---|
| 1 | Elevation Worship confirmation — can they be named publicly yet? | Unconfirmed — hold as TBA |
| 2 | Ticket price | Brand guide shows $25 — confirm |
| 3 | Gate open time | Unknown |
| 4 | VIP tier — does one exist? What are the benefits? | Unknown |
| 5 | Refund / transfer policy | Unknown |
| 6 | Artist Dinner date and venue | Unconfirmed |
| 7 | VIP ticket counts per sponsor tier | Unknown |
| 8 | Contact email for sponsor form | Unknown |
| 9 | Ticketing platform (own site embed, Eventbrite, etc.) | Unknown |
| 10 | Parking details (free? overflow?) | Unknown |
| 11 | Gate open time | Unknown |
| 12 | Additional artists beyond Tebow + Pokluda | Unknown |

---

# PART 4 — CLAUDE CODE BUILD PROMPT

> Paste everything between the START and END markers as your first message in a new Claude Code session.

---

## ⬇️ PASTE FROM HERE

---

You are building the **Harvest Festival website** — a standalone event site at `festival.reaptheharvestfoundation.com`. This is completely separate from the main RTH org site. Same Astro + plain CSS stack, completely different brand.

**Read this entire document before writing a single line of code.** It contains the full brand system, site architecture, and page copy. It is the source of truth.

### What you are building

An event website for the Harvest Festival — October 24, 2026, Maranatha Farms, Forest, Virginia. Expected 10,000–15,000 attendees. The site must convert four types of visitors: ticket buyers, sponsors, media, and volunteers.

This is not the RTH org site. The only link back to RTH is the "About RTH ↗" nav item and the `/why-it-matters` page.

### Tech stack

- **Astro** — static output, content collections for artist and event data
- **Plain CSS** — no Tailwind, no utility framework
- **All design tokens as CSS custom properties** in `src/styles/tokens.css` — never hard-code hex values in components
- **Deploy:** Netlify or Vercel (static) on `festival.reaptheharvestfoundation.com`

### Design tokens — use these exactly

```css
/* Core palette */
--hf-cream:       #F8EFD2;   /* DEFAULT background */
--hf-tomato:      #B23B24;   /* PRIMARY — buttons, hero bands, CTAs */
--hf-rust:        #47241D;   /* Dark sections, footer, deep backgrounds */
--hf-clear-skies: #BCD0D3;   /* Accent — use sparingly */
--hf-moss:        #827852;   /* Earthy accent — labels, dividers */
--hf-soot:        #231F20;   /* Body text */

/* Extended */
--tomato-deep:    #8E2D1A;   /* Hover on tomato */
--tomato-soft:    #D4614A;   /* Secondary tomato elements */
--rust-deep:      #2F1410;   /* Deeper dark sections */
--cream-warm:     #FDF6E3;   /* Lightest surface */
```

```css
/* Typography */
--font-display: 'Playfair Display', serif;   /* Kepler Std substitute */
--font-head:    'Noto Serif', serif;
--font-body:    'Inter', sans-serif;
--font-script:  'Pinyon Script', cursive;    /* decorative only */
```

Load via Google Fonts. Declare only in `tokens.css` so licensed fonts can be swapped in one edit.

### Navigation

```
Home · Lineup · Tickets · Sponsors · Venue + Info · About RTH ↗
```

"About RTH ↗" opens `https://reaptheharvestfoundation.com` in a new tab. Mark it as outbound.

### Build phases

**Phase 1 — build first:**
Home · Lineup · Tickets · Sponsor Tiers · Artist Dinner · Why It Matters · global header + footer

**Phase 2 — after Phase 1 reviewed:**
Venue + Logistics · Day Schedule · Current Sponsors · Volunteer · FAQ · Press + Media

Stop after Phase 1 and present results before starting Phase 2.

### Brand rules

- Default background: `--hf-cream` — never `#FFFFFF`
- Primary CTA color: `--hf-tomato` — one primary tomato button per screen
- Dark sections (hero bands, footer): `--hf-rust`
- Hero aesthetic (from brand guide page 8): Tomato background, Harvey horse silhouette at large scale, Cream Playfair italic wordmark, scattered star assets
- Script fonts (`--font-script`) sparingly — verse callouts and decorative moments only, never body text
- **Real photography only.** Use clearly labeled `[Photo needed: description]` placeholders — no stock
- Logo files live in `public/logo/` — build a `LogoPlaceholder` component until real exports arrive

### Logo variants

Three to support — export from the official `.ai` brand file:
- `hf-logo-horizontal.svg` — "Harvest Festival" wordmark, horizontal
- `hf-logo-stacked.svg` — "Harvest Festival" wordmark, stacked
- `hf-icon.svg` — "HF" italic monogram for favicon and compact use

### Confirmed facts — use these exactly

| Field | Value |
|---|---|
| Event name | Harvest Festival |
| Date | October 24, 2026 |
| Venue | Maranatha Farms, Forest, Virginia |
| Expected attendance | 10,000–15,000 |
| Confirmed speakers | Tim Tebow, Jonathan Pokluda |
| Headliner | `[TBA — do not name until confirmed]` |
| Ticket price | `[TBD — do not display price until confirmed]` |
| Parent org | Reap the Harvest Foundation, Inc. |
| EIN | 99-1683886 |
| Sponsor total | $150,000 across 10 slots |

### Sponsorship tiers

| Tier | Price | Slots |
|---|---|---|
| Presenting | $50,000 | 1 |
| Stage | $25,000 | 2 |
| Field | $10,000 | 3 |
| Banner | $5,000 | 4 |

Artist Dinner is the exclusive perk for Presenting + Stage sponsors only.

### Placeholder handling

These items are confirmed gaps — mark with `{/* TODO */}` in code and leave visible in the UI as clearly labeled TBD states:
- Headliner / Elevation Worship (not yet publicly confirmed)
- Ticket price and tier details
- VIP benefits
- Artist Dinner date and venue
- Gate open time
- Parking details
- Additional artists

Never invent placeholder content. A "To Be Announced" card is better than a made-up artist.

### Build standards

- Responsive, mobile-first. Test at 380px, 768px, 1200px
- Accessible: semantic HTML, correct heading order, alt text on all images, AA contrast on all color pairings — especially cream-on-tomato and cream-on-rust
- Performance: Lighthouse 90+ all categories, lazy-load images, preload used font subset
- SEO: per-page `<title>` + meta description, Open Graph, `Event` JSON-LD schema on homepage with confirmed date/venue
- Clean, commented, component-based code
- `README.md` covering: local dev, deploy, how to add an artist, how to update ticket info, logo swap instructions

### Definition of done (Phase 1)

1. All Phase 1 pages built from this document's copy
2. Brand tokens in `tokens.css`, no hard-coded hex in components, no pure white
3. Global header (working nav + outbound RTH link) and footer with 501(c)(3) line
4. Headliner shown as TBA, ticket price shown as TBD
5. Sponsor tier page with benefits table and claim form
6. Artist Dinner page live with access instructions
7. Logo and photo placeholders clearly marked
8. Lighthouse 90+ and AA contrast passing
9. `README.md` written

Start by proposing your folder structure and component plan. Wait for approval before building.

---

## ⬆️ END OF PROMPT

---

# PART 5 — CLAUDE.md

*Place this file in the festival site's repo root as `CLAUDE.md`.*

---

```markdown
# Harvest Festival Website — Project Memory

This file is read by Claude Code at the start of every session. Standing context,
conventions, and guardrails. Do not delete or rename it.

---

## What this is

The event website for the Harvest Festival — a ministry event of Reap the Harvest
Foundation, Inc. Hosted at festival.reaptheharvestfoundation.com. Completely
separate from the main RTH site (different repo, different brand, different stack entry point).

Event: October 24, 2026 · Maranatha Farms · Forest, Virginia
Expected: 10,000–15,000 attendees

---

## Stack

- Astro — static output
- Plain CSS — no Tailwind, no utility framework
- Markdown / MDX content collections — artist data, sponsor data, event info
- Deploy: Netlify or Vercel (static)

---

## Folder structure

src/
  components/     # Reusable .astro components
  layouts/        # Page layouts
  pages/          # Routes
  content/        # Artists, sponsors, event data in MDX
  styles/
    tokens.css    # ALL design tokens — edit here first
    global.css    # Reset + base, imports tokens.css
public/
  logo/           # Festival logo exports — see logo note
  images/         # Real photos only
CLAUDE.md
README.md

---

## Design tokens — always use by variable name

Never hard-code a hex value in a component.

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

Never use #FFFFFF or #000000.

Typography:
--font-display: 'Playfair Display', serif    (Kepler Std substitute)
--font-head:    'Noto Serif', serif
--font-body:    'Inter', sans-serif
--font-script:  'Pinyon Script', cursive     (decorative only)

---

## Navigation

Home · Lineup · Tickets · Sponsors · Venue + Info · About RTH ↗

About RTH ↗ → https://reaptheharvestfoundation.com (external, new tab)

---

## Confirmed facts

Event:           Harvest Festival
Date:            October 24, 2026
Venue:           Maranatha Farms, Forest, Virginia
Attendance:      10,000–15,000 expected
Speakers:        Tim Tebow, Jonathan Pokluda (confirmed)
Headliner:       TBA — do not name until publicly confirmed
Ticket price:    TBD — do not display until confirmed
Parent org:      Reap the Harvest Foundation, Inc.
EIN:             99-1683886
No street address displayed anywhere. City/state only.

Sponsorship tiers:
  Presenting  $50,000  ×1
  Stage       $25,000  ×2
  Field       $10,000  ×3
  Banner       $5,000  ×4
  Total: $150,000

---

## Key components

- Header.astro — nav with outbound RTH link
- Footer.astro — columns + 501c3 line + verse
- HeroFestival.astro — Tomato bg, Harvey horse, Playfair wordmark
- ArtistCard.astro — photo, name, role, bio excerpt
- TBACard.astro — "To Be Announced" slot — use when artist unconfirmed
- SponsorTierCard.astro — tier name, price, slots remaining, benefits
- BenefitsTable.astro — side-by-side sponsor comparison
- TicketTier.astro — tier name, price TBD state, feature list, CTA
- StatBlock.astro — number, label (reuse RTH mission stats on /why-it-matters)
- LogoPlaceholder.astro — renders until real logo files arrive

---

## Hard rules

- No #FFFFFF, no #000000 — use token variables
- No hard-coded hex in component files
- No Tailwind or utility CSS
- Headliner shown as TBA until publicly confirmed — never name unconfirmed artists
- Ticket price shown as TBD until confirmed — never display the $25 from brand mockup
  as a live price without explicit confirmation
- No street address anywhere — city/state only
- No stock photography — labeled placeholders only
- Do not build RTH org pages here — this is the festival site only
- Artist Dinner page is sponsor-gated context only — not promoted publicly in nav

---

## Phase plan

Phase 1 (build first):
  / (home) · /lineup · /tickets · /sponsors
  /sponsors/artist-dinner · /why-it-matters

Phase 2 (after Phase 1 approved):
  /venue · /schedule · /sponsors/current
  /volunteer · /faq · /press

Do not start Phase 2 until Phase 1 explicitly approved.

---

## Pending content (mark as TODO in code)

- Headliner / Elevation Worship (hold as TBA)
- Ticket price and VIP tier
- Artist Dinner date and venue
- Gate open time
- Parking details
- Additional artists beyond Tebow + Pokluda
- Sponsor form email endpoint (use .env)
- Real photography for every page

---

## Maintainer notes

To add a confirmed artist: add MDX file to src/content/artists/
To update ticket info: edit src/content/event/tickets.mdx
To add a sponsor: edit src/content/sponsors/
To swap to licensed fonts: change --font-* variables in tokens.css
To drop in real logo: export SVGs to public/logo/, swap LogoPlaceholder for Logo component
```
