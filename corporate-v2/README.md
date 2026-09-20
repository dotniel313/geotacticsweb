# GeoTactics Corporate Web 2.0 — Astro project (isolated)

**Version:** 3.6.0-alpha.1  
**Location:** `/corporate-v2/` — **not** the Apache document root.

Production remains `index.html` at the repository root. Do not copy `dist/` over production in this phase.

## FONT_ASSET_PENDING

Open Sans is specified but **not** loaded from Google Fonts. Stack: `"Open Sans", system-ui, sans-serif`. Self-host authorized files in a later phase.

## OG_IMAGE_PENDING

No `og:image` (production placeholder is invalid HTML).

## Commands

```sh
cd corporate-v2
npm run dev      # http://localhost:4321
npm run build
npm run preview
```
