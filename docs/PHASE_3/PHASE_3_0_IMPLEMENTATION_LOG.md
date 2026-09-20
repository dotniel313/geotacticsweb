# PHASE 3.0.0-alpha.1 — Implementation log

**Fecha:** 18 septiembre 2026  
**Objetivo:** Foundation Astro + design tokens + layout + slice visual Home (Header → Signals → Hero → Evidence). Sin cutover.

## Decisión de ubicación

| Hecho | Valor |
|---|---|
| Document root producción | Raíz del repo: `index.html` (Apache sirve ese archivo) |
| Config Apache en repo | No hay `.htaccess` |
| Archivos de producción | `index.html`, `index N.html`, `index0.html`, `index2.html`, `Index1.html`, `logo.png`, `favicon.png`, `G_L_2024/` |
| Proyecto 2.0 | **`/corporate-v2/`** — sin conflicto de nombre |

El build (`corporate-v2/dist/`) está separado. **No** se copió a la raíz. **No** se modificó `index.html`.

## Archivos creados (principales)

- `corporate-v2/` (proyecto Astro 7.3.3, TS, `output: static`)
- `src/config/site.ts`
- `src/content.config.ts` + `src/content/news/.gitkeep`
- `src/styles/tokens.css`, `base.css`
- `src/layouts/BaseLayout.astro`, `DevShell.astro`
- `src/components/{SiteHeader,SignalsStrip,Hero,EvidenceStrip,TerritorialGrid}.astro`
- `src/pages/{index,tecnologia,conversar,que-hacemos,productos,casos,nosotros}.astro`
- `src/data/dev-signals.ts` (DEV only)
- `public/favicon.png` (copia del asset de marca; origen `favicon.png` raíz **no alterado**)
- `public/robots.txt` (`Disallow: /` en alpha)

## Dependencias

**runtime:** `astro@7.3.3`  
**dev:** `@astrojs/check@0.9.10`, `typescript@6.0.3`  
Sin React/Vue/Svelte/Tailwind/CMS/Sheets/PapaParse/analytics/CMP.

## Build / check (ejecutados)

- `npm run build`: **OK** (7 páginas, 643 ms). Warning esperado: colección `news` vacía.
- `npm run check`: **0 errors**, 23 hints (`z` deprecado en `astro:content` — deuda Astro 7 / Zod).

## Métricas dist (producción build)

| Asset | Tamaño |
|---|---|
| `dist/index.html` | 7.6 KB |
| CSS (`_astro/*.css`) | ~11.7 KB (4.9 + 6.8) |
| JS cliente | ~868 B inline (menú móvil); **0** bundles JS aparte |
| Favicon | ~29 KB PNG |
| `dist/` total | ~108 KB |
| Requests locales estimados (Home) | HTML + 2 CSS + favicon = **4** |

Signals **no** está en el HTML de `build` (0 noticias publicables). Fixture `DEV_ONLY_SIGNAL` solo en `astro dev`.

Lighthouse: **no ejecutado**.

## Inspección visual

Preview `http://127.0.0.1:4321/` capturado ~1440, ~768, ~390. Header, H1, CTAs, evidence visibles. Menú hamburguesa en tablet/móvil. CTA Conversar persistente.

## Deuda / pendientes

- FONT_ASSET_PENDING (Open Sans no self-host)
- OG_IMAGE_PENDING
- Hints Zod `z` deprecated
- Warning glob news vacío
- Shells de nav (qué-hacemos, productos, casos, nosotros) para no 404 — contenido 3.1+
- Telemetría Astro (mensaje CLI; no se deshabilitó)
- No CSP/HSTS Apache (fuera de fase)
- Marcador `SIGUIENTE BLOQUE · QUÉ HACEMOS` a retirar en 3.1

## Bugs

- Ninguno bloqueante. Panel móvil permanece en DOM con `hidden` (correcto).

## Confirmación producción

`index.html` raíz: 91 424 bytes, fecha 8 ago 2026 — **sin cambios**. HTML histórico intacto. Sin cutover.

---

# PHASE 3.0.0-alpha.2 — Visual calibration

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**No** se inicia Fase 3.1. **No** cutover. **No** se tocó producción.

## OWNER_CONFIRMED_BRAND_ASSET

El propietario aportó el logo corporativo real (familia `G_L_2024`, master claro `G_L_2024.005.png`).

- **FULL BRAND:** GEOTACTICS + símbolo circular/territorial + descriptor `Data / Warehouse - Mart`.
- **No** se refundó la marca. **No** se dibujó un logo CSS. **No** se reemplazó el símbolo por un punto coral. **No** se alteró geometría ni color del PNG.
- Wordmark HTML `GEOTACTICS.` + punto coral queda **SUPERSEDED** como representación primaria.
- H1 y arquitectura de contenido **sin cambios**.

## Master preservado

| Origen (intactos) | Copia de trabajo (no sobrescribir) |
|---|---|
| `G_L_2024/G_L_2024.002.png` … `.005.png` | `corporate-v2/src/assets/brand/master/` |
| `logo.png` (variante oscura de producción) | `corporate-v2/src/assets/brand/master/logo.png` |

`cmp` confirma identidad bit a bit de `G_L_2024.005.png` y `logo.png` vs masters copiados.

**SVG_OFFICIAL_PENDING** — no hay SVG oficial; alpha usa PNG recortado (crop, sin stretch, sin vectorización).

## Uso responsive de marca

| Variante | Archivo | Uso |
|---|---|---|
| FULL BRAND crop | `src/assets/brand/derived/geotactics-full-light.png` (1457×413) | Footer / About / contextos amplios — **no montado en UI 3.0** |
| HEADER compacto | `src/assets/brand/derived/geotactics-header.png` (1441×279) | Header: GEOTACTICS + símbolo; descriptor omitido **visualmente** por altura |

Alt del header: `GeoTactics`. Enlace → Home.

## Color símbolo vs UI

Muestreo del master: **#DA3B26**. Token `--gt-coral`: **#E84C3D**. El PNG **no** se recoloreó. Token `--gt-logo-symbol` documenta la diferencia.

## Hero

Desktop ~62/38 (grid `1.65fr / 1fr`): primaria (origen, H1, supporting, CTAs, ID-2017) + `TerritorialLayer` abstracta (GT/ORIGIN, Nueva Loja, coordenadas, TERRITORIO/DATA/OPERATION, geometría de nodo). Sin Leaflet, mockup ni cifras inventadas.  
Tablet: una columna + capa reducida. Mobile: H1 dominante; SVG oculto; nodo + coordenada.

## Grid

Opacidad de líneas ~6% (antes ~9%) y máscara desplazada a la derecha. Hero grid ~0.48 (antes 0.70). Intensidad local mayor en territorial layer. Reduced motion no elimina la retícula estática.

## Evidence

Jerarquía: microcódigo → concepto → ancla → explicación. Códigos EV-2017 / EV-PDOT / EV-CAP. Sin counters ni vanity metrics.

## Signals QA

- Build/preview: **0 noticias → no render** (confirmado: 0 matches `gt-signals` en `dist/index.html`).
- `astro dev`: fixture `DEV_ONLY_SIGNAL` visible; outline dashed de revisión. Coral medido `rgb(232, 76, 61)` = `#E84C3D`. Altura ~44px desktop. Sin marquee. Contador `01/01`. Reduced motion global via `tokens.css` / `base.css`.
- Fixture **no** es contenido real.

## Build / check (ejecutados en alpha.2)

- `npm run build`: **OK** (7 páginas). Warnings: glob `news` vacío; colección news vacía.
- `npm run check`: **0 errors**, 0 warnings de check, **23 hints** (`z` deprecated en `astro:content`).

## Métricas dist (post rebuild alpha.2)

| Asset | Tamaño |
|---|---|
| `dist/index.html` | 9.6 KB |
| CSS (`BaseLayout` + `index`) | ~6.9 KB + ~6.9 KB |
| Logo header PNG | ~33 KB |
| Favicon | ~29 KB |
| JS bundles | 0 (script menú inline) |
| `dist/` | ~148 KB |

## Capturas

`docs/PHASE_3/captures/alpha.2/`

- A: 1440 Signals DEV
- B: 1440 Signals ausente
- C: 393 Signals DEV
- D: 393 Signals ausente
- Extra: 1024, 768, 430, 360, Evidence 1440

## Bugs / notas visuales

- Toolbar de Astro Dev aparece en capturas DEV (no en preview).
- Outline dashed de Signals DEV es intencional (`gt-signals--dev`).
- En ≤1024 el nav pasa a hamburguesa; a 1024 la capa territorial baja de columna (legibilidad).
- H1 en screenshots se ve como small-caps óptico por el font stack del sistema (Open Sans **FONT_ASSET_PENDING**).

## Confirmación producción (alpha.2)

`index.html` raíz: 91 424 bytes, 8 ago 2026 — **sin cambios**. Sin cutover. SoT funcional intacto.

---

## Carry-overs 3.0 aplicados en 3.1.0-alpha.1

GATE 3.0: APPROVED WITH MINOR CARRY-OVERS. Detalle en `PHASE_3_1_IMPLEMENTATION_LOG.md`.

- Header logo 36px → 41px (mobile 28 → 32); header sigue ~65px.
- Contraste ligero de círculos / GT-NL / líneas en `TerritorialLayer`.
- Marcador `SIGUIENTE BLOQUE · QUÉ HACEMOS` retirado.
