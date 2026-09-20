# GeoTactics Corporate Web 2.0 — Auditoría técnica y arquitectura de información

**Fase 1** · 18 de septiembre de 2026  
**Alcance:** repositorio `geotactics_web` y sitio publicado en https://www.geotactics.com.ec/  
**Regla de esta fase:** diagnóstico únicamente. No se modificó el sitio.

---

## 1. Resumen ejecutivo

GeoTactics es una empresa ecuatoriana de desarrollo tecnológico, con sede en Nueva Loja (Sucumbíos). El sitio actual **no es una data platform**: es una **web corporativa experimental de una sola página** que intenta contar quiénes son, qué hacen y dónde han operado.

El repositorio **no es un proyecto web moderno**. Es un conjunto de **cinco HTML monolíticos** (más un ZIP de respaldo y assets sueltos), todos variaciones del mismo concepto visual. No hay `package.json`, no hay CSS/JS separados, no hay rutas, no hay CMS propio, no hay tests, no hay Git en este directorio.

La **versión principal en producción** es `index.html` (agosto 2026). El servidor Apache de geotactics.com.ec sirve ese archivo (último `Last-Modified`: 9 agosto 2026). El contenido vivo (proyectos, noticias, clientes, equipo) **no vive en el código**: se descarga en el navegador desde **Google Sheets publicados como CSV**, parseados con PapaParse.

El problema de fondo no es “falta de diseño”. Es de **modelo de negocio mal representado**:

- La home comunica **categorías de proyectos** (fichas arrastrables), no **empresa + capacidades + productos**.
- **DataSucumbíos** aparece como un renglón más en el CSV de proyectos (`gobernanza`), no como producto.
- No existe sección de **tecnología desarrollada**, **productos** ni **casos de éxito** diferenciados.
- El CTA principal es un `mailto:`. No hay formulario ni proceso comercial.
- El lenguaje visual (HUD, “leer archivos”, “cuartel general”, overlay “CODE GEOTACTICS”) es **identidad propia**, valiosa, pero la interacción de escritorio (arrastrar fichas a una zona) **oculta el contenido** a quien no entiende el juego.

**Conclusión:** hay que modernizar geotactics.com.ec como **web corporativa tecnológica premium**, reutilizando la identidad y el inventario de proyectos, **sin convertirla en DataSucumbíos ni en una copia de Datawheel**.

---

## 2. Arquitectura actual

```
Visitante
    │
    ▼
Apache (geotactics.com.ec)
    └── index.html  (HTML + CSS + JS en un solo archivo ~91 KB / 906 líneas)
            │
            ├── CDN: Google Fonts (Open Sans)
            ├── CDN: Remix Icon 3.5.0
            ├── CDN: Leaflet 1.9.4 + tiles OpenStreetMap
            ├── CDN: PapaParse 5.4.1
            │
            └── Google Sheets (publicado CSV)
                    ├── gid=0           Proyectos
                    ├── gid=621915959   Noticias
                    ├── gid=1180610857  Clientes
                    └── gid=390294212   Equipo
```

**Patrón de UI:** SPA falsa de dos “escenas” horizontales (`#mundo-horizontal` de `600vw`) + overlays a pantalla completa.

| Superficie | Qué es | Cómo se abre |
|---|---|---|
| Home (`#escena-home`) | Logo, aliados, 5 fichas, zona “LEER ARCHIVOS” | Carga inicial |
| Timeline (`#dynamic-section`) | Proyectos de una categoría | Escritorio: drag & drop. Móvil: botones |
| Overlay Nosotros (`#overlay-equipo`) | Misión / visión / valores + equipo | Nav “Nosotros” |
| Overlay mapa (`#overlay-ubicacion`) | Leaflet de operaciones | Nav “Operación y Proyectos” |
| Panel noticias | Lector lateral “Sala de prensa” | Clic en ticker |
| Lightbox | Foto a pantalla completa | Clic en imagen de proyecto |
| FAB | WhatsApp / teléfono / email / LinkedIn | Botón + |

**No hay:** router, páginas, sitemap, robots.txt, PWA, backend, autenticación, formulario, búsqueda, blog, catálogo de productos.

**Hosting:** Apache estático. El sitio vive o muere con un único HTML y cuatro URLs públicas de Google.

---

## 3. Inventario de archivos

### 3.1 Árbol real del repositorio

```
geotactics_web/
├── index.html              ★ versión principal (8 ago 2026, 91 KB, 906 líneas)
├── index.html.zip          respaldo de index.html (20 ago 2026)
├── index N.html            iteración previa (7 ago 2026, 60 KB)
├── index0.html             versión móvil + Supabase (29 nov 2025, 106 KB, 1789 líneas)
├── index2.html             experimento Supabase (26 nov 2025, 37 KB)
├── Index1.html             prototipo con datos hardcodeados (25 nov 2025, 39 KB)
├── logo.png                1920×1080, 100 KB (usado como logo de marca)
├── favicon.png             263×263, 28 KB
├── G_L_2024/               4 PNG 1920×1080 (~86–104 KB c/u) — NO referenciados
│   ├── G_L_2024.002.png
│   ├── G_L_2024.003.png
│   ├── G_L_2024.004.png
│   └── G_L_2024.005.png
├── .DS_Store
└── docs/                   (este informe; creado en Fase 1)
```

**Total:** 14 archivos. Cero CSS externos, cero JS locales, cero JSON, cero CSV locales, cero fuentes propias.

### 3.2 Versiones del sitio (línea de tiempo)

No se asume cuál es “la definitiva” solo por el nombre. Criterios usados: fecha, coincidencia con producción, features, fuente de datos.

| Archivo | Fecha | Fuente de datos | SEO | Móvil | Noticias clicables | Estado |
|---|---|---|---|---|---|---|
| `Index1.html` | 25 nov 2025 | Array JS hardcodeado | No | No (solo desktop HUD) | No (ticker estático) | Prototipo 1 |
| `index2.html` | 26 nov 2025 | **Supabase** + fallback JS | No | No | No | Experimento CMS |
| `index0.html` | 29 nov 2025 | **Supabase** | Sí (meta OG) | Sí (capa móvil agresiva) | No | Intento “completo” 2025 |
| `index N.html` | 7 ago 2026 | **Google Sheets + PapaParse** | No | Parcial | Sí | Borrador inmediato de producción |
| `index.html` | 8 ago 2026 | **Google Sheets + PapaParse** | Sí | Sí | Sí + Unsplash fallback | **Principal** |
| `index.html.zip` | 20 ago 2026 | Copia de `index.html` | — | — | — | Backup |

### 3.3 Por qué `index.html` es la versión principal

1. Es el único archivo que un servidor estático sirve por defecto (`index.html`).
2. geotactics.com.ec responde `200` con el mismo `<title>` y metas; `content-length` ~93 KB, coherente con este archivo.
3. Es el más reciente entre las variantes HTML (agosto 2026 vs noviembre 2025).
4. Incorpora lo que las versiones anteriores iban acumulando: SEO, overlay MVV, lector de noticias, filtro `esActivo`, splash móvil, menú hamburguesa, FAB dual.
5. Abandona Supabase (presente en `index0`/`index2`) a favor de Sheets, que es lo que producción usa hoy.

`Index1` sigue siendo útil como **memoria de contenido**: lista de proyectos más rica (O/T, E-GPS, Patas a la Obra, Inqui, Ecuador Ancestral) que **no está completa** en el Sheet actual.

---

## 4. Tecnologías detectadas

| Tecnología | Uso | Dónde |
|---|---|---|
| HTML5 monolítico | Toda la app | `index.html` |
| CSS embebido | ~350 líneas + ~618 `!important` | `<style>` |
| JavaScript vanilla | UI, CSV, mapa, drag & drop | `<script>` final |
| Leaflet 1.9.4 (unpkg) | Mapa de operaciones | Overlay ubicación |
| OpenStreetMap tiles | `tile.openstreetmap.org` | `L.tileLayer` |
| PapaParse 5.4.1 (cdnjs) | Parseo CSV remoto | Proyectos/noticias/clientes/equipo |
| Google Sheets (publicado) | CMS de facto | 4 gids del mismo spreadsheet |
| Google Fonts Open Sans | Tipografía | 300–800 |
| Remix Icon 3.5.0 (jsDelivr) | Iconografía | HUD, fichas, FAB, overlays |
| Unsplash | Placeholders de fotos de proyecto | `renderCategory()` |
| Flaticon CDN | Avatar por defecto del equipo | `iniciarSitio()` |
| Wix (`geotactics.info`) | PDF dossier | CTA “Dossier” |
| WhatsApp (`wa.me`) | Contacto | FAB |
| Supabase JS v2 | CMS abandonado | Solo `index0.html` / `index2.html` |
| Apache | Hosting | Headers de producción |

**No detectado en la versión principal:** React/Vue/Svelte, bundler, TypeScript, Tailwind, Google Analytics/GTM, recaptcha, formularios, Mapbox, Carto, GeoJSON local, robots/sitemap, Schema.org, service worker.

---

## 5. Funcionalidades existentes

Leyenda: **KEEP** conservar el concepto · **REFACTOR** conservar y rehacer · **REPLACE** sustituir el mecanismo · **REMOVE** no llevar a 2.0 · **INVESTIGATE** falta evidencia o datos sucios.

| Funcionalidad | Qué hace hoy | Estado | Notas |
|---|---|---|---|
| Identidad visual (logo, coral `#E84C3D`, café `#4A3E3D`, retícula) | Marca reconocible | **KEEP** | Paleta y wordmark `GEOTACTICS.` |
| Posicionamiento “9 años / Nueva Loja” | Origen territorial | **KEEP** | Actualizar cifra de años en 2.0 |
| Navegación HUD (Nosotros / Operación / CTA / Dossier) | 2 overlays + mailto + PDF Wix | **REPLACE** | Pasar a IA de páginas; el HUD puede inspirar el header |
| Navegación por fichas (drag & drop) | Única vía desktop a proyectos | **REFACTOR** | Conservar como interacción secundaria, no como IA principal |
| Zona “LEER ARCHIVOS” | Drop target | **REFACTOR** | Concepto táctico propio; hoy es un obstáculo UX |
| Timeline horizontal de proyectos | Cards con fotos en abanico | **REFACTOR** | Buen storytelling; necesita fotos reales y ficha de caso |
| Categorías (5 líneas de trabajo) | Filtro de proyectos, no de servicios | **REFACTOR** | Reencuadrar como **capacidades**, no como el producto |
| Mapa Leaflet de operaciones | Pines por categoría + HQ | **KEEP / REFACTOR** | Conservar; no es el home de una data platform |
| Sistema de noticias (ticker + panel) | 1 noticia activa, con typos | **REFACTOR** | El canal sirve; el contenido y el XSS no |
| Clientes / aliados | Logos desde Sheet | **REFACTOR** | Sheet tiene 1 cliente **sin `logo_url`** → barra vacía |
| Equipo | Grid dinámico | **REFACTOR** | Photos placeholder; aliases internos visibles al público |
| Misión / visión / valores | Texto sólido en overlay | **KEEP** | Mover a `/nosotros` |
| FAB de contacto | WA, tel, mail, LinkedIn personal | **REFACTOR** | LinkedIn apunta a perfil personal, no de empresa |
| Dossier PDF | Abre Wix `geotactics.info` | **INVESTIGATE** | ¿Sigue vigente? Hostear en dominio propio |
| Splash screen | Logo pulsante 1 s (móvil forzado) | **REMOVE / REFACTOR** | Retrasa LCP; innecesario en corporativo |
| Lightbox | Zoom de imagen | **KEEP** | |
| Google Sheets como CMS | 4 pestañas CSV | **REPLACE** | Ver §6 y §11 |
| PapaParse + CSV en cliente | Fetch en cada visita + cache-bust | **REPLACE** | |
| Fallback Unsplash | 3 fotos genéricas si no hay `foto1-3` | **REMOVE** | Diluye credibilidad |
| Supabase (versiones viejas) | CMS + **anon key en claro** | **REMOVE** | No está en producción; rotar clave |
| HTML duplicados (`Index1`, `index0`, `index N`…) | Copias de trabajo | **REMOVE** del deploy; archivar |
| Galería `G_L_2024/` | No usada | **INVESTIGATE** | Posible material de marca 2024 |
| Formulario de contacto | No existe | — (ausente; crear en 2.0) |
| Catálogo de productos | No existe | — (ausente; crear en 2.0) |
| Página de tecnología / stack | No existe | — (ausente; crear en 2.0) |
| DataSucumbíos como producto | Solo fila CSV / ticker antiguo | **REPLACE** presentación | Ver §21 |

---

## 6. Fuentes de datos

### 6.1 Spreadsheet de producción

Un único Google Sheet publicado:

`2PACX-1vTCgNUHYyHo1UkxNsSjSZ2h95y53gfYbuqd-OYcu0Q8EpC3EDiJzF-dWpaCyIo19B7sxinPBMHQrYBQ`

| Pestaña (gid) | Columnas observadas | Filas útiles (ago 2026) | Calidad |
|---|---|---|---|
| Proyectos `0` | `categoria, sistema, cliente, descripcion, anio, lat, lng, ubicacion, foto1, foto2, foto3, link_demo, link_pdf` | 13 sistemas | Categorías con espacios (`recursos `). Casi **cero fotos**. Varios `link_demo` incorrectos o ajenos. |
| Noticias `621915959` | `titular, contenido, foto_url, fecha, activo` | 1 activa | Typo: “Esdtamos fuera”. Sin foto. |
| Clientes `1180610857` | `nombre, logo_url, orden, activo` | 1 (GADP Sucumbíos) | `logo_url` vacío → **no se pinta nada** (`if(!c.logo_url) return`) |
| Equipo `390294212` | `nombre, cargo, descripcion, foto_url, email, twitter, alias, orden` | Al menos 1 (Daniel Orellana Torres) | Sin foto. Alias “Chuky” expuesto. Email personal de empresa. |

El código hace cache-bust (`&t=` + timestamp) en **cada carga**, así que Sheets se consulta siempre en frío.

### 6.2 Inventario de proyectos en el Sheet (producción)

| Categoría | Sistema | Cliente | Año | Demo |
|---|---|---|---|---|
| territorial | SIGDR Gualsaqui | Comuna Gualsaqui | 2017 | — |
| recursos | SIGC Pimampiro | Junta de Aguas Pimampiro | 2018 | — |
| recursos | SIGC EMAPAI | EMAPAI Ibarra | 2018 | — |
| territorial | SIGDR Vacas Galindo | GADPR Vacas Galindo | 2018 | — |
| recursos | SIGC la Victoria | Junta de Aguas La Victoria | 2019 | — |
| gobernanza | Yaku EMAPAI | EMAPAI | 2019 | `comercial.emapai.gob.ec:81/yaku/` |
| gobernanza | **Datasucumbios** | GADP Sucumbíos | 2024 | https://www.datasucumbios.tech |
| territorial | Capture | GADP Sucumbíos | 2024 | — |
| territorial | SIGDR Dayuma-Ines Arango | GADPR Dayuma | 2024 | `imbabura.geotactics.com.ec/login.php` (sospechoso) |
| especiales | Termometro Social | Oreja Multimedia | 2025 | — |
| especiales | MadaRadio APP | Madaradio | 2023 | madaradio.com |
| legado | Observatorio Municipal | GeoTactics | 2026 | observatorio.geotactics.com.ec |
| especiales | GUANTA APP | Mina Guanta | 2026 | **madaradio.com (enlace erróneo)** |
| especiales | RANTYI APP | GeoTactics | 2026 | — |

### 6.3 Proyectos que existen en `Index1.html` y **no** están (o están incompletos) en el Sheet

Memoria de producto a recuperar en Fase 2/3:

- CAPTURE como URL `capture.geotactics.com.ec`
- O/T — Sistema de gestión por resultados (GADP Sucumbíos, 2023)
- E-GPS — App de gobierno electrónico
- Patas a la Obra — registro de mascotas (Corposucumbíos)
- Inqui — gestión de inquilinos
- Ecuador Ancestral — rutas turísticas
- SIGC EMAPA como app de lecturas (en Sheet está mezclado con SIGC EMAPAI)

### 6.4 Otras fuentes

- Dossier: `https://www.geotactics.info/_files/ugd/936075_....pdf` (Wix).
- Imágenes de proyecto: Unsplash genérico (espacio, dashboards) — **no son del territorio ni de GeoTactics**.
- Subdominios detectados en datos: `datasucumbios.tech`, `observatorio.geotactics.com.ec`, `imbabura.geotactics.com.ec`, `capture.geotactics.com.ec`, `comercial.emapai.gob.ec`.

---

## 7. Arquitectura GIS

El mapa **no es un producto GIS**. Es un **mapa corporativo de huella**: “dónde hemos trabajado”.

### 7.1 Implementación actual

- Leaflet 1.9.4, vista inicial `[0.00, -77.50]` zoom 8 (norte de Ecuador).
- Tiles OSM estándar, filtro CSS `grayscale(100%) contrast(1.1)`.
- Attribution del tile: `&copy; Geotactics` (**omite la atribución OSM requerida**).
- 5 `L.layerGroup` alineados a las categorías + pin HQ en `[0.091, -76.89]` (“Cuartel General / Nueva Loja”).
- Control de capas + leyenda duplicada (bottom-right).
- Popup: localidad, año, sistema, botón “VER EN CRONOLOGÍA”.
- El mapa se **crea al abrir** el overlay y **se destruye al cerrar**.
- No hay GeoJSON, WMS, clustering, heatmap, ni basemap propio.

### 7.2 Implicaciones para 2.0

- **Conservar** el mapa como prueba de trayectoria territorial (activo de confianza).
- **No** convertirlo en el home ni en un visualizador de datos abiertos (eso es DataSucumbíos).
- Corregir atribución OSM.
- Validar coordenadas (varios pines caen en el mismo punto HQ).
- Clasificar pines por **tipo de entrega** (producto / proyecto / sede), no solo por categoría de ficha.

---

## 8. UX / UI

### 8.1 Arquitectura de información actual

El visitante no recibe un relato corporativo. Recibe un **tablero táctico**.

```
[Logo grande]     [Zona misteriosa LEER ARCHIVOS]     [5 fichas rojas]
[Aliados]
NAV: Nosotros | Operación y Proyectos | Iniciar proyecto | Dossier
TICKER de noticias
FAB
```

Faltan respuestas explícitas a:

1. ¿Quiénes somos? (enterrado en overlay “CODE GEOTACTICS”)
2. ¿Qué problemas resolvemos? (solo copy de categoría, tras el drag)
3. ¿Qué tecnología desarrollamos? (ausente)
4. ¿Qué productos hemos creado? (mezclados con proyectos)
5. ¿Qué proyectos hemos ejecutado? (accesible, pero con fricción)
6. ¿Por qué confiar? (mapa + años; sin prueba, clientes visibles ni casos)

### 8.2 Home

- El logo ocupa ~350 px de ancho sobre retícula; no hay **headline** ni **propuesta de valor**.
- El badge “9 Años de Innovación” es el único mensaje de empresa.
- “LEER ARCHIVOS” no se entiende sin el tip (“Arrastra la ficha…”), y el tip solo aparece si se **clica** una ficha sin arrastrar.
- En desktop, `body { overflow: hidden }`: no hay scroll. Quien no arrastra, no ve proyectos.

### 8.3 Navegación y jerarquía

- Dos ítems de menú vs. cinco categorías de contenido vs. cuatro fuentes de datos: **desbalance**.
- “Operación y Proyectos” abre un **mapa**, no el listado de proyectos.
- “Nosotros” se titula internamente **CODE GEOTACTICS** (tono interno, no corporativo).
- CTA “INICIAR PROYECTO” abre el cliente de correo: alta fricción, cero medición.
- El LinkedIn del FAB es **perfil personal** (`daniel-orellana-38347131`), no página de empresa.

### 8.4 Interacción y densidad

- Animaciones: splash pulse, ticker 40s, pulse-border de la zona, hover de abanico de fotos, overlays `translateY`, FAB rotate, grayscale→color en fotos de equipo.
- No es un exceso tipo “template SaaS”; es un **exceso de mecánica** para poco contenido.
- Densidad visual alta en HUD (barra top + ticker + footer cápsula + FAB) que come el lienzo.

### 8.5 Accesibilidad y legibilidad

- `user-select: none` en todo el `body`.
- Nav con `<a onclick>` sin `href` (no es teclado-ni-SEO-friendly).
- Fichas no operables con teclado.
- Contraste del coral sobre blanco es aceptable; el ticker 11 px sobre café es justo.
- Imágenes de equipo/proyectos a menudo sin `alt` útil.
- Splash oculta el resto del DOM en móvil (`visibility: hidden` de siblings).
- No hay skip-link, landmarks incompletos (`footer` usado para el ticker de noticias).

### 8.6 Consistencia

- Paleta estable (coral + café + mint gray) en todas las versiones.
- Títulos de overlay mezclan “CODE GEOTACTICS” / “EQUIPO” / “OPERACIONES & PROYECTOS”.
- Color de texto migró de `#2C3E50` (Index1/index2) a `#4A3E3D` (producción): identidad más propia, menos “azul Bootstrap”.

### 8.7 Identidad que SÍ es GeoTactics (conservar)

No es un template SaaS genérico. Elementos de autoría:

1. Wordmark `GEOTACTICS` + punto coral.
2. Coral `#E84C3D` + café `#4A3E3D` + retícula técnica.
3. Metáfora táctica (HUD, fichas, “cuartel general”, “huella territorial”) — **calibrada**, no militarizada.
4. Mapa de Ecuador norte como prueba de campo, no como dashboard.
5. Cinco líneas de trabajo reales (territorio, gobernanza, recursos, legado, especiales).
6. Origen explícito: **Nueva Loja, Sucumbíos**, no Quito-by-default.
7. Logo actual (`logo.png`) y favicon.

Estos deben sobrevivir a 2.0. Lo que no debe sobrevivir es la **obligación de jugar** para leer la empresa.

---

## 9. Responsive

Punto de corte principal: **1000 px** (no 768). Hay un rango intermedio 1001–1400 para achicar fichas.

### Desktop (>1000)

- Mundo horizontal de 2 escenas, `100vh`, sin scroll de documento.
- Fichas con posiciones absolutas (`#f1`…`#f5`).
- Footer cápsula flotante + ticker fijo + FAB.

### Móvil (≤1000)

- Se abandona el drag: fichas y zona `display: none`.
- Home en columna: logo → aliados → **botones de categoría** → ticker → footer.
- Timeline pasa a columna vertical con línea central.
- Splash **forzado** (`display: flex !important`).
- Menú hamburguesa (Nosotros / Operación).
- FAB duplicado (markup desktop + markup móvil).
- `index.html` contiene CSS móvil copiado/pegado con decenas de `!important` (evolución desde `index0.html`).

### Riesgos responsive

- Dos DOM de contacto, dos tickers, dos footers: fácil desincronizar.
- `100dvh` + `position: fixed` en splash: típico bug de barra de iOS.
- Móvil llama `renderCategory('territorial')` al iniciar aunque el usuario no lo pidió (precarga oculta).
- Tablets ~1024 px caen en “desktop drag”, que en touch es incómodo.

---

## 10. Performance

Estimación cualitativa de Core Web Vitals (sin Lighthouse de campo en esta fase):

| Factor | Impacto |
|---|---|
| Un HTML de 91 KB + CSS/JS bloqueante al final | JS no es enorme, pero no hay code-split |
| `logo.png` 1920×1080 (100 KB) usado como logo de 350 px | LCP inflado; no hay `srcset` ni WebP |
| Splash 1 s artificial + espera a 4 CSV | TTI retrasado; mapa ni siquiera se pide al inicio (bien) |
| Google Fonts + Remix + Leaflet CSS en `<head>` | 3 CSS de terceros en ruta crítica |
| PapaParse + 4 descargas Sheets con cache-bust | Red no cacheable; dependiente de Google |
| Unsplash × 3 por proyecto al abrir categoría | Si hay 4 proyectos = 12 imágenes ajenas |
| `will-change: transform` en `#mundo-horizontal` 600vw | Costo de compositing innecesario en móvil (se anula el transform) |
| Leaflet + OSM tiles solo al abrir overlay | Correcto (lazy de mapa) |
| Sin `loading="lazy"` en imgs inyectadas | |
| `filter: grayscale` en tiles Leaflet | Costo GPU |

**Hipótesis CWV:** LCP regular (logo grande + fonts + splash); CLS bajo en desktop (layout fijo) y medio en móvil (contenido CSV que llega tarde); INP aceptable salvo drag. El cuello real es **dependencia de red a Google + CDNs** en Ecuador.

---

## 11. Seguridad

Hallazgos (sin explotación; solo lo que el código hace):

1. **XSS almacenado vía Google Sheets.** `innerHTML` concatena `titular`, `contenido`, `nombre`, `descripcion`, `sistema`, URLs, etc. Quien edite el Sheet (o un Sheet publicado comprometido) inyecta HTML/JS en geotactics.com.ec.
2. **CSV públicos.** Cualquiera con la URL de publicación lee equipo (emails), proyectos y noticias. No hay secretos de infraestructura ahí, pero sí PII ligera.
3. **Clave anon de Supabase en el repo** (`index0.html`, `index2.html`):  
   proyecto `fljlevyhwsjnuiwbpnvh`. Aunque es `anon`, si las políticas RLS no están bien, el backend viejo queda expuesto. **Rotar y no redesplegar esos HTML.**
4. **Dossier en Wix** (`geotactics.info`): cadena de confianza partida; si Wix cae o se borra el archivo, el CTA muere.
5. **Enlaces `target=_blank` sin `rel="noopener"`.**
6. **Teléfono y WhatsApp** en claro (esperado en una web de contacto; no es incidente).
7. **Yaku** en `http://` puerto `:81` — mixed content / servicio interno expuesto como “demo”.
8. **Atribución OSM alterada** — incumplimiento de términos, no RCE.
9. No hay CSP, SRI en CDNs (unpkg/jsdelivr/cdnjs), ni HTTPS enforcement visible en el HTML.
10. Overlay y `innerHTML` de popups Leaflet con `onclick="saltarDesdeMapa('${p.cat}')"`: si `categoria` del Sheet se manipula, hay superficie extra.

---

## 12. SEO

Lo que **sí** tiene `index.html`:

- `lang="es"`
- Title y description (énfasis Sucumbíos / Data Warehouse / SIG)
- Keywords (poco valor hoy)
- Geo tags Nueva Loja
- Open Graph + Twitter Card
- Canonical `https://www.geotactics.com.ec/`
- Favicon / apple-touch-icon

Lo que **rompe** el SEO:

- `og:image` apunta a `https://www.geotactics.com.ec/ruta-a-tu-imagen-social-share.jpg` (**placeholder nunca reemplazado**).
- Una sola URL indexable: **todo el contenido de proyectos/equipo es JS + CSV**. Google ve overlays vacíos (`#team-container`, `#horizontal-feed`).
- Nav sin `href`; categorías no son URLs (`/proyectos/capture` no existe).
- DataSucumbíos no tiene landing propia en este dominio.
- Título y description posicionan más “datos geográficos / Sucumbíos” que “empresa de desarrollo tecnológico”.
- No hay `robots.txt`, `sitemap.xml`, JSON-LD (`Organization`, `LocalBusiness`, `SoftwareApplication`).
- `h1` ausente; el logo es `<img>`; el wordmark del nav no es heading.
- Duplicados locales (`index0.html`, `Index1.html`…) si se suben al host, **canibalizan**.

El copy actual es defendible para marca regional, pero **no para “empresa tecnológica que también hace GIS”**. Eso es un ajuste de posicionamiento, no de keywords.

---

## 13. Deuda técnica

1. **Cinco sitios en uno.** Riesgo de editar el HTML equivocado.
2. **Monolito HTML+CSS+JS** sin módulos.
3. **~618 `!important`** en un archivo: CSS de guerra móvil vs desktop.
4. **CMS accidental (Sheets)** sin esquema validado, sin preview, sin entornos.
5. **Categorías hardcodeadas** en JS (`categoryDetails`) vs. categorías libres en Sheet → desajuste silencioso.
6. `datosCargados` + `setTimeout` polling en `renderCategory` en lugar de un flujo de datos explícito.
7. Duplicación FAB / ticker / footer / menú.
8. `index0` es un intento de “arreglar iOS” a base de `!important` que se heredó.
9. Sin Git en el workspace auditado: historial = nombres de archivo.
10. Assets de marca no optimizados; carpeta `G_L_2024` huérfana.
11. Años y copyright “2026” / “9 años” hardcodeados.
12. Filtro de equipo **no usa** `esActivo` (el de noticias/clientes sí).
13. `trim()` salva espacios en categoría, pero no hay taxonomía de **tipo** (`producto` vs `proyecto`).
14. Dependencia de CDNs de terceros para iconos y mapas.

---

## 14. Código duplicado

| Bloque | Copias |
|---|---|
| Paleta, HUD, fichas, timeline, mapa | Las 5 variantes HTML |
| `categoryDetails` | `index.html`, `index N.html`, `index0.html`, `index2.html`, `Index1.html` |
| `initMap` / layers / HQ | Idem |
| `renderCategory` + Unsplash | `index.html`, `index0`, `index2`, `Index1` (`index N` usa placeholder.com) |
| Markup FAB (desktop + móvil) | Dentro de `index.html` |
| Ticker desktop + ticker móvil | Dentro de `index.html` |
| Footer cápsula + footer móvil inicial + footer en timeline | 3 bloques |
| Cliente Supabase + anon key | `index0.html` y `index2.html` |
| Splash + media queries iOS | `index.html` ⊂ simplificación de `index0.html` |
| ZIP = `index.html` | `index.html.zip` |

---

## 15. Elementos que debemos conservar

- Marca: logo, wordmark, coral, café, retícula.
- Relato de origen: Nueva Loja / Sucumbíos / trayectoria ~9 años.
- Misión, visión, valores (texto actual es usable).
- Las **cinco capacidades** como sistema de oferta (no como UX de arrastre obligatorio).
- Mapa de huella territorial (prueba, no producto).
- Inventario de sistemas: SIGDR, SIGC, CAPTURE, Yaku, DataSucumbíos, Observatorio, apps especiales.
- Canales reales: email `info@geotactics.com.ec`, WhatsApp, redes.
- Tono “técnico de campo” (preciso, territorial), no jerga SaaS de Silicon Valley.
- Dossier como artefacto (migrado al dominio propio).

---

## 16. Elementos que debemos refactorizar

- Home: de tablero mudo a **propuesta de valor + prueba**.
- Fichas: de mecánica primaria a **exploración** o a cards clicables.
- Timeline: de galería Unsplash a **casos con evidencia**.
- Mapa: atribución, datos limpios, salto a ficha de caso (URL).
- Noticias: de ticker XSS a sala de prensa simple (opcional, no protagonista).
- Equipo: fotos reales, cargos públicos, aliases solo si la marca lo quiere.
- Aliados: logos reales, no una fila vacía.
- Contacto: FAB + página/formulario; LinkedIn de **empresa**.
- Responsive: un solo sistema de layout, no dos sitios pegados con `!important`.
- SEO: HTML real por sección; OG image verdadera.

---

## 17. Elementos que debemos reemplazar

- Arquitectura de un solo HTML por **sitio multipágina** (o MPA generado).
- Google Sheets + PapaParse como CMS de producción.
- Overlays a pantalla completa como único modelo de navegación.
- `mailto:` como único CTA comercial.
- Imágenes Unsplash / Flaticon / placeholders.
- Hosting del dossier en Wix.
- Posicionamiento del title (“datos geográficos en Sucumbíos”) por **empresa tecnológica que construye software, datos, GIS y gobernanza**.
- Presentación de DataSucumbíos como “un proyecto más de la categoría gobernanza”.

---

## 18. Elementos que debemos eliminar

Del **producto 2.0** (archivar, no borrar aún el repo):

- `Index1.html`, `index2.html`, `index0.html`, `index N.html`, `index.html.zip` en el deploy público.
- Splash screen de 1 s.
- `user-select: none` global.
- Clave Supabase en estáticos (y rotarla).
- Ticker si no hay redaccción real (hoy hay 1 noticia con typo).
- Leyenda duplicada del mapa (control de capas + legend HTML).
- Copy interno “CODE GEOTACTICS” / “Cuartel General” si se calibra el tono (el mapa puede decir “Sede Nueva Loja”).
- Enlaces rotos o cruzados (GUANTA → madaradio; Dayuma → login Imbabura).

**No eliminar ahora** (Fase 1): ningún archivo del sitio. Esta auditoría no tocó producción.

---

## 19. Nueva arquitectura de información

La estructura mínima sugerida en el brief (Home / Qué hacemos / Productos / Proyectos / Tecnología / Nosotros / Contacto) **es correcta en espíritu**, pero el contenido real exige un ajuste:

### 19.1 Diagnóstico vs. plantilla

| Sección del brief | ¿La justifica el contenido hallado? |
|---|---|
| Home | Sí. Hoy no existe como relato. |
| Qué hacemos | Sí. Las 5 fichas + copy de `categoryDetails` son la materia prima. |
| Productos | Sí, y **es el hueco más grave**. Hay sistemas con URL propia (DataSucumbíos, Observatorio, Yaku, CAPTURE, apps). |
| Proyectos / casos | Sí. El Sheet + Index1 son el backlog. |
| Tecnología | Parcial. No hay página, pero el discurso (DW, OLAP, SIG, apps, datos abiertos) sí. Hay que redactarla; no inventar un stack de moda. |
| Nosotros | Sí (MVV + equipo + origen). |
| Contacto | Sí (hoy solo FAB). |

**No** hace falta “Insights”, “Pricing”, “Blog” ni “Platform”.  
**Sí** hace falta separar **Producto** de **Proyecto**.

### 19.2 Mapa de sitio propuesto

```
geotactics.com.ec
├── /                          Home corporativa
├── /que-hacemos               Capacidades (5 líneas → problemas que resolvemos)
├── /productos                 Índice de productos propios
│   ├── /productos/datasucumbios
│   ├── /productos/capture     (si se confirma como producto)
│   ├── /productos/observatorio
│   └── /productos/{slug}      extensible
├── /proyectos                 Casos / trayectoria
│   └── /proyectos/{slug}
├── /tecnologia                Cómo construimos (enfoque, no catálogo de vendors)
├── /nosotros                  Empresa, origen, equipo, por qué confiar
├── /noticias                  Opcional; solo si hay editorial
└── /contacto
```

Navegación primaria recomendada (6 ítems, no 12):

**Inicio · Qué hacemos · Productos · Proyectos · Nosotros · Contacto**

“Tecnología” puede ser ítem o bloque dentro de Qué hacemos / Nosotros, según longitud del copy. Preferencia: **página propia corta**, porque diferencia a GeoTactics de una consultora genérica.

Footer: sede, contacto, redes, dossier, aviso de que DataSucumbíos es un producto (link out).

### 19.3 Modelo de contenido (para agregar productos sin reconstruir)

Tres tipos, nunca mezclados en el mismo listado sin etiqueta:

```
Empresa
  nombre, origen, MVV, equipo, contactos, aliados

Capacidad (línea de servicio)
  id: territorial | gobernanza | recursos | legado | especiales | (futuras)
  problema, enfoque, tecnologías asociadas

Producto (software con vida propia)
  slug, nombre, tagline, URL canónica (propia), cliente ancla opcional,
  capacidad relacionada, status (activo|interno|sunset)

Proyecto / caso
  slug, nombre, cliente, año, lugar, lat/lng, capacidad,
  producto usado (opcional), resultado, evidencias (fotos, PDF, demo)
```

Así, **DataSucumbíos** es Producto.  
**Actualización PDyOT Sucumbíos** es Proyecto que **usa** ese producto.  
**CAPTURE** puede ser Producto o Proyecto según se decida en Fase 2 (hoy oscila).  
**SIGDR Gualsaqui 2017** es Proyecto / caso.

Añadir un producto mañana = una entrada + una página, no un HTML nuevo.

### 19.4 Home propuesta (contenido, no mockup)

1. Headline de **empresa tecnológica** (quién + para quién).
2. Tres pruebas rápidas: años, territorio, sistemas en operación.
3. Bloque capacidades (las 5 líneas, clic a `/que-hacemos#gobernanza`).
4. Productos destacados (2–4, DataSucumbíos primero entre productos, no como único mensaje).
5. Casos recientes (mapa chico o 3 cards).
6. Por qué confiar (origen de campo + aliados con logos reales).
7. CTA de conversación (formulario + WhatsApp), no solo mailto.

La retícula y el coral siguen. El drag **puede** reaparecer como easter egg de escritorio, no como puerta.

---

## 20. Posicionamiento empresarial propuesto

**Una línea:**  
GeoTactics es una empresa ecuatoriana de desarrollo tecnológico que diseña software, datos y sistemas territoriales para que organizaciones y gobiernos decidan mejor.

**No somos:** una data platform, un clon de Datawheel, ni “el sitio de DataSucumbíos”.

**Sí somos:**

- Desarrollo de software (web, móvil, sistemas a medida).
- Inteligencia de negocios y analítica.
- GIS e inteligencia territorial.
- Gobernanza digital.
- Automatización.
- Soluciones para organizaciones y territorio.

**Prueba (del propio inventario):** SIGC/SIGDR en Imbabura y Orellana, CAPTURE en 31 parroquias, DataSucumbíos para el GADP, Yaku para EMAPAI, Observatorio municipal, apps (radio, mina, termómetro social, subasta). Eso es **fábrica de software con ancla territorial**, no un portal de datasets.

**Tono:** preciso, andino amazónico, técnico; sin “synergy” ni dashboard-hero genérico.

**Promesa de confianza:** 9+ años construyendo en el territorio (no solo presentando en Quito); sistemas que siguen en uso; sede en Nueva Loja.

---

## 21. Cómo integrar DataSucumbíos como producto

**Regla:** no se modifica www.datasucumbios.tech en esta modernización.

### Presentación dentro de GeoTactics

- En `/productos/datasucumbios`: ficha de **producto desarrollado por GeoTactics**.
  - Qué problema de gobernanza / datos territoriales resuelve.
  - Para quién (GADP Sucumbíos como caso ancla, no como dueño de la marca GeoTactics).
  - Qué es (plataforma territorial de datos) y qué **no** es (no es la web corporativa).
  - CTA: “Visitar DataSucumbíos” → `https://www.datasucumbios.tech` (`rel="noopener"`).
  - CTA secundario: “Hablar con GeoTactics sobre un producto similar”.
- En Home: card de producto junto a otros (Observatorio, etc.), nunca el unique selling point de toda la empresa.
- En `/proyectos`: el PDyOT / cubo OLAP de Sucumbíos como **caso**, enlazado al producto.
- En el mapa: pin de producto o de caso, etiquetado, no el basemap de DataSucumbíos.

### Lo que no debe pasar

- Replicar el visualizador / Datawheel look & feel en geotactics.com.ec.
- Redirigir geotactics.com.ec a datasucumbios.tech.
- Titular la home “datos abiertos de Sucumbíos”.
- Tratar DataSucumbíos como la única prueba de que GeoTactics “hace tecnología”.

Auditoría de datasucumbios.tech: **fuera de alcance**, fase posterior.

---

## 22. Arquitectura técnica recomendada

Objetivo: sitio corporativo estable, indexable, extensible, hospedable en el Apache actual o en un estático moderno.

### 22.1 Recomendación

**Generador de sitio estático (Astro o equivalente) + contenido en Markdown/JSON versionado.**

Razones alineadas al repo real:

- El equipo ya opera HTML estático en Apache; un `dist/` de HTML sigue siendo desplegable.
- El contenido es de baja frecuencia (proyectos, productos, equipo), no un feed tipo red social.
- SEO exige HTML server-render / prerender, no overlays vacíos.
- Evita reintroducir Supabase o Sheets como SPOF de la home.
- Permite componentes para mapa Leaflet **solo** en `/proyectos` o un bloque home.

**No recomendado ahora:** Next.js full stack, headless WordPress, ni reactivar Supabase para la home. Un CMS visual puede llegar después (Decap/Sanity) cuando el modelo de contenido esté estable.

### 22.2 Capas

| Capa | 2.0 |
|---|---|
| Contenido | MD/JSON por tipo (empresa, capacidades, productos, proyectos, personas) |
| Presentación | Plantillas + CSS propio (paleta GeoTactics, no UI kit SaaS) |
| Mapa | Componente Leaflet hidratado, datos desde JSON de proyectos |
| Medios | `/public/media` optimizado (WebP, logo SVG/PNG recortado) |
| Contacto | Formulario → endpoint propio / Formspree / email transaccional **más** WhatsApp |
| Dossier | PDF en el mismo dominio |
| Analytics | Decisión posterior (plausible o GA4); hoy no hay |
| Hosting | Seguir Apache o pasar a Pages/Netlify; el artefacto es estático |

### 22.3 Migración de datos

1. Congelar export CSV actual como baseline.
2. Reconciliar con `Index1.html` (proyectos faltantes).
3. Tipar cada ítem: producto vs proyecto vs experimento.
4. Quitar Unsplash; fotos reales o none.
5. Sheets puede quedar como **herramienta interna de captura**, no como runtime de producción.

### 22.4 Lo que no entra en el stack 2.0

- PapaParse en el cliente para contenido canónico.
- Cinco `index*.html` en la raíz pública.
- Anon keys.
- Plantilla tipo Linear/Vercel marketing (rompería la identidad táctica-territorial).

---

## 23. Roadmap de migración

| Fase | Nombre | Qué se entrega | Qué no se hace |
|---|---|---|---|
| **1** | Auditoría (este documento) | Diagnóstico + IA + stack | Código de sitio |
| **2** | Arquitectura y diseño | IA cerrada, wireframes, tokens de marca, modelo de contenido, lista de páginas | Implementación visual final en producción |
| **3** | Contenido | Redacción home, capacidades, fichas de producto (DataSucumbíos), casos, tecnología, nosotros; fotos; limpieza CSV | Rediseño de datasucumbios.tech |
| **4** | Implementación | Repo 2.0, componentes, mapa, contacto, SEO, deploy staging | Apagar el sitio actual hasta go-live |
| **5** | Cutover | DNS/Apache a `dist/`, redirects, OG, dossier propio, retiro de HTML viejos del host | Borrar historial local sin archivo |
| **6** | DataSucumbíos (otro proceso) | Auditoría de datasucumbios.tech | Mezclar repos |

**Paralelo desde Fase 2:** rotar clave Supabase; no subir `index0`/`index2` a ningún host; preparar logos de aliados; decidir URL canónica de CAPTURE y Observatorio.

**Criterio de éxito de 2.0:** un visitante entiende en 15 segundos que GeoTactics es una **empresa que desarrolla tecnología**, puede nombrar al menos un **producto** y un **caso**, y tiene un camino claro para **hablar con la empresa** — sin arrastrar fichas y sin creer que está en DataSucumbíos.

---

## Anexo A — Paleta y tokens observados

| Token | Valor | Uso |
|---|---|---|
| Coral marca | `#E84C3D` | Fichas, CTA, badge, acentos |
| Café texto | `#4A3E3D` (antes `#2C3E50`) | Nav, títulos |
| Fondo | `#f4f7f6` | Lienzo |
| Retícula | `#e0e0e0` 40×40 | Identidad “plano técnico” |
| Territorial / Gobernanza / Recursos / Legado / Especiales / HQ | `#E84C3D` / `#3498db` / `#27ae60` / `#f39c12` / `#9b59b6` / `#4A3E3D` | Mapa |
| Tipografía | Open Sans 300–800 | Única familia |
| Iconos | Remix Icon | |

## Anexo B — Contactos y presencias

- Web: https://www.geotactics.com.ec/
- Email: info@geotactics.com.ec · dorellana@geotactics.com.ec (equipo)
- Tel / WA: +593 99 363 4073
- Facebook: Geotacticsec
- Instagram: geotactics_ec
- X: @GeotacticsEC
- LinkedIn (hoy): perfil personal, no page
- Dossier: geotactics.info (Wix)
- Producto externo: https://www.datasucumbios.tech

## Anexo C — Limitaciones de esta auditoría

- No se ejecutó Lighthouse de laboratorio ni recorrido de teclado completo en dispositivo real.
- El Sheet puede tener más filas de equipo de las muestreadas; se confirmó esquema y al menos el registro del CEO.
- No se auditó el código de datasucumbios.tech ni subdominios (`observatorio`, `imbabura`, `capture`).
- No se modificó ningún archivo del sitio; solo se añadió este informe en `docs/`.

---

*Fin de la Fase 1. Detenerse aquí hasta autorización de Fase 2.*
