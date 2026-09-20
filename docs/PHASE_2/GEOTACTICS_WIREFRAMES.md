# Wireframes textuales — GeoTactics Corporate 2.0

**Fase:** 2.2.0  
**Sin HTML/CSS.** Experience Spec v1.1.

---

## Desktop 1440 — Home

```
1440
┌──────────────────────────────────────────────────────────────────────────┐
│ GEOTACTICS.    Qué hacemos  Productos  Casos  Tecnología  Nosotros  [Conversar]
├──────────────────────────────────────────────────────────────────────────┤
│ SIGNALS coral  [ SIGNALS / 001 ]  título ........ FECHA   01/04 →        │
│ (ausente si 0 noticias; altura fija si visible → no CLS)                 │
├──────────────────────────────────────────────────────────────────────────┤
│ HERO  H1 + supporting + [Conversemos] Cómo trabajamos + origen + 2017     │
├──────────────────────────────────────────────────────────────────────────┤
│ EVIDENCE  3 cols cualitativas                                             │
│ QUÉ HACEMOS  5 cards                                                      │
│ PRODUCTOS  A tres iguales | B chips estado | C trayectoria                │
│ GOST  CAPTURAR → CONECTAR → ENTENDER → DECIDIR                            │
│ CASOS  3 cards (fases en detalle)                                         │
│ MAPA  lista + OSM CASO/SEDE + attribution                                 │
│ TIMELINE compacta  2008* 2017 2018-19 2023 2024 2025-26                   │
│ CONFIANZA  nombres                                                        │
│ CTA  Conversemos                                                          │
│ FOOTER  Actualidad · Privacidad* · Cookies* · Aviso*                      │
└──────────────────────────────────────────────────────────────────────────┘
```

\*2008 = memoria, no “desde 2008”. \*legal = REQUIERE_REVISION_LEGAL.

### Desktop — /noticias

Hero compacto “Actualidad” · destacada · grid NewsCard · filtros solo si categorías pobladas.

### Desktop — /noticias/{slug}

Breadcrumb · heroImage · fecha · categoría · cuerpo · relacionados · OG.

### Desktop — /casos/{slug} con fases

Meta + relato. PhaseNavigation. Por fase: hero + 2 fotos + caption + screenshot/doc/mapa (no mosaico único). MediaViewer.

### Desktop — /nosotros timeline

2017 primario. 2008 secundario MEMORIA. Timeline expandida + media AUTHORIZED. MVV. Equipo.

### Desktop — /conversar

Form estados idle→success/error/offline. Privacy notice. Canales WA/tel/mail.

### Desktop — Productos / Tecnología

Sin cambio de IA 2.1.

---

## Tablet 768–1024

Conversar + ☰ si la nav no cabe. Signals 01/04. Productos A igual peso. Timeline snap opcional. Footer legal wrap. Mapa bajo casos + lista.

---

## Mobile 360–430

```
┌──────────────────────────┐
│ GEOTACTICS. [Hablar] ☰   │
│ SIGNALS  1 noticia 01/04 │
│ controles visibles       │
│ HERO… A/B/C  GOST        │
│ Casos · lista+mapa       │
│ Timeline vertical        │
│ Confianza · CTA          │
│ Footer Actualidad+legal  │
└──────────────────────────┘
```

Sin drag. Sin ticker rápido. Swipe media opcional.

---

## Tactical layer

Clic/Enter = acción. Drag desktop opcional. Signals pausable + teclado. `prefers-reduced-motion`.
