/** Sibling site URLs across the TFO Private ecosystem. */
export const SITES = {
  parent: import.meta.env.VITE_PARENT_URL ?? 'http://localhost:3000',
  jets: import.meta.env.VITE_JETS_URL ?? 'http://localhost:3001',
  limousine: import.meta.env.VITE_LIMOUSINE_URL ?? 'http://localhost:3002',
} as const;
