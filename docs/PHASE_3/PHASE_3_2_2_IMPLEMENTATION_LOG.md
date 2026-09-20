# PHASE 3.2.2-alpha.1 — Semantic integration + Trayectoria layout

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**SoT:** 1.0.1 OWNER APPROVED  
**Base:** 3.2.1-alpha.1  
**No** 3.3. **No** ProductDetail. **No** producción / cutover. **No** Nurse GO público.

## Objetivo

Copy público alineado a SoT 1.0.1 (qué es + para qué). Grid Trayectoria 2×2 en desktop/tablet; 1 columna ≤720.

## Copy

Actualizados 13 MD de `src/content/products/`. Eliminado copy de auditoría GOST. MadaRadio: origen 2021, Oreja Multimedia, evolución 2025. Explora: propio, sin cliente GADPS. Termómetro: propio GeoTactics. CAPTURE: nota positiva en `/productos`.

## Layout

`.gt-prod-grid--ln`: `repeat(2, minmax(0, 1fr))`. A/B sin cambio (A 3 col desktop; tablet A 3 / B 2).

## Overflow (`/productos` CDP)

| innerWidth | scrollWidth | ln |
|---|---|---|
| 1440 | 1440 | 2 col |
| 1024 | 1024 | 2 col |
| 820 | 820 | 2 col |
| 768 | 768 | 2 col |
| 430 | 430 | 1 col |
| 393 | 393 | 1 col |
| 390 | 390 | 1 col |
| 375 | 375 | 1 col |
| 360 | 360 | 1 col |

Home 1440 y 393: `scrollWidth === innerWidth`. A 3 col a 1440.

## Tests

`npm run check`: 0 errors/warnings/hints. `npm run build` OK.

## Métricas

`dist/` ~276 KB · Home HTML ~63.5 KB · `/productos` ~56 KB · CSS ProductShowcase 8.5 KB · JS 0.

## Capturas

`docs/PHASE_3/captures/alpha.3.2.2/`

## Producción

`index.html` 91 424 bytes, 8 ago 2026 — intacta.

## Changelog

- Semántica SoT 1.0.1 en cards
- Trayectoria 2×2
- Versión 3.2.2-alpha.1
