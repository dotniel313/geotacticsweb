# PHASE 3.2.0-alpha.1 — Product System / Productos

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**No** se inicia Fase 3.3. **No** cutover. **No** se tocó producción.

## Objetivo

Bloque Home **Productos** (grupos A/B/C) + página real `/productos` + colección de contenido + `ProductCard` / `ProductShowcase` / `ProductStatus` / `ProductVisualFallback`. Responde: ¿qué ha construido y está construyendo GeoTactics? No es capacidades, no es casos, no es GOST.

## Versión

`3.2.0-alpha.1` (`package.json`, `site.version`, README).

## Productos incluidos (13, SoT)

| id | Nombre | Grupo | Estado UI | Home | URL |
|---|---|---|---|---|---|
| P-DS | DataSucumbíos | A operación | En operación | sí | live |
| P-OM | OrangeMap | A operación | En operación | sí | live |
| P-EX | ExploraSucumbíos | A operación | En operación | sí | live |
| P-GU | GUANTA | B nueva gen. | En desarrollo | sí | conflict — no enlace |
| P-RA | RANTYI | B | Prelanzamiento | sí | none |
| P-FX | Fixis | B | Prelanzamiento | sí | review — no enlace |
| P-MR | MadaRadio | B | En desarrollo | sí | none; año CONFLICT omitido |
| P-OB | Observatorio GADMLA | B | Prelanzamiento | sí | live no usado como “Abrir producto” |
| P-SIGDR | SIGDR | C trayectoria | Trayectoria · 2017 | sí | none |
| P-SIGC | SIGC | C | Trayectoria · 2018 | sí | none; GOST no afirmada |
| P-YAKU | YAKU | C | Trayectoria · ~2019 | sí | review — no demo |
| P-OT | O/T | C | Trayectoria · 2023 | sí | none |
| P-TS | Termómetro Social | catálogo | Desarrollado · 2025 | no | none |

## Productos / ítems excluidos

- **CAPTURE** — componente, no producto. Nota en `/productos`. Sin `/productos/capture`.
- GOST — metodología.
- PDOT — caso.
- SIGMD / Predicción — I+D+i, no catálogo 3.2.
- Demos GUANTA / MadaRadio — `DO_NOT_USE`.

## Estados usados (SoT)

En operación · En desarrollo · Prelanzamiento · Trayectoria · Desarrollado.

No se usaron: beta, enterprise, production-ready, market leader, histórico-gris “legacy”.

## Assets

Inventario en `corporate-v2/src/assets/products/README.md`.

| Clasificación | Hallazgo 3.2 |
|---|---|
| APPROVED (screenshot de producto) | **ninguno** |
| NEEDS_REVIEW | material Wix histórico **no copiado** |
| MISSING | UI de los 13 productos |
| DO_NOT_USE | Unsplash, stock, AI fake UI, demo GUANTA, logo como “captura de producto” |

Todas las cards usan **ProductVisualFallback** (retícula, nodos, PRODUCT-ID, estado). Distinto de `CapabilityVisual` (icono 72×48).

`asset` + `assetStatus: approved` quedan listos para una imagen real posterior. `gallery[]` / `heroAsset` **no** se añadieron al schema; se documentan para ProductDetail.

## Estructura A/B/C

- **A** — tres columnas de peso comparable; visual 16:9; no iframe; no Datawheel.
- **B** — más compacto (16:8); estado visible; 3 columnas desktop / 2 tablet / 1 móvil.
- **C** — tratamiento archivo (borde café, fondo ligeramente documental, año en `ProductStatus`); 4 columnas desktop.

Home: 12 cards. Termómetro solo en `/productos`.

## /productos

Deja de ser `DevShell`. H1 único «Productos». Intro + A + B + C + Otros (Termómetro) + nota CAPTURE + CTA Conversar + colofón territorial. Anclas `/productos#slug`. Sin ProductDetail. Meta `index, follow`; `robots.txt` sigue `Disallow: /`.

## Componentes

- `ProductShowcase.astro`
- `ProductCard.astro`
- `ProductStatus.astro`
- `ProductVisualFallback.astro`
- `src/lib/products.ts`
- colección `src/content/products/*.md` (13)

## Responsive

Tablet 721–1024: contenedor 94vw (sin cambio de tokens 3.1.1). Móvil ≤720: una columna; tipo visible sin hover; CTA ≥44px; padding de card no pega el CTA al borde físico (gutter `--gt-gutter-x`).

No se miniaturizó el layout desktop.

## Accesibilidad

Jerarquía Home: h1 Hero → h2 Productos → h3 nombres. `/productos`: h1 → h2 grupos → h3 nombres. `ProductStatus` con texto, no solo color. Fallback `aria-hidden`. Focus-visible global. Hover no obligatorio. `aria-current` en nav Productos.

## SEO

- `/productos`: title `Productos | GeoTactics`; description del catálogo; canonical; H1 único; meta index.
- Home: sigue `noindex, nofollow`.
- Sin JSON-LD Product (datos incompletos / sin ficha).
- Staging bloqueado por `robots.txt`.

## Tests

- `npm run build`: OK, 7 páginas. Warning `news` vacío (esperado).
- `npm run check`: 0 errors, 0 warnings, **0 hints**.
- HTML: Home cards → `/productos#slug`; catálogo EN OPERACIÓN → URL live (nueva pestaña); resto → `/conversar`; sin `/productos/capture`.

## Métricas (3.1.1 → 3.2.0-alpha.1)

| | 3.1.1 | 3.2.0-alpha.1 |
|---|---|---|
| `dist/` archivos | — | 13 |
| Home HTML | ~17 KB | **61 KB** (12 cards + SVG fallback) |
| `/productos` HTML | shell ~4.7 KB | **55 KB** |
| CSS Home (`index.*.css`) | ~11 KB | **11 KB** |
| CSS ProductShowcase | — | **7.8 KB** |
| CSS BaseLayout | ~7.4 KB | **7.4 KB** |
| JS bundles | 0 | **0** |
| Logo PNG | ~33 KB | ~33 KB |

Sin librerías nuevas. Sin carousel. Sin JS de interacción.

No se ejecutó Lighthouse.

## Bugs

- Captura “asset real vs fallback” **no honestamente posible**: no hay screenshot de producto APPROVED en el repo. No se usó el logo como sustituto.

## Deuda

- FONT_ASSET_PENDING, OG_IMAGE_PENDING, SVG_OFFICIAL_PENDING
- Screenshots de producto APPROVED
- News vacía
- Shells: casos, tecnología, nosotros
- Footer global (solo colofón en `/productos`)
- Home noindex; `robots.txt` Disallow vs meta index de `/que-hacemos` y `/productos`
- ProductDetail / `gallery[]` diferidos
- Observatorio: URL live no se ofrece como “Abrir producto” mientras el estado es prelanzamiento

## Capturas

`docs/PHASE_3/captures/alpha.3.2/`

- `home-1440-productos.png` — grupo A, tres columnas de peso comparable
- `home-768-productos.png` — tablet (viewport medido 820; letterboxing del canvas del IDE a la derecha, igual que 3.1.1)
- `home-393-productos.png` — una columna; CTA visible
- `productos-1440.png` / `productos-768.png` / `productos-393.png`
- Par asset real vs fallback: **no generado** (ningún screenshot APPROVED)

## Producción

`index.html` raíz: **91 424 bytes**, 8 ago 2026 — **intacta**.

## Changelog

- Colección `products` + 13 MD SoT
- Home: ProductShowcase A/B/C después de Qué hacemos
- `/productos` página real + Termómetro + nota CAPTURE
- Fallback geométrico GeoTactics (no CapabilityVisual)
- Versión 3.2.0-alpha.1
- Gate: **AWAITING_OWNER_VISUAL_APPROVAL**
