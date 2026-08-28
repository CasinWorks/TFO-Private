/**
 * Sibling site URLs across the TFO Private ecosystem.
 * Production values come from .env.production / Vercel env vars.
 */
function siteUrl(env: string | undefined, fallback: string) {
  return (env || fallback).replace(/\/$/, '');
}

export const SITES = {
  parent: siteUrl(import.meta.env.VITE_PARENT_URL, 'http://localhost:3000'),
  jets: siteUrl(import.meta.env.VITE_JETS_URL, 'http://localhost:3001'),
  limousine: siteUrl(import.meta.env.VITE_LIMOUSINE_URL, 'http://localhost:3002'),
} as const;

/** Deep links into sibling sites — swap VITE_* URLs in Vercel to reconfigure. */
export const SIBLING = {
  parentHome: SITES.parent,
  jetsHome: SITES.jets,
  jetsContact: `${SITES.jets}#contact`,
  limousineHome: SITES.limousine,
  limousineBook: `${SITES.limousine}/#/book`,
} as const;
