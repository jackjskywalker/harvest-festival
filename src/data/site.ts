/* ============================================================
   Central site data - confirmed facts only.
   Single source of truth for event details, nav, tickets, stats.
   Guardrails (from CLAUDE.md):
     - Headliner is TBA until publicly confirmed.
     - Ticket price is TBD until confirmed - never show the $25 mockup price.
     - No street address anywhere - city/state only.
   ============================================================ */

export const event = {
  name: 'Harvest Festival',
  date: 'October 24, 2026',
  dateISO: '2026-10-24',
  venue: 'Maranatha Farms',
  city: 'Forest, Virginia',
  cityShort: 'Forest, VA',
  attendance: '10,000–15,000',
  tagline: 'The Harvest is Plentiful',
  secondaryLine: 'Reap What You Sow',
  verse: '“The harvest is plentiful, but the laborers are few.”',
  verseRef: 'Matthew 9:37',
  // Pending confirmations - keep null/TBD until verified. See CLAUDE.md.
  gatesOpen: null as string | null,         // TODO: gate open time
  ticketPrice: null as string | null,       // TODO: confirm price (mockup shows $25)
  parking: null as string | null,           // TODO: parking details
  contactEmail: 'info@reaptheharvestfoundation.com', // TODO: confirm festival inbox
};

export const org = {
  name: 'Reap the Harvest Foundation, Inc.',
  ein: '99-1683886',
  status: '501(c)(3) public charity',
  base: 'Lynchburg, Virginia',
  url: 'https://reaptheharvestfoundation.com',
};

/* Primary navigation. "About RTH" is the only outbound link to the org site. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Lineup', href: '/lineup' },
  { label: 'Tickets', href: '/tickets' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Venue + Info', href: '/venue' },          // Phase 2 page - link present per nav spec
  { label: 'About RTH', href: org.url, external: true },
];

/* Ticket tiers. Prices are intentionally null until confirmed →
   the UI renders a clear "Price - TBD" state instead of a number. */
export const ticketTiers = [
  {
    name: 'General Admission',
    price: null as string | null,
    unit: 'per person',
    features: [
      'Full festival access',
      'All stages',
      'Gospel outreach area',
      'Kids zone',
    ],
    featured: true,
  },
  {
    name: 'Family Pack',
    price: null as string | null,
    unit: null as string | null,           // TODO: e.g. "2 adults + 3 kids"
    features: ['Best value for families attending together'],
    note: 'Details coming soon',
    featured: false,
  },
  {
    name: 'VIP',
    price: null as string | null,
    unit: null as string | null,
    features: [],                          // TODO: VIP benefits - early entry, dedicated section
    note: 'Benefits to be announced',
    featured: false,
  },
];

/* Mission stats for /why-it-matters. */
export const stats = [
  { value: '2,500+', label: 'Kids served at free camps' },
  { value: '6,000+', label: 'People reached since 2024' },
  { value: '5', label: 'Worship nights hosted' },
  { value: '4 states', label: 'Where RTH has run camps' },
];

/* Benefits comparison matrix for the sponsor page.
   tiers array maps to the four sponsor tiers (Presenting, Stage, Field, Banner). */
export const sponsorBenefits = {
  tiers: ['Presenting', 'Stage', 'Field', 'Banner'],
  prices: ['$50,000', '$25,000', '$10,000', '$5,000'],
  rows: [
    { label: 'Name in event title', has: [true, false, false, false] },
    { label: 'Main stage naming rights', has: [true, true, false, false] },
    { label: 'Artist Dinner invitation', has: [true, true, false, false] },
    { label: 'On-site signage (large)', has: [true, true, true, false] },
    { label: 'Banner placement', has: [true, true, true, true] },
    { label: 'Logo in event program', has: [true, true, true, true] },
    { label: 'Social media recognition', has: [true, true, true, true] },
    { label: 'Dedicated sponsor post', has: [true, true, false, false] },
    { label: 'Website logo placement', has: [true, true, true, true] },
    { label: 'RTH newsletter feature', has: [true, true, false, false] },
    // VIP ticket counts per tier are unconfirmed → rendered as "TBD".
    { label: 'VIP tickets included', has: ['TBD', 'TBD', 'TBD', 'TBD'] },
  ] as { label: string; has: (boolean | string)[] }[],
};
