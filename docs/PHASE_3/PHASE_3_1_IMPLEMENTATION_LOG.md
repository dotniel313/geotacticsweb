# PHASE 3.1.0-alpha.1 — Capabilities / Qué hacemos

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**No** se inicia Fase 3.2. **No** cutover. **No** se tocó producción.

## Objetivo

Bloque Home **Qué hacemos** + página real `/que-hacemos`. Responde: ¿qué capacidades tiene GeoTactics? No es catálogo de productos, casos, GOST ni newsroom.

## Carry-overs 3.0

| Ítem | Hecho |
|---|---|
| A Logo header +10–15% | 36px → 41px; móvil 28 → 32. Header medido **65px** (sin banner). Aspect ratio PNG intacto. |
| B Hero territorial | Opacidad de círculos, GT-NL y líneas principales subida de forma ligera. Tamaño SVG sin cambio agresivo. |
| C Marcador | Retirado `SIGUIENTE BLOQUE · QUÉ HACEMOS`. |

Hero copy, Evidence y Signals **sin** otros cambios.

## Nombres de capacidades (congelados 3.1)

SoT/IA 1.6 lista trayectoria (territorio, GovTech, sistemas operacionales, plataformas de mercado, móvil…). Experience Spec 2.2 agrupaba de otro modo (sistemas-gestión / datos-BI-GIS / apps de campo / plataformas-geo). **Esta fase usa los cinco nombres del brief 3.1**, evidenciado en IA §1.1. No se copian las 5 fichas antiguas de producción.

## Contenido creado

`src/content/capabilities/*.md` (5):

| id | slug | title |
|---|---|---|
| CAP-01 | inteligencia-territorial | Inteligencia territorial |
| CAP-02 | govtech | GovTech |
| CAP-03 | sistemas-operacionales | Sistemas operacionales |
| CAP-04 | plataformas-de-mercado | Plataformas de mercado |
| CAP-05 | aplicaciones-moviles | Aplicaciones móviles |

Schema: id, slug, order, title, shortDescription, body (MD), microcode, status, seoTitle, seoDescription, cue, visual.

## Componentes

- `CapabilityGrid.astro` — intro editorial + mosaico
- `CapabilityCard.astro` — enlace a `/que-hacemos#slug`; “Explorar capacidad →” visible sin hover
- `CapabilityVisual.astro` — SVG propio (nodo, flujo, secuencia, dos puntos, dispositivo); `aria-hidden`

## Visual

Desktop: mosaico asimétrico (intel dominante por composición, no ranking). Tablet ≤1024: intel full-width + 2×2. Móvil ≤720: secuencia 1 col, separadores, targets ≥44px. Sin cards SaaS iguales, sin sombra, sin iconos stock.

## /que-hacemos

Deja de ser shell. H1 único «Qué hacemos». Cinco secciones con `id` = slug, `scroll-margin-top` + `html { scroll-padding-top }`. CTA Conversar. Meta `index, follow`; title `Qué hacemos | GeoTactics`; canonical. Home permanece `noindex`. `robots.txt` sigue `Disallow: /` (alpha aislada).

## Accesibilidad

Jerarquía Home: h1 Hero → h2 bloque → h3 cards. Página: h1 → h2 por capacidad. Focus-visible global. Hover no obligatorio. Reduced-motion vía tokens. Micrográficos `aria-hidden`. Nav `aria-current` en `/que-hacemos`.

## Tests ejecutados

- `npm run build`: OK, 7 páginas. Warning glob `news` vacío.
- `npm run check`: 0 errors, 0 warnings, **35 hints** (`z` deprecated).
- Enlaces en HTML: Home cards → `#slug`; header → `/que-hacemos`; CTA → `/conversar`.
- Preview: overflow 0 a 1440 y 393. Ancla `/que-hacemos#inteligencia-territorial` resuelve.

## Métricas (alpha.2 → 3.1.0-alpha.1)

| | alpha.2 | 3.1.0-alpha.1 |
|---|---|---|
| `dist/` | ~148 KB | ~172 KB |
| Home HTML | 9.6 KB | 17 KB |
| CSS Home (`index`) | ~6.9 KB | ~11 KB |
| CSS BaseLayout | ~6.9 KB | ~6.9 KB |
| Logo PNG | ~33 KB | ~33 KB |
| JS bundles | 0 | 0 |

Delta principalmente HTML de 5 cards + CSS del mosaico. Sin librerías nuevas.

## Bugs

- Click automatizado del browser tool no siguió el `<a>` de la card (la URL en HTML es correcta; navegación directa al hash sí funciona).
- En 393 el CTA «Conversar» del header queda justificado junto al logo; sigue ≥44px.

## Deuda

- FONT_ASSET_PENDING, OG_IMAGE_PENDING, SVG_OFFICIAL_PENDING
- Hints Zod `z` deprecated
- News vacía (Signals productivo oculto)
- Shells: productos, casos, tecnología, nosotros
- Footer mínimo aún no existe
- Home noindex hasta cutover; `robots.txt` Disallow global vs meta index de `/que-hacemos`

## Capturas

`docs/PHASE_3/captures/alpha.3.1/`

- Home 1440 hero + capabilities
- Home 768 tablet mosaic
- Home 393 secuencia
- `/que-hacemos` 1440 y 393

## Producción

`index.html` raíz: 91 424 bytes, 8 ago 2026 — **intacta**.

---

# PHASE 3.1.1-alpha.1 — Visual polish (Gate 3.1)

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_VISUAL_APPROVAL**  
**No** se inicia 3.2. **No** Productos. **No** cutover.

## Cambios

- Tablet 721–1024: contenedores **94vw** (medido 94% a 768 y 820). CapabilityGrid 100% de ese ancho. Intel full-width + 2×2. Márgenes laterales vía `--gt-gutter-x`. Párrafos max ~46rem (no full-bleed).
- Header ≤720: **LOGO | MENU**. Conversar solo en `MobileNavigation` (44px). Desktop: LOGO | NAV | CONVERSAR.
- Tokens móviles: `--gt-space-8/10/12` reducidos (1.75 / 2.25 / 2.75rem). Aplica Home capabilities y `/que-hacemos` (intro→CAP-01, entre capacidades).
- Copy Home: se retira “; no es un catálogo.”
- Copy interior: frases meta reescritas orientadas al cliente (sin claims nuevos).
- Desktop 1440: Hero, mosaico, Evidence, paleta, logo — sin rediseño.

## Robots / index

**Contradicción alpha (mantenida):** `robots.txt` `Disallow: /` vs `/que-hacemos` meta `index, follow`. El crawler respeta robots; **no hay indexación pública**.

**PRE-CUTOVER:** DEV/STAGING bloqueado; PRODUCTION = robots + canonical + meta coherentes. No cutover.

## Zod

Corrección mecánica: `import { z } from 'astro/zod'` (Astro 8 depreca `z` desde `astro:content`). Sin dependencia nueva. `npm run check`: **0 hints**.

## Tests

`npm run build` OK. `npm run check`: 0 errors, 0 warnings, 0 hints. Overflow 0 a 768/820/393/360. Header CTA `display:none` a 360/393.

## Métricas dist

| | 3.1.0-alpha.1 | 3.1.1-alpha.1 |
|---|---|---|
| `dist/` | ~172 KB | ~172 KB |
| Home HTML | 17 KB | 17 KB |
| CSS BaseLayout | 6.9 KB | 7.4 KB |
| CSS Home | 11 KB | 11 KB |
| JS bundles | 0 | 0 |

## Capturas

`docs/PHASE_3/captures/alpha.3.1.1/` — Home 1440 / 768 / 393; Qué hacemos 1440 / 768 / 393. Nota: el visor de captura puede mostrar canvas más ancho que el viewport emulado; el layout medido a 768 es 94% (722/768).

## Producción

`index.html` raíz 91 424 B, 8 ago 2026 — **intacta**.

