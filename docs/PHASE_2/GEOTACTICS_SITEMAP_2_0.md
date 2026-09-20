# Sitemap — GeoTactics Corporate 2.0

**Fase:** 2.2.0  
**No implementar.** URLs conceptuales. Nav principal **sin** Noticias.

---

## 1. Navegación principal (propuesta)

```
Inicio · Qué hacemos · Productos · Casos · Tecnología · Nosotros · Conversar
```

**Tecnología permanece en navegación principal.** Motivo: GOST no es un producto ni una “línea de servicio”; si se fusiona en Qué hacemos, la empresa vuelve a leerse como agencia de entregables. Qué hacemos = problemas/capacidades. Tecnología = método + capas de dato (sin stack inventado). El riesgo de página delgada se mitiga con ciclo GOST + léxico ya documentado, no con logos de cloud.

**Descartado:** ítem “Proyectos” (confunde producto e implementación).  
**Descartado:** nav compacta “Soluciones / Huella” (mezcla otra vez producto y caso).

---

## 2. Árbol

```
/                          Home
/que-hacemos               Capacidades (5)
/productos                 Índice por estado (actuales / prelanzamiento / históricos)
/productos/datasucumbios   Detalle (link out a datasucumbios.tech; no iframe)
/productos/orangemap
/productos/explorasucumbios
/productos/sigdr           Histórico — no SaaS
/productos/sigc
/productos/yaku
/productos/ot
/productos/termometro-social
/productos/madaradio
/productos/guanta
/productos/rantyi          Prelanzamiento
/productos/fixis           Ecosistema Fixis / Fixis PRO
/productos/observatorio
/casos                     Índice de implementaciones
/casos/gualsaqui
/casos/vacas-galindo
/casos/pimampiro
/casos/la-victoria
/casos/emapai
/casos/dayuma              Año: CONFLICTO — publicar solo cuando se cierre
/casos/ines-arango         Ídem; no fusionar con ExploraSucumbíos
/casos/pdot-sucumbios
/casos/ot-gadps            Caso de la solución O/T (distinto del producto en catálogo)
/casos/patas-a-la-obra     RSE; no catálogo de producto
/tecnologia                GOST + capacidades tecnológicas (sin tecnologías específicas no evidenciadas)
/nosotros
/conversar
/noticias                  Actualidad (no en nav principal)
/noticias/{slug}
/noticias.xml              RSS si hay ≥1 publicada
/privacidad                REQUIERE_REVISION_LEGAL
/cookies                   REQUIERE_REVISION_LEGAL
/aviso-legal               REQUIERE_REVISION_LEGAL
```

**No en sitemap público:** CAPTURE como producto; Predicción; SIGMD; Inqui; Ecuador Ancestral; E-GPS; paper CTEA-IE-2020 como producto.  
CAPTURE aparece **dentro** de `/casos/pdot-sucumbios` y de `/tecnologia` (componente).  
Paper CTEA: mención posible en `/nosotros` como estudio, no caso de éxito de software.

**No indexar en robots:** `Index1.html`, `index0.html`, `index2.html`, `index N.html`.

---

## 3. Comportamiento de nav

### Desktop (1440)

- Header sólido, wordmark izquierda, 6 destinos + CTA **Conversar** (coral) a la derecha.
- Sticky al scrollear; fondo café/claro con borde de retícula 1 px; no HUD opaco.
- Estado activo: subrayado coral + `aria-current="page"`.
- CTA Conversar siempre visible; no es `mailto` suelto.
- Bajo el header (solo Home, si hay noticias): Signals Strip. No es ítem de nav.

### Móvil (360–430)

- Wordmark + CTA Conversar (icono o texto corto) + menú.
- Panel de menú: lista de 6 destinos + Conversar repetido al pie del panel.
- Sin drag. Sin splash.

### Tablet (768–1024)

- Como desktop si cabe en una línea; si no, patrón móvil con CTA persistente.

---

## 4. Páginas de detalle de producto — cuáles sí

Detalle propio **sí** (evidencia + rol narrativo o URL): DataSucumbíos, OrangeMap, ExploraSucumbíos, SIGDR, SIGC, YAKU, O/T, Observatorio.

Detalle propio **sí pero contenido mínimo / estado explícito:** Termómetro Social, MadaRadio, GUANTA, RANTYI, Fixis (pendientes de cliente, año, .key o demo).

**No** 13 micrositios de marketing obligatorios: el índice `/productos` es la superficie completa; el detalle es ficha, no landing SaaS.

CAPTURE: **no** ruta `/productos/capture`.
