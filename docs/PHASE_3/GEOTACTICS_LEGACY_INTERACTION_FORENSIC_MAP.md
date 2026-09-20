# GEOTACTICS — LEGACY INTERACTION FORENSIC MAP

**Fase:** 3.8 PRE-QA  
**Estado:** AUDITORÍA SOLAMENTE — sin implementación, sin rediseño, sin tocar `corporate-v2/` ni producción.  
**Fuentes primarias (verdad operativa):**

| Fuente | Rol | Fecha / naturaleza |
|---|---|---|
| `/index.html` (raíz del repo, 907 líneas, monolito) | **Sitio actual / producción** servido en geotactics.com.ec | HUD + Google Sheets + PapaParse + Leaflet |
| `/Index1.html` | Prototipo histórico (DB hardcoded) | 25 nov 2025 aprox.; misma metáfora HUD |
| Google Sheets (CSV publicados) | Datos runtime de producción | 4 pestañas: proyectos `gid=0`, noticias `621915959`, clientes `1180610857`, equipo `390294212` |
| `docs/GEOTACTICS_AUDIT_2026.md` | Auditoría previa (contexto, no SoT de 3.7) | Confirma misma arquitectura |
| `corporate-v2/` 3.7.0-beta.1 | **Solo para comparación** (secciones 12–16) | No es fuente de comportamiento legacy |

**Regla de evidencia:** si 3.7 y el HUD discrepan, gana el HUD (`index.html`). Index1 se cita cuando ilustra la mecánica original (PhotoFan, drag) y cuando diverge (orden de años, DB embebida).

**Taxonomía 2.0:** las 6 familias Corporate (01–06) **no se revierten**. Este mapa documenta la mecánica HUD para decidir KEEP / MODERNIZE / REINTERPRET / REMOVE / DO NOT MIGRATE.

---

## 1. PAGE ARCHITECTURE MAP

El sitio **no es un scroll vertical de landing**. En escritorio es un **mundo de dos escenas** (`#mundo-horizontal`) más **overlays fullscreen** y **HUD fijo**.

```
SITE (body overflow:hidden desktop)
│
├── #splash-screen                    z-index 99999  (móvil: flex; desktop: display none)
│
├── #lightbox                         z-index 3000   foto única fullscreen
│
├── #news-reader-panel                z-index 2000   LECTOR DE NOTICIAS (no de fichas)
│
├── .hud-bar.top-bar                  z-index 900    GEOTACTICS. | Nosotros | Operación y Proyectos
│                                      CTAs: INICIAR PROYECTO (mailto) | Dossier (PDF Wix 404)
│
├── .news-ticker-bar                  z-index 890    suelo: ÚLTIMAS NOTICIAS (click → news reader)
│
├── .footer-capsule                   z-index 900    © + sucursal + social (flotante centro-abajo)
│
├── .fab-container                    z-index 9999   WA / tel / mail / LinkedIn
│
├── #mundo-horizontal                 width: 600vw (residuo; solo 2 secciones de 100vw)
│   │   transform: translateX(-N * 100vw)   ← “cámara”
│   │
│   ├── #escena-home                  escena 0   HOME HUD
│   │   ├── .grupo-marca-izquierda    logo + badge “9 Años”
│   │   ├── .clients-bar              logos Sheet clientes
│   │   ├── #open-box-zone            DROP TARGET “LEER ARCHIVOS”   ← el “lector” de fichas
│   │   └── .ficha#f1…#f5             CATEGORY CARDS arrastrables
│   │
│   └── #dynamic-section              escena 1   MODO ARCHIVO / CRONOLOGÍA
│       └── .dynamic-container        grid 400px | 1fr
│           ├── .left-context         copy de categoría + ← Volver
│           └── #horizontal-feed      PROJECT FILES = hitos de timeline horizontal
│
├── #overlay-equipo.full-overlay      z-index 2000  slide-from-top  “CODE GEOTACTICS” MVV + equipo
│
├── #overlay-ubicacion.full-overlay   z-index 2000  MAPA “OPERACIONES & PROYECTOS”
│   └── #map-container                Leaflet 75vh
│
└── #drag-tip-message                 tip si se CLICA ficha sin arrastrar
```

### Distribución visual HOME (escritorio)

```
┌──────────────────────────────── HUD ────────────────────────────────┐
│ GEOTACTICS.     Nosotros    Operación y Proyectos     [INICIAR] [D] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [LOGO]              ┌─────────────────────┐         ┌─────┐ ┌─────┐│
│  9 AÑOS              │  LEER ARCHIVOS      │         │ f2  │ │     ││
│                      │  (zona drop 320×120)│    ┌────┤ GOB │ │ f4  ││
│                      └─────────────────────┘    │f1  └─────┘ │LEG  ││
│                                                 │TER         └─────┘│
│  [logos clientes]                               └────┐ ┌─────┐ ┌───┤
│                                                      │f3 REC │ │f5 ││
│                                                      └───────┘ │ESP││
│                                                                └───┘│
│                    [ footer capsule © ]              [FAB +]        │
├──────────────────────────────── ticker noticias ────────────────────┤
```

**No hay** hero de marketing, **no hay** página `/archivo`, **no hay** sección “Vista espacial” bajo el feed. El mapa es overlay de navegación, no escena 2.

### IDs / selectores / funciones de control

| Superficie | Selector / ID | Función |
|---|---|---|
| Cámara | `#mundo-horizontal` | `moverCamara(i)`, `volver()` |
| Drop zone | `#open-box-zone` | colisión en `closeDragElement` |
| Fichas categoría | `.ficha` `#f1`–`#f5` `data-target` | `hacerArrastrable` |
| Cronología | `#dynamic-section` `#horizontal-feed` | `renderCategory(catKey)` |
| Copy categoría | `#cat-num` `#cat-title` `#cat-desc` | `categoryDetails` hardcoded JS |
| Overlay mapa | `#overlay-ubicacion` | `toggleOverlay`, `initMap`, `saltarDesdeMapa` |
| Overlay equipo | `#overlay-equipo` | `toggleOverlay` |
| Noticias | `#news-reader-panel` | `abrirNoticia` / `cerrarNoticia` |
| Foto | `#lightbox` `#lightbox-img` | `openLightbox` / `closeLightbox` |

---

## 2. ARCHIVE ARCHITECTURE

El “archivo” **no es una ruta**. Es **escena 1** del mundo horizontal, activada **solo** cuando:

1. Escritorio: una `.ficha` se suelta **sobre** `#open-box-zone` (colisión AABB).
2. Móvil: `selectMobileCategory(cat)` → `body.section-active` + scroll a `#dynamic-section`.
3. Mapa: `saltarDesdeMapa(cat)` cierra overlay y llama `renderCategory` + `moverCamara(1)`.

```
ARCHIVE MODE  (#dynamic-section)
│
├── LEFT CONTEXT (fijo 400px, no es drop zone)
│   ├── .btn-volver → volver()  (reset cámara + posición fichas)
│   ├── #cat-num     "01 / CATEGORÍA"  (vacío: "SELECCIONA UNA CATEGORÍA")
│   ├── #cat-title   título familia HUD
│   └── #cat-desc    párrafo institucional hardcoded
│
└── RIGHT FEED  (#horizontal-feed.horizontal-scroll-area)
    overflow-x: auto   ← TIMELINE = FEED = LISTA DE PROJECT FILES
    cada hijo .project-column es UN PROYECTO y UN HITOS
```

**Lo que NO existe en el archivo HUD:**

- Selector de categorías persistente en la escena 1 (el selector **son las fichas de HOME**).
- Lector de expediente de proyecto (no hay panel que reciba un `.project-column`).
- Mapa embebido.
- Botón “Leer archivo” por card.
- Estado `selected` en un project-column.
- Drag de project-column.

Cambiar de categoría en escritorio = **volver a HOME y arrastrar otra ficha**. No hay chips en escena 1.

---

## 3. CATEGORY FLOW

### Qué es una CATEGORÍA (HUD)

Cinco **familias de oferta / campo de acción**, no productos, no casos, no años.

| data-target | UI ficha | categoryDetails.title | Color pin mapa |
|---|---|---|---|
| `territorial` | Inteligencia Territorial | 01 INTELIGENCIA TERRITORIAL | `#E84C3D` |
| `gobernanza` | Gobernanza Digital | 02 GOBERNANZA DIGITAL | `#3498db` |
| `recursos` | Gestión de Recursos | 03 GESTIÓN DE RECURSOS NATURALES | `#27ae60` |
| `legado` | Legado & Futuro | 04 LEGADO Y FUTURO | `#f39c12` |
| `especiales` | Proyectos Especiales | 05 PROYECTOS ESPECIALES | `#9b59b6` |

Copy de cada una: objeto JS **hardcoded** `categoryDetails` (no viene del Sheet).

Filtro de proyectos: `proyectosDB.filter(p => p.cat === catKey)` donde `cat` = `item.categoria` del CSV, lowercased.

### Flujo

```
USER ve 5 fichas en HOME
  ↓
NO hace click-to-open (click sin drag → showDragTip 2.5s)
  ↓
mousedown/touchstart → hacerArrastrable → elementDrag
  ↓
hover ficha → #open-box-zone.zona-hint
  ↓
colisión AABB con zona → zona-activa
  ↓
mouseup sobre zona → renderCategory(data-target) + moverCamara(1)
  ↓
LEFT CONTEXT se rellena + FEED pinta project-columns
```

Móvil: fichas y zona **ocultas** (`display:none`). Sustituto: `#mobile-category-nav` + `.cat-btn`.

---

## 4. PROJECT FILE FLOW

### Distinción de entidades (crítica)

| Nombre en UI / código | Entidad real | Selector |
|---|---|---|
| **Ficha** | CATEGORY CARD | `.ficha` |
| **LEER ARCHIVOS** | DROP TARGET de categoría | `#open-box-zone` |
| **Columna / cronología** | PROJECT FILE = un registro Sheet | `.project-column` |
| **Foto / abanico** | 3 `<img.p-img>` del proyecto | `.proj-images` |
| **Lector (noticias)** | artículo ticker | `#news-reader-panel` |
| **Ficha PDF** | link externo opcional | `.btn-tiny` `p.pdf` |

Una **ficha no es un proyecto**. Un **project-column no se arrastra**. El usuario **no “lee” el proyecto en un dock**: lo ve *in situ* en la columna.

### Qué muestra cada PROJECT FILE

Construido en `renderCategory` innerHTML:

1. `.proj-images` — PhotoFan (siempre 3 imgs)
2. `.timeline-divider` — nodo rojo sobre línea
3. `.proj-info`
   - `.p-year-visible` ← `anio`
   - `.p-title` ← `sistema` (nombre corto / producto-sistema)
   - `.p-desc` ← `descripcion`
   - `.p-meta` ← `cliente` + `ubicacion`
   - `.proj-actions` solo si hay `link_demo` o `link_pdf`

**Click en la card:** no hay handler. Solo:

- click foto → lightbox
- hover columna → fan-out CSS
- links demo/PDF → `_blank`

**No hay** “seleccionar ficha de proyecto”. El copy 3.7 *“Las fichas son los hitos”* describe el **project-column**, no la `.ficha`.

---

## 5. READER ARCHITECTURE

Hay **tres cosas** que 3.7 fusionó. En el HUD son distintas.

### A. El “lector” de la metáfora HUD = DROP ZONE (no panel)

```
         HOME escena 0
┌────────────────────────────────┐
│                                │
│     ┌──────────────────┐       │
│     │  [icono QR]      │  320×120px
│     │  LEER ARCHIVOS   │  absolute left:45% top:50%
│     │  glass + pulse   │  NO muestra contenido
│     └──────────────────┘       │
│                                │
└────────────────────────────────┘
```

- **Dónde:** centro de HOME, no de la cronología.
- **¿Fijo?** Sí, absolute en escena 0. Desaparece al panear a escena 1.
- **¿Reemplaza contenido?** No. Es un target. Al soltar, **la cámara se mueve**; la zona no se llena de texto.
- **Qué recibe por drag:** una `.ficha` (categoría). **Nunca** un proyecto.
- **Qué muestra:** el label estático “LEER ARCHIVOS”. Estados CSS: default / `.zona-hint` / `.zona-activa`.
- **Datos:** ninguno.
- **Cambio de selección:** no hay selección; hay colisión binaria.
- **Volver:** `volver()` panea a 0 y resetea `top/left` de fichas (no `right`, bug menor en prod).
- **Móvil:** **eliminado**. No hay drag.

### B. Left-context de escena 1 (parece un “reader” de categoría)

Panel 400px que **sí** muestra copy, pero es **contexto de categoría**, no expediente de proyecto. No recibe drag. No se cierra: se abandona con Volver.

### C. News reader (el único panel “lector” real)

```
                    ┌─────────────────────┐
                    │ SALA DE PRENSA   [x]│  450×100vh fixed right
                    │ fecha               │
                    │ titular             │
                    │ foto                │
                    │ contenido           │
                    └─────────────────────┘
```

Abre desde ticker. **No** está cableado a proyectos.

### ASCII — lo que el OWNER llamaba “lector” en la mecánica táctica

```
  FICHA CAT ──drag──► [ LEER ARCHIVOS ] ──success──► CÁMARA → TIMELINE DE ESA CAT
                         (scanner)
```

No:

```
  PROJECT CARD ──drag──► [ LECTOR DOCK ] ──► expediente
```

Eso es invención 3.7.

---

## 6. PHOTO FAN ARCHITECTURE

Implementación **real** (idéntica CSS en `index.html` y `Index1.html`).

### Origen de imágenes

| Prioridad | Fuente | Código |
|---|---|---|
| 1 | Sheet columnas `foto1`, `foto2`, `foto3` | `imgs: [item.foto1, item.foto2, item.foto3].filter(url válida)` |
| 2 | **Unsplash hardcoded** (siempre completa a 3) | 3 URLs fijas + `sig=${rnd}` anti-cache |

Comentario literal en producción:

> “Siempre habrán 3 imágenes para mantener tu diseño efecto abanico intacto”

Si el Sheet está vacío (caso frecuente), **el abanico es stock Unsplash**, no fotos de proyecto. Index1: `imgs: null` → mismo fallback.

**No** hay DB local de assets, **no** hay carpeta `/fotos` por proyecto en el HUD.

### DOM

```html
<div class="proj-images">
  <img class="p-img" onclick="openLightbox(this.src)">  <!-- n=1 -->
  <img class="p-img" onclick="openLightbox(this.src)">  <!-- n=2 -->
  <img class="p-img" onclick="openLightbox(this.src)">  <!-- n=3 -->
</div>
```

Cantidad: **siempre 3**. No 0, no 1, no 4.

### CSS (desktop)

| Selector | transform | z-index |
|---|---|---|
| `.p-img` | origin `bottom center`; size 90% × 280px; border white 4px | — |
| `:nth-child(1)` | `rotate(-5deg) translateX(-10px) scale(0.9)` | 1 |
| `:nth-child(2)` | `rotate(5deg) translateX(10px) scale(0.95)` | 2 |
| `:nth-child(3)` | `rotate(0) scale(1)` | 3 |
| hover col 1 | `rotate(-15deg) translateX(-40px)` | |
| hover col 2 | `rotate(15deg) translateX(40px)` | |
| hover col 3 | `translateY(-10px) scale(1.05)` + sombra mayor | |

Hover es **de `.project-column`**, no de cada foto. Fan-out grupal.

### Click / lightbox

- Click foto → `openLightbox(this.src)` → `#lightbox.activo`, img 90vw/90vh, fondo negro.
- Cerrar: click backdrop o ✕. **Sin** prev/next, **sin** galería, **sin** zoom pinch, **sin** teclado documentado.
- Lightbox **no** abre el left-context ni el news reader.
- Relación ficha (categoría): ninguna directa; las fotos viven en el project-column **después** de elegir categoría.
- Relación “lector de archivo”: ninguna.

### Móvil

Abanico recentrado (`translateX(-50%)` + rotaciones −8° / +8° / 0). Altura ~180px. Sin hover: el fan queda en pose base; el click sigue abriendo lightbox.

---

## 7. TIMELINE ARCHITECTURE

**La timeline no es un componente aparte.** Es el propio `#horizontal-feed`.

```
  [PhotoFan]     [PhotoFan]     [PhotoFan]
      │              │              │
   ───●──────────────●──────────────●────►  (línea CSS, no SVG)
    year           year           year
    sistema        sistema        sistema
```

- **Dónde:** escena 1, columna derecha. Escritorio: **horizontal**. Móvil: **vertical** (línea central `::before` + nodos).
- **Cada hito:** un registro de `proyectosDB` filtrado por categoría.
- **CARD = TIMELINE MILESTONE:** **SÍ**, si CARD = `.project-column`. **NO**, si CARD = `.ficha`.
- **Orden producción:** `year` **descendente** (`b.year - a.year`) → recientes a la izquierda. Index1 ordenaba **ascendente**.
- **Años:** campo `anio` del Sheet, texto visible, no agrupados por década.
- **Nodos:** `.timeline-divider::after` círculo coral; `.project-column::before` puente de 100px a la siguiente card.
- **Scroll:** overflow-x nativo del feed (no JS scroll-snap, no drag-to-scroll custom).
- **Al cambiar categoría:** `innerHTML = ''` y se reconstruye el feed. No hay morph entre timelines.
- **Relación mapa:** el popup dice “VER EN CRONOLOGÍA” y salta a **la categoría del pin**, no al hito concreto (no hay scrollIntoView del project-column).

---

## 8. MAP ARCHITECTURE

**Crítico.**

| Pregunta | Respuesta HUD |
|---|---|
| ¿Dónde aparece? | Overlay `#overlay-ubicacion`, nav **“Operación y Proyectos”** |
| ¿Sección independiente? | **Sí.** Fullscreen `translateY`, `body.overlay-open` **oculta** el mundo horizontal |
| ¿Sustituye una vista? | Cubre todo. Al cerrar, se **destruye** Leaflet (`map.remove()`) |
| ¿Pertenece al selector de categorías? | **No.** El mapa es entrada paralela desde HUD |
| ¿Qué registros? | Todos `proyectosDB` con `lat`+`lng`; capas por `p.cat`; + pin HQ Nueva Loja `0.091, -76.89` |
| ¿Filtro? | `L.control.layers` overlay por las 5 cats; leyenda duplicada bottom-right |
| ¿Click punto? | Popup: loc, year, **sistema**; botón `saltarDesdeMapa(cat)` |
| Mapa ↔ ficha categoría | El salto abre la **categoría** del pin, no “selecciona la ficha” en HOME |
| Mapa ↔ lector drop | Ninguna |
| Mapa ↔ timeline | Cierra overlay → `renderCategory(cat)` → cámara escena 1. **No** centra el proyecto clicado |
| ¿Dentro del archivo? | **No.** El archivo no contiene mapa |

Tiles: OSM, filtro CSS grayscale. No hay clustering.

### ¿3.7 introdujo redundancia ARCHIVE + VISTA ESPACIAL + LISTADO?

**Sí.** En HUD el mapa **no** es un bloque vertical bajo el archivo. Es un **modo de navegación global**. 3.7 colocó en `/archivo`:

1. chips de familia + rail horizontal + reader dock  
2. sección **Vista espacial**  
3. **Listado (alternativa al mapa)**

= tres superficies para el mismo conjunto de records, más `TerritorialMap` en Home (`CaseHomeStrip`) y `/casos`.

---

## 9. LEGACY DATA FLOW

### Sheet proyectos → objeto JS

```
CSV columnas (gid=0)
  categoria, sistema, cliente, descripcion, anio,
  lat, lng, ubicacion, foto1, foto2, foto3,
  link_demo, link_pdf
        │  filter: item.sistema truthy
        ▼
proyectosDB[]
  cat, sys, cliente, proy, year, lat, lng, loc, imgs[], demo, pdf
```

Filtro `esActivo` **no** se aplica a proyectos (sí a noticias y clientes). Equipo: todos los rows con `nombre`, orden por `orden`.

### LEGACY DATA → UI → INTERACTION

| Dato | Componente | Interacción |
|---|---|---|
| `categoryDetails` (hardcoded) | left-context + copy ficha | drop ficha / cat-btn |
| `categoria` Sheet | filtro feed + capa mapa | renderCategory / layers |
| `sistema` | título project-column + popup mapa | lectura; no click propio |
| `descripcion` | `.p-desc` | lectura |
| `anio` | año hito + popup | sort DESC |
| `cliente` | meta | lectura |
| `ubicacion` | meta + popup | lectura |
| `lat/lng` | marker Leaflet | popup → cronología de **cat** |
| `foto1–3` | PhotoFan o Unsplash | hover fan; click lightbox |
| `link_demo` | botón Ver Demo | nueva pestaña |
| `link_pdf` | botón Ficha PDF | nueva pestaña (el nombre “ficha” aquí = PDF, no card) |
| noticias `activo` | ticker | click → news reader |
| clientes `logo_url` | barra home | hover color |
| equipo `foto_url` cargo desc email | overlay Nosotros | hover destintado |

**No hay** campo STATUS, URL canónica de producto, ni kind CASE/PRODUCT. Todo es “proyecto en una categoría HUD”.

---

## 10. DESKTOP INTERACTION FLOW

```
USER
  ↓
[HOME HUD]  logo | 5 fichas | LEER ARCHIVOS | clientes | ticker | FAB
  │
  ├─ click ticker ──────────────► NEWS READER (panel derecho) ──x──► cierra
  ├─ Nosotros ──────────────────► OVERLAY EQUIPO (MVV + fotos)
  ├─ Operación y Proyectos ─────► OVERLAY MAPA
  │                                  ├─ toggle capas
  │                                  └─ VER EN CRONOLOGÍA → cierra mapa
  │                                       ↓
  │                                    ARCHIVE escena 1 (categoría del pin)
  │
  ├─ click ficha (sin mover) ───► tip “Arrastra la ficha hasta aquí”
  ├─ drag ficha fuera de zona ──► vuelve a soltar; no navega
  └─ drag ficha → LEER ARCHIVOS ► renderCategory + moverCamara(1)
                                      ↓
                                 ARCHIVE
                                      ├─ scroll horizontal hitos
                                      ├─ hover → PhotoFan abre
                                      ├─ click foto → LIGHTBOX (1 img)
                                      ├─ Demo / PDF si existen
                                      └─ ← Volver → HOME (fichas reset)
```

**Cambiar de proyecto:** scroll horizontal (mismo feed).  
**Cambiar de categoría:** Volver + otra ficha (no hay switcher en escena 1).  
**Volver al inicio:** `volver()`.

---

## 11. MOBILE INTERACTION FLOW

Breakpoint: `max-width: 1000px`. Mundo deja de ser cámara; se vuelve columna. Splash obligatorio.

```
USER
  ↓
SPLASH 1s
  ↓
HOME vertical: logo → clientes → “Nuestro Campo de Acción” (5 pills)
              → ticker móvil → footer → FAB
  │
  ├─ hamburger → Nosotros | Operación y Proyectos (overlays)
  └─ tap .cat-btn → body.section-active
                      HOME se oculta
                      #dynamic-section visible
                      renderCategory
                      scrollIntoView
                      timeline VERTICAL
                      PhotoFan compacto + lightbox
                      #btn-volver-final → HOME
```

Fichas, drop zone, tip, footer-capsule, ticker desktop: **off**.  
Al boot móvil se pre-renderiza `territorial` (feed oculto hasta elegir cat).

---

## 12. LEGACY vs 3.7 MATRIX

| FEATURE | LEGACY BEHAVIOR | 3.7 BEHAVIOR | VEREDICTO |
|---|---|---|---|
| Category selector | 5 fichas físicas en HOME; drop a zona; móvil pills | Chips persistentes 6 familias + “Todas” **dentro de /archivo** | **REINTERPRET** útil (chips) / **MISINTERPRETATION** (ficha ≠ chip de proyecto) |
| “Ficha” | Category card 130×100 coral | Copy dice que las fichas **son hitos**; cards del rail = records | **MISINTERPRETATION** de nomenclatura |
| LEER ARCHIVOS | Drop target vacío que dispara cámara | Texto “ARRASTRA UNA FICHA AL LECTOR” + botón “Leer archivo” + dock | **MISINTERPRETATION** |
| Drag | Solo `.ficha` categoría | `draggable` en **project cards** hacia reader | **MISINTERPRETATION** |
| Reader dock | No existe para proyectos | Aside expediente (problema/intervención/tech) | **IMPROVEMENT** de contenido, **no** es mecánica HUD |
| News reader | Panel 450px sala de prensa | `/noticias` páginas | **IMPROVEMENT** (sitio multi-página) |
| Left context | Copy categoría al entrar al archivo | Copy + hints + “Volver al archivo” (enlace a sí mismo) | **REGRESSION** hints; **MISINTERPRETATION** back |
| Project cards | Hitos in-situ; sin selected | Selected + open reader + link detalle | **IMPROVEMENT** (CASE≠PRODUCT) con **sobrecarga** |
| PhotoFan | Siempre 3 imgs; Unsplash pad; hover CSS | `assets[0..3]`; vacío = fallback geométrico; lightbox con prev/next | **IMPROVEMENT** (no stock) + **REGRESSION** visual si `assets[]` vacío |
| Lightbox | 1 imagen, click overlay cierra | dialog + nav | **IMPROVEMENT** |
| Timeline | = el feed filtrado por cat | Rail de **todos** los records + filtro familia; **más** EvolutionTimeline en Home y /tecnologia | **REGRESSION**/redundancia de timelines |
| Horizontal scroll | Única vía de leer proyectos desktop | Rail sí; página /archivo también scrollea vertical al mapa | **MISINTERPRETATION** de “una escena” |
| Map | Overlay nav, no hijo del archivo | Bloque “Vista espacial” + listado + TerritorialMap Home/Casos | **REDUNDANCY** / **MISINTERPRETATION** |
| Map → item | Salta a **categoría**, no al hito | “Abrir expediente” por slug | **IMPROVEMENT** de precisión; distinta metáfora |
| Instructions | Tip transitorio; left-context vacío hasta drop | Hints permanentes en aside | **REGRESSION** UX (ruido) |
| Home | HUD táctico 1 pantalla | Landing corporativa vertical (hero, caps, productos, casos, teaser archivo, evolución) | **KEEP** 2.0 aesthetic; HUD **DO NOT MIGRATE** visual |
| Nav | 2 overlays + mailto | IA multi-ruta /archivo /productos /casos /nosotros /tecnologia | **IMPROVEMENT** estructural |
| Data | Sheet live | SoT TS + 6 familias | **KEEP** SoT; **DO NOT MIGRATE** cats HUD |
| “Ficha PDF” | Link opcional | No existe ese botón en rail | neutro |

---

## 13. REDUNDANCIES IN 3.7

Auditoría conceptual de rutas 3.7 (sin corregir).

### Timeline duplicada

- Home `EvolutionTimeline` compact “Evolución”
- `/tecnologia` `EvolutionTimeline` full “Timeline”
- `/archivo` rail de records como cronología operativa

Tres “líneas de tiempo” con ontologías distintas (años de empresa vs expedientes).

### Trayectoria duplicada

- IdentityBridge / MethodHomeStrip / tecnologia copy GOST
- Archive teaser “entrar al archivo”
- Nosotros historia

### Mapa duplicado

- Home `CaseHomeStrip` → TerritorialMap “Huella territorial”
- `/casos` TerritorialMap “Territorio”
- `/archivo` Vista espacial + listado

### Cards que repiten catálogo

- Home ProductShowcase + CaseHomeStrip
- `/productos` + `/casos`
- `/archivo` rail (mismos records LIVE)
- ArchiveTeaser

### Textos instructivos innecesarios (en /archivo)

- “Selecciona una categoría. Las fichas son los hitos…”
- “SELECCIONA UNA CATEGORÍA”
- “ARRASTRA UNA FICHA AL LECTOR — o usa Leer archivo”
- “Listado (alternativa al mapa)”

El HUD **escondía** las instrucciones hasta el error (click sin drag). 3.7 las **imprime** como contenido.

### Botones redundantes

- “Leer archivo” (dock) **y** “Ver caso/producto” **y** “Abrir expediente completo”
- Volver al archivo apuntando a `/archivo` estando ya ahí

### Navegación duplicada

- Nav global Archivo + teaser Home + chips internos
- Mapa como sección **y** como página de casos

### Home vs Archivo

Home ya cuenta capacidades, productos, casos, mapa y evolución. `/archivo` vuelve a contar el mismo grafo con otra UI. Sin la mecánica HUD (una cámara, un drop), el archivo se siente **tercer catálogo**.

---

## 14. MISINTERPRETATIONS IN 3.7

1. **Ficha = hito / project file.** En código, ficha = categoría. El hito es `.project-column`.
2. **LEER ARCHIVOS = lector de expediente.** Es un **escáner / drop target**. No renderiza el archivo; **cambia de escena**.
3. **El usuario arrastra proyectos al lector.** Arrastra **categorías** a la zona.
4. **El mapa vive dentro del archivo.** Vive en **nav overlay** “Operación y Proyectos”.
5. **ARCHIVE + VISTA ESPACIAL + LISTADO** como stack vertical = HUD de tres modos. HUD tenía **dos escenas + overlays**, nunca tres bloques.
6. **Hints permanentes** como identidad táctica. El HUD era **opaco a propósito**; el tip era fallback.
7. **PhotoFan como galería de assets reales.** El HUD **forzaba 3 fotos** con Unsplash; el fan es un **gesto gráfico**, no un CMS de media.
8. **Selector de categoría dentro del feed.** El selector **es HOME**. El archivo asume categoría ya elegida.
9. **“Volver al archivo”.** El gesto real es **volver al HOME HUD** (reset de fichas).
10. **Un record = una ficha leíble en dock.** El HUD muestra el proyecto **completo en la columna**; no hay segundo nivel salvo lightbox y PDF/demo.

Lo que 3.7 **sí** entendió bien (no es malinterpretación):

- PhotoFan CSS (rotaciones) como firma visual.
- Timeline horizontal = lista de hitos.
- Mapa Leaflet + salto a cronología (aunque mal embebido).
- Left rail de contexto de categoría.
- CASE ≠ PRODUCT (eso es **mejora 2.0**, no rasgo HUD).

---

## 15. KEEP / MODERNIZE / REMOVE MATRIX

Mecánica HUD → Corporate 2.0 (estética 2.0 intacta; taxonomía 6 familias).

| Elemento legacy | Clasificación | Notas para 3.8 (no implementar ahora) |
|---|---|---|
| Mundo 2 escenas / cámara 100vw | KEEP + MODERNIZE | Un “modo archivo” a pantalla, no landing extra |
| Fichas = categorías HUD 5 | DO NOT MIGRATE (taxonomía) / REINTERPRET (gesto) | 6 familias 2.0 como **entrada**, no como cards coral |
| Drag categoría → drop zone | KEEP + MODERNIZE (desktop) | Gesto distintivo; no arrastrar expedientes |
| Click ficha → tip | KEEP | No abrir al click |
| Drop zone “LEER ARCHIVOS” | KEEP + MODERNIZE | Como umbral de escena, **no** como dock de texto |
| Left-context categoría | KEEP | Un copy por familia 2.0; sin hints apilados |
| Project-column = hito | KEEP | CARD (expediente) = milestone |
| PhotoFan 3 + hover CSS | KEEP + MODERNIZE | Firma; **no** Unsplash; pad geométrico o 1–3 fotos reales |
| Lightbox simple | KEEP + MODERNIZE | Prev/next 3.7 es mejora aceptable |
| Timeline = el feed | KEEP | No segundo componente “Evolución” en la misma vista |
| Overlay mapa desde nav | KEEP + MODERNIZE | Un mapa del sitio, no tres |
| Mapa → categoría (no hito) | REINTERPRET | 3.7 slug-jump es mejor; no perder overlay-as-mode |
| News ticker + news reader | REINTERPRET | Ya hay /noticias; no clonar panel HUD |
| Overlay equipo MVV | REMOVE del HUD / ya en /nosotros | |
| Splash móvil | REMOVE | |
| FAB | REMOVE o mínimo | 2.0 tiene /conversar |
| Dossier Wix 404 | REMOVE | |
| Sheet live PapaParse | DO NOT MIGRATE | SoT 2.0 |
| Cats Territorial/Gobernanza/… | DO NOT MIGRATE | |
| Instructions permanentes 3.7 | REMOVE | |
| Reader dock de expediente | REINTERPRET / opcional | Útil para profundidad; **no** sustituye el drop de categoría |
| Listado bajo mapa en archivo | REMOVE | |
| EvolutionTimeline ×2 más rail | REMOVE duplicados; un dueño | |
| TerritorialMap × Home+Casos+Archivo | REMOVE duplicados; un dueño | |
| Botón Leer archivo en cada card | REMOVE si el drop es de categoría | Detalle = ruta producto/caso |
| Aesthetic HUD coral/grid | DO NOT MIGRATE visual | Corporate 2.0 se queda |

**Qué hizo distintivo al legacy (para trasladar, no clonar):**

1. **Metáfora táctica de archivos:** categorías como objetos físicos; leer = cruzar un umbral.
2. **Una cámara, no un CMS de páginas** para el portafolio.
3. **Hito = columna con abanico de fotos**, no card de catálogo.
4. **Mapa como operación**, no como widget de sección.
5. **Opacidad:** poco texto de ayuda; el gesto enseña.

---

## 16. RECOMMENDED 3.8 INFORMATION ARCHITECTURE

**NO IMPLEMENTADO.** Propuesta para aprobación OWNER.

Principio: Corporate 2.0 conserva rutas y estética. El Exploration System deja de ser **tercer catálogo + mapa + dock + tutorial** y recupera **un umbral + una cronología + un mapa-modo**.

```
CORPORATE 2.0
│
├── HOME (sin HUD visual)
│   ├── identidad / capacidades 01–06
│   ├── evidencia breve
│   └── UN umbral “Archivo” (gesto o CTA) → /archivo
│       (no mapa, no timeline de empresa, no segundo catálogo de productos)
│
├── /archivo  = ÚNICA escena de exploración
│   ├── ENTRADA (equivalente escena 0, estética 2.0)
│   │   └── 6 FAMILIAS como objetos seleccionables (drag desktop / tap móvil)
│   │       drop/confirm → entra a CRONOLOGÍA de esa familia
│   │       (sin “Todas” por defecto; o “Todas” como excepción explícita)
│   │
│   └── CRONOLOGÍA (equivalente escena 1)
│       ├── contexto familia (code + título + 1 párrafo)
│       ├── rail horizontal = hitos (records de esa familia)
│       ├── PhotoFan 1–3 reales, hover fan, lightbox
│       └── detalle: navegar a /productos/* o /casos/*  (no dock obligatorio)
│
├── MAPA = un solo modo del sitio
│   └── overlay o /archivo?map=1 o nav “Territorio”
│       no repetir en Home ni /casos
│       pin → el HITOS (scroll/highlight), no solo la familia
│
├── /productos  catálogo de oferta (no cronología)
├── /casos      casos (no mapa duplicado)
├── /tecnologia método GOST (timeline de empresa SOLO aquí, si se conserva)
├── /nosotros   MVV + founders
└── /noticias   ticker conceptual ya cubierto
```

**Reader dock 3.7:** no es legado. Si se conserva, que sea **preview opcional**, no el destino del drag. El drag (si se recupera) es **familia → umbral**.

**Criterio de éxito 3.8:** un usuario que conoció geotactics.com.ec reconoce el *gesto* (elegir familia, cruzar, recorrer hitos con fotos en abanico, abrir mapa como capa). No reconoce Wix, coral, Unsplash, ni las 5 categorías HUD.

---

## Inventario de archivos locales relacionados

| Path | Uso |
|---|---|
| `/index.html` | Producción HUD completa (CSS+HTML+JS) |
| `/Index1.html` | Prototipo hardcoded `proyectosDB` / `equipoDB` |
| `logo.png` `favicon.png` | Assets HUD |
| Google Sheets CSV (4 URLs en JS) | Runtime |
| Leaflet 1.9.4 CDN + PapaParse 5.4.1 CDN | Runtime |
| Remix Icon 3.5 + Open Sans | HUD |
| `corporate-v2/src/components/ArchiveExplorer.astro` | 3.7 (comparación) |
| `corporate-v2/src/scripts/archive-explorer.ts` | 3.7 |
| `docs/GEOTACTICS_AUDIT_2026.md` | Auditoría previa |

**STOP.** Sin commits, sin cambios de código, sin 3.8 de implementación hasta aprobación OWNER.
