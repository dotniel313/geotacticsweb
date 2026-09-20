# GEOTACTICS_TEAM_HISTORICAL_DOSSIER

**Audit:** CONTENT_RECONCILIATION_AUDIT_1.0  
**Ruta alpha:** `/nosotros` = `TEAM_CONTENT_PENDING_HISTORICAL_RECONCILIATION`. **No publicar.**  
**Regla:** presencia histórica ≠ empleo actual. No borrar personas. No identificación facial.

## Hallazgo principal

Corporate 2.0 **no** reproduce el equipo de geotactics.com.ec. El sitio 2026 carga equipo desde Google Sheet (`gid=390294212`) filtrado; Index1 hardcodea 3 personas; Wix documenta **8 personas únicas** (duplicados de plantilla: Má José, Giovanni, Marco).

## Personas investigadas (prioridad + encontradas)

### Jhony Daniel Orellana Torres / Daniel Orellana

| Campo | Valor |
|---|---|
| name | Daniel Orellana (Wix, Index1, Sheet 2026). Nombre legal completo en mandato de proyecto, no en web histórica. |
| historicalRole | Fundador & CEO (Wix, Index1, overlay 2026, Sheet). |
| source | Wix `/quienes-somos`; Index1 `equipoDB`; `index.html` overlay + CSV; LinkedIn Wix; SoT 11 |
| sourceDate | Wix 2017–2025; Index1 2025-11-25; producción 2026-08 |
| photo | Wix: foto propia `wixstatic 936075_…`. Index1: Unsplash placeholder. 2026: Flaticon/Sheet. |
| bio | Index1: «Arquitecto de sistemas y fundador. Alias: Chuky». Overlay 2026: fundador + «más de 9 años». |
| projects | Atribución institucional, no lista nominativa en web. |
| currentStatus | OWNER_CONFIRMED público (fundador). **No inferir** el resto de plantilla. |
| publicability | PUBLICABLE_FUNDADOR con foto/alias a decidir. |
| confidence | ALTA (identidad) / MEDIA (alias público) |
| class | FOUNDER + CURRENT_TEAM |

### Luis Padilla

| Campo | Valor |
|---|---|
| name | Luis Padilla |
| historicalRole | Wix: Fundador & Jefe de Programación. Index1: Jefe de Programación. **No** en Sheet 2026. |
| source | Wix quienes-somos; Index1 `equipoDB` (`lpadilla@geotactics.com.ec` — **no republicar**) |
| sourceDate | Wix; Index1 2025-11 |
| photo | Wix real; Index1 Unsplash |
| bio | Index1: «Desarrollo de software y arquitectura de datos. Alias: Luchin.» |
| projects | No nominativo en fuentes web. |
| currentStatus | UNKNOWN. No inferir empleo. |
| publicability | NOT_FOR_PUBLICATION hasta OWNER |
| confidence | ALTA presencia histórica / BAJA vigencia |
| class | FOUNDER (Wix) + HISTORICAL_TEAM (2026 ausente) |

### Germán Flores

| Campo | Valor |
|---|---|
| name | Germán Flores |
| historicalRole | Wix: Fundador & Jefe de Políticas Públicas. Index1: Jefe de Políticas. **No** en Sheet 2026. |
| source | Wix; Index1 (`gflores@geotactics.com.ec` — **no republicar**) |
| sourceDate | Wix; Index1 2025-11 |
| photo | Wix real; Index1 Unsplash |
| bio | Index1: «Gestión pública y análisis territorial. Alias: Jefe.» |
| projects | No nominativo. |
| currentStatus | UNKNOWN |
| publicability | NOT_FOR_PUBLICATION hasta OWNER |
| confidence | ALTA histórica / BAJA vigencia |
| class | FOUNDER (Wix) + HISTORICAL_TEAM |

### Otras personas Wix (únicas)

| name | historicalRole | class | currentStatus | publicability | confidence |
|---|---|---|---|---|---|
| Veronica Jama | Directora Financiera | HISTORICAL_TEAM | UNKNOWN | NOT_FOR_PUBLICATION | MEDIA (Wix only) |
| Má José Trujillo | Fundadora & Jefe Financiero | FOUNDER (Wix) / HISTORICAL_TEAM | UNKNOWN | NOT_FOR_PUBLICATION | MEDIA; HTML duplicado |
| Giovanni Romero | Programador | HISTORICAL_TEAM / COLLABORATOR? | UNKNOWN | NOT_FOR_PUBLICATION | MEDIA |
| Marco Landi | Programador | HISTORICAL_TEAM / COLLABORATOR? | UNKNOWN | NOT_FOR_PUBLICATION | MEDIA |
| Christian Montalvo | Fundador & Gerente General | FOUNDER (Wix) / UNKNOWN_RELATIONSHIP vigencia | UNKNOWN | NOT_FOR_PUBLICATION | MEDIA |

Ninguna de estas 5 aparece en Index1 ni en el comentario de Sheet 2026 (solo Daniel).

## Fuentes de equipo

| Fuente | Qué muestra | Conflicto |
|---|---|---|
| Wix `/quienes-somos` | 8 únicos + fotos propias | «Fundadores» múltiples vs Index1 3 personas |
| Index1 | 3 perfiles + aliases + emails corporativos | Placeholders Unsplash; no es evidencia fotográfica |
| Sheet 2026 | Comentario de código: solo Daniel Orellana CEO | Filtro `esActivo` **no** aplicado a equipo (auditoría 2026) |
| Alpha `/nosotros` | «El equipo se reconcilia con geotactics.com.ec» | Correcto: no hay fichas |

## No encontrado en evidencia local

Organigrama legal, contratos, lista de campo PDOT, créditos fotográficos nominativos. Fotos de obra **no** se usan para nombrar personas.

## Recomendación (no implementar)

Mantener `/nosotros` institucional hasta decisión de: (1) solo fundador actual; (2) fundadores Wix con disclaimer histórico; (3) equipo vivo verificado. Nunca copiar aliases/emails/Unsplash.
