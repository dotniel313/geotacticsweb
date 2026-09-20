# ADR 001 — Arquitectura frontend Corporate Web 2.0

**Estado:** recomendada (no instalada)  
**Fecha:** 18 septiembre 2026  
**Fase:** 2.1.0  
**No ejecutar:** no `npm create`, no Astro en el repo en esta fase.

---

## Contexto

Producción actual: Apache + `index.html` monolítico + PapaParse + Google Sheets (auditoría Fase 1). SEO parte de JS; no hay URLs de producto/caso; ~13 productos + casos + mapa Leaflet + a11y + crecimiento editorial.

Restricciones: no React/Next por moda; conservar Apache; quitar Sheets en runtime; contenido estructurado.

---

## Opciones

### A. HTML estático modular

Páginas `.html` + CSS/JS propios. Leaflet por script.

- A favor: cero toolchain; Apache idéntico.
- En contra: 13 productos × campos = copiar HTML; riesgo de nuevo monolito; sin schema de contenido; mantenimiento peor que hoy a escala de catálogo.

### B. Astro + Markdown/JSON (SSG)

Colecciones de contenido → HTML estático. JS solo en islas (nav móvil, Leaflet). Output copiable a Apache.

- A favor: HTML real por URL (SEO); IA congelada = archivos; 13 fichas = 13 MD; mapa aislado; Markdown = editorial; rendimiento por defecto; no SPA.
- En contra: hay toolchain en **build**, no en runtime; curva breve.

### C. Otra

- **SvelteKit/Next/Remix:** hidratación innecesaria para corporativo; no justificada.
- **Seguir con Sheets:** contradice aceptación (runtime Sheets) y auditoría.
- **CMS headless inmediato:** overkill; se puede añadir después sin cambiar IA (Content Layer).

---

## Decisión

**B. Astro (SSG) + colecciones Markdown/JSON + islas mínimas.**

Motivo demostrado: el fallo actual es **modelo de contenido + URLs**, no falta de React. Astro produce el mismo artefacto que A (archivos estáticos) con el modelo de datos de `GEOTACTICS_CONTENT_BLUEPRINT.md`.

Leaflet: `client:idle` o equivalente. Sin fetch a Sheets. Dominio `www.geotactics.com.ec`. Cutover: publicar `dist/` en Apache; archivar HTML monolíticos fuera de docroot.

---

## Consecuencias

- Fase 3 = proyecto Astro **nuevo** (o carpeta) sin tocar producción hasta cutover.
- Paleta y Open Sans vía CSS propio (no clonar 618 `!important`).
- Schema Collection = puerta para no publicar yearConflict / métricas NO_PUBLICAR.
- Remix Icon: sustituir por SVG locales cuando se implemente.

## No decide este ADR

Hosting Apache ya existe. Formulario de contacto (backend) posterior. CMS visual posterior.
