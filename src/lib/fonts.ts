/**
 * Display, body, and mono fonts are loaded in `src/app/layout.tsx` via `next/font/google`
 * and exposed as CSS variables: `--font-cormorant`, `--font-crimson`, `--font-jetbrains`.
 */
export const fontCssVariables = [
  "var(--font-cormorant)",
  "var(--font-crimson)",
  "var(--font-jetbrains)",
] as const;
