# PHASE 3.6.0-alpha.1 — Corporate shell

**Base:** 3.5.0-alpha.1  
**SoT:** 1.0.1 APPROVED  
**Block C:** APPROVED_FOR_ALPHA_STRUCTURE  
**Gate:** AWAITING_OWNER_BLOCK_D_STRUCTURAL_REVIEW  
**Producción `index.html` raíz:** intacta

## Hecho

- Signals KEEP+REFACTOR (franja coral Home; vacío editorial si no hay posts)
- `/noticias` + `/noticias/[slug]` (paths vacíos)
- Superficies `src/data/surfaces.ts`
- CTA Abrir plataforma solo LIVE+publicable; Ver proyecto → caso público
- `/contacto` + Conversar → `/contacto` (redirect `/conversar`)
- Footer (logo acotado para no overflow)
- `/privacidad` `/legal` `/404`
- `sitemap.xml` + robots alpha Disallow
- Sin analytics, sin CMP
- Noticias **no** en header (Footer + Signals)

## Home

Orden 3.5 conservado. Signals sticky KEEP. Footer añadido. Sin reescritura de copy.

## JS

- Contacto: constructor mailto
- Signals: rotación solo si hay >1 entrada (hoy 0)
- Leaflet (casos) y Timeline (3.5) sin cambio de librería
