# Blueprint de datos (sin crear archivos de contenido)

**Fase:** 2.2.0  
**Árbol conceptual** (Fase 3):

```
src/content/config.ts
src/content/products/*.md
src/content/cases/*.md          # + frontmatter phases[]
src/content/capabilities/*.md
src/content/components/*.md
src/content/people/*.md
src/content/news/*.md
src/content/company/
  index.md
  contact.json
  offices.json
  gost.json
  home.json
  timeline.json                 # nodos 2008…2026
src/content/clients/*.md
src/config/site.ts              # nav, CTA, performance
src/config/privacy.ts           # categorías cookie; CMP on/off
src/config/thirdParties.ts
src/config/legalLinks.ts        # REQUIERE_REVISION_LEGAL
```

Configuración de sitio (no contenido editorial): `src/config/site.ts` — nav, canonical, canales, performance.

Assets: `public/` (favicon, OG) y `src/assets/` (fotos importadas, procesadas). **No** Unsplash.

---

## Qué es cada cosa

| Tipo | Formato | Ejemplos |
|---|---|---|
| Estructurado | frontmatter YAML + JSON de config | estados, slugs, lat/lng, homeGroup, urlStatus |
| Markdown | cuerpo | relato de caso, ficha de producto, Nosotros, Tecnología |
| Metadata | schema Collection | enums alineados a SoT |
| Asset | archivos de imagen/diagrama en repo | screenshots, fotos caso, logo |
| Configuración | TS/JSON de sitio | nav, CTA strings **congelados** (pueden vivir en `home.json` para no hardcodear en layouts) |

Strings H1/supporting/CTA: `src/content/company/home.json` (fuente editorial única).

---

## Enums de publicación (gating)

```
publicationState: en_operacion | en_desarrollo | prelanzamiento | trayectoria
homeGroup: operation | next | lineage | none
urlStatus: live | down | conflict | none
gostRelation: none | fundamento | aplica_principios | no_afirmar
markerType: caso | sede
resultPolicy: publish | no_publicar
```

`27.539` vive en `cases/pdot-sucumbios.md` como `metrics[]` con `resultPolicy: no_publicar`. El template **no renderiza** métricas con esa flag.

`yearConflict: true` → no mostrar año o no emitir ruta hasta cierre.

---

## Colección Product (campos)

id, slug, name, type, publicationState, homeGroup, homeOrder, sector, summary, gostRelation, relatedCaseSlugs, relatedProductSlugs, url, urlStatus, period, ctaType (`open_url|converse|view_cases|none`), platforms, screenshotRefs.

Cuerpo MD: solo hechos SoT.

Termómetro: `homeGroup: none`. CAPTURE no está aquí.

---

## Colección Case

slug, title, client, territory, year, yearConflict, productIds, componentIds, mapLat, mapLng, markerType=caso, featuredHome, galleryRefs, metrics[], phases[].

---

## Relación Home

`home.json`:

```
operation: [datasucumbios, orangemap, explorasucumbios]
next: [guanta, rantyi, fixis, madaradio, observatorio]
lineage: [sigdr, sigc, yaku, ot]
featuredCases: [gualsaqui, pimampiro, pdot-sucumbios]
```

Peso visual A: `equal` (tres columnas, misma altura).

News: `src/content/news/*.md`; Signals lee `featured` o recientes `active`.

Timeline: `company/timeline.json` nodos con year, label, evidenceTag (`memoria_fundador` | `materializacion_documentada`), mediaRefs, relatedProductIds, relatedCaseSlugs.

---

## Migración desde Sheets

Fase 3 **no** lee Sheets en el navegador. Importación editorial (si se usa) es one-shot a Markdown, fuera de runtime. Prototipos HTML no son CMS.
