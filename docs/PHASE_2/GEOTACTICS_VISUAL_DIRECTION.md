# Dirección visual — Territorial Operating System

**Fase:** 2.0.0  
**Metáfora (solo diseño):** “Territorial Operating System”. GeoTactics **no** es un sistema operativo.

---

## 1. Sensación objetivo

AMAZÓNICO + TECNOLÓGICO + TERRITORIAL + PRECISO.

No folclórico. No turístico. No militar agresivo. No cyberpunk. No terminal verde. No dashboards financieros. No SaaS violeta. No stock de ejecutivos. No glassmorphism excesivo. No clone Linear / Vercel / Palantir / Datawheel.

---

## 2. Herencia de marca (evolucionar, no destruir)

| Token | Uso 2.0 |
|---|---|
| Wordmark `GEOTACTICS.` | Header; punto coral |
| `#E84C3D` coral | CTA, estados activos, pines de caso, acento |
| `#4A3E3D` café | Texto fuerte, HUD-calibrado, bordes |
| Fondo `#f4f7f6` (actual) | Base clara; no dark mode obligatorio |
| Retícula 40 px | Fondo sutil; más visible en hero y tecnología |
| Open Sans | Continuidad; no saltar a Inter/Geist |
| `logo.png` / favicon | Conservar; optimizar peso luego |
| Mapa OSM en gris + pines | Huella de casos |
| Fichas / códigos / coordenadas | Tactical layer, no chrome de toda la página |

`G_L_2024/`: no adoptar hasta validar si es evolución de marca.

---

## 3. Sistema de capas

**Capa A — Arquitectura de página:** columnas, type scale, espaciado, nav sólida. WCAG AA.

**Capa B — Territorio:** retícula, coordenadas de origen (Nueva Loja) en hero, mapa de casos.

**Capa C — Operación (tactical):** IDs de producto (`P-DS`), estados (ACTUAL / PRELANZAMIENTO / HISTÓRICO), hover tipo ficha, líneas de conexión en el ciclo GOST, drag opcional “leer archivo”.

C debe poder apagarse (`prefers-reduced-motion` y toggle implícito: no usar drag).

---

## 4. Cartografía

- Tiles OSM con atribución.
- Paleta de mapa desaturada; coral solo en marcadores de CASO.
- Sede: forma distinta (cuadrado / cruz de estación), no el mismo pin que un caso.
- No heatmaps inventados ni capas “open data” genéricas.

---

## 5. Fotografía

- Campo, territorio, tablets, juntas, infraestructura **real** cuando exista (Wix PDyOT, etc.).
- Empty state honesto si no hay asset autorizado.
- Prohibido Unsplash de oficinas / laptops / “team celebrating”.

---

## 6. UI de estados de producto

| Estado | Señal |
|---|---|
| ACTUAL | Coral sólido + “En operación” o URL |
| PRELANZAMIENTO | Contorno café + “En desarrollo” |
| HISTÓRICO | Sin CTA de “usar ahora”; “Trayectoria” |

---

## 7. Tono verbal-visual

Calibrar “cuartel general”: no como label de sede. Sede = Nueva Loja. El HUD es **estética de precisión**, no jerga militar.
