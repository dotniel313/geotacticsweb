# Blueprint de componentes (sin código)

**Fase:** 2.1.0  
**Uso:** implementación Fase 3. No son archivos de framework todavía.

Convención: contenido entra por props/frontmatter; no fetch a Google Sheets.

---

## SiteHeader

- **Responsabilidad:** identidad + nav + CTA Conversar + estado activo.
- **Contenido:** wordmark, ítems de nav, href Conversar.
- **Variantes:** default | compact (scroll).
- **Responsive:** 1440 fila completa; tablet colapsa a menú si no cabe; móvil wordmark + CTA + botón menú.
- **Interacción:** sticky; no overlay HUD.
- **Accesibilidad:** `<nav>`, skip link, `aria-current`, foco visible, CTA ≥ 44 px.
- **Tactical:** coordenada o grid 1 px en borde, apagable.
- **Dependencias:** MobileNavigation.

## MobileNavigation

- **Responsabilidad:** panel de 6 destinos + Conversar.
- **Contenido:** mismos ítems que header.
- **Variantes:** closed | open.
- **Responsive:** solo < breakpoint de nav completa.
- **Interacción:** Escape, overlay, restore focus. Sin drag.
- **Accesibilidad:** dialog/menu, focus trap, `aria-expanded`.
- **Tactical:** ninguno obligatorio.
- **Dependencias:** ninguna.

## Hero

- **Responsabilidad:** H1 ≤ 8 s, supporting, CTAs, origen, micro 2017.
- **Contenido:** strings congelados de Experience Spec; lat/lng texto (no mapa full-bleed).
- **Variantes:** home only.
- **Responsive:** móvil sin mapa de fondo; CTAs apilados.
- **Interacción:** enlaces normales.
- **Accesibilidad:** un `h1`; contraste AA.
- **Tactical:** retícula, coordenada tipográfica.
- **Dependencias:** ConversationCTA (botón) opcional.

## EvidenceStrip

- **Responsabilidad:** prueba cualitativa (2017; 31 parroquias como hecho de caso, no KPI de habitantes).
- **Contenido:** 2–3 ítems desde `company` o copy estático aprobado. **Excluye** 27.539 y 28K.
- **Variantes:** 3 col / 1 col.
- **Responsive:** columna en móvil.
- **Interacción:** ninguna o link a /casos/pdot-sucumbios en “31 parroquias”.
- **Accesibilidad:** lista.
- **Tactical:** IDs pequeños (`EV-2017`).
- **Dependencias:** ninguna.

## CapabilityGrid / CapabilityCard

- **Responsabilidad:** 5 capacidades; problema + enlace.
- **Contenido:** colección `capabilities`.
- **Variantes:** card default; card “lector” si drag.
- **Responsive:** 5 / 3+2 / 1 col.
- **Interacción:** clic/Enter → `/que-hacemos#slug`. Desktop drag opcional al lector.
- **Accesibilidad:** heading por card; drag no único path.
- **Tactical:** ficha, ID de capacidad.
- **Dependencias:** ninguna.

## ProductShowcase / ProductCard / ProductStatus

- **Responsabilidad:** grupos A (operación), B (nueva generación compacta), C (trayectoria).
- **Contenido:** productos filtrados `homeGroup: operation | next | lineage`.
- **Variantes:** CardOperation (título+estado+URL); ChipNext (nombre+ProductStatus); LineageItem (nombre+año, no CTA demo).
- **Responsive:** A = 3 col iguales (DS no hero-card); B = fila de chips/lista compacta; C = línea horizontal o wrap.
- **Interacción:** A puede `open_url`; B/C van a ficha o índice filtrado. Sin Comprar. Sin URL si `urlStatus` conflicto o 000.
- **Accesibilidad:** estado en texto, no solo color.
- **Tactical:** ProductStatus badge; IDs `P-DS`.
- **Dependencias:** ProductStatus.

## ProductStatus

- **Responsabilidad:** EN OPERACIÓN | EN DESARROLLO | PRELANZAMIENTO | TRAYECTORIA.
- **Contenido:** enum.
- **Variantes:** solid coral (operación) / outline (resto).
- **Responsive:** texto completo (no icon-only).
- **Interacción:** ninguna.
- **Accesibilidad:** no color-only.
- **Tactical:** código de estado.
- **Dependencias:** ninguna.

## GostFlow

- **Responsabilidad:** Home 4 pasos; página Tecnología puede reutilizar `variant="full"` de 8.
- **Contenido:** labels GOST SoT.
- **Variantes:** home4 | technology8.
- **Responsive:** horizontal desktop; stepper vertical móvil.
- **Interacción:** expandir significado real (tooltip/details).
- **Accesibilidad:** ol; reduced-motion sin líneas animadas.
- **Tactical:** líneas de conexión desktop.
- **Dependencias:** ninguna.

## CaseGrid / CaseCard

- **Responsabilidad:** casos Home (3) o índice.
- **Contenido:** `cases` con `featuredHome`.
- **Variantes:** compact | detail-teaser.
- **Responsive:** 3 col / 1.
- **Interacción:** `/casos/{slug}`.
- **Accesibilidad:** año, cliente, territorio en texto.
- **Tactical:** hover ficha.
- **Dependencias:** ninguna.

## ExperienceMap

- **Responsabilidad:** evidencia territorial CASO + SEDE.
- **Contenido:** cases con coords + office Nueva Loja. Ibarra ausente.
- **Variantes:** con lista | mapa fallido (solo lista).
- **Responsive:** lista **siempre** encima o al lado; mapa no único índice; altura limitada móvil.
- **Interacción:** pin → popup + mismo ítem de lista. No nav primaria.
- **Accesibilidad:** región nombrada; markers con nombre; teclado; fallback.
- **Tactical:** pines coral casos; forma distinta sede.
- **Dependencias:** Leaflet isla; tiles OSM + attribution.

## LineageTrustBand

**Retirado de Home en 2.2.** No usar. Sustituye: Timeline + TrustGrid.

## Timeline / TimelineNode

- **Responsabilidad:** trayectoria. Home compacta; Nosotros expandida/fotográfica.
- **Contenido:** `company/timeline.json`. Nodo 2008: etiqueta MEMORIA DEL FUNDADOR. 2017: PRIMERA MATERIALIZACIÓN DOCUMENTADA. No copy “desde 2008”.
- **Variantes:** home | about.
- **Responsive:** horizontal compacta desktop home; vertical móvil y Nosotros.
- **Interacción:** clic a caso/producto si hay relación; media no obligatoria.
- **Accesibilidad:** ol; reduced-motion.
- **Tactical:** IDs de año.
- **Dependencias:** media AUTHORIZED o empty.

## TrustGrid

- **Responsabilidad:** nombres de instituciones (ex-mitad de LineageTrustBand).
- **Contenido:** clients displayOnHome.
- **Variantes:** default.
- **Responsive:** wrap.
- **Interacción:** enlace a caso si existe.
- **Accesibilidad:** lista.
- **Tactical:** retícula.
- **Dependencias:** ninguna.

## ConversationCTA

- **Responsabilidad:** CTA primario reutilizable.
- **Contenido:** “Conversemos sobre el problema”; canales.
- **Variantes:** header | hero | band | footer.
- **Responsive:** full width móvil.
- **Interacción:** /conversar o wa.me (declarado).
- **Accesibilidad:** 44 px.
- **Tactical:** ninguno.
- **Dependencias:** ninguna.

## SiteFooter

- **Responsabilidad:** cierre, canales, copyright, nav secundaria.
- **Contenido:** Nueva Loja; Productos, Casos, Actualidad, Conversar; legal `REQUIERE_REVISION_LEGAL`; **sin** disclaimer DS.
- **Variantes:** default.
- **Responsive:** columnas → stack.
- **Interacción:** enlaces.
- **Accesibilidad:** nav footer.
- **Tactical:** retícula mínima.
- **Dependencias:** ninguna.

## Páginas

| Página | Componentes | Contenido |
|---|---|---|
| ProductIndex | filtros estado + grid ProductCard | todos los Product excepto componentes |
| ProductDetail | encabezado estado, cuerpo MD, casos relacionados, CTA según estado | `products/{slug}` |
| CaseIndex | filtros territorio/producto + CaseCard + mapa opcional | cases publicados (`yearConflict` false o year omitido) |
| CaseDetail | ProjectPhaseStory + relato + mapa | phases[] + MD |
| TechnologyPage | GostFlow full + … | MD |
| AboutPage | Timeline about + 2017/2008 + MVV + equipo | timeline + people |
| ContactPage | form + FormStatus + canales | contact |
| NewsIndex | NewsCard + destacada | news |
| NewsDetail | artículo | news slug |

## Addendum 2.2 — componentes

### SignalsStrip
Home bajo header. Coral. Lista max 4. Hidden si 0. Pausa, teclado, reduced-motion, sin CLS, sin marquee rápido. Dep: news.

### NewsIndex / NewsCard / NewsDetail
Índice actualidad; card; detalle OG/NewsArticle. Filtro categoría solo si poblada.

### ProjectPhaseStory / PhaseNavigation / PhaseMediaGrid / EvidenceCaption
Fases no homogéneas. Desktop: hero + 2 secundarias + caption + screenshot/mapa/doc cuando haya. Móvil 1 col. EvidenceCaption muestra caption + evidenceLevel (no como claim científico).

### MediaViewer
Lightbox: Escape, trap, prev/next, caption, alt, contador, touch, reduced-motion. Carga on demand. Swipe opcional, controles visibles.

### CookieConsent / PrivacyPreferences
Solo si hay no-esenciales. Sin proveedor CMP. Copy REQUIERE_REVISION_LEGAL.

### FormStatus / ErrorState / EmptyState
Estados form; 404/500/mapa/imagen/URL/news/filter/offline. Identidad GeoTactics.

Islas JS: mapa, menú, drag opcional, Signals (si >1), MediaViewer, form enhance. El resto HTML estático.
