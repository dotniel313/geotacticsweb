# FINAL_STRUCTURE_REGISTER

**Fase:** 3.6.0-alpha.1  
**Entrada a 3.7.** Estados: STRUCTURE_COMPLETE salvo nota.

| route | status | components | contentStatus | assetStatus | linksStatus | responsiveStatus | a11yStatus | remainingDebt |
|---|---|---|---|---|---|---|---|---|
| `/` | STRUCTURE_COMPLETE | Hero, Evidence, Caps, Method, Identity, Products, Cases/Map, Timeline compact, Signals, Footer | DRAFT_EDITORIAL | OG/font pending | Conversar=/contacto | QA 3.6 | skip/header/main/footer | copy 3.7; Signals vacío |
| `/que-hacemos` | STRUCTURE_COMPLETE | CapabilityGrid | DRAFT | — | ok | ok | ok | rewrite 3.7 |
| `/productos` | STABLE_FOR_ALPHA | ProductShowcase | SoT public copy | fallbacks | platform LIVE+publicable; ver proyecto | ok | ok | ProductDetail; polish landings |
| `/casos` | STRUCTURE_COMPLETE | Map + archive | DRAFT_EDITORIAL | 1 pin | ok | ok | lista+mapa | coords; fotos |
| `/casos/[slug]` | STRUCTURE_COMPLETE | CaseDetail | DRAFT_EDITORIAL | slots | ok | ok | ok | copy/fotos |
| `/tecnologia` | STRUCTURE_COMPLETE | GOST, capas, lineage, timeline | DRAFT_EDITORIAL | — | ok | ok | keyboard TL | claims 3.7 |
| `/nosotros` | STRUCTURE_COMPLETE | identity A–K | DRAFT + TEAM pending | fotos equipo | Conversar | ok | ok | misión/visión/equipo |
| `/noticias` | STRUCTURE_COMPLETE | empty archive | vacío editorial | — | /noticias | ok | ok | posts 3.7 |
| `/noticias/[slug]` | READY empty paths | NewsDetail | n/a | n/a | n/a | n/a | n/a | cuando existan públicos |
| `/contacto` | STRUCTURE_COMPLETE | canales + form mailto | DRAFT_EDITORIAL | — | email/WA verified | ok | labels | endpoint real |
| `/privacidad` | STRUCTURE_COMPLETE | audit copy | DRAFT_LEGAL | — | mailto | ok | ok | legal 3.7 |
| `/legal` | STRUCTURE_COMPLETE | aviso mínimo | DRAFT_LEGAL | — | ok | ok | ok | RUC/domicilio |
| `/404` | STRUCTURE_COMPLETE | simple | DRAFT_EDITORIAL | — | home/contacto | ok | ok | — |
| `/conversar` | REDIRECT | → `/contacto` | — | — | 3.6 | — | — | — |
| `/sitemap.xml` | STRUCTURE_COMPLETE | lista rutas públicas | — | — | — | — | — | robots allow post-cutover |

**Header:** 5 ítems + Conversar. Noticias no en header (espacio).  
**Footer:** logo, descriptor, nav, archivo, base NL, email, legal, herencia DW.  
**Mapa:** sin puntos nuevos.
