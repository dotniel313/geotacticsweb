# GEOTACTICS_MASTER_CONTENT_MATRIX

**Audit:** CONTENT_RECONCILIATION_AUDIT_1.0  
**App:** 3.6.0-alpha.1 — copy DRAFT_EDITORIAL  
**EVIDENCE_STATUS:** DOCUMENTED | OWNER_MEMORY | CONFLICT | GENERIC_ALPHA | MISSING | MIXED

Leyenda RECOMMENDED_DIRECTION: KEEP | REWRITE | REPLACE_WITH_HISTORICAL | NEEDS_EVIDENCE | REMOVE | OWNER_DECISION

---

## `/` Home

| SECTION | CURRENT_ALPHA_COPY (síntesis) | HISTORICAL_SOURCE | SOURCE_EXTRACT / SUMMARY | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED_DIRECTION | OWNER_DECISION_REQUIRED | ASSET_STATUS |
|---|---|---|---|---|---|---|---|---|
| Hero h1 | «Diseñamos sistemas que conectan territorio, datos y operación para convertir información en decisiones.» | SoT 02 hipótesis; Wix BI; meta 2026 | Wix no usa esta frase. 2026: datos geográficos → decisiones estratégicas. | GENERIC_ALPHA | Tres tonos (BI / geo-decisión / problema-sistema) | OWNER_DECISION; no KEEP como histórico | Sí A1/A4 | — |
| Hero support | Amazonía; soluciones digitales; información → gestión | Ibarra origen Wix/SoT; NL 2026 | Wix Ibarra primero; alpha privilegia Amazonía | MIXED | Origen Ibarra vs «desde Amazonía» | REWRITE con origen+base; no borrar Ibarra | Parcial | — |
| Hero CTA | Conversemos sobre el problema → `/contacto` | 2026 INICIAR PROYECTO mailto; WA FAB | Canal distinto, intención similar | DOCUMENTED | mailto vs /contacto | KEEP estructura; no cambiar CTA ahora | No (gate 3.6) | — |
| Evidence 2017 | Primera materialización SIGDR Gualsaquí | Wix/I1/SoT | Coincide | DOCUMENTED | Gualsaqui vs Gualsaquí; Quisinche | KEEP | Coords no | — |
| Evidence 31 parroquias | Escala PDOT; no habitantes | I1 CAPTURE censo 31 | Coincide | DOCUMENTED | — | KEEP | — | — |
| Evidence territorio+gestión+ops | Experiencia triple | HUD 5 cats; Wix BI | Parcial | GENERIC_ALPHA | HUD 5 ≠ 3 bullets | REWRITE cuando F1 | F1 | — |
| Capabilities grid | 5: IT, GovTech, ops, mercado, móvil | HUD: IT, gobernanza, recursos, legado, especiales; Wix: DW/estudios/org/proyectos/procesos | Alpha es mapa SoT 3.1 no Wix | CONFLICT | Tres taxonomías | OWNER_DECISION F1; no REPLACE automático | Sí | — |
| GOST / Method strip | GOST no software no BI no GIS; flujo problema→decisión | Wix GOST+BI+planificación; SoT cadena; GOST_CONTEXT ciclo | Alpha más doctrinario; Wix más BI | MIXED | Wix une GOST y BI; SoT los separa | REWRITE rico metodológico **sin** volver GOST=software | A4 | — |
| Identity bridge | Empresa EC; Ibarra→NL; problema real | Overlay 9 años; Wix BI | Alpha SoT | MIXED | 9 años vs 2017 | KEEP doctrina; no 9 años | A2 | — |
| Products showcase | Catálogo 3.2 | Wix subconjunto; Sheet 2026 más productos | 2.0 más productos que Wix | MIXED | purpose UNKNOWN en varios | KEEP lista; REWRITE fichas débiles | D1–D4 | LIVE CTAs DS/OM/Explora |
| Cases strip | 7 casos | Wix+I1+Sheet | La Victoria no está | MIXED | C3 | KEEP 7; no añadir | C3 | fotos no |
| Map | presencia / coords selectos | I1 Leaflet todos proyectos; Unsplash fotos | 2.0 no clona mapa I1 | MIXED | coords conflictivos | KEEP cautela; no pins conflictivos | — | — |
| Timeline compact | 2008 memory; 2017; 2018; NL post-2020; O/T; PDOT; diversificación | SoT 11; I1 years; overlay 9 años | 2008 = memory | MIXED | 2008 vs no publicar; Dayuma no en compact home | KEEP labels dateKind; no «desde 2008» | A2 | — |
| Signals | vacío editorial | ticker Sheets 2026; I1 ÚLTIMAS NOTICIAS | Canal KEEP+REFACTOR 3.6 | MISSING contenido veraz | ticker typos/XSS | KEEP vacío o Signals documentados | I1 | no ticker |
| Footer | Warehouse-Mart disclaimer; email NL; nav | Wix pie S.A. 2017 + 2 sedes + tels | 2.0 más honesto en DW | MIXED | calles/tels/redes | KEEP disclaimer; no calles aún | G1–G5 | logo header |
| Overlay MVV | **ausente en 2.0** | `index.html` 2026 | Misión/visión/valores genéricos | DOCUMENTED 2026 no Wix | vs identity.ts | OWNER_DECISION no auto-port | A1 | — |

---

## `/que-hacemos`

| SECTION | CURRENT_ALPHA | HISTORICAL | EXTRACT | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED | OWNER | ASSET |
|---|---|---|---|---|---|---|---|---|
| Intro | Construimos sistemas alrededor de problemas reales | SoT 02; no Wix literal | GENERIC_ALPHA + OWNER doctrina | — | REWRITE hacia evidencia de trabajo real | A1 | — |
| CAP-01 IT | Territorio+dato+indicadores GIS/BI | HUD IT; SIGDR/CAPTURE/DS | DOCUMENTED mapping | GovTech overlap | KEEP con evidencia SIGDR/PDOT | — | — |
| CAP-02 GovTech | Sistemas institucionales | HUD gobernanza; O/T; Wix no dice GovTech | GENERIC_ALPHA label | anglicismo vs gobernanza digital 2026 | OWNER F1 | — |
| CAP-03 Operacionales | Proceso+registro | SIGC lecturas; CAPTURE | DOCUMENTED parcial | vs «recursos» HUD agua/agro | KEEP mapeado a SIGC/CAPTURE | — | — |
| CAP-04 Mercado | Oferta+demanda+ubicación | OrangeMap/Explora/GUANTA? | NEEDS_EVIDENCE GUANTA | purpose UNKNOWN | NEEDS_EVIDENCE | D1 | — |
| CAP-05 Móvil | Campo captura | CAPTURE; apps I1; Termómetro | DOCUMENTED | — | KEEP como capa no producto | — | — |

**Mapeo evidencia capacidades ↔ trabajo histórico**

| Capacidad 2.0 | Evidencia fuerte | Evidencia débil | HUD 2026 equivalente |
|---|---|---|---|
| Inteligencia territorial | SIGDR, CAPTURE, PDOT, DS, GIS | CMI | INTELIGENCIA TERRITORIAL |
| GovTech | O/T GADPS, Observatorio?, E-GPS? | label | GOBERNANZA DIGITAL |
| Sistemas operacionales | SIGC, EMAPAI lecturas, CAPTURE | — | GESTIÓN DE RECURSOS (parcial agua) |
| Plataformas de mercado | OrangeMap, Explora | GUANTA, RANTYI, Fixis | PROYECTOS ESPECIALES (parcial) |
| Aplicaciones móviles | CAPTURE, Termómetro, MadaRadio app, SIGC app | — | transversal |
| *(sin homólogo 2.0)* | Patas a la Obra | — | LEGADO SOCIAL |

---

## `/productos` y futuras `/productos/[slug]`

| SECTION | CURRENT_ALPHA | HISTORICAL | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED | OWNER | ASSET |
|---|---|---|---|---|---|---|---|
| Intro catálogo | capacidades → sistemas | Wix familias SIGDR/SIGC | MIXED | ProductDetail missing | KEEP lista; no implementar detail ahora | — | — |
| SIGDR | ficha 3.2 | Wix línea + instancias | DOCUMENTED | CMI Wix | REWRITE CMI off hasta evidencia | — | galerías Wix |
| SIGC | ficha | Wix incompleta TITLE GOES HERE | DOCUMENTED casos | — | KEEP | — | — |
| YAKU | OLAP | Wix hijo EMAPAI | DOCUMENTED | categoría HUD | KEEP | — | demo private |
| O/T | gestión resultados | Wix POA PAC; no Sheet | DOCUMENTED Wix | Sheet omite | REPLACE_WITH_HISTORICAL POA/PAC | — | — |
| DataSucumbíos | LIVE | Wix visualizadores | DOCUMENTED | fusión Sheet | KEEP product≠PDOT | E3 | LIVE |
| OrangeMap / Explora | LIVE CTA | no Wix | OWNER+HEAD | polish | KEEP CTA 3.6 | E5 | LIVE |
| Termómetro | LIVE polish | I1 2025 ES AHORA | MIXED | cliente político | OWNER | D5 | — |
| MadaRadio | catálogo | Wix page + I1 | MIXED | URL .com vs .ec | NEEDS_EVIDENCE host | E1 | .key |
| GUANTA RANTYI Fixis Observatorio | catálogo débil | post-Wix Sheet | MISSING purpose | — | NEEDS_EVIDENCE no rewrite genérico | D1–D4 | — |
| CAPTURE | componente | I1 demo URL | DOCUMENTED | BROKEN surface | KEEP component | — | BROKEN |
| Nurse GO | no público | .key | DOCUMENTED interno | — | KEEP hidden | — | — |

---

## `/casos`

Ver CASE dossier. Resumen: 7 KEEP; copy REWRITE hacia Wix fases; La Victoria OWNER; fotos NOT_PUBLIC.

---

## `/tecnologia`

| SECTION | CURRENT_ALPHA | HISTORICAL | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED | OWNER | ASSET |
|---|---|---|---|---|---|---|---|
| GOST | doctrina 3.5 | Wix metodología + BI | MIXED | riqueza histórica recortada | REWRITE léxico (Diagnóstico, Sistematización, Explotación, UBI, RDD) **sin** software | A4 | — |
| Flujo method.ts | problema→decisión | SoT 02 + GOST_CONTEXT | MIXED | GOST_CONTEXT empieza en CAPTURA; SoT en PROBLEMA | KEEP problema-primero; añadir ciclo OWNER como capa | — | — |
| Disciplinas | BI GIS DW OLAP CMI mobile web | Wix DW/BI; matriz 06 | DOCUMENTED + none CONFIRMED DW/CMI | lema vs celda | KEEP distinción identidad vs implementación | — | — |
| Lineage | SoT 05 | Wix no grafo | OWNER_CONFIRMED | Nurse GO off | KEEP | — | — |
| Timeline expandida | timeline.ts | I1 years; overlay | MIXED | ver § Timeline abajo | KEEP dateKind | A2 C1 | — |

---

## `/nosotros`

| SECTION | CURRENT_ALPHA | HISTORICAL | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED | OWNER | ASSET |
|---|---|---|---|---|---|---|---|
| Hero | Empresa EC sistemas problemas reales | Wix BI solutions | GENERIC_ALPHA | — | REWRITE con discurso auténtico post-A1 | A1 | — |
| Quiénes somos | continuidad Ibarra–NL | Wix NOSOTROS BI | MIXED | — | REPLACE_WITH_HISTORICAL BI **y** SoT problema | A4 | — |
| Purpose/Mission/Vision | DRAFT identity.ts | Wix **no MVV**; overlay 2026 **sí** | CONFLICT | tres textos | OWNER_DECISION | A1 | — |
| Historia A–F | Ibarra 2017 GOST NL productos diversificación | SoT 11 | MIXED | año traslado UNKNOWN (honesto) | KEEP honestidad; REWRITE tono | — | — |
| Principles 01–06 | hábitos SoT | no Wix | GENERIC_ALPHA derivado | overlay valores distintos | OWNER vs overlay valores | A1 | — |
| GOST block | ontológico | Wix | MIXED | — | igual `/tecnologia` | — | — |
| Equipo | pending historical | Wix 8; I1 3; Sheet 1 | CONFLICT | **gap explícito OWNER** | KEEP pending; no publicar | B1–B5 | fotos Wix |
| Presencia | Ibarra origen NL base; mapa teaser | Wix 2 direcciones | MIXED | calles | NEEDS_EVIDENCE calles | G1 G2 | — |
| Diversificación | nuevos mercados | HUD especiales | GENERIC_ALPHA | — | NEEDS_EVIDENCE productos D | D | — |

---

## `/contacto` `/noticias` `/privacidad` `/legal` `/404`

| ROUTE | CURRENT_ALPHA | HISTORICAL | EVIDENCE_STATUS | CONFLICTS | RECOMMENDED | OWNER | ASSET |
|---|---|---|---|---|---|---|---|
| /contacto | email+WA+ciudad; form needs_integration | Wix tels+2 dir+email; 2026 WA+mailto | MIXED | tels/calles | KEEP verified only | G | no street |
| /noticias | vacío | ticker Sheets | MISSING editorial | XSS ticker | KEEP empty o I1 candidates | I1 | — |
| /privacidad /legal | DRAFT_LEGAL | Wix S.A. 2017 | GENERIC_ALPHA | vigencia legal | OWNER G5; no pulir genérico | G5 | — |
| /404 | shell 3.6 | — | — | — | KEEP | — | — |

---

## Timeline 3.5 vs evidencia

| Hito alpha | Precisión | Documentado | Memoria OWNER | Conflicto | Missing |
|---|---|---|---|---|---|
| 2008 GOST | memory | no independiente | sí Plan Ecuador | vs «9 años»; vs no publicar 2008 | doc 2008 |
| 2017 SIGDR Gualsaquí | exact | Wix I1 | — | toponimia | — |
| 2018 SIGC Pimampiro | exact | Wix JAAPP I1 | — | nombre junta | — |
| ~2019 YAKU | approximate | I1 2019 Wix | — | — | — |
| NL after 2020 | period | OWNER+SoT | año exacto | overlay implica continuidad NL | año |
| 2021 MadaRadio | exact OWNER | no Wix | Oreja Multimedia | I1 dice 2025 app | dos fechas origen vs app — alpha las separa bien |
| 2023 O/T | exact | Wix I1 | — | no Sheet | — |
| PDOT 2023–2038 | period | Wix I1 | — | Sheet 2024 producto | — |
| Dayuma unresolved | unresolved | 2022 Wix I1 vs 2024 Sheet | proyecto cantón | **abierto** | — |
| 2025 superficies | period | Sheet I1 | — | — | — |
| 2025–26 diversificación | period | Sheet | — | purpose UNKNOWN | — |
| **Missing vs histórico** | | SIGC La Victoria 2019; CTEA 2020; fotos PDOT mar 2024; constitución S.A. 2017; Ibarra sede Wix | | no añadir UI | |

---

## Misión / visión (cierre de §18)

| | HISTORICAL_TEXT | CURRENT_ALPHA_TEXT | EVIDENCE | RECOMMENDED_DIRECTION |
|---|---|---|---|---|
| Misión | **No hay** bloque titulado en Wix. Overlay 2026: «Proveer soluciones tecnológicas y de inteligencia territorial innovadoras que empoderen a organizaciones y gobiernos…» | identity.ts: estructurar problemas reales → sistemas útiles gestión/decisión | Overlay = CURRENT_PRODUCTION_2026 genérico; Wix = BI paragraph no «misión» | No pulir genérico. OWNER A1. Si no hay misión histórica Wix, **decirlo** (ya). No manufacturar. |
| Visión | Wix ausente. Overlay: referente Ecuador y región, gobernanza digital, desarrollo inteligente | identity.ts: empresa EC que transforma experiencia territorio/datos/gestión en productos | ídem | ídem |
| NOSOTROS Wix (equivalente) | Soluciones BI desde centros de información; reducir tiempo de gestión; mejores decisiones | whoBody alpha más amplio/genérico | HISTORICAL BI | Candidato REPLACE_WITH_HISTORICAL + SoT |

---

## Contacto / superficies (resumen)

Ver HISTORICAL_ASSET_DOSSIER. Alpha contact.ts = CURRENT_VERIFIED email+WA+ciudades. Surfaces 3.6 vs SoT 10: **conflicto MadaRadio host** y Observatorio URL (geotactics vs gadmlagoagrio).
