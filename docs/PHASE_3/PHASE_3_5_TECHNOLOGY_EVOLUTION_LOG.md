# PHASE 3.5.0-alpha.1 — Technology + Method + Evolution

**Base:** 3.4.0-alpha.1  
**SoT:** 1.0.1  
**Modo:** STRUCTURE FIRST / CONTENT RECONCILIATION AFTER  
**Gate:** AWAITING_OWNER_BLOCK_C_STRUCTURAL_REVIEW  
**Producción Apache (`index.html` raíz):** intacta

## Alcance

- `/tecnologia` (ya no DevShell)
- GOST como marco, no producto
- Capas / disciplinas con evidencia de matriz (sin extrapolar)
- ADN GeoTactics (patrones)
- Lineage ≠ Timeline
- Timeline KEEP+REFACTOR (HTML/CSS + JS scoped)
- Home: GOST resumido + Timeline compacta + CTA `/tecnologia`

## No hecho

- Content Reconciliation 3.7
- Signals / footer final
- Pixel-polish
- Block D
- Reabrir copy de /nosotros, /equipo, /casos, /productos
- Cutover / producción

## Modelo de contenido

TS en `corporate-v2/src/data/`:

- `method.ts` — flujo editorial, GOST, ADN
- `disciplines.ts` — capas
- `lineage.ts` — nodos, ramas, hojas ontológicas
- `timeline.ts` — eventos con dateKind

Sin CMS / DB. Collections Astro no añadidas (JSON/TS suficiente).

## JS / librerías

- JS scoped en `EvolutionTimeline.astro` (prev/next, teclado, scroll).
- Sin D3. Sin librería de diagramas.
- Leaflet intacto (solo mapa de casos).

## QA

- `npm run check`: 0 errors / 0 warnings / 0 hints
- `npm run build`: 14 páginas, static
- Overflow Playwright 1440–360 en `/`, `/tecnologia`, `/casos`, `/productos`, `/nosotros`: sin overflow de documento
- Preview: `http://127.0.0.1:4323/`
- Producción `index.html` raíz: 91424 B, 8 Aug 2026, intacta

