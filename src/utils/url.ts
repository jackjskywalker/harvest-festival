/**
 * Prefix an internal path with the Astro base URL so links work both on
 * GitHub Pages (/harvest-festival/…) and on the production custom domain (/).
 *
 * Usage:  href={u('/lineup')}   →  /harvest-festival/lineup  (GH Pages)
 *                               →  /lineup                   (custom domain)
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;
