# Criterios de aceptación — puerta de Fase 3

**Fase:** 2.1.0  
La implementación no se declara completa sin esta lista. No ejecutar Fase 3 en este documento.

---

## Comprensión y modelo

- [ ] Empresa entendible en &lt; 8 s (H1 de trabajo visible sin drag).
- [ ] Empresa ≠ DataSucumbíos (arquitectura: DS es una de tres cards EN OPERACIÓN, mismo peso; sin iframe; sin disclaimer de footer).
- [ ] Producto ≠ caso (URLs `/productos/*` vs `/casos/*`).
- [ ] CAPTURE ≠ producto (no ruta de catálogo; aparece en PDOT y Tecnología).
- [ ] Estados visibles: EN OPERACIÓN / EN DESARROLLO / PRELANZAMIENTO / TRAYECTORIA según SoT.
- [ ] Home muestra presente + nueva generación + trayectoria (no seis cards equivalentes).
- [ ] GOST nombrado; Home 4 pasos; Tecnología ciclo 8; BI/DW/GIS no rivales.
- [ ] 2017 ancla Home; 2008 solo Nosotros con etiqueta de memoria; no “desde 2008” / “18 años” en SEO.
- [ ] 27.539 no en Home; flag NO_PUBLICAR en caso PDOT; nunca habitantes; nunca 28K.
- [ ] Ibarra no como sede; Nueva Loja sí.
- [ ] TOS no aparece en copy de usuario.
- [ ] Sin claims SoT prohibidos (ISO, patente, novedad mundial, predicción, ahorro).
- [ ] Sin “Comprar”; sin demos en conflicto o 000 como prueba.

## Interacción y a11y

- [ ] Móvil sin drag.
- [ ] Clic y Enter ejecutan la acción principal; drag opcional desktop.
- [ ] Teclado completo (skip, nav, mapa, menú).
- [ ] WCAG 2.2 AA (contraste, foco, semántica, no solo color).
- [ ] `prefers-reduced-motion` apaga animaciones tácticas.
- [ ] Mapa: lista equivalente, no nav primaria, fallback si JS/tiles fallan.
- [ ] OSM attribution visible.
- [ ] Destinos táctiles ≥ 44 px.

## Técnica y contenido

- [ ] Sin dependencia **runtime** de Google Sheets / PapaParse.
- [ ] Sin Unsplash / stock.
- [ ] SEO: `h1`, titles, descriptions, canonical, OG real, Schema conservador.
- [ ] `sitemap.xml` y `robots.txt`; prototipos HTML no indexables.
- [ ] Metadata por página.
- [ ] 404 propia.
- [ ] Sin links rotos **conocidos** (dossier geotactics.info, GUANTA→MadaRadio, capture 000, madaradio 000 como CTA de prueba).
- [ ] Performance budget (propuesto): LCP &lt; 2.5 s 4G medio; JS de islas &lt; 80 KB gzip mapa+nav; cero fetch CMS en home; imágenes width/height y formatos modernos.
- [ ] Apache sirve estáticos generados; cutover no deja `Index1`/`index0` públicos.

## Contenido mínimo publicado

- [ ] 13 productos en índice con estado correcto.
- [ ] Casos sin yearConflict en índice; Dayuma/Inés solo tras cierre.
- [ ] Termómetro en catálogo; cliente omitido si CONFLICTO.

## Addendum 2.2

- [ ] Signals coral implementada
- [ ] Signals hidden si 0 noticias
- [ ] `/noticias` existe
- [ ] noticia tiene URL individual
- [ ] timeline conservada (Home compacta / Nosotros expandida)
- [ ] casos admiten `phases[]`
- [ ] galerías lazy
- [ ] lightbox accesible
- [ ] no stock
- [ ] privacy architecture definida
- [ ] cookies solo si corresponde (no CMP estético)
- [ ] preference center si corresponde
- [ ] terceros inventariados
- [ ] security headers revisados (checklist cutover)
- [ ] formulario estados completos
- [ ] 404 diseñada
- [ ] fallbacks
- [ ] Core Web Vitals medibles (LCP/CLS/INP)
- [ ] media optimizada
- [ ] legal copy marcado para revisión
- [ ] ningún secreto frontend
