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

/* Ticket tiers — confirmed prices. onSale toggles the buy button active.
   Set onSale: true and add saleUrl when the ticketing platform goes live. */
export const ticketTiers = [
  {
    name: 'VIP',
    price: '$85' as string | null,
    unit: 'per person',
    features: [
      'VIP reserved seating section',
      'Dedicated VIP entrance',
      'Full festival access — all stages',
    ],
    note: null as string | null,
    featured: true,
    capacity: 800,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'Pit',
    price: '$63' as string | null,
    unit: 'per person',
    features: [
      'Pit access — closest to the main stage',
      'Standing room, front of house',
      'Full festival access',
    ],
    note: null as string | null,
    featured: false,
    capacity: 1000,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'Seats — Close',
    price: '$59' as string | null,
    unit: 'per person',
    features: [
      'Reserved seat, closest seating section',
      'Excellent sightlines to main stage',
      'Full festival access',
    ],
    note: null as string | null,
    featured: false,
    capacity: 1000,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'Seats — Middle',
    price: '$49' as string | null,
    unit: 'per person',
    features: [
      'Reserved seat, middle seating section',
      'Full festival access',
    ],
    note: null as string | null,
    featured: false,
    capacity: 1000,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'Seats — Further',
    price: '$40' as string | null,
    unit: 'per person',
    features: [
      'Reserved seat, further seating section',
      'Full festival access',
    ],
    note: null as string | null,
    featured: false,
    capacity: 2000,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'Lawn General Admission',
    price: '$28' as string | null,
    unit: 'per person',
    features: [
      'Lawn access — open field with great views',
      'Full festival access — all stages',
      'Kids zone, vendor village, petting zoo',
    ],
    note: null as string | null,
    featured: false,
    capacity: 4000,
    onSale: false,
    saleUrl: null as string | null,
  },
  {
    name: 'VIP Backstage',
    price: '$100' as string | null,
    unit: 'per person',
    features: [
      'Backstage access',
      'VIP reserved seating',
      'All festival access',
    ],
    note: 'Available to donors and ministry partners only. Not sold publicly — contact us to inquire.',
    featured: false,
    capacity: 150,
    onSale: false,
    saleUrl: null as string | null,
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
   Column order: Presenting · Main Stage · Side Stage · Wristband · Prog. Cover · Chair · Signage · Banner */
export const sponsorBenefits = {
  tiers: ['Presenting', 'Main Stage', 'Side Stage', 'Wristband', 'Prog. Cover', 'Chair', 'Signage', 'Banner'],
  prices: ['$50K', '$30K', '$20K', '$15K', '$15K', '$10K', '$10K', '$5K'],
  rows: [
    { label: 'Name in event title',        has: [true,        false,       false,       false,  false,    false,  false,  false] },
    { label: 'Stage named after sponsor',  has: [false,       'Main',      'Side',      false,  false,    false,  false,  false] },
    { label: 'Artist Dinner (10 guests)',  has: [true,        false,       false,       false,  false,    false,  false,  false] },
    { label: 'Artist meet & greet',        has: ['10 guests', '6 guests',  'Photo op',  false,  false,    false,  false,  false] },
    { label: 'Brand video on main screen', has: ['60 sec',    false,       false,       false,  false,    false,  false,  false] },
    { label: 'Primary stage logo',         has: [true,        false,       false,       false,  false,    false,  false,  false] },
    { label: 'Stage backdrop logo',        has: [false,       true,        true,        false,  false,    false,  false,  false] },
    { label: 'Exclusive physical asset',   has: [false,       false,       false,       'Wristbands', 'Prog. cover', 'Chair inserts', 'All signage', '1 banner'] },
    { label: 'Backstage access',           has: ['10 guests', '4 guests',  false,       false,  false,    false,  false,  false] },
    { label: 'VIP reserved seating',       has: ['20 seats',  '12 seats',  '8 seats',   '6 seats', '6 seats', '4 seats', '4 seats', false] },
    { label: 'GA passes',                  has: [false,       false,       false,       false,  false,    false,  false,  '4 passes'] },
    { label: 'Dedicated social post',      has: [true,        true,        true,        true,   true,     true,   true,   'Recognition'] },
    { label: 'Logo in printed program',    has: [true,        true,        true,        true,   'Cover',  true,   true,   true] },
    { label: 'Logo on event website',      has: [true,        true,        true,        true,   true,     true,   true,   true] },
    { label: 'First right of refusal',     has: [true,        false,       false,       false,  false,    false,  false,  false] },
  ] as { label: string; has: (boolean | string)[] }[],
};
