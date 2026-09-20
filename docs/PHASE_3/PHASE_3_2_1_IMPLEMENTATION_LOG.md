# PHASE 3.2.1-alpha.1 — Product polish / Gate 3.2

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**No** se inicia 3.3. **No** cutover. **No** se tocó producción. **No** ProductDetail.

## Objetivo

Resolver overflow móvil, header determinista, copy interno y composición tablet detectados en revisión de 3.2.0-alpha.1.

## Causa 393 (verificada)

No era solo letterboxing del IDE.

1. Items de CSS Grid con `min-width: auto` heredaban el min-content del SVG de fallback (**320px**). Tres columnas podían superar el viewport.
2. `html { overflow-x: hidden }` **recortaba** el texto (headline y párrafos “cortados”) en lugar de forzar wrap, y ocultaba el overflow real.
3. Header `max-width: 1024px` escondía la nav y dejaba **Conversar + hamburguesa** a 768, distinto del contrato 3.1.1.

Corrección: `minmax(0, 1fr)` en grids; `min-width: 0` en cards/contenedores; wrap en textos; **retirar** `overflow-x: hidden` de `html`; hamburguesa **solo ≤720**.

## scrollWidth / innerWidth (`/productos`, emulación de dispositivo)

| innerWidth | scrollWidth | scrollWidth ≤ innerWidth |
|---|---|---|
| 430 | 430 | **sí** |
| 393 | 393 | **sí** |
| 390 | 390 | **sí** |
| 375 | 375 | **sí** |
| 360 | 360 | **sí** |
| 768 | 768 | **sí** |
| 1440 | 1440 | **sí** |

Home 1440 y 393: también `scrollWidth === innerWidth`. `/que-hacemos` 393: igual.

**NO HORIZONTAL OVERFLOW** (documento). Offenders locales: `.visually-hidden` y barras del botón menú (decorativo, no expanden el documento).

## Header (idéntico estructuralmente)

A 393, `/`, `/que-hacemos` y `/productos`:

`gt-brand` flex · `gt-nav` none · `gt-header__cta` none · `gt-nav-toggle` block.

A ≥721: logo + nav + Conversar; toggle none. Tablet 768 medido: nav `block`, toggle `none`, CTA `flex`. Nav compacta 721–1024 (`flex-wrap`) para no colisionar.

## Copy final

- Headline: Las capacidades se materializan en sistemas concretos.
- Supporting: Productos desarrollados por GeoTactics para resolver problemas de territorio, gestión, operación, mercado y trabajo de campo.
- `/productos` adicional: Una trayectoria de sistemas en operación, productos en evolución y desarrollos que forman parte de la experiencia tecnológica de GeoTactics.
- A: Sistemas en operación, disponibles o utilizados en contextos reales.
- B: Productos propios en desarrollo o prelanzamiento. El estado de cada uno se indica en su ficha.
- C: Sistemas que forman parte de la evolución tecnológica de GeoTactics.
- DataSucumbíos: plataforma de inteligencia territorial… aplicada entre otros contextos al caso PDOT Sucumbíos. Sin “no es la empresa ni el PDOT”.

## Tablet

94vw intacto. Grupo A: **3 columnas** `minmax(0, 1fr)` (medido 232.6px × 3 a 768). Sin celda gris vacía (se retiró el truco gap/background). B/C: 2 columnas en tablet.

## Fallback

Mismo sistema geométrico. Fondo off-white + acento coral 2px; SVG con `preserveAspectRatio` y fill de retícula. Sin dashboards inventados.

## CTA

Home: «Ver en catálogo» → `/productos#slug`.  
`/productos`: «Abrir producto» solo con URL live y estado en operación (DS, OrangeMap, ExploraSucumbíos). Resto: sin CTA falsa.

## Tests

`npm run build` OK. `npm run check`: 0 errors, 0 warnings, 0 hints.

## Métricas (post-build 3.2.1)

| | valor |
|---|---|
| `dist/` | ~276 KB |
| Home HTML | ~63 KB |
| `/productos` HTML | ~56 KB |
| CSS ProductShowcase | 8.3 KB |
| CSS BaseLayout | 7.7 KB |
| JS | 0 |

No Lighthouse.

## Capturas

`docs/PHASE_3/captures/alpha.3.2.1/` — Home 1440/768/393; `/productos` 1440/768/393/360.

El canvas del IDE letterboxea a la derecha; el layout medido usa el viewport emulado.

## Producción

`index.html` raíz: **91 424 bytes**, 8 ago 2026 — **intacta**.

## Changelog

- Overflow móvil corregido en origen (grid + wrap + sin clip html)
- Header 3.1.1 restaurado (≤720 menú; ≥721 nav+Conversar)
- Copy público sin meta-arquitectura
- Tablet A a 3 columnas; CTA catálogo solo URL live
- Versión 3.2.1-alpha.1
