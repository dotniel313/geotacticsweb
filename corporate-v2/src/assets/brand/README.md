# Brand assets — Corporate 2.0

## OWNER_CONFIRMED_BRAND_ASSET

Master oficial: `G_L_2024/G_L_2024.005.png` (fondo claro: GEOTACTICS + símbolo circular/territorial + `Data / Warehouse - Mart`).

Copias **intactas** en `master/` (no sobrescribir). El `logo.png` de producción es la variante oscura del mismo sistema; no es el header 2.0.

**SVG_OFFICIAL_PENDING** — no hay SVG oficial; alpha usa PNG recortado.

## Variantes

| Archivo | Tipo | Uso |
|---|---|---|
| `master/G_L_2024.005.png` | FULL BRAND (1920×1080, master) | Fuente; no servir tal cual (mucho padding) |
| `derived/geotactics-full-light.png` | FULL BRAND recorte (mismo geometría, crop) | Footer / About / contextos amplios (aún no en UI 3.0) |
| `derived/geotactics-header.png` | HEADER: crop del master **sin descriptor** | Header compacto. Letras y símbolo no redibujados |

Crop = bounding box. Sin stretch, sin recoloreo, sin vectorización.

Descriptor: parte del activo FULL; **omitido visualmente en header** por altura, no eliminado de la marca.

## Color del símbolo vs tokens

Símbolo master (muestreo): **#DA3B26** `rgb(218,59,38)`.  
`--gt-coral`: **#E84C3D**.  
**No** se recoloreó el logo para coincidir. Coral de UI (CTA, Signals) permanece. Diferencia registrada.

## Wordmark HTML `GEOTACTICS.` + punto coral

**SUPERSEDED** como representación primaria. No usar como logo.
