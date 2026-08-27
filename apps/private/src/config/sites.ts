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
