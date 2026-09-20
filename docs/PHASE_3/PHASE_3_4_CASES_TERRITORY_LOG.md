# PHASE 3.4.0-alpha.1 — Cases + Territory

**Fecha:** 18 septiembre 2026  
**Estado:** **AWAITING_OWNER_BLOCK_B_STRUCTURAL_REVIEW**  
**Base:** 3.3.0-alpha.1  
**SoT:** 1.0.1  
**Modo:** STRUCTURE FIRST. Copy = DRAFT_EDITORIAL.  
**No** Block C. **No** /nosotros copy. **No** Timeline/Signals/footer final. **No** cutover.

## Entregado

- Colección `cases` + 7 casos
- `/casos` índice (CaseCard ≠ ProductCard)
- `/casos/[slug]` CaseDetail reutilizable (secciones vacías omitidas)
- TerritorialMap (Leaflet, OSM, atribución) + lista accesible
- Home: strip de casos featured + mapa
- Relación Case→products[]; Product→casos derivada (`lib/cases.ts`)
- Captures internas de gallery/documents NEEDS_REVIEW no renderizan

## Casos y status

| slug | publicationStatus | dateStatus | mapa |
|---|---|---|---|
| gualsaqui | public | publish 2017 | omit (coords conflicto) |
| vacas-galindo | public | publish 2018 | omit |
| pimampiro | public | publish 2018 | omit |
| emapai-yaku | public | publish 2018–2019 | omit |
| dayuma-ines-arango | public | unresolved (sin año en UI) | omit |
| ot-gad-sucumbios | public | publish 2023 | Nueva Loja verified_source |
| pdot-sucumbios | public | publish 2023–2038 | Nueva Loja verified_source |

## Fases

Por caso, solo fases con respaldo conceptual. PDOT: preparación, levantamiento, diagnóstico, propuesta, modelo de gestión, inteligencia. No plantilla obligatoria.

## JS

Leaflet cargado en `TerritorialMap` (Home y `/casos`). No en el resto del sitio.

## Producción

`index.html` raíz intacto.

**DETENERSE. No iniciar Block C.**
