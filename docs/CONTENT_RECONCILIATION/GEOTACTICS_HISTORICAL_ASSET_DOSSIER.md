# GEOTACTICS_HISTORICAL_ASSET_DOSSIER

**Audit:** CONTENT_RECONCILIATION_AUDIT_1.0  
**Pipeline:** DISCOVERED → NEEDS_REVIEW → APPROVED → PUBLICABLE  
**Regla:** no copiar a `public/`. No reconocimiento facial. No identificar desconocidos.

## Sitio histórico reconstruido (inventario)

| Superficie | Hallazgo |
|---|---|
| Nav Wix | quienes-somos, metodología, SIGDR, SIGC, casos (Gualsaquí, Vacas Galindo, JAAPP, JALV, EMAPAI, YAKU, Dayuma, PDyOT, O/T, Patas, paper, audiovisual, datasucumbios) |
| Nav 2026 HUD | Nosotros / Operación y Proyectos; overlay MVV; ticker Sheets; FAB WA |
| Index1 | HUD desktop; equipo 3; proyectosDB hardcode |
| Headline Wix | Inteligencia de Negocios \| Ecuador |
| Slogan | Data / Warehouse - Mart |
| CTA 2026 | INICIAR PROYECTO mailto; dossier geotactics.info **404** |
| Footer Wix | GEOTACTICS. S.A. © 2017; dos sedes; tels históricos; redes |
| News | ticker Sheets (typos; XSS riesgo auditoría); Index1 estático |
| Team | Wix 8 fotos reales; 2026 Sheet+Flaticon; I1 Unsplash |

---

## Fotografías / marca (repo)

Glob de workspace en esta sesión: **0** coincidencias de jpg/png (posible ignore). Inventario Fase 2.2 **sí** lista archivos. No se asume ausencia física.

| file | project/case | phase | approxDate | location | peopleVisible | captionSource | credit | historicalUse | authorizationStatus | publicability |
|---|---|---|---|---|---|---|---|---|---|---|
| `logo.png` | marca | — | — | — | no | — | GeoTactics | header | NEEDS_REVIEW peso | uso marca sí |
| favicon | marca | — | — | — | no | — | — | favicon | AVAILABLE | yes |
| `G_L_2024.002–005.png` | marca 2024 | — | 2024? | — | unknown | — | GeoTactics | posible evolución logo | NEEDS_REVIEW | no adoptar ciego |
| header derivado 2.0 | marca | — | — | — | no | — | — | footer/header 3.6 | approved marca | yes header |
| Unsplash Index1 | — | — | — | — | stock | I1 | Unsplash | equipo | DO_NOT_USE | no |
| Flaticon 2026 | — | — | — | — | stock | Sheet | Flaticon | avatares | DO_NOT_USE | no |
| PHOTO-2024-03-04-… | PDOT | levantamiento | mar 2024 | Sucumbíos | probable (no nombrar) | Wix filename | unknown | fase campo | needs_review | NOT_PUBLIC |
| Galería Gualsaquí | Gualsaquí | implementación | ~2017 | Imbabura | probable | Wix | unknown | evidencia | needs_review | NOT_PUBLIC |
| Galería Vacas Galindo | VG | — | ~2018 | Imbabura | probable | Wix | unknown | evidencia | needs_review | NOT_PUBLIC |
| Socialización SIGC | Pimampiro | socialización | 2018–19 | Pimampiro | probable | Wix | unknown | evidencia | needs_review | NOT_PUBLIC |
| Galería Dayuma | Dayuma | — | 2022 | Orellana | unknown | Wix | unknown | evidencia | needs_review | NOT_PUBLIC |
| Fotos equipo Wix 936075_ | personas | — | Wix | — | sí | Wix | unknown | quienes-somos | needs_review | NOT_PUBLIC hasta OWNER |
| Sheet foto1–3 | proyectos | — | — | — | — | CSV | — | vacíos auditoría | MISSING | — |
| Capturas producto LIVE | DS/OM/Explora | UI | — | — | n/a | — | GT | ficha | MISSING | hay que producir |

**Lógica histórica:** FASE → FOTO → INFORME. 2.0 usa fallback geométrico (3.4). Correcto hasta autorización.

---

## Documentos

| title | type | year | location | product | case | phase | timeline | methodology | publicationStatus |
|---|---|---|---|---|---|---|---|---|---|
| Informes EMAPAI 0–9 | informe | 2018–19 | Wix `/emapai` | SIGC/YAKU | EMAPAI | diag/diseño/socialización | 2018–19 | xP/GOST | needs_review |
| YAKU Informe 1 | metodología/diagnóstico | ~2019 | Wix `/yaku` | YAKU | EMAPAI | diagnóstico | ~2019 | GOST/OLAP | needs_review |
| Informes PDyOT 0–6 | informe | 2024 | Wix | CAPTURE/DS | PDOT | prep–propuesta | 2023– | GOST/Delphi | needs_review |
| Informes Dayuma 2–5 | informe | 2022 | Wix | SIGDR | Dayuma | — | unresolved | GOST | needs_review |
| O/T POA PAC | página/descarga | 2023 | Wix otgadps | O/T | O/T GADPS | planificación | 2023 | gestión | needs_review |
| G_D_2024.pdf | dossier corporativo | 2024 | Wix CDN 200 ~29 MB; geotactics.info 404 | empresa | — | — | 2024 | — | needs_review; **no enlazar info** |
| Paper CTEA-IE-2020 | estudio | 2020 | Wix | — | — | — | 2020 | — | archive/signal |
| Historias xP | método | — | Wix `/encuesta` | — | EMAPAI | — | — | xP | internal |
| Diagnóstico NM2/NM3 | procesos | — | Wix | — | — | — | — | procesos | internal |
| Looker Studio PDyOT | reporte | 2024? | href Wix | DS | PDOT | BI | — | BI | UNKNOWN vigencia |
| `rantiy.key` | presentación | — | OWNER aportado; no en tree indexado | RANTYI | — | — | — | — | PENDIENTE_DE_ANALISIS |
| `FUNCIONES MADA RADIO.key` | presentación | — | OWNER | MadaRadio | — | — | — | — | PENDIENTE_DE_ANALISIS |
| NURSEGO.key | presentación | — | histórico off-repo | Nurse GO | — | — | — | — | NOT_PUBLIC |
| Google Sheets CSV | datos vivos | 2026 | producción | varios | varios | — | — | — | PII ligera; no scrape a 2.0 |
| `index.html` | HTML prod | 2026-08 | raíz repo | — | — | — | — | — | evidencia; no cutover |
| `Index1.html` | HTML proto | 2025-11 | raíz | — | — | — | — | — | evidencia |

**PDF/.key en workspace glob esta sesión:** 0. Keys = FUENTE_APORTADA + PENDIENTE análisis (Evidence Register).

---

## Videos / URLs (SoT 10 + inventario)

Registrar existencia; no incrustar. DS, OrangeMap, Explora LIVE; Observatorio LIVE needs polish; CAPTURE BROKEN; MadaRadio.com BROKEN vs madaradio.com.ec (conflicto de host); YAKU :81 PRIVATE; Imbabura login **no** es Dayuma.

---

## HTML / backups auditados

| asset | date | rol |
|---|---|---|
| `index.html` producción Apache | Last-Modified 9 ago 2026 (auditoría) | CURRENT_PRODUCTION |
| `Index1.html` | 25 nov 2025 | HISTORICAL prototype |
| Wix `dotniel313.wixsite.com/geotactics` | 2017–2025 | HISTORICAL_CORPORATE |
| Inventarios `docs/GEOTACTICS_PORTFOLIO_INVENTORY_2026.md` `GEOTACTICS_AUDIT_2026.md` | 2026 | meta-evidencia |

---

## Señales candidatas (NO publicar)

| date | title/source | type | related | evidence | publicability |
|---|---|---|---|---|---|
| 2017 | SIGDR Gualsaquí | hito | SIGDR | Wix/I1 | OWNER si Signals usa hitos |
| 2018–19 | Informes EMAPAI | proyecto | YAKU | Wix | needs_review docs |
| 2020 | Paper CTEA-IE | publicación | — | Wix | candidate |
| 2023 | O/T GADPS / POA PAC | proyecto | O/T | Wix | candidate |
| 2024-03 | Campo PDyOT | fieldwork | PDOT | PHOTO-2024-03-04 | photos no |
| 2024 | Dossier G_D_2024 | corporativo | — | CDN Wix | rehost OWNER |
| 2025–26 | ticker Sheets | news canal | — | 1 noticia activa typos | **no** clonar XSS/typos |
| Overlay 2026 | «9 años» | claim | — | index.html | **no** Signals hasta cifra |

---

## Contacto / corporativo (sin PII extra)

| Dato | Valor | mark |
|---|---|---|
| email | info@geotactics.com.ec | CURRENT_VERIFIED |
| WhatsApp | 099 363 4073 / 593993634073 | CURRENT_VERIFIED (2026 FAB) |
| Instagram | geotactics_ec | CURRENT_VERIFIED (Wix=2026) |
| X | @geotactics_3c vs @GeotacticsEC | HISTORICAL vs CURRENT conflicto |
| Facebook | page id antigua vs /Geotacticsec | HISTORICAL vs CURRENT |
| LinkedIn | perfil Daniel (único en Wix) | HISTORICAL como único |
| Tel 095-953-2581 / 095-997-4043 | Wix | HISTORICAL |
| Ibarra Bolívar 8-45 y Pedro Moncayo | Wix pie primero | HISTORICAL / OWNER_CONFIRMATION_REQUIRED vigencia |
| NL Iliniza y José María Urbina | Wix | HISTORICAL calle; ciudad CURRENT |
| Nueva Loja operación | SoT + 2026 | CURRENT_VERIFIED ciudad |
| GEOTACTICS. S.A. © 2017 | Wix | HISTORICAL; vigencia legal UNKNOWN |
| EMIS 4 abr 2017 Ibarra | terceros | no primaria |
| emails Index1 dorellana/lpadilla/gflores | I1 | HISTORICAL; **no exponer** como actuales |
| RUC | no en alpha | UNKNOWN / no inventar |
| webmail :2096 | Wix | HISTORICAL |
| dominio geotactics.com.ec | prod | CURRENT_VERIFIED |
| geotactics.info dossier | 404 | BROKEN |
