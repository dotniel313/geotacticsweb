# PHASE 3.2.3-alpha.1 — Tablet composition micro-polish (Trayectoria)

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**SoT:** 1.0.1 OWNER APPROVED  
**Base:** 3.2.2-alpha.1  
**No** 3.3. **No** ProductDetail. **No** producción / cutover. **No** cambio de copy, ProductCard, fallbacks ni header.

## Objetivo

Composición horizontal de Trayectoria en tablet: 2×2 que recorre el ancho útil del contenedor 94vw. Sin volver a 4 columnas. Sin reducir cards.

## Causa del ancho tablet

1. **Layout real (CDP / Playwright, innerWidth = 768):** `.gt-container--wide` tablet ya usa `width: 94vw` (`base.css`). El grid `--ln` ya era `repeat(2, minmax(0, 1fr))` y ocupaba **721.9px** centrado (márgenes ~23px = 3vw). `--gt-container-wide: 80rem` (1280px) estaba **heredado como `max-width`** pero **no recortaba** a ≤1024. El mosaico no era una columna angosta en CSS; llenaba el 94vw.
2. **Falsa masa vacía a la derecha en capturas 3.2.2:** el visor IDE / `browser_take_screenshot` emula 768 a la izquierda de un canvas ~1200–3840px. El gris de la derecha es letterbox del widget, no gutter CSS. Confirmado: PNG 3.2.2 `productos-768.png` vs métricas `scrollWidth === 768`.
3. **Tope editorial compartido:** `max-width: var(--gt-container-wide)` en tablet se deja global. Override mínimo solo en ProductShowcase.

## CSS modificado

`corporate-v2/src/components/ProductShowcase.astro` — `@media (min-width: 721px) and (max-width: 1024px)`:

- `.gt-prod__intro.gt-container--wide`, `.gt-prod__band.gt-container--wide`: `width: 94vw; max-width: none;` (token 80rem **no** eliminado del sistema).
- `.gt-prod-grid--nx|--ln|--cat`: `width: 100%; max-width: none; grid-template-columns: repeat(2, minmax(0, 1fr)); justify-items: stretch;`
- A (`--op`) permanece 3 columnas en tablet.

Sin `overflow-x: hidden`. Sin alturas fijas. Sin igualar copy SIGDR/SIGC/YAKU/O/T.

## Comportamiento

| viewport | Trayectoria | band | scrollWidth |
|---|---|---|---|
| 768 | 2×2, cols ~355+355 | 721.91 (94vw) | 768 |
| 820 | 2×2, cols ~379+379 | 770.80 (94vw) | 820 |
| 1024 | 2×2, cols ~475+475 | 962.55 (94vw) | 1024 |
| 1440 | 2×2, cols 634+634 | 1280 (80rem) | 1440 |
| 393 | 1 col | 361 | 393 |
| 360 | 1 col | 328 | 360 |

`overflow-x` computado: `visible`. `scrollWidth <= innerWidth` en todos.

## A/B

Mismo `.gt-prod__band.gt-container--wide` recibe `max-width: none`. A ≤1024 el 80rem no recortaba: **ancho A/B numéricamente igual a 3.2.2**. A tablet sigue 3 col; B tablet 2 col (ya 3.2.2). Desktop A/B 3 col.

## Capturas

`docs/PHASE_3/captures/alpha.3.2.3/` — viewport real (Chrome headless), no letterbox IDE.

- `productos-1440.png` `productos-1024.png` `productos-820.png` `productos-768.png` `productos-393.png` `productos-360.png`
- `productos-768-before-3.2.2.png` — captura 3.2.2 (letterbox) para comparar el artefacto de revisión.

## Tests

`npm run check`: 0 errors / 0 warnings / 0 hints.  
`npm run build`: OK.

## Producción

`index.html` raíz 91 424 bytes, 8 ago 2026 — intacta.

## Changelog

- Override tablet `max-width: none` en contenedores ProductShowcase
- Grid 2×1fr explícito en nx/ln/cat tablet
- Versión 3.2.3-alpha.1
- **DETENERSE. No iniciar 3.3.**
