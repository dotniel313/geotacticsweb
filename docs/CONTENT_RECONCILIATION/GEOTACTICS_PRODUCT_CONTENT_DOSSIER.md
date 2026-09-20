# GEOTACTICS_PRODUCT_CONTENT_DOSSIER

**Audit:** CONTENT_RECONCILIATION_AUDIT_1.0  
**ProductDetail:** no implementado. Contrato de datos para `/productos/[slug]` al final.  
**Regla:** no inventar funciones. GOST ≠ software.

Leyenda `publicability`: PUBLICABLE_ALPHA | PUBLICABLE_CON_CAUTELA | INTERNAL | NOT_FOR_PUBLICATION | OWNER_DECISION.

---

## Contrato ProductDetail (campos)

Identity · Origin/Problem · Purpose · How it works · Capabilities · GOST relationship · Analytical/technical disciplines · Evolution · Related cases · Gallery · Documents · Videos · External surface · Related products · Status · CTA.

Disponibilidad por producto: ver columna `detailFields` (Y = hay evidencia; N = hueco; P = parcial).

---

## SIGDR

| Campo | Contenido |
|---|---|
| historicalName | SIGDR / Sistema de Información Geográfica de Desarrollo Rural |
| currentName | SIGDR |
| type | PRODUCT |
| status | HISTORICAL_ACTIVE (Wix); Sheet 2026; SoT ACTIVE_HISTORICAL |
| problem | Información rural no georreferenciada / no usable para decisión parroquial-cantonal |
| purpose | Organizar territorio rural en registro geográfico + indicadores (visión; CMI no CONFIRMED) |
| originStory | Primer producto documentado 2017; Wix «en funcionamiento desde 2017»; genealogía GOST→SIGDR |
| whatItDoes | SIG rural; Wix: geo, indicadores, CMI (CMI = none CONFIRMED) |
| methodology | GOST (ontológico) |
| disciplines | GIS CONFIRMED; BI/CMI INFERRED |
| evolution | → CAPTURE (COMPONENT) → base → DataSucumbíos (CONCEPTUAL_DESCENDANT, no v2) |
| relatedProducts | CAPTURE, DataSucumbíos |
| relatedCases | Gualsaquí, Vacas Galindo, Pimampiro, Dayuma–Inés Arango, PDOT (vía CAPTURE) |
| surfaces | no LIVE propio |
| documents | Wix; Sheet; SoT 06/07 |
| images | Wix galerías proyecto (no copiadas al repo 2.0) |
| videos | — |
| evidence | CONFIRMED_DOCUMENTO + OWNER |
| conflicts | CMI en copy Wix vs matriz; «plataforma» vs metodología padre |
| missingFacts | stack, repo, alcance actual vs histórico |
| publicability | PUBLICABLE_ALPHA |
| detailFields | Identity Y; Origin Y; Purpose P; How P; Caps P; GOST Y; Disciplines P; Evol Y; Cases Y; Gallery N; Docs P; Videos N; Surface N; Related Y; Status Y; CTA P |

## SIGC

| Campo | Contenido |
|---|---|
| historicalName | SIGC (comercial EMAPAI) |
| currentName | SIGC |
| type | PRODUCT |
| status | HISTORICAL |
| problem | Gestión comercial/catastro de agua potable sin sistema territorial-operativo unificado |
| purpose | Organizar operación comercial del prestador (lecturas, reportes, base) |
| originStory | 2018 EMAPAI; rama GOST→SIGC→YAKU→O/T |
| whatItDoes | App lecturas y reportes (Index1/Sheet); catastro/comercial (SoT) |
| methodology | GOST ontológico; xP en EMAPAI |
| disciplines | GIS/ops; OLAP en hijo YAKU |
| evolution | → YAKU → O/T |
| relatedProducts | YAKU, O/T |
| relatedCases | EMAPAI; candidato La Victoria 2019 (no publicar) |
| surfaces | — |
| documents | Sheet, Index1, Wix, SoT 12 |
| images | Wix EMAPA |
| evidence | CONFIRMED_DOCUMENTO |
| conflicts | alcance exacto vs YAKU |
| missingFacts | funciones de producto vs proyecto |
| publicability | PUBLICABLE_ALPHA |
| detailFields | Identity Y; Origin Y; Purpose P; How P; Gallery N; Surface N |

## YAKU

| Campo | Contenido |
|---|---|
| historicalName | Yaku / YAKU |
| currentName | YAKU |
| type | PRODUCT |
| status | HISTORICAL |
| problem | Datos comerciales/operativos de agua no explotables analíticamente |
| purpose | Explotación OLAP sobre la base SIGC/EMAPAI |
| originStory | 2019 EMAPAI; Sheet «Plataforma OLAP» |
| whatItDoes | OLAP CONFIRMED |
| methodology | GOST + BI/OLAP |
| disciplines | OLAP CONFIRMED; DW none CONFIRMED |
| evolution | → O/T (gestión de planes) |
| relatedProducts | SIGC, O/T |
| relatedCases | EMAPAI |
| evidence | CONFIRMED |
| conflicts | — |
| missingFacts | cubos, stack |
| publicability | PUBLICABLE_ALPHA |
| detailFields | Identity Y; Purpose Y; Disciplines Y; Gallery N; Surface N |

## O/T

| Campo | Contenido |
|---|---|
| historicalName | O/T · Sistema Gestión por Resultados |
| currentName | O/T |
| type | PRODUCT |
| status | ACTIVE_HISTORICAL |
| problem | Planes de gobierno local sin sistema de seguimiento de resultados |
| purpose | Gestión/monitoreo de planificación (rama plan: YAKU→O/T) |
| originStory | GADPS 2023; Index1/Sheet |
| whatItDoes | Gestión por resultados (ficha); detalle de módulos no auditado en código |
| methodology | GOST + experiencia YAKU |
| relatedProducts | YAKU, DataSucumbíos (caso PDOT, no fusión de producto) |
| relatedCases | O/T GADPS; PDOT (plan management) |
| surfaces | no LIVE público conocido |
| evidence | CONFIRMED_DOCUMENTO |
| missingFacts | UI, indicadores, relación con POA/PDOT |
| publicability | PUBLICABLE_ALPHA |
| detailFields | How N; Gallery N; Surface N |

## DataSucumbíos

| Campo | Contenido |
|---|---|
| historicalName | DataSucumbíos / datasucumbios.tech |
| currentName | DataSucumbíos |
| type | PRODUCT |
| status | LIVE |
| problem | Información territorial de Sucumbíos no integrada para consulta pública/técnica |
| purpose | Superficie de consulta/monitoreo BI sobre base territorial (no es GOST-software) |
| originStory | Consume CAPTURE/SIGDR conceptualmente; PDOT 2023–2038 |
| whatItDoes | Consulta + BI CONFIRMED; OLAP CONFIRMED; GIS CONFIRMED |
| methodology | GOST ontológico; cadena territorial |
| disciplines | BI, GIS, OLAP |
| relatedCases | PDOT Sucumbíos |
| surfaces | https://datasucumbios.tech LIVE PUBLICABLE |
| videos | — |
| evidence | SoT 10 LIVE; matriz 06 |
| conflicts | no vender como «v2 de SIGDR» |
| missingFacts | inventario de capas/indicadores publicable |
| publicability | PUBLICABLE_ALPHA |
| detailFields | Surface Y; How P; Gallery N; Docs P |

## OrangeMap

| Campo | Contenido |
|---|---|
| historicalName / currentName | OrangeMap |
| type | PRODUCT |
| status | LIVE |
| problem | Turismo/territorio sin mapa de destinos consultable |
| purpose | Mapa de destinos (OWNER) |
| originStory | Vertical GOST→OrangeMap→ExploraSucumbíos (código UNKNOWN) |
| whatItDoes | Mapa destinos CONFIRMED_OWNER |
| disciplines | GIS (identidad); stack UNKNOWN |
| relatedProducts | ExploraSucumbíos |
| surfaces | orangemap.geotactics.com.ec LIVE |
| evidence | SoT 04/10 |
| missingFacts | repo, evolucion de producto |
| publicability | PUBLICABLE_ALPHA |
| detailFields | How P; Gallery N; Origin P |

## ExploraSucumbíos

| Campo | Contenido |
|---|---|
| historicalName / currentName | ExploraSucumbíos |
| type | PRODUCT |
| status | LIVE |
| problem | Destinos Sucumbíos no empaquetados para exploración pública |
| purpose | Destinos Sucumbíos (OWNER) |
| relatedProducts | OrangeMap |
| surfaces | explorasucumbios.com LIVE |
| evidence | SoT 10 |
| missingFacts | relación código vs marca |
| publicability | PUBLICABLE_ALPHA |
| detailFields | How N; Gallery N |

## Termómetro Social

| Campo | Contenido |
|---|---|
| historicalName | Termómetro Social |
| currentName | Termómetro Social |
| type | PRODUCT |
| status | LIVE_NEEDS_POLISH (SoT 10) |
| problem | Evaluación de resultados sociales/políticos sin instrumento territorial |
| purpose | App evaluación resultados (Index1: Movimiento ES AHORA 2025) |
| originStory | GOST→Predicción→Termómetro (I+D+i / spin-off) |
| whatItDoes | Evaluación; GIS CONFIRMED; BI CONFIRMED |
| relatedProducts | Predicción (internal) |
| surfaces | termometro.geotactics.com.ec LIVE_NEEDS_POLISH |
| evidence | SoT 06/10; Index1 |
| conflicts | cliente político vs tono corporativo |
| publicability | PUBLICABLE_CON_CAUTELA (cliente/mensaje) |
| detailFields | Origin P; CTA OWNER |

## MadaRadio

| Campo | Contenido |
|---|---|
| historicalName | MADARADIO / Madaradio / Mada Radio |
| currentName | MadaRadio |
| type | PRODUCT |
| status | LIVE |
| problem | Radio local sin superficie digital/territorial de programación |
| purpose | App & web radio (Index1 2025) |
| originStory | Aplica/deriva principios GOST; no es GOST-software (1.6.1) |
| whatItDoes | Superficie radio; GIS CONFIRMED |
| documents | `FUNCIONES MADA RADIO.key` PENDIENTE_DE_ANALISIS (off-tree o no indexado) |
| surfaces | madaradio.com.ec LIVE |
| evidence | Wix page + SoT 10 |
| publicability | PUBLICABLE_ALPHA |
| detailFields | Docs P (key no analizado); How P |

## GUANTA

| Campo | Contenido |
|---|---|
| historicalName / currentName | GUANTA |
| type | PRODUCT |
| status | LIVE_NEEDS_POLISH |
| purpose / problem | PENDIENTE_DE_ANALISIS (SoT 04) |
| originStory | GOST ontológico posterior OWNER 18 sep |
| surfaces | guanta.geotactics.com.ec |
| documents | — |
| publicability | PUBLICABLE_CON_CAUTELA (purpose hueco) |
| missingFacts | problema, funciones, caso |
| detailFields | Origin N; Purpose N; How N |

## RANTYI

| Campo | Contenido |
|---|---|
| historicalName / currentName | RANTYI |
| type | PRODUCT |
| status | LIVE_NEEDS_POLISH |
| purpose | PENDIENTE_DE_ANALISIS |
| documents | `rantiy.key` PENDIENTE_DE_ANALISIS |
| surfaces | rantyi.geotactics.com.ec |
| publicability | PUBLICABLE_CON_CAUTELA |
| detailFields | Origin N; Purpose N; Docs P |

## Fixis / Fixis PRO

| Campo | Contenido |
|---|---|
| historicalName | Fixis / Fixis PRO |
| currentName | Fixis |
| type | PRODUCT |
| status | LIVE_NEEDS_POLISH |
| purpose | PENDIENTE_DE_ANALISIS |
| surfaces | fixis.pro |
| publicability | PUBLICABLE_CON_CAUTELA |
| detailFields | casi N en Origin/How |

## Observatorio GADMLA

| Campo | Contenido |
|---|---|
| historicalName | Observatorio GADMLA |
| currentName | Observatorio GADMLA |
| type | PRODUCT |
| status | LIVE_NEEDS_POLISH |
| purpose | PENDIENTE_DE_ANALISIS (observatorio municipal — no inferir) |
| surfaces | observatorio.gadmlagoagrio.gob.ec |
| relatedCases | ninguno en 7 casos |
| publicability | PUBLICABLE_CON_CAUTELA |
| detailFields | Origin N; Cases N |

---

## Internos / investigación

### Predicción

I+D+i; padre conceptual de Termómetro; **no producto público**. publicability INTERNAL.

### SIGMD

I+D+i **no implementado** (SoT 05). publicability INTERNAL / NOT_FOR_PUBLICATION.

### Nurse GO

Presentación `.key` histórica; **no público**. Grafo 3.2 `public: false`. publicability NOT_FOR_PUBLICATION.

### CAPTURE

**COMPONENT**, no producto. App captura campo; 27.539 ciudadanos capturados = registros de campo, **no población**. Superficie histórica `capture.geotactics.com.ec` (Index1). Relacionado SIGDR, PDOT, Dayuma. publicability: mencionar como componente, no ficha de catálogo igual a DS.

---

## Fuera de grafo / no en catálogo 2.0 (no añadir)

| historicalName | evidencia | class |
|---|---|---|
| E-GPS | Index1 2023 App Gobierno Electrónico GADPS demo `#` | PENDIENTE_CLASIFICACION_HISTORICA |
| Inqui | Index1 2025 App inquilinos Corposucumbíos | idem |
| Ecuador Ancestral | Index1 2025 rutas turísticas | idem |
| Patas a la Obra | Index1 2023 registro mascotas RSE | caso/legado, no producto SoT |

---

## Mapa ProductDetail: cobertura agregada

| Sección | Fuerte | Débil / hueco |
|---|---|---|
| Identity | SIGDR, SIGC, YAKU, O/T, DS, OrangeMap, Explora, Termómetro, MadaRadio | GUANTA, RANTYI, Fixis, Observatorio |
| Origin / Why | SIGDR, SIGC, YAKU, PDOT-linked | GUANTA, RANTYI, Fixis, Observatorio, Explora |
| How it works | YAKU (OLAP), DS (consulta/BI), CAPTURE (campo) | O/T módulos, OrangeMap código |
| GOST | todas las del grafo SoT 05 | E-GPS/Inqui |
| Gallery | Wix no ingestada | todas en 2.0 |
| Documents | keys no analizados; dossier Wix 404 en info | |
| Videos | URLs SoT 10; no transcritos | |
