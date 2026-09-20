# Registro de superficies digitales de producto

```
SOURCE OF TRUTH — GEOTACTICS CORPORATE 2.0
Versión documental: 1.0.1
Fecha: 18 septiembre 2026
```

No se inventan URLs. No se modifican landings. HTTP según auditoría Fase 1.5 (sep 2026) salvo nota.

**SURFACE_TYPE:** CORPORATE_DETAIL | PRODUCT_LANDING | WEB_APP | MOBILE_APP | DEMO | EXTERNAL | HISTORICAL_CORPORATE

**CURRENT_STATUS / destination_status:** LIVE | PUBLIC_NEEDS_POLISH | PRIVATE | DEPRECATED | BROKEN | UNKNOWN

**CTA_ALLOWED (futuro, no 3.2.1):** none | conocer | ver_proyecto | abrir_plataforma | ver_demo | converse

---

| PRODUCT | URL | SURFACE_TYPE | CURRENT_STATUS | PUBLIC | BRAND_ALIGNMENT | NEEDS_POLISH | CTA_ALLOWED | EVIDENCE | NOTES |
|---|---|---|---|---|---|---|---|---|---|
| GeoTactics corp | https://www.geotactics.com.ec | HISTORICAL_CORPORATE / prod 2026 | LIVE | sí | producción actual | n/a este bloque | — | auditoría | No modificar |
| GeoTactics corp | https://dotniel313.wixsite.com/geotactics | HISTORICAL_CORPORATE | LIVE | sí (histórico) | Wix 2017–2025 | no migrar auto | none | inventario | Evidencia; no canónico 2.0 |
| Dossier | geotactics.info PDF Wix | EXTERNAL | BROKEN | no | — | — | none | auditoría 404 | Archivo 200 en CDN Wix filesusr |
| DataSucumbíos | https://www.datasucumbios.tech | WEB_APP | LIVE | sí | producto propio | UNKNOWN | abrir_plataforma (si se mantiene autorización) | HEAD 200 | No iframe corporativo |
| DataSucumbíos | https://datasucumbios.tech | WEB_APP | LIVE | sí | — | — | same | I1 | Variante host |
| DataSucumbíos | datasucumbios.tech/geografico | WEB_APP (módulo) | UNKNOWN | NEEDS_REVIEW | — | — | none hasta HEAD | Wix | Visualizador geográfico |
| DataSucumbíos | Looker Studio reporting/0b0bd137-… | EXTERNAL | UNKNOWN | NEEDS_REVIEW | Google | — | none | Wix href truncado | Vigencia UNKNOWN |
| OrangeMap | https://orangemap.geotactics.com.ec | WEB_APP | LIVE | sí | pide JS; polish UNKNOWN | POSSIBLE PUBLIC_NEEDS_POLISH | abrir_plataforma tras dueño | HEAD 200 | No asumir landing vs app |
| OrangeMap | https://www.orangemap.geotactics.com.ec | WEB_APP | LIVE | sí | — | — | same | inventario | |
| ExploraSucumbíos | https://explorasucumbios.geotactics.com.ec | WEB_APP | LIVE | sí | título Turismo | POSSIBLE PUBLIC_NEEDS_POLISH | abrir_plataforma tras dueño | HEAD 200 | Propio; no contrato GAD |
| ExploraSucumbíos | www.explorasucumbios.geotactics.com.ec | WEB_APP | LIVE | sí | — | — | same | inventario | |
| Observatorio | https://observatorio.geotactics.com.ec | WEB_APP o PRODUCT_LANDING | LIVE | etiquetar prelanzamiento | UNKNOWN | PUBLIC_NEEDS_POLISH | converse / conocer; no abrir como catálogo maduro | HEAD 200 | Tipo exacto no auditado (landing vs app) |
| Observatorio | https://www.observatorio.geotactics.com.ec | idem | LIVE | — | — | — | same | Sheet | |
| CAPTURE | https://capture.geotactics.com.ec | DEMO? | BROKEN | no | — | — | none | HEAD 000 | |
| MadaRadio | https://www.madaradio.com | EXTERNAL | BROKEN | no | — | — | none | HEAD 000 | También mal asignado a GUANTA en Sheet |
| GUANTA | (misma URL MadaRadio) | — | BROKEN / CONFLICT | no | — | — | none | Sheet | |
| Fixis | fixis.geotactics.com.ec | UNKNOWN | UNKNOWN | no hasta HEAD | — | — | none | OWNER informado | |
| YAKU | http://comercial.emapai.gob.ec:81/yaku/ | DEMO | LIVE infra / PRIVATE? | no | cliente | NEEDS_REVIEW | none | HEAD 200 HTTP :81 | |
| — | https://www.imbabura.geotactics.com.ec/login.php | UNKNOWN login | LIVE login | no | host Imbabura en fila Dayuma | — | none | HEAD 200 | **No** es demo Dayuma |
| Nurse GO | — | UNKNOWN | UNKNOWN | no | — | — | none | no URL en SoT | No inventar |
| RANTYI | — | — | — | no | — | — | none | — | |
| SIGDR/SIGC/O/T/Termómetro | — | — | — | — | — | — | ver_proyecto futuro | — | Sin URL viva de producto |

---

## CTA conceptual (futuro)

| Destino | CTA |
|---|---|
| PRODUCT_LANDING pulida y aprobada | Conocer [Producto] |
| Ficha corporativa / caso | Ver proyecto |
| WEB_APP LIVE + dueño | Abrir plataforma |
| DEMO explícita | Ver demo |
| PUBLIC_NEEDS_POLISH | no exposición hasta aprobación |
| BROKEN / PRIVATE / DEPRECATED / UNKNOWN | no enlazar |

Unificación visual futura: AUDIT → KEEP / REFACTOR / MIGRATE / REPLACE → design system → QA → cutover **individual**. No big-bang. No ahora.
