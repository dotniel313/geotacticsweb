**Fase:** 3.8.0-beta.1 · VISUAL_QA_INTEGRATED  
**Regla:** ninguna foto histórica se publica automáticamente. Pipeline: DISCOVERED → NEEDS_REVIEW → APPROVED → PUBLICABLE.  
**PhotoFan:** el componente consume `record.assets[]` (máx. 3). Hoy el array está vacío → fallback geométrico Corporate 2.0. Inyectar PUBLICABLE no exige cambiar el componente.

**Conteos actualizados (2026-09-22):**

| Estado | Cantidad | Notas |
|---|---|---|
| PUBLICABLE / integrado | 25 | Logo header + 21 fotos históricas de casos + 4 retratos de fundadores actualmente servidos desde Wix CDN |
| APPROVED / no publicado | 3 | EQ05 María José Trujillo · EQ06 Geovanny Romero · EQ07 Marcos Landy |
| NEEDS_REVIEW | 5 grupos | videos SIGDR/SIGC, dossier, .key y material histórico aún no reconciliado |
| DO_NOT_USE | 1 | Unsplash Index1 |

Prioridad de revisión visual futura: SIGDR · SIGC · YAKU · DataSucumbíos · PDOT/CAPTURE · Dayuma–Inés Arango · O/T · resto.

Estado de los 21 ítems fotográficos de caso seleccionados por OWNER: **PUBLICABLE / INTEGRADOS**. El manifiesto técnico vigente está en `corporate-v2/src/assets/history/manifest-3.9.csv`.


| ID | Proyecto / caso | Source | Fecha | Descripción | Calidad técnica | Posible duplicado | Derechos / status | Uso recomendado | Estado |
|---|---|---|---|---|---|---|---|---|---|
| AAQ-GUAL-WIX | gualsaqui / SIGDR | Galería Wix | ~2017 | Galería de campo Comuna Gualsaquí | desconocida (CDN Wix) | posible overlap con inventario 2026 | unknown / Wix | PhotoFan hito Gualsaquí si OWNER aprueba | NEEDS_REVIEW |
| AAQ-VG-WIX | vacas-galindo | Galería Wix | ~2018 | Galería parroquial Vacas Galindo | desconocida | — | unknown / Wix | PhotoFan hito | NEEDS_REVIEW |
| AAQ-PIMA-WIX | pimampiro / SIGC | Galería Wix | 2018–19 | Socialización SIGC / JAAPP | desconocida | — | unknown / Wix | PhotoFan caso | NEEDS_REVIEW |
| AAQ-PDOT-2024 | pdot-sucumbios | Wix /pdyotsucumbios · PHOTO-2024-03-04 | 2024 | Campo PDOT Sucumbíos | archivo de cámara, no auditado en repo | varias tomas de la misma jornada | unknown / Wix | PhotoFan PDOT / DataSucumbíos | NEEDS_REVIEW |
| AAQ-DAY-WIX | dayuma-ines-arango | Galería Wix | 2022 | Galería Dayuma + Inés Arango | desconocida | — | unknown / Wix | PhotoFan caso 2022 | NEEDS_REVIEW |
| AAQ-EMAPAI-REP | emapai-yaku | Informes Wix (no foto de producto) | 2018–19 | Informes modernización; no galería de UI | n/a documentos | — | unknown / Wix | documentos, no PhotoFan | NEEDS_REVIEW |
| AAQ-LOGO-2024 | marca | `corporate-v2` header PNG | 2024 | Logo G_L_2024 derivado | alta | — | GeoTactics / approved | header (ya PUBLICABLE) | APPROVED / PUBLICABLE |
| AAQ-IDX1-UNSPLASH | — | Index1.html Unsplash | 2025 | Placeholders de equipo / PhotoFan pad | stock | sí, vs producción 2026 | Unsplash license; **no usar como evidencia GT** | no migrar | DO_NOT_USE |
| AAQ-DOSSIER-PDF | empresa | Wix CDN `G_D_2024.pdf` | 2024 | Dossier | PDF | — | needs_review | no enlazar hasta URL propia | NEEDS_REVIEW |
| AAQ-MADARADIO-KEY | madaradio | `.key` local (no en web) | — | diseño no analizado | — | — | OWNER | no publicar | NEEDS_REVIEW |
| AAQ-RANTYI-KEY | rantyi | `.key` local | — | diseño no analizado | — | — | OWNER | no publicar | NEEDS_REVIEW |

**3.8 no se detiene por falta de fotografías.** Tras aprobación OWNER, copiar solo PUBLICABLE a `record.assets[]`.


## Estado real — equipo histórico

El mapeo OWNER EQ01–EQ07 ya está preservado en:
`corporate-v2/src/assets/history/team-historical/manifest-team-3.9.csv`.

- EQ01–EQ04: PUBLICABLE y visibles en `/nosotros` mediante Wix CDN.
- EQ05–EQ07: APPROVED, no publicados hasta cerrar rol/periodo/contexto editorial.
- Pendiente técnico: copiar los siete originales al repositorio y sustituir dependencia Wix CDN sin cambiar el layout.
