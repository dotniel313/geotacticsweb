# Premium Digital Experience Standard

**Fase:** 2.2.0  
**Carácter:** requisitos de producción. No es asesoría legal. Copy legal = `REQUIERE_REVISION_LEGAL`.  
**No implementar** headers, CMP ni formularios en esta fase.

Paleta de trabajo (HEX neutros **provisionales**; no definitivos sin contraste):

| Token | Rol | Nota |
|---|---|---|
| Coral `#E84C3D` | CTA, Signals, acento | dominante de cinta |
| Graphite / Gray 950–800 | texto | reemplaza café como texto principal |
| Gray 600–400 | secondary / meta | |
| Gray 200–100 / Off white `#f4f7f6` | fondos | |
| Café `#4A3E3D` | herencia (bordes, HUD suave) | **no** pintar toda la UI |

---

## 1. Privacy

Clasificación de tratamientos:

| Categoría | Ejemplo 2.0 | Consentimiento |
|---|---|---|
| STRICTLY NECESSARY | sesión de form CSRF, preferencia reduced-motion local | no CMP |
| ANALYTICS | ninguno por defecto | si se añade: Preference Center **antes** de cargar |
| FUNCTIONAL | Leaflet/OSM (IP al tile server) | informar en privacidad; no cookie banner solo por mapa |
| MARKETING / THIRD PARTY | embeds YT, pixel | CMP + bloqueo hasta consentimiento |

Si **no** hay ANALYTICS ni MARKETING: **no mostrar CMP**. No cookie banner estético.

Footer futuro (copy `REQUIERE_REVISION_LEGAL`): Privacidad · Cookies · Preferencias (solo si hay no-esenciales) · Aviso legal.

Componentes: CookieConsent, PrivacyPreferences — **sin proveedor CMP elegido**.

---

## 2. Third parties (inventario previo)

| Tercero | purpose | data sent | cookie/storage | loads before consent? | fallback | privacy impact |
|---|---|---|---|---|---|---|
| Leaflet (self-host JS preferible) | mapa casos | n/a lib | no | sí (página con mapa) | lista de casos | bajo |
| OSM tiles | raster mapa | IP, UA al tile | no típico | sí en mapa | mapa ErrorState | medio (IP) |
| Google Fonts | Open Sans | IP a Google | posibles | **evitar** | self-host fuentes | medio |
| Analytics | — | — | — | no por defecto | — | alto si se añade |
| YouTube | — | — | — | no auto-iframe | facade privacy-enhanced | alto |
| Forms backend | TBD | datos del form | session | N/A | canales tel/mail/WA | alto (datos) |
| WhatsApp wa.me | canal | clic sale del sitio | n/a | link | otros canales | bajo |
| Social embeds | — | — | — | no por defecto | enlace | alto |
| Remix Icon CDN | iconos | IP CDN | no | **evitar en prod** | SVG locales | bajo-medio |
| Google Sheets / PapaParse | CMS actual | CSV público | n/a | **prohibido runtime 2.0** | contenido MD | — |
| Unsplash | fotos | — | — | **prohibido** | empty | — |

---

## 3. Security (checklist cutover Apache — no configurar ahora)

- [ ] HTTPS only  
- [ ] HSTS cuando infra validada  
- [ ] CSP acorde a assets reales (sin `unsafe-inline` eterno; ajustar al CSS/JS de Astro)  
- [ ] X-Content-Type-Options: nosniff  
- [ ] Referrer-Policy: strict-origin-when-cross-origin (o más estricto)  
- [ ] Permissions-Policy: desactivar unused (cámara, mic, geo del browser si no se usa)  
- [ ] frame-ancestors `'self'` (CSP) — no iframe DS  
- [ ] Sin secretos ni anon keys en frontend (archivar HTML viejos fuera de docroot)  
- [ ] Dependencias `npm audit` en build  
- [ ] Formulario: HTTPS, spam honeypot + rate-limit backend, no secretos en cliente  

---

## 4. Forms (`/conversar`)

Estados: idle · focus · validating · sending · success · error · offline/rate-limit.  
No perder draft (sessionStorage local, sin PII innecesaria). Validación accesible (`aria-invalid`, resumen). Privacy notice junto a submit (`REQUIERE_REVISION_LEGAL`). Sin cuenta de usuario. Canales: email `info@geotactics.com.ec`, WhatsApp, teléfono (auditoría). Componente FormStatus.

---

## 5. Error / empty / fallback

| Estado | Tratamiento |
|---|---|
| 404 | página de identidad + enlaces Inicio / Productos / Conversar |
| 500 form | mensaje humano + canales; no stack |
| map unavailable | ErrorState + lista casos |
| image missing | EmptyState / ratio reservado; no icono roto |
| product URL unavailable | no CTA “abrir”; Conversar o ficha |
| news empty | no Signals; `/noticias` empty editorial (no fake posts) |
| filter empty | EmptyState “ningún resultado” |
| offline partial | form error offline |

Identidad GeoTactics. Nunca `undefined`, spinner infinito, stack trace.

---

## 6. Performance / CWV

Objetivos: LCP &lt; 2.5 s · CLS &lt; 0.1 · INP &lt; 200 ms (medir en Fase 3).  
Imágenes: sizes, width/height, lazy bajo fold; **hero/LCP no lazy**; AVIF/WebP + fallback. Galerías de fase: no descargar el caso entero; MediaViewer on demand. Leaflet solo en rutas con mapa. Signals: altura fija. Fuentes self-host; `font-display: swap`. JS islas &lt; 80 KB gzip mapa+nav+signals+lightbox.

---

## 7. PWA

**No** convertir en PWA instalable por defecto (poco valor corporativo).  
Sí: favicon set, apple-touch-icon, theme-color (coral o off-white), webmanifest **opcional** mínimo sin `display=standalone` agresivo, OG/share.

---

## 8. Accessibility (amplía plan AA)

Signals operable; lightbox trap+Escape; swipe de media **nunca** único path; contraste cinta coral; reduced-motion en Signals y Timeline.

---

## 9. SEO / media

`/noticias` y slugs publicados indexables. Drafts / NO_PUBLICAR / yearConflict / placeholder: noindex. RSS estático si hay noticias. Image metadata (alt, dimensions). Breadcrumbs.

---

## 10. Media

Solo AUTHORIZED o empty. Lazy grids. Caption + evidenceLevel. Stock prohibido.
