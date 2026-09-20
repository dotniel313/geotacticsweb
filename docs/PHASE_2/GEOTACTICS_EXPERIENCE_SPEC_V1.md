# GEOTACTICS CORPORATE 2.0  
# EXPERIENCE & DESIGN SPECIFICATION  
**Versión: 1.1**  
**Fecha: 18 septiembre 2026**  
**Fase documental: 2.2.0**  
**Estado: FROZEN FOR IMPLEMENTATION** (no inicia Fase 3).

Base: v1.0 (Fase 2.1) + addendum premium 2.2.  
No modifica Source of Truth — GeoTactics Corporate 2.0 v1.0.  
No reabre: H1, supporting, nav, GOST, clasificación de productos, A/B/C, 2008/2017, Astro SSG, mapa CASO/SEDE, tactical layer.  
No es trademark el H1. TOS = nombre **interno** de dirección visual.

---

## 1. Identidad de experiencia

**H1 de trabajo:** Diseñamos sistemas que conectan territorio, datos y operación para convertir información en decisiones.

**Supporting de trabajo:** Desde la Amazonía ecuatoriana desarrollamos soluciones digitales para organizaciones, territorios y operaciones que necesitan convertir información en capacidad de gestión.

**CTA principal:** Conversemos sobre el problema → `/conversar`  
**CTA secundario:** Cómo trabajamos → `/tecnologia`

Origen en hero: Nueva Loja · Sucumbíos · Amazonía ecuatoriana (dato, no turismo).  
Ancla histórica Home: **2017** (primera materialización documentada). No “desde 2008”, no “18 años”, no “9 años” hasta copy de años aprobado.

---

## 2. Navegación congelada

`Inicio · Qué hacemos · Productos · Casos · Tecnología · Nosotros · Conversar`

Tecnología = sección principal.  
Desktop: nav completa si cabe. Tablet: colapsa si no cabe limpiamente; CTA Conversar visible. Móvil: menú + CTA Conversar accesible.

---

## 3. Home congelada (secuencia) — v1.1

| # | Bloque | Componente | Notas |
|---|---|---|---|
| 01 | Header | SiteHeader | Sticky; no HUD opaco |
| 02 | Signals Strip | SignalsStrip | Coral; **ocultar si 0 noticias**; no marquee rápido |
| 03 | Hero | Hero | H1 + supporting + CTAs + origen + micro 2017 |
| 04 | Evidence | EvidenceStrip | Cualitativa; **sin** 27.539; **sin** 28K |
| 05 | Qué hacemos | CapabilityGrid | 5 capacidades |
| 06 | Productos | ProductShowcase | A/B/C |
| 07 | GOST | GostFlow | 4 pasos |
| 08 | Casos | CaseGrid | Acceso a ficha con fases si existen |
| 09 | Mapa | ExperienceMap | CASO + SEDE |
| 10 | Timeline compacta | Timeline `variant="home"` | **No fusionar** con confianza; 2008 no es “desde 2008” |
| 11 | Confianza | TrustGrid | Nombres tipográficos |
| 12 | CTA | ConversationCTA | |
| 13 | Footer | SiteFooter | Sin disclaimer DS; Actualidad + legal (`REQUIERE_REVISION_LEGAL`) |

LineageTrustBand de 2.1 **retirado** de Home (Timeline + TrustGrid).

Empresa ≠ DataSucumbíos se logra porque el H1 nombra sistemas/empresa, DS es **una** card del grupo A (mismo peso visual que OrangeMap y Explora), no hay iframe, no hay wordmark DS en header.

---

## 4. Productos en Home (modelo 2.1)

### A. EN OPERACIÓN
DataSucumbíos · OrangeMap · ExploraSucumbíos  
Estado: **EN OPERACIÓN**. CTA: abrir URL (nueva pestaña) + ficha. DS no más grande que las otras dos.

### B. NUEVA GENERACIÓN / PRODUCTOS PROPIOS (compacto)

| Producto | Estado público Home | CTA | Prohibido |
|---|---|---|---|
| GUANTA | EN DESARROLLO | Conversar / ficha | Demo Sheet (= MadaRadio); “Comprar”; lanzamiento público |
| RANTYI | PRELANZAMIENTO | Ficha | “Marketplace inverso”; funciones del .key no analizado |
| Fixis / Fixis PRO | PRELANZAMIENTO | Ficha (ecosistema) | Servicio comercial activo |
| MadaRadio | EN DESARROLLO | Ficha | Demo 000 como prueba; “es GOST”; funciones del .key |
| Observatorio | PRELANZAMIENTO | Ficha; URL solo si se etiqueta prelanzamiento | Presentarlo como legado Sheet |

### C. TRAYECTORIA (no catálogo SaaS)
SIGDR · SIGC · YAKU · O/T — línea o chips hacia `/productos` (filtro históricos) y casos. Sin “Solicitar demo”.

Termómetro Social: no grupo Home; `/productos` + `/que-hacemos` / Tecnología (aplicaciones de campo).  
CAPTURE: componente; PDOT + Tecnología.

---

## 5. GOST

Público en Home y nav. Home: CAPTURAR → CONECTAR → ENTENDER → DECIDIR.  
`/tecnologia`: ciclo de 8 + BI/DW/Mart/GIS/OLAP como capas. Restricciones SoT íntegras.

---

## 6. Mapa y 2008/2017 y PDOT

Mapa: evidencia territorial; tipos CASO | SEDE; Nueva Loja sede; Ibarra no publicar; OSM attribution; no nav primaria.  
Nosotros: 2008 memoria/origen atribuido (secundario); 2017 materialización (primario).  
27.539: case study PDOT, `NO_PUBLICAR` hasta copy. Nunca habitantes. Nunca 28K.

---

## 7. Visual y tactical layer

Marca: `GEOTACTICS.` coral `#E84C3D` (Signals, CTA). Sistema: coral + graphite + grises + off-white. Café `#4A3E3D` **heredado, no dominante**. Open Sans (self-host en prod). Retícula, cartografía. Foto real / capturas / diagramas. No stock. TOS no copy de usuario.

Desktop: hover, coordenadas, IDs, grid, fichas, líneas, drag opcional. Tablet reducida. Móvil sin drag. Click/Enter = acción. `prefers-reduced-motion`.

---

## 8. Arquitectura de implementación (decisión)

Ver `ADR_001_FRONTEND_ARCHITECTURE.md`: **Astro + colecciones Markdown/JSON**, salida estática para Apache. Leaflet como isla. Sin Sheets en runtime.

---

## 9. Addendum 2.2 (resumen)

- `/noticias` definitiva; Signals no en nav principal.  
- Casos: `phases[]` + ProjectPhaseStory; media lazy + lightbox AA.  
- Timeline Home compacta / Nosotros expandida (2008 memoria → 2025–26).  
- Media inventory previo a copiar Wix.  
- Premium: privacy sin CMP falso; terceros; security; form; 404; CWV; no PWA forzada.

## 10. Documentos

Newsroom, Media inventory, Premium standard + blueprints. ADR Astro **sin cambio**.
