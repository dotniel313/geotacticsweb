# Modelo de presentación de productos

**Fase:** 2.1.0  
**Fuente:** clasificación vigente 1.6 (13 entradas). No reclasificar.

Home = tres grupos narrativos, no seis cards equivalentes. Ver Experience Spec v1.0.

---

## 1. Matriz (Home vs catálogo)

| Producto | Estado publicación Home/catálogo | Sector | URL | Evidencia | Rol Home 2.1 |
|---|---|---|---|---|---|
| DataSucumbíos | EN OPERACIÓN | Inteligencia territorial | datasucumbios.tech (200) | SoT | Grupo A; mismo peso que OM/Explora; no iframe; no identidad de marca |
| OrangeMap | EN OPERACIÓN | Descubrimiento comercial geo | orangemap.geotactics.com.ec (200) | SoT | Grupo A |
| ExploraSucumbíos | EN OPERACIÓN | Turismo / exploración | explorasucumbios.geotactics.com.ec (200) | SoT | Grupo A; no código compartido afirmado; ≠ Ecuador Ancestral |
| GUANTA | EN DESARROLLO | Mina-cantera | demo CONFLICTO — no mostrar | SoT | Grupo B compacto |
| RANTYI | PRELANZAMIENTO | C2C geo | — | SoT; .key sin analizar | Grupo B |
| Fixis / Fixis PRO | PRELANZAMIENTO | Oficios geo | dominio informado | SoT | Grupo B |
| MadaRadio | EN DESARROLLO | Radio / participación | 000 — no demo | SoT; año CONFLICTO; .key | Grupo B; aplica GOST ≠ es GOST |
| Observatorio | PRELANZAMIENTO | Inversión municipal | dominio 200; etiquetar prelanzamiento | SoT | Grupo B (ya no card “sexta equivalente”) |
| SIGDR | TRAYECTORIA | Desarrollo rural | — | 2017 | Grupo C |
| SIGC | TRAYECTORIA | Agua / cartera | — | 2018+ | Grupo C |
| YAKU | TRAYECTORIA | Gestión institucional | demo :81 NEEDS_REVIEW | ~2019 | Grupo C; no Home demo |
| O/T | TRAYECTORIA | GovTech planificación | — | 2023 | Grupo C; no stand-by político |
| Termómetro Social | Catálogo; no grupos Home | Sondeos | — | cliente CONFLICTO | `/productos` + Tecnología/campo |

CAPTURE = componente. Predicción / SIGMD = I+D+i.

---

## 2. Campos de ficha `/productos/{slug}`

nombre · tipo · estado · descripción (solo hechos SoT) · sector · capacidades confirmadas · plataformas (web/móvil si evidenciado) · relación metodológica (GOST sí/no según registro) · casos relacionados · URL · screenshots (o empty) · CTA (según estado) · año/período.

CTA por estado:

- EN OPERACIÓN con URL live: “Abrir producto” (nueva pestaña) + “Conversar”.
- EN DESARROLLO / PRELANZAMIENTO: “Conversar sobre este desarrollo” — nunca “Comprar”; nunca demo conflicto/000.
- TRAYECTORIA: “Ver casos” — nunca “Solicitar demo” salvo evidencia de vigencia.

---

## 3. Filtros `/productos`

1. Estado: En operación / En desarrollo / Prelanzamiento / Trayectoria  
2. Familia: Territorio / Gestión institucional / Productos propios geo / Campo y sondeo  
3. (Opcional) Con URL viva

No filtrar por “GOST sí/no” en UI pública (demasiado interno).

---

## 4. Página `/productos`

Intro: “Catálogo de lo que hemos construido — no un marketplace de 13 SaaS iguales.”  
Tres bandas de estado. Históricos visibles. CAPTURE mencionado en nota al pie del índice territorial, no como card.
