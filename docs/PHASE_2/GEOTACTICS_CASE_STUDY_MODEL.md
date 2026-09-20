# Modelo de caso de estudio

**Fase:** 2.2.0  
**Regla:** caso = implementación. Producto = sistema. No intercambiar URLs ni títulos.

---

## 1. Campos del caso

| Campo | Obligatorio | Regla |
|---|---|---|
| slug | sí | `/casos/{slug}` |
| título | sí | Territorio o cliente + producto usado, no marca inventada |
| contexto | sí | Hechos SoT |
| problema | sí | Sin dramatizar cifras no confirmadas |
| cliente | sí | Nombre documentado |
| territorio | sí | Comuna / junta / cantón / provincia |
| reto | no | Solo si está en evidencia |
| solución | sí | Qué se implementó |
| implementación | no | Alcance (p.ej. 31 parroquias) si confirmado |
| productos_componentes | sí | IDs de catálogo (SIGDR, CAPTURE, etc.) |
| evidencia | sí | DOCUMENTO / PROPIETARIO |
| resultado | condicional | Vacío o cualitativo si no hay métrica confirmada |
| año | sí | Si CONFLICTO, no publicar el año o marcar pendiente |
| galería | no | Sin Unsplash; preferir phases[] |
| mapa | no | Un punto CASO |
| phases[] | no | Solo fases con evidencia; **no** copiar plantilla PDOT a otros casos |

### Phase (dentro del caso)

| Campo | Obligatorio | Notas |
|---|---|---|
| id | sí | slug de fase |
| order | sí | |
| title | sí | |
| subtitle | no | |
| period | no | |
| description | no | hechos |
| photos[] | no | AUTHORIZED |
| screenshots[] | no | |
| documents[] | no | |
| map | no | inset opcional |
| productIds[] | no | |
| componentIds[] | no | |
| caption | no | |
| evidenceLevel | sí si hay media | DOCUMENTO / PROPIETARIO |

**PDOT — candidatas solo si hay respaldo** (mapear a etapas SoT: preparatoria, diagnóstico, levantamiento, diagnóstico territorial, propuesta, modelo de gestión + CAPTURE / BI monitoreo / DS): p.ej. Preparación, Levantamiento de campo, Captura, Monitoreo, Sistematización, Inteligencia territorial. No inventar fotos. 27.539 no en fase hasta `NO_PUBLICAR` se levante.

**YAKU:** fases desde su documentación (planificación, ejecución, seguimiento, indicadores, POA, gestión institucional) — **no** clonar PDOT.

**Resultado:** no inventar. Permitido: “implementado”, “en operación (URL)”, “31 parroquias rurales”. No permitido: ahorro, votos, cobertura % no evidenciada, 28K, 27.539 hasta aprobación.

---

## 2. Casos listables (SoT)

| Caso | Producto/componente | Año | Cliente | Home |
|---|---|---|---|---|
| Gualsaqui | SIGDR | 2017 | Comuna Gualsaqui | Sí |
| Vacas Galindo | SIGDR | 2018 | GADPR Vacas Galindo | Catálogo |
| Pimampiro | SIGC | 2018 | JAAPP | Sí |
| La Victoria | SIGC | 2019 | JALV | Catálogo |
| EMAPAI | SIGC 2018 + YAKU ~2019 | 2018–2019 | EMAPAI | Opcional Home |
| Dayuma | SIGDR | 2022 vs 2024 CONFLICTO | GADPR Dayuma | No hasta cerrar año |
| Inés Arango | SIGDR | CONFLICTO fusión | GADPR Inés Arango | No hasta cerrar |
| PDOT Sucumbíos | consultoría; CAPTURE + BI monitoreo + DataSucumbíos | 2023–2038 | GADP Sucumbíos | Sí |
| O/T en GADPS | O/T | 2023 | GADP Sucumbíos | Catálogo (distinto de PDOT) |
| Patas a la Obra | RSE | 2023 I1 | Corposucumbíos | Catálogo menor; no producto |

Flujo en ficha PDOT (obligatorio):

```
CAPTURE → Base territorial → DataSucumbíos (consume)
```

No: DataSucumbíos alimenta la base. No: DataSucumbíos = SIGDR v2.

---

## 3. Card de listado

Año · Territorio · Cliente · Producto relacionado (chip) · 1 línea de problema · CTA “Leer caso”.
