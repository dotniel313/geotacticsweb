# GEOTACTICS_CASE_CONTENT_DOSSIER

**Audit:** CONTENT_RECONCILIATION_AUDIT_1.0  
**Regla:** no añadir casos al sitio. Case ≠ Product.

## Los siete casos actuales

### Gualsaquí (`/casos/gualsaqui`)

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | Primera instancia SIGDR 2017. Comuna Gualsaquí, Otavalo. Copy `draft_editorial`. |
| HISTORICAL | Wix `/gualsaqui` «Otavalo-Imbabura / Levantamiento»; Index1 «Gualsaqui Quisinche»; Sheet GT-01 |
| CONFLICTS | Coords S vs I1 (Otavalo vs Quisinche); no dibujar mapa hasta resolver |
| WHY | Estructurar información comunal para caracterización/gestión (alpha; Wix «levantamiento») |
| photos | Wix galería DISCOVERED no APPROVED |
| docs | — en repo |
| publicability | ya public en alpha; fotos no |
| RECOMMENDED | KEEP caso; REPLACE copy genérico con léxico de levantamiento Wix; OWNER coords |

### Vacas Galindo

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | SIGDR 2018, GADPR Vacas Galindo, Cotacachi |
| HISTORICAL | Wix `/vacasgalindo` Cotacachi; Sheet typo «Coctacachi» |
| CONFLICTS | coords S vs I1 |
| photos | Wix DISCOVERED |
| RECOMMENDED | KEEP; corregir toponimia Sheet; no mapa |

### Pimampiro

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | Primera SIGC 2018. Junta de aguas. Cliente nombre no unificado. |
| HISTORICAL | Wix `/sigc-jaapp` **JAAPP** = Junta de Aguas del Pueblo de Pimampiro; Sheet SIGC Pimampiro |
| CONFLICTS | acrónimo JAAPP vs copy «Junta de Aguas / Riego» |
| WHY | cartera/información de junta (alpha); Wix SIGC línea comercial-agua |
| RECOMMENDED | OWNER nombre legal JAAPP |

### EMAPAI

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | SIGC 2018 + YAKU ~2019 misma trayectoria; no reducir YAKU a lecturas |
| HISTORICAL | Wix `/emapai` informes 0–9; informe 1 Diagnóstico; 2 análisis diseño web/móvil; 0 socialización direcciones; `/yaku` Informe 1 Metodología y Diagnóstico; xP `/encuesta`; Index1 SIGC 2018 lecturas + Yaku OLAP 2019 |
| CONFLICTS | HUD 2026 recategorizó Yaku a gobernanza y SIGC a recursos (desdoble) |
| WHY | modernizar gestión comercial y explotar analíticamente (evidencia de informes) |
| docs | informes Wix 0–9 NEEDS_REVIEW |
| RECOMMENDED | KEEP; ProductDetail/CaseDetail deben citar fases Wix, no clonar PDOT |

### Dayuma–Inés Arango

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | SIGDR+CAPTURE; proyecto de **creación** de cantón; no aprobación; DATE unresolved |
| HISTORICAL | Wix DAYUMA 2022 + informes 2–5; Index1 filas **separadas** Dayuma 2022 e Inés Arango 2022 SIGDR; Sheet **fusión 2024** |
| OWNER | elaboración del proyecto CONFIRMED |
| CONFLICTS | **2022 vs 2024**; fusión de parroquias vs dos filas I1 |
| results | NO afirmación de cantón creado |
| photos | Wix 2022 DISCOVERED; no publicar hasta año |
| RECOMMENDED | KEEP caso; no cerrar fecha; no fotos |

### O/T GADPS

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | O/T 2023 planificación/seguimiento/control; ≠ PDOT; POA PAC CGA Corposucumbíos |
| HISTORICAL | Wix `/otgadps` Elaboración POA y PAC; `/descargaotgadps` Prefecto Ing. Yofre Poma adm. 2023–2027; Index1 Sistema Gestión por Resultados 2023; **ausente Sheet 2026** |
| CONFLICTS | no está en Sheet vivo vs Wix/I1 documentado |
| WHY | gestión de resultados / planificación operativa y contratación (Wix más rico que alpha) |
| RECOMMENDED | KEEP; recuperar POA/PAC/prefectura como hechos Wix; no mezclar con PDOT |

### PDOT Sucumbíos

| Campo | Valor |
|---|---|
| CURRENT_ALPHA | Dos ramas: territorial GOST→SIGDR→CAPTURE→base→BI→DS; plan YAKU→O/T. 31 parroquias. 27.539 no población. Horizonte 2023–2038 |
| HISTORICAL | Wix `/pdyotsucumbios` fotos PHOTO-2024-03-04; informes 0–6; Delphi Asentamientos Humanos; xP; visualizador estadístico Looker Studio; `/geografico`; `/datasucumbiostec` **separado** del PDyOT |
| Index1 | CAPTURE «Censo 31 Parroquias Rurales» 2024; DataSucumbíos Actualización PDyOT 2023-2038 |
| Sheet | fusión caso+producto «Cubo Olap» |
| CONFLICTS | 28K vs 27.539 (G14; no publicar 28K); Sheet fusiona lo que Wix separaba |
| fieldwork | fotos mar 2024; 31 parroquias; ciudadanos capturados = registros |
| BI | Looker + datasucumbios.tech + matriz BI CONFIRMED |
| RECOMMENDED | KEEP distinción caso/producto; ingestión de fases Wix solo con docs; no copiar fotos aún |

**Cifras PDOT**

| Dato | Estado |
|---|---|
| 31 parroquias rurales | DOCUMENTED (I1/alpha/SoT) |
| 27.539 Ciudadanos Capturados | DOCUMENTED administrativo; **no población** |
| 28K | CONFLICTO; no publicar |

---

## Candidatos históricos — NO añadir al sitio

| Nombre | Tipo | Evidencia | class |
|---|---|---|---|
| SIGC La Victoria / JALV | CASE | Wix `/sigc-jalv` Antonio Ante; Sheet SIGC La Victoria 2019; Index1 | HISTORICAL_CASE_CANDIDATE |
| Patas a la Obra | RSE | Wix `/patasalaobra`; Index1 2023 Corposucumbíos registro mascotas | NOT_CATALOG |
| Paper CTEA-IE-2020 | estudio | Wix análisis Circunscripción Amazónica | SIGNAL/ARCHIVE |
| Delphi PDyOT | método del caso PDOT | Wix | no caso separado |
| xP / encuesta EMAPAI | método | Wix `/encuesta` | no caso |
| Diagnóstico procesos NM2/NM3 | método | Wix `/diagnóstico` | no caso |
| Geotactics_AV | UNKNOWN | Wix `/audiovisual` | UNKNOWN |

---

## Lógica Wix a preservar (no UI aún)

**PROYECTO → FASE → INFORME/DOCUMENTO → FOTOGRAFÍA**

EMAPAI 0–9, PDyOT 0–6, Dayuma 2–5 son la prueba. Corporate 2.0 aún no tiene CaseDetail ni galería de fase.
