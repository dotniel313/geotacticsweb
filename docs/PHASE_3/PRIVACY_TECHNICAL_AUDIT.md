# PRIVACY_TECHNICAL_AUDIT

**Fase:** 3.6.0-alpha.1  
**Sitio:** `corporate-v2` alpha

## First-party

| Recurso | Hallazgo |
|---|---|
| Cookies propias | Ninguna |
| localStorage / sessionStorage | No usado en src |
| Analytics | No |
| Formulario | No POST a servidor; `mailto:` en cliente |
| Fuentes webfont | FONT_ASSET_PENDING; system stack |
| Embeds | Ninguno |

## Third-party (real)

| Recurso | Dónde | Notas |
|---|---|---|
| OpenStreetMap tiles `tile.openstreetmap.org` | TerritorialMap (Leaflet empaquetado) | Atribución visible. Posible cache/cookies del dominio OSM. |
| WhatsApp `wa.me` | /contacto | Solo al seguir el enlace |
| Cliente de correo `mailto:` | /contacto, footer | Sale del sitio |
| Superficies producto | catálogo | datasucumbios.tech, orangemap.*, explorasucumbios.* |

## Decisión CMP

**No banner de cookies.** No hay tracking no esencial propio. Analytics = POST-ALPHA / OWNER_DECISION.

## Recomendación Apache (no implementada)

Cuando exista cutover: HTTPS, headers de referrer, no filtrar secretos, CSP posterior (Leaflet/OSM tiles). No CSP en alpha: riesgo de romper preview.
