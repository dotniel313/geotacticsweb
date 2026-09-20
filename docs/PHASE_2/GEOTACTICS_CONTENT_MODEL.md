# Modelo de contenido (independiente de CMS)

**Fase:** 2.2.0  
**Implementable luego** en Markdown / JSON / CMS sin cambiar la IA.

Campos `status` de evidencia no se publican; sirven de gating interno.

---

## Product

```
id                P-DS …
slug
name
type              producto | plataforma | ecosistema
publicationState  actual | prelanzamiento | historico
sector
summary           1–2 frases SoT
description
capabilities[]    solo confirmadas
platforms[]       web | movil | unknown
gostRelation      none | fundamento | aplica_principios | no_afirmar
relatedCaseSlugs[]
relatedProductSlugs[]
url               nullable
urlStatus         200 | 000 | none | conflicto
period
ctaType           open_url | converse | view_cases | none
screenshots[]     paths autorizados
componentNote     p.ej. CAPTURE no es Product
```

## CaseStudy

```
slug
title
client
territory
year
yearConflict      boolean
problem
context
solution
implementation
productIds[]
componentIds[]    C-CAP, C-MON
resultPublic      texto o null
mapLat
mapLng
markerType        caso
gallery[]         legado; preferir phases[].photos
phases[]          ver Case Study Model 2.2
```

## Capability

```
slug              inteligencia-territorial | sistemas-gestion | datos-bi-gis | aplicaciones-campo | plataformas-geo
title
problemStatement
portfolioIds[]    productos/componentes que la evidencian
homeOrder
```

## Person

```
name
rolePublic        sin aliases internos si el dueño no los autoriza
photo             autorizado | empty
visible
```

## Client

```
name
logo              autorizado | none
relatedCaseSlugs[]
displayOnHome     boolean  (nombres, no logos inventados)
```

## News

```
id
slug
title
excerpt
body                  Markdown
publishDate
updatedDate
category              empresa | productos | implementaciones | territorio | tecnologia | publicaciones
featured              boolean   # Signals
active                boolean
draft                 boolean   # no index
heroImage
gallery[]
relatedProductIds[]
relatedCaseSlugs[]
author
seoTitle
seoDescription
ogImage
```

Solo publicar contenido real. Ticker Sheet = NEEDS_REVIEW.

## Office / Location

```
kind              sede | caso
label             Nueva Loja
region            Sucumbíos
lat
lng
public            Ibarra pendiente de aprobación
```

## Relación de entidades

Product 1—n CaseStudy  
Capability n—n Product  
Client 1—n CaseStudy  
Office sede ≠ marker de CaseStudy  

CAPTURE y capa BI = Component (no Product) referenciados desde CaseStudy PDOT.
