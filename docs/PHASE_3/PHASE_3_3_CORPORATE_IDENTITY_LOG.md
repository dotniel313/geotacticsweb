# PHASE 3.3.0-alpha.1 — Block A · Corporate identity

**Fecha:** 18 septiembre 2026  
**Estado:** **STRUCTURE_COMPLETE · CONTENT_PENDING_RECONCILIATION**  
**Siguiente:** **READY_FOR_BLOCK_B_3_4** (no iniciado aquí).  
**SoT:** 1.0.1 OWNER APPROVED  
**Base:** 3.2.3-alpha.1  
**PRODUCTS:** `STABLE_FOR_ALPHA`  
**No** Block B (mapa). **No** Block C (tecnología/timeline profunda). **No** Block D (footer final). **No** cutover.

## Copy (DRAFT_EDITORIAL — no OWNER_APPROVED)

| Campo | Texto | Estado |
|---|---|---|
| Propósito | (hipótesis en identity.ts) | DRAFT_EDITORIAL |
| Misión | (identity.ts) | DRAFT_EDITORIAL |
| Visión | (identity.ts) | DRAFT_EDITORIAL |
| Hero / quiénes / historia / principios / GOST | identity.ts | DRAFT_EDITORIAL |

No se publican superlativos ni claims de liderazgo.

## Evidencia usada

- SoT 1.0.1: doctrina GOST, principio problema real, sedes Ibarra→Nueva Loja post-2020, timeline etapas, diversificación, CAPTURE = COMPONENT.
- `docs/GEOTACTICS_GOST_CONTEXT.md`: autor Jhony Daniel Orellana Torres.
- Inventario 2026 §5.10 / §10.3: equipo Wix/Sheet/Index1.

## Personas

| Nombre | role_confirmed | bio | photo | public | evidencia |
|---|---|---|---|---|---|
| Jhony Daniel Orellana Torres | Autor/ideólogo GOST (OWNER). Wix: Fundador & CEO | Conservadora; CEO no es título público | missing | **sí** | SoT/GOST + Wix CONFIRMADA |
| Luis Padilla | Fundador & Jefe de Programación (Wix) | — | Unsplash I1 **do_not_use** | no | REQUIERE VALIDACIÓN |
| Germán Flores | Fundador & Jefe de Políticas (Wix) | — | Unsplash **do_not_use** | no | REQUIERE VALIDACIÓN |
| Veronica Jama, Má José Trujillo, Giovanni Romero, Marco Landi, Christian Montalvo | cargos Wix | — | wixstatic no copiado | no | HISTÓRICA / DESCONOCIDA |

## Assets

| Asset | Estado |
|---|---|
| Logo header / master `G_L_2024` | APPROVED (ya en 2.0) |
| Grid / geometría territorial | PUBLICABLE (composición propia) |
| Fotos equipo Wix | DISCOVERED / NEEDS_REVIEW — no publicadas |
| Unsplash Index1 | do_not_use |
| Foto fundador | NEEDS_OWNER_ASSET |

## Decisiones visuales

Composición editorial asimétrica (hero + rail origen/base; spine de historia; misión/visión en dos columnas desktop; principios como lista, no 8 cards; GOST banda táctica; ficha única de persona con placeholder geométrico; teaser de mapa sin cartografía ficticia). Paleta coral/graphite/off-white. Cierre de página: CTA + colofón; **no** footer corporativo final.

## Bugs absorbidos

- Texto huérfano CAPTURE en `/productos` retirado. Flujo: catálogo → CTA → colofón.
- Notas de oficinas filtradas: no filtrar jerga `CONFIRMED_OWNER` / `UNKNOWN` al público.

## Responsive QA

`/nosotros`, `/`, `/productos` — 1440, 1024, 820, 768, 430, 393, 360: `scrollWidth <= innerWidth`. Capturas: `docs/PHASE_3/captures/alpha.3.3.0/`.

## Tests

`npm run check`: 0 errors/warnings/hints. `npm run build`: OK.

## Producción

`index.html` raíz 91 424 bytes, 8 ago 2026 — intacta.

## Gaps OWNER

- Propósito / misión / visión  
- Cargo público del fundador (¿publicar CEO?)  
- Foto fundador  
- Resto del equipo (quién es público, bios, fotos propias)  
- Año exacto Ibarra → Nueva Loja (sigue UNKNOWN; copy dice «después de 2020»)  
- Autorización fotos históricas Wix  
- Página `/tecnologia` sigue placeholder (CTA ya apunta ahí)

## Changelog

- `/nosotros` editorial A–K  
- IdentityBridge en Home  
- Colecciones `people`, `offices`, `company`  
- CAPTURE huérfano eliminado  
- Versión 3.3.0-alpha.1  
- **DETENERSE. No iniciar Block B.**

## Closeout owner review (misma 3.3.0-alpha.1)

Causa: (1) `max-width` en `ch` demasiado bajo en h1 (16ch), h2 (18ch), propósito (22ch), CTA (28ch). (2) Spine de historia: grid de 2 columnas con 3 hijos — el párrafo caía en la columna de 2.5rem.

Solución: medidas en rem (~22rem títulos, 36rem propósito/CTA); spine envuelve título+texto en un `div`; flags OWNER_* fuera de la UI pública.

Propósito / misión / visión: **DRAFT_EDITORIAL** (directiva structure-first; no OWNER_APPROVED). Equipo: **TEAM_CONTENT_PENDING_HISTORICAL_RECONCILIATION**. No 3.3.1. No Block B en esta ejecución.

Directiva: `docs/PHASE_3/STRUCTURE_FIRST_DIRECTIVE.md`  
Deuda: `docs/CONTENT_RECONCILIATION/CONTENT_DEBT_REGISTER.md`
