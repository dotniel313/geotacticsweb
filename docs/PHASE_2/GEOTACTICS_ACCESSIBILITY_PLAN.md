# Plan de accesibilidad (diseño)

**Fase:** 2.0.0  
**Objetivo:** WCAG 2.2 AA. El HUD no puede ser la única interfaz.

---

## 1. Contraste

- Texto café `#4A3E3D` sobre `#f4f7f6`: verificar ≥ 4.5:1 (cuerpo) / 3:1 (grande).
- Coral sobre blanco: CTA con texto blanco solo si el par cumple AA; si no, CTA coral outline + texto café.
- Pines de mapa: no usar solo color (forma distinta sede vs caso).
- Estados de producto: texto + badge, no solo color.

---

## 2. Teclado y foco

- Orden: skip link → nav → contenido → footer.
- `aria-current` en nav.
- Focus visible 2 px coral o anillo café (nunca `outline: none` global).
- Drop-zone y drag: **alternativa completa** (Enter en la card = misma acción).
- Overlay menú móvil: foco atrapado, Escape cierra, restore focus.

---

## 3. Semántica

- Un `h1` por página (headline, no el wordmark).
- Nav en `<nav>`; mapa en región etiquetada “Mapa de casos”.
- No `user-select: none` global (auditoría actual).

---

## 4. Movimiento

- `prefers-reduced-motion: reduce`: sin pulso de splash (splash eliminado), sin líneas animadas de GOST, sin drag tutorial.
- Tactical layer apagable conceptualmente: la página sigue siendo usable.

---

## 5. Táctil

- Destinos ≥ 44×44 px (CTA Conversar, hamburguesa, chips de filtro).
- Mapa: lista de casos equivalente encima o debajo; el mapa no es el único índice.

---

## 6. Alternativas de contenido

- Alt del wordmark: “GeoTactics”.
- Fotos de caso: descripción de lugar/hecho, no “imagen1”.
- Empty states: “Sin fotografía autorizada”, no stock.
- Iframe de productos: no embeber DataSucumbíos; enlace con nombre del destino.

---

## 7. Mapa

- Leaflet: atribución OSM visible.
- Markers con nombre accesible.
- Popup operable por teclado.
- Si el mapa falla: la lista de casos permanece.

---

## 8. Drag

Prohibido como único path. Documentar en implementación (Fase posterior) `role` y texto equivalente “Abrir {capacidad}”.
