# Newsroom y Signals — especificación

**Fase:** 2.2.0  
**No implementar.** Nav principal **no** incluye Noticias (acceso: Signals, footer, contexto).

---

## 1. Nombre visible de la cinta

| Candidato | Uso | Veredicto |
|---|---|---|
| SIGNALS | Label de cinta (identidad táctica, inglés corto) | **Recomendado en UI de la cinta** (`SIGNALS`) |
| ACTUALIDAD | Accesible / SEO de la página | **Título de `/noticias`** |
| NOTICIAS | Demasiado genérico en la cinta; correcto en footer | Footer: “Actualidad” o “Noticias” |

Copy de trabajo: cinta **SIGNALS**; página **Actualidad**; `aria-label="Actualidad GeoTactics"`. Interno: GeoTactics Signals.

---

## 2. Signals Strip (Home: Header → Signals → Hero)

- Color dominante de cinta: coral `#E84C3D` sobre texto off-white / graphite según AA.
- Café `#4A3E3D` no pinta la cinta.
- Desktop: `[ SIGNALS / 001 ]  título truncado ........ FECHA   01/04 →` + “Ver todas” implícito en contador/enlace.
- Desplazamiento suave **opcional**; pausa on hover/focus; `prefers-reduced-motion` = estático; teclado (prev/next, Enter abre slug); clic normal; **sin marquee rápido**; altura reservada (no CLS).
- Móvil: 1 noticia; contador 01/04; botones visibles ≥ 44 px; sin ticker.
- **0 noticias publicadas (`active` + fecha + no draft): no renderizar la cinta** (el Hero sube bajo el header).
- CTA: Ver todas las noticias → `/noticias`.
- Fuente: colección `news` `featured` o las N más recientes publicadas (máx. 4 en cinta).

---

## 3. Arquitectura `/noticias`

```
/noticias              índice (hero editorial compacto + destacada + listado)
/noticias/{slug}       detalle
/noticias.xml          RSS/Atom estático **si** hay ≥1 publicada (recomendado)
```

No drafts en sitemap. Categorías **solo si hay al menos un ítem**:

EMPRESA · PRODUCTOS · IMPLEMENTACIONES · TERRITORIO · TECNOLOGÍA · PUBLICACIONES

No crear tabs vacíos. Paper CTEA-IE-2020 puede ser PUBLICACIONES si se redacta noticia real, no producto.

Filtros: categoría (si ≥2 categorías pobladas). Paginación o “más” futura; v1: listado estático completo si N es pequeño.

---

## 4. Campos News (publicación)

Ver `GEOTACTICS_CONTENT_MODEL.md`. Solo contenido real. Ticker Sheet actual (typos / “operaciones fuera del Ecuador”) = **NEEDS_REVIEW**, no copiar ciego.

Schema: `NewsArticle` si es noticia de empresa con fecha; `Article` si es nota editorial. OG por slug.

---

## 5. Componentes

SignalsStrip · NewsIndex · NewsCard · NewsDetail — ver blueprint.
