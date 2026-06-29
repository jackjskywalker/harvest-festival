import { defineCollection, z } from 'astro:content';

/* Artists / speakers / headliners.
   Add a confirmed artist by dropping a new .md file in src/content/artists/.
   Use status: 'tba' (with a label) for slots that are not yet public. */
const artists = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),                       // e.g. "Speaker", "Headlining Worship"
    kind: z.enum(['headliner', 'speaker', 'artist']),
    status: z.enum(['confirmed', 'tba']).default('confirmed'),
    tbaLabel: z.string().optional(),        // shown when status === 'tba'
    order: z.number().default(50),
    photo: z.string().optional(),           // path under /images/, real photography only
  }),
});

/* Sponsorship tiers. Order ascending by `order`. */
const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    tier: z.string(),
    price: z.number(),                       // USD
    slots: z.number(),
    available: z.number().optional(),        // remaining; defaults to slots
    featured: z.boolean().default(false),    // visually dominant (Presenting)
    artistDinner: z.boolean().default(false),
    tagline: z.string(),
    order: z.number(),
  }),
});

export const collections = { artists, sponsors };
