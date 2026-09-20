# Plan SEO (no implementar)

**Fase:** 2.0.0  
**Dominio canónico propuesto:** `https://www.geotactics.com.ec`

---

## 1. Principios

- Title y description hablan de **empresa**, no de DataSucumbíos como marca paraguas.
- No indexar prototipos HTML ni CSV de Sheets.
- No schema de SoftwareApplication para históricos presentados como SaaS.
- Open Graph: wordmark/logo propio; no placeholder que devuelva HTML.

---

## 2. Title patterns

| Página | Patrón |
|---|---|
| Home | GeoTactics — Sistemas de territorio, datos y operación |
| Qué hacemos | Qué hacemos \| GeoTactics |
| Productos | Productos y plataformas \| GeoTactics |
| Producto | {Nombre} — {estado} \| GeoTactics |
| Casos | Casos \| GeoTactics |
| Caso | {Territorio}: {producto} \| Caso GeoTactics |
| Tecnología | Cómo trabajamos — GOST \| GeoTactics |
| Nosotros | Nosotros \| GeoTactics · Nueva Loja |
| Conversar | Conversar \| GeoTactics |
| Actualidad | Actualidad \| GeoTactics |
| Noticia | {título} \| GeoTactics |

Estados en title de producto: “en operación” / “en desarrollo” / “trayectoria”. Nunca “plataforma líder”.

---

## 3. Meta descriptions (plantillas, ≤ 155)

- Home: Empresa ecuatoriana de tecnología. Diseñamos sistemas que conectan territorio, datos y operación. Nueva Loja, Sucumbíos.
- Productos: Catálogo de productos actuales, prelanzamiento e históricos. DataSucumbíos es uno de ellos, no la empresa.
- Tecnología: Metodología GOST y capas de datos, BI y GIS. Sin claims de patente ni ISO.

---

## 4. Open Graph

```
og:site_name  GeoTactics
og:type       website | article (casos)
og:locale     es_EC
og:image      logo o captura de marca en dominio propio (no Unsplash, no OG roto actual)
twitter:card  summary
```

---

## 5. Schema.org aplicable (conservador)

| Tipo | Dónde | Notas |
|---|---|---|
| Organization | Home / Nosotros | name, url, logo, address Nueva Loja, sameAs cuando exista LinkedIn de empresa |
| Place | Sede | Coordenadas actuales del mapa |
| WebSite | Home | url, publisher |
| BreadcrumbList | interiores | |
| CreativeWork o Article | Caso | no Claim de ROI |
| NewsArticle o Article | `/noticias/{slug}` publicado | según tipo; nunca draft |
| SoftwareApplication | Solo producto **actual** con URL viva, si el dueño acepta | OrangeMap, Explora, DataSucumbíos (publisher GeoTactics; DS no es Organization) |

No usar FAQPage inventado. No AggregateRating.

---

## 6. URLs

- Minúsculas, slugs ASCII o UTF-8 consistente (`datasucumbios`, `pdot-sucumbios`).
- Canonical = URL https www.
- Un producto ≠ un caso: `/productos/sigdr` vs `/casos/gualsaqui`.

---

## 7. Sitemap / robots (especificación)

`robots.txt`: Allow `/`; Disallow prototipos `Index1.html`, `index0.html`, `index2.html`, `index N.html`; Disallow query de Sheets si se proxyficaran.

`sitemap.xml`: home + 7 secciones + productos publicados + casos **sin** yearConflict + `/noticias` + slugs `active` (no draft).

RSS/Atom estático `/noticias.xml` si hay ≥1 noticia publicada.

---

## 8. Contenido que no se indexa como hecho

“Desde 2008”, 28K, 27.539 hasta aprobación, stand-by político de O/T, cliente Termómetro en conflicto, Inqui/Ancestral/E-GPS.
