# GeoTactics Corporate Web 2.0 — Arquitectura de información

**Versión documental:** 1.6.1  
**Fecha:** 18 de septiembre de 2026  
**Esta fase no implementa, no rediseña en código y no modifica el sitio.**

Este documento **no es** la fuente de verdad de portafolio. **Consume** (y no contradice) **SOURCE OF TRUTH — GEOTACTICS CORPORATE 2.0, Versión 1.0, Fecha 18 septiembre 2026**:

- `GEOTACTICS_PORTFOLIO_INVENTORY_2026.md` (§ Clasificación vigente 1.6)
- `GEOTACTICS_PRODUCT_LINEAGE_2008_2026.md`
- `GEOTACTICS_GOST_CONTEXT.md`
- `GEOTACTICS_EVIDENCE_REGISTER.md`
- `GEOTACTICS_HISTORY_2008_2026.md`

La Fase 1.5 (wireframes, nav, tono visual) se conserva como **insumo de diseño**, no como taxonomía de productos. Donde un párrafo 1.5 choque con 1.6, **se ignora**.

**No vigente:** “Productos: únicamente DataSucumbíos hasta validación”. Vigente: **13 entradas** de producto/plataforma.

---

## 1. Modelo empresarial

### 1.1 Qué es GeoTactics

Empresa ecuatoriana de **tecnología y desarrollo de soluciones digitales**.

Incluye (lista de trayectoria, no de homepage): inteligencia territorial; captura distribuida; georreferenciación; sistemas de gestión; Business Intelligence; Data Warehouse / Data Mart; GIS; aplicaciones móviles; sistemas operacionales; plataformas de mercado; analítica; monitoreo; GovTech; productos digitales propios.

**No es** una Data Platform. **No es** DataSucumbíos. **No es** un clon de Datawheel.

DataSucumbíos es **un** producto/plataforma de inteligencia territorial, asociado al **caso** PDOT Sucumbíos 2023–2038.

### 1.2 Modelo de información (1.6)

```
GEOTACTICS  (empresa)
│
├── METODOLOGÍA          GOST
├── CAPACIDADES          (oferta: territorio, BI/DW, GIS, móvil, GovTech, mercado…)
├── PRODUCTOS            históricas + propias (ver inventario 1.6 bloque B)
├── COMPONENTES          CAPTURE, monitoreo BI de levantamiento
├── I+D+i                Predicción, SIGMD (no catálogo)
├── CASOS                implementaciones / consultorías
├── CLIENTES             organizaciones de los casos
├── TECNOLOGÍA           GOST + BI/DW/GIS/OLAP (sin claims científicos)
└── EMPRESA              origen, equipo, sedes, contacto
```

Identidad histórica Wix «Data / Warehouse - Mart» = antecedente analítico, no plantilla de la home 2.0.

### 1.3 Lo que el modelo NO es

- Un único producto.  
- Un listado plano de “proyectos” (error de Sheet e `index.html`).  
- SIGDR → CAPTURE → DataSucumbíos como versiones que se reemplazan.  
- GOST como software descargable.

### 1.4 Relaciones que sí se pueden contar (con cautela)

Ver grafo en `GEOTACTICS_PRODUCT_LINEAGE_2008_2026.md`.

Público, cuando haya copy:

- Empresa construye productos y ejecuta casos.  
- En Sucumbíos, el **caso PDOT** usó **CAPTURE** (captura) y **DataSucumbíos** (explotación), en una implementación **parcial** del modelo **SIGDR**. Flujo de datos: CAPTURE → Base Territorial → DataSucumbíos (DS consume; no alimenta la base). DataSucumbíos no es SIGDR v2.  
- MadaRadio aplica/deriva principios GOST; no es GOST como software.  
- SIGC → experiencia → YAKU → O/T (institucional).  
- OrangeMap → ExploraSucumbíos (vertical turística; sin afirmar código compartido).  
- Fixis y Fixis PRO = mismo ecosistema, no lanzados.

---

## 2. Arquitectura de información

### 2.1 Principio

Cada URL cuenta **un tipo de cosa**. El visitante no debe preguntarse si DataSucumbíos es “la empresa” o si el censo de Gualsaqui es “un producto”.

| Tipo | Pregunta que responde | Ejemplo evidenciado | Ejemplo prohibido |
|---|---|---|---|
| Empresa | ¿Quiénes son y por qué existen aquí? | Nueva Loja, 9 años, MVV | Home = visor de datos provinciales |
| Capacidad | ¿Qué problemas resuelven? | Gobernanza digital (copy actual) | Mezclar 13 sistemas en un grid de “features” |
| Producto | ¿Qué software mantienen y se puede volver a encargar o visitar? | DataSucumbíos | Listar SIGDR Gualsaqui 2017 como producto sin confirmar |
| Caso / proyecto | ¿Qué hicieron, para quién, dónde, cuándo? | Censo 31 parroquias | Llamarlo “plataforma” sin URL ni dueño |
| Tecnología | ¿Con qué enfoque construyen? | OLAP, SIG, móvil (léxico hallado) | Inventar stack de moda |
| Clientes | ¿Quién ha confiado? | GADP Sucumbíos, EMAPAI, juntas… | Iconos de “organismos internacionales” sin caso |
| Nosotros | Equipo y origen | Overlay actual + Sheet | Aliases internos si el propietario no los quiere públicos |
| Contacto | ¿Cómo hablar con la empresa? | mail, WA, tel | Solo `mailto` sin contexto |

### 2.2 Home no es el mapa ni el drag

Hoy la IA real es:

1. Tablero (logo + fichas).  
2. Overlays (nosotros / mapa).  
3. Timeline si adivinas el gesto.

La IA 2.0 debe **mostrar primero empresa y prueba**, y dejar el mapa y las fichas como **profundización**.

### 2.3 Contenido que sí puede alimentar cada sección (hoy)

**Empresa:** misión, visión, valores (`index.html` overlay); sede; wordmark; badge de años.

**Capacidades:** los cinco `categoryDetails` (texto largo de producción es usable).

**Productos:** las 13 entradas de `GEOTACTICS_PORTFOLIO_INVENTORY_2026.md` § Clasificación vigente 1.6. En Home se **priorizan** (propios actuales vs históricos vs prelanzamiento); no se reduce el catálogo a DataSucumbíos.

**Casos:** implementaciones (PDOT, juntas, EMAPAI, etc.), no duplicar clientes como productos. El mapa es índice geográfico de **casos**.

**Tecnología:** solo frases ya dichas (DW, BI, SIG, OLAP, datos abiertos, apps). Página corta. Nada de logos AWS/Azure inventados.

**Clientes:** hay nombres; casi no hay logos. No fingir marquee de Fortune 500.

**Contacto:** canales reales; dossier **roto** (no enlazar 404).

### 2.4 Decisiones humanas que bloquean el sitemap fino

Ver sección 8. Los pendientes (Inqui, Ecuador Ancestral, E-GPS, cifras, sede Ibarra, etc.) **no bloquean** el sitemap: Productos y Casos se diseñan con la taxonomía 1.6.

---

## 3. Wireframe textual de la Home 2.0

Sin HTML/CSS. Lectura de arriba abajo. Escritorio y móvil **ven el mismo relato**; el drag no es la puerta.

Identidad persistente: coral `#E84C3D`, café `#4A3E3D`, fondo `#f4f7f6`, retícula 40px, Open Sans, wordmark `GEOTACTICS.`

```
┌─────────────────────────────────────────────────────────────┐
│  GEOTACTICS.     Qué hacemos   Productos   Proyectos        │
│                  Nosotros      Conversar                    │
│  (header sólido, no HUD opaco que coma el mensaje)          │
└─────────────────────────────────────────────────────────────┘

[FRANJA DE ORIGEN — no hero SaaS]
  Nueva Loja · Sucumbíos · Amazonía ecuatoriana
  Empresa de desarrollo tecnológico
  (retícula visible, no foto stock de coworking)

[DECLARACIÓN — 8–12 segundos]
  Título: qué es GeoTactics (empresa que construye software,
  datos y sistemas para territorio y organizaciones).
  Una frase: qué problemas resuelve (decidir, gestionar,
  transparentar, operar en campo).
  NO: “Unlock your data platform”.
  SÍ: lenguaje propio (territorio, gobernanza, recursos).

[PRUEBA INMEDIATA — cifras solo si el propietario las confirma]
  Años en operación | Sistemas en campo | Provincias/cantones
  El “9 años” actual es candidato; “28K” del ticker I1 es
  candidato PERO tiene typos y no está en el Sheet → no
  publicar hasta validar.

[CAMPO DE ACCIÓN — las 5 fichas, ahora comprensibles]
  Cinco bloques nombrados como hoy:
  Inteligencia Territorial
  Gobernanza Digital
  Gestión de Recursos Naturales
  Legado y Futuro
  Proyectos Especiales
  Cada uno: 1 problema + 1 enlace a /que-hacemos
  Escritorio OPCIONAL: las fichas siguen siendo arrastrables
  hacia un “lector” como gesto táctico, PERO cada bloque
  también es clicable. Quien no arrastra, igual lee.

[PRODUCTOS]
  Título: lo que hemos desarrollado (empresa ≠ un solo producto)
  Priorizar en Home (no ocultar el resto del catálogo):
    propios actuales: p.ej. DataSucumbíos, OrangeMap, ExploraSucumbíos
    trayectoria: SIGDR, SIGC, YAKU, O/T (históricos)
    prelanzamiento: RANTYI, Fixis/Fixis PRO, Observatorio — estado “en desarrollo”
  CAPTURE no es card de producto (es componente).
  DataSucumbíos: link out a datasucumbios.tech; no embeber.
  Nunca llenar con Unsplash.

[TRAYECTORIA / CASOS]
  3–6 casos con año, cliente, lugar, productos/componentes usados.
  PDOT Sucumbíos como caso (no como producto).
  Enlace a listado / mapa.

[HUELLA]
  El mapa Leaflet actual, encuadre norte de Ecuador,
  pines por caso (no por “capa de datos abiertos”).
  Sede: “Nueva Loja”, no necesariamente “Cuartel General”
  (decisión de tono, §8).
  Leyenda = capacidades, una sola, no duplicada.

[ALIADOS]
  Logos reales cuando existan.
  Hoy el Sheet no tiene logo: o se piden archivos o la
  sección se reduce a nombres tipográficos.
  No iconos genéricos de “organismos internacionales”.

[CONVERSAR]
  WhatsApp, teléfono, correo institucional.
  Dossier: solo si hay PDF vivo en este dominio.
  LinkedIn: página de empresa cuando exista; el perfil
  personal no es la voz de GeoTactics.

[PIE]
  © GeoTactics · Nueva Loja · redes
  Distinción explícita: DataSucumbíos es un producto,
  no este sitio.
```

**Móvil:** mismo orden; fichas = lista o chips; mapa más bajo; FAB de conversar puede quedarse.

**Qué se elimina de la Home como requisito:** splash de 1s, ticker si no hay redacción, “LEER ARCHIVOS” como único camino, overlay “CODE GEOTACTICS” como primer “nosotros”.

---

## 4. Navegación propuesta (nombres no definitivos)

Máximo 6–7 ítems. Tres alternativas; **no se elige aún**.

### Alternativa A — Explícita (6 ítems)

`Inicio · Qué hacemos · Productos · Proyectos · Nosotros · Conversar`

| Ventaja | Desventaja |
|---|---|
| Enseña la distinción producto/caso | Hay que priorizar 13 entradas para no saturar el menú |
| Encaja el inventario futuro | “Qué hacemos” y “Proyectos” se parecen si el copy es flojo |
| CTA de conversación claro | “Conversar” vs “Contacto”: hay que elegir tono |

### Alternativa B — Compacta (5 ítems)

`Inicio · Soluciones · Huella · Empresa · Conversar`

Soluciones = capacidades + productos juntos. Huella = mapa + casos.

| Ventaja | Desventaja |
|---|---|
| Menos ruido | **Vuelve a mezclar** producto y caso (el error actual) |
| “Huella” es muy GeoTactics | Un visitante institucional busca “proyectos” y no lo ve |

### Alternativa C — Institucional (7 ítems)

`Inicio · Capacidades · Productos · Casos · Tecnología · Nosotros · Contacto`

| Ventaja | Desventaja |
|---|---|
| Cubre el brief original | 7 ítems aprietan en móvil |
| Tecnología como página de confianza | Hoy hay poco texto de tecnología; riesgo de página vacía |

**Recomendación de trabajo (no cierre):** Alternativa A o C. Con el catálogo 1.6, **Productos** ya no queda flaco: hay que **priorizar** (propios actuales vs históricos vs prelanzamiento), no esconder la sección.

**No usar:** Pricing, Blog, Login, Platform, Insights, Resources, ni home tipo Data Platform.

**No usar:** Pricing, Blog, Login, Platform, Insights, Resources.

El menú actual (`Nosotros` + `Operación y Proyectos` + mailto + Dossier) es insuficiente y el Dossier está **roto**.

---

## 5. Relación empresa / productos / casos

```
[GEOTACTICS empresa]
        │
        ├── GOST (método)
        ├── Productos históricos: SIGDR, SIGC, YAKU, O/T
        ├── Productos territoriales PDOT: DataSucumbíos
        │         componente CAPTURE + capa BI monitoreo
        ├── Productos propios: OrangeMap, ExploraSucumbíos,
        │         Termómetro Social, MadaRadio, GUANTA,
        │         RANTYI, Fixis/Fixis PRO, Observatorio
        └── Casos: Gualsaqui, juntas de agua, EMAPAI, Dayuma,
                  Inés Arango, GADPS, PDOT 2023–2038, …
```

**Regla de publicación 2.0:**

- Producto histórico: se puede narrar como trayectoria; no como SaaS activo salvo confirmación.  
- Producto propio prelanzamiento (Fixis, RANTYI, Observatorio): no “ya disponible”.  
- Caso: cliente, año, lugar, productos usados.  
- PDOT nunca en `/productos`. DataSucumbíos sí, con link out a `.tech`.  
- GOST en `/tecnologia` o Cómo trabajamos, no en catálogo.

---

## 6. Elementos visuales a conservar

| Elemento | Por qué es GeoTactics |
|---|---|
| Coral `#E84C3D` | Firma; fichas, CTA, badge |
| Café `#4A3E3D` | Más propio que el `#2C3E50` de los prototipos |
| Retícula técnica | “Plano / territorio”, no gradiente SaaS |
| Wordmark `GEOTACTICS.` con punto coral | Ya está en el HUD |
| `logo.png` / favicon | Identidad; optimizar tamaño, no cambiar a isotipo genérico |
| Mapa OSM en escala de grises + pines de color por capacidad | Huella de campo |
| Cinco colores de categoría (coral, azul, verde, ámbar, violeta) | Leyenda ya aprendida |
| Tipografía Open Sans | Continuidad; no saltar a Inter/Geist “startup” |
| Lenguaje territorial (Nueva Loja, parroquia, PDyOT, junta de agua) | Verdad operativa |
| Metáfora táctica **suave** (HUD, fichas) | Diferenciación, si no impide leer |

`G_L_2024/` se reserva a validación: podría ser evolución de marca no integrada.

---

## 7. Elementos UX a transformar

| Hoy | Hacia |
|---|---|
| Home muda + drag obligatorio | Declaración de empresa + prueba |
| Fichas = única IA de escritorio | Fichas = atajo táctico **además** de clic/teclado |
| “LEER ARCHIVOS” opaco | Si sobrevive, etiqueta comprensible (“Abrir línea de trabajo”) |
| Overlay “CODE GEOTACTICS” | `/nosotros` con título de empresa |
| Mapa = ítem de menú “Operación y Proyectos” | Mapa dentro de Proyectos / Home, no sustituto del listado |
| Ticker de noticias con 1 typo | Sala de prensa opcional o quitar |
| Splash 1 s | Fuera |
| `mailto` como “Iniciar proyecto” | Conversar (WA + formulario cuando exista) |
| Unsplash / Flaticon | Fotos reales o empty state honesto |
| Footer cápsula + ticker + FAB apilados | Un sistema de cierre (pie + un canal rápido) |
| Dossier 404 | Quitar hasta tener PDF propio |
| LinkedIn personal en FAB | Canal empresa |

Accesibilidad mínima a exigir en Fase 2 de diseño: headings reales, nav con destinos, contraste, no `user-select: none` global, fichas operables sin mouse.

---

## 8. Decisiones pendientes (tras 1.6)

Resueltas por el propietario (ya no preguntar si son producto): SIGDR, SIGC, YAKU, O/T, CAPTURE (componente), DataSucumbíos, Termómetro, OrangeMap, ExploraSucumbíos, MadaRadio, GUANTA, RANTYI, Fixis, Observatorio, GOST, SIGMD, Predicción, PDOT como caso.

Siguen abiertas:

### Contenido / precisión

1. ¿Dayuma e Inés Arango: uno o dos casos? ¿2022 o 2024?  
2. Cliente público del Termómetro (Oreja vs ES AHORA).  
3. Año público de MadaRadio.  
4. ¿Se publica 27.539 «Ciudadanos Capturados» (con glosa metodológica) o ninguna cifra?  
5. ¿GADPS en Explora = cliente, aliado o solo territorio?  
6. ¿Sede Ibarra se menciona?  
7. ¿GOST se nombra en la web 2.0 o queda interno hasta copy jurídico?  
8. ¿Productos históricos (SIGDR/SIGC/YAKU/O/T) van a `/productos` o solo a `/proyectos`/historia?  
9. Inqui, Ecuador Ancestral, E-GPS: **PENDIENTE_CLASIFICACION_HISTORICA** (no bloquean Fase 2; no inventar genealogía).  
10. Equipo Wix: quién aparece en `/nosotros`.  
11. ¿Dossier = PDF Wix filesusr (29 MB) hospedado en dominio propio?  
12. ¿Demo YAKU :81 es mostrable?

### Marca / IA (sigue 1.5)

13. Tono Cuartel General vs sede.  
14. Aliases públicos.  
15. LinkedIn de empresa.  
16. Nav A / B / C.  
17. Drag secundario sí/no.  
18. Cifra de años (2017 vs “9 años”).

---

## 9. Recomendación de estructura multipágina

No implementar ahora. Estructura **capaz de crecer** cuando se confirmen productos:

```
/                       Home
/que-hacemos            capacidades (territorio, BI, GIS, móvil, GovTech…)
/tecnologia             GOST + DW/Mart + BI (sin claims fuertes)
/productos              índice (históricos vs propios vs prelanzamiento)
/productos/datasucumbios
/productos/{slug}
/proyectos              casos (PDOT, juntas, EMAPAI…)
/proyectos/{slug}
/nosotros
/contacto
```

Opcional: `/noticias`.

Prelanzamiento (Fixis, RANTYI, Observatorio): ficha con estado **en desarrollo**, o ocultos hasta go-live.

---

**Reglas:**

- Un producto nuevo = un Markdown/JSON + una ruta. No un HTML monolítico nuevo.
- Un caso nuevo no exige rediseño.
- DataSucumbíos nunca se iframea como si fuera geotactics.com.ec.
- No indexar `Index1.html`, `index0.html`, etc.

Hosting actual (Apache + `index.html`) puede seguir hasta el cutover; esta sección es el **mapa de llegada**, no la migración.

---

## 10. Plan propuesto para Fase 2

Sigue siendo **diseño/IA**, no código de producción. Entrada: taxonomía 1.6.

No iniciar hasta autorización explícita tras revisar 1.6.0.

---

| Paso | Entrega | Dependencia del propietario |
|---|---|---|
| 2.1 | Cerrar nav (A/B/C) y glosario (Producto vs Caso) | Decisiones §8.1–8.7, 8.21–22 |
| 2.2 | Wireframes visuales (Home, Qué hacemos, Productos, Caso, Nosotros, Contacto) con paleta y retícula reales | — |
| 2.3 | Sistema de fichas de contenido (campos por tipo) | — |
| 2.4 | Lista de fotos/logos a pedir (aliados, equipo, casos) | Acceso a archivos |
| 2.5 | Tono: táctico calibrado vs institucional | 8.12–8.16 |
| 2.6 | Criterios de éxito de la Home (comprensión en 15 s) | — |
| 2.7 | Plan de implementación (Fase 3/4) sin ejecutar | — |

**Fuera de Fase 2:** no tocar `index.html`, CSS, JS, hosting, Sheets, datasucumbios.tech. Rotación de Supabase: acción **fuera de la web**, en el panel (inventario §9).

**Criterio para abrir implementación:** inventario mínimo publicado (1 producto + N casos validados + 5 capacidades) y wireframes aprobados.

---

## Anexo — Seguridad (recordatorio)

Clave anon de Supabase: `index2.html` ~L305–311 y `index0.html` ~L1422–1428; proyecto `fljlevyhwsjnuiwbpnvh`. No está en producción. Rotar; no republicar HTML viejos. Detalle en el inventario. La clave **no se escribe aquí**.
