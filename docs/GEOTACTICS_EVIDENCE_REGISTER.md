# Registro de evidencia — portafolio GeoTactics

```
SOURCE OF TRUTH — GEOTACTICS CORPORATE 2.0
Versión: 1.0
Fecha: 18 septiembre 2026
```

**Documento:** `GEOTACTICS_EVIDENCE_REGISTER.md`  
**Versión documental:** 1.6.1  
**Niveles:** CONFIRMADO_DOCUMENTO | CONFIRMADO_PROPIETARIO | CONFIRMADO_CODIGO | INFERIDO | PENDIENTE | CONFLICTO | FUENTE_APORTADA_PROPIETARIO | PENDIENTE_DE_ANALISIS_DOCUMENTAL | PENDIENTE_CLASIFICACION_HISTORICA

**CONFIRMADO_CODIGO:** ningún ítem de este registro tiene auditoría de repositorio de producto en Fase 1.6 (datasucumbios.tech, orangemap, etc. no se abrieron como código).

**Archivos .key (existen; aportados posteriormente por el propietario):** `rantiy.key`, `FUNCIONES MADA RADIO.key`.  
Estado: **FUENTE_APORTADA_PROPIETARIO** + **PENDIENTE_DE_ANALISIS_DOCUMENTAL**.  
No están “pendientes de localizar”. No inferir funciones nuevas hasta el análisis documental.

---

## A. Metodología

### GOST — Gestión Operativa de Sistemas Territoriales

| Campo | Contenido |
|---|---|
| Tipo | METODOLOGÍA |
| Estado | Histórica y vigente como fundamento (no software) |
| Año inicial / final | Concepción 2008 atribuida a Plan Ecuador = CONFIRMADO_PROPIETARIO; evidencia documental independiente 2008 = PENDIENTE; primera materialización localizada = 2017. No publicar “desde 2008” como hecho documentalmente probado. |
| Sector | Territorial / datos / gestión |
| Cliente | no aplica |
| Problema | Organizar captura → dato → decisión en territorio |
| Solución | Ciclo GOST + DW/Mart + BI + GIS/indicadores/CMI/OLAP |
| Funciones confirmadas | No es software; ver conceptos en `GEOTACTICS_GOST_CONTEXT.md` |
| Tecnología confirmada | Léxico DW/Mart/BI/GIS/OLAP (Wix + propietario) |
| Relación GOST | es GOST |
| Padre | — |
| Componentes | — |
| Implementaciones | Parciales vía SIGDR/CAPTURE/DataSucumbíos/Termómetro; MadaRadio aplica/deriva principios (no es GOST-software) |
| Evidencia | Wix quienes-somos; instrucción 1.6 / 1.6.1 |
| Fuente | W, P (propietario) |
| Confianza | CONFIRMADO_DOCUMENTO (nombre); CONFIRMADO_PROPIETARIO (ciclo; concepción 2008; relación MadaRadio) |
| Pendiente | Evidencia documental independiente 2008; claims científicos/legales; ISO |

---

## B. Productos / plataformas

### SIGDR — Sistema Integrado de Gestión para Desarrollo Rural

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO / PLATAFORMA HISTÓRICA FUNDACIONAL |
| Estado | Histórico fundacional; no afirmar disponibilidad comercial 2026 |
| Año inicial | 2017 (primera instancia documentada: Gualsaqui) |
| Sector | Desarrollo rural / territorio |
| Cliente | no es un cliente; ver casos |
| Problema | Gestión integral de información rural (visión) |
| Solución | Modelo territorial ascendente comunidad/barrio → comuna → parroquia → cantón → provincia |
| Funciones confirmadas (visión, propietario) | app móvil; web; captura demográfica, territorial, productiva, geográfica; gestión nominal; proyectos; organizaciones; comunas; comunidades; pueblos indígenas; indicadores; reportes; planificación; seguimiento; apoyo a decisiones |
| Tecnología | móvil + web (propietario). Stack: PENDIENTE |
| Relación GOST | materialización temprana de la visión GOST |
| Padre | GOST (metodología) |
| Componentes | CAPTURE en implementación PDOT (parcial) |
| Implementaciones | Gualsaqui, Vacas Galindo, Dayuma, Inés Arango |
| Evidencia | Wix menú SIGDR; Sheet; Index1; propietario |
| Confianza | CONFIRMADO_PROPIETARIO (definición); CONFIRMADO_DOCUMENTO (casos) |
| Pendiente | Qué módulos de la visión se llegaron a construir en código; vigencia 2026 |

### SIGC — Sistema Integrado para Gestión de Cartera

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO / PLATAFORMA HISTÓRICA |
| Estado | Histórico |
| Año inicial | 2018 (Pimampiro) |
| Sector | Agua / juntas / cartera |
| Funciones confirmadas (históricas, propietario) | usuarios; cartera; sectores; ramales; situación financiera; seguimiento recaudación; indicadores; reportes; análisis; información nominal; gestión |
| Relación GOST | no afirmada formalmente |
| Padre | — (familia propia) |
| Implementaciones | Pimampiro (JAAPP), La Victoria (JALV); EMAPAI como programa relacionado (ver YAKU) |
| Evidencia | Wix SIGC_JAAPP/JALV; Sheet; propietario |
| Confianza | CONFIRMADO_PROPIETARIO + CONFIRMADO_DOCUMENTO |
| Pendiente | Relación exacta SIGC EMAPAI 2018 vs YAKU 2019 (¿mismo programa, dos entregas?) |

### YAKU

| Campo | Contenido |
|---|---|
| Tipo | SOLUCIÓN / PLATAFORMA HISTÓRICA |
| Estado | Implementada en EMAPAI ~2019 |
| Sector | Agua potable / gestión institucional |
| Cliente | EMAPAI, Ibarra |
| Solución | No reducir a lectura de medidores |
| Funciones confirmadas (documentación YAKU, propietario) | planificación; ejecución; seguimiento; indicadores; POA; gestión institucional; procesos; actividades; productos; responsables; presupuesto; control |
| Relación GOST | **no** afirmar implementación formal GOST |
| Padre | hereda experiencia de la línea SIGC |
| Evidencia | Wix /yaku; Sheet demo `http://comercial.emapai.gob.ec:81/yaku/` (200, HTTP); propietario |
| Confianza | CONFIRMADO_DOCUMENTO + CONFIRMADO_PROPIETARIO |
| Pendiente | Si el demo :81 es publicable; alcance vs “App lecturas” de Index1 |

### O/T

| Campo | Contenido |
|---|---|
| Tipo | SOLUCIÓN HISTÓRICA IMPLEMENTADA |
| Estado | Implementada; continuidad pública no declarada |
| Año | 2023 (Index1); marco Wix administración 2023–2027 |
| Sector | GovTech / planificación provincial |
| Cliente | GAD Provincial de Sucumbíos |
| Funciones/evidencias | implementación; socialización; capacitación; CGA; Corposucumbíos; POA; PAC |
| Padre | YAKU (genealogía confirmada propietario) |
| Evidencia | Wix O/T GADPS; Index1; propietario |
| Confianza | CONFIRMADO_DOCUMENTO + CONFIRMADO_PROPIETARIO |
| Pendiente | No publicar causa política del stand-by. Ausente del Sheet 2026. |

### Termómetro Social

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO / APP MÓVIL DESARROLLADA |
| Estado | Desarrollada (no afirmar catálogo activo SaaS) |
| Año | 2025 (Sheet) |
| Sector | Investigación social / sondeos (no solo electoral) |
| Cliente | CONFLICTO: Oreja Multimedia (Sheet) vs Movimiento ES AHORA (Index1) |
| Padre | Predicción (spin-off); aplicación de GOST |
| Roles | Administrador; Cliente; Encuestador |
| Funciones confirmadas | configurar sondeos; ejecutar levantamientos; registrar y georreferenciar respuestas; monitorear con cobertura; analizar territorialmente |
| Evidencia | Sheet; Index1; propietario |
| Confianza | CONFIRMADO_PROPIETARIO (producto); CONFLICTO (cliente) |

### DataSucumbíos

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO / PLATAFORMA DE INTELIGENCIA TERRITORIAL |
| Estado | Activo (dominio 200) |
| URL | https://www.datasucumbios.tech |
| Caso asociado | PDOT Sucumbíos 2023–2038 (el PDOT no es el producto) |
| Solución | Explotación: datos, indicadores, GIS, BI, OLAP, análisis territorial |
| Fuentes | Consume la base territorial generada/alimentada por CAPTURE, entre otras fuentes. **No** alimenta esa base. |
| Padre conceptual | visión SIGDR / GOST (no v2). Relación conceptual: SIGDR ├ CAPTURE └ DataSucumbíos |
| Componentes documentados Wix | visualizador estadístico (Looker Studio); visualizador geográfico `/geografico` |
| Evidencia | Wix; Sheet; URL; propietario |
| Confianza | CONFIRMADO_DOCUMENTO + CONFIRMADO_PROPIETARIO |
| Pendiente | Auditoría de datasucumbios.tech (fuera de esta fase) |

### OrangeMap

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO PROPIO ACTUAL |
| URL | orangemap.geotactics.com.ec (200) |
| Año | 2025 Sheet |
| Cliente | GeoTactics (Sheet) |
| Flujo | busca producto → negocios que lo declararon → mapa → ficha → ruta/contacto; comercios registran productos |
| Potencial | registros estructurados/georreferenciados de actividad económica local |
| No afirmar | que sustituye catastros oficiales |
| Relación GOST | no conectada |
| Evidencia | Sheet; HTTP; propietario |
| Confianza | CONFIRMADO_PROPIETARIO + CONFIRMADO_DOCUMENTO (URL) |

### ExploraSucumbíos

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO PROPIO / VERTICAL de lógica OrangeMap |
| URL | explorasucumbios.geotactics.com.ec (200) |
| Año | 2025 Sheet |
| Cliente Sheet | GADPS (abreviatura PENDIENTE = GADP Sucumbíos) |
| Alcance | turismo Sucumbíos; web + app móvil; componente exploración/captura cultural/ancestral |
| No afirmar | realidad aumentada; código compartido con OrangeMap |
| Relación GOST | no conectada |
| ≠ | Ecuador Ancestral (Index1, otro cliente) |
| Confianza | CONFIRMADO_PROPIETARIO + CONFIRMADO_DOCUMENTO (URL) |

### MadaRadio

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO PROPIO RECIENTE / 2025+ |
| Relacionado con (solo esto) | protección ambiental; derechos; participación; gamificación |
| Relación GOST | aplica/deriva principios metodológicos GOST — CONFIRMADO_PROPIETARIO. No implementa todo GOST; no es GOST como software. |
| No inventar | más funciones (hasta análisis del .key) |
| Doc | `FUNCIONES MADA RADIO.key` — FUENTE_APORTADA_PROPIETARIO; PENDIENTE_DE_ANALISIS_DOCUMENTAL |
| Año | CONFLICTO 2023 Sheet vs 2025 Index1 vs 2025+ propietario |
| Demo Sheet | madaradio.com (000 en auditoría) |
| Confianza | CONFIRMADO_PROPIETARIO (clasificación y temas); PENDIENTE ficha comercial |

### GUANTA

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO PROPIO / PLATAFORMA OPERACIONAL |
| Orientación | mina/cantera y logística de materiales; intención comercial/SaaS |
| Capacidades provisionales (propietario) | despachos; recepciones; tickets; QR; vehículos/equipos; móvil; offline; sincronización; analítica/reportes |
| No incorporar | cifras ni clientes extra |
| Demo Sheet | URL de MadaRadio — CONFLICTO / LINK ROTO |
| Confianza | CONFIRMADO_PROPIETARIO |

### RANTYI

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO PROPIO EN DESARROLLO / PRELANZAMIENTO |
| Concepto | C2C georreferenciado: publicar objeto → foto → mapa → tokens → desbloqueo contacto; GeoTactics intermedia hasta liberar contacto |
| No usar | “marketplace inverso” como categoría definitiva |
| Doc | `rantiy.key` — FUENTE_APORTADA_PROPIETARIO; PENDIENTE_DE_ANALISIS_DOCUMENTAL |
| Sheet | «Aplicación móvil de subasta inversa» — CONFLICTO de nomenclatura |
| Confianza | CONFIRMADO_PROPIETARIO |

### Fixis / Fixis PRO

| Campo | Contenido |
|---|---|
| Tipo | ECOSISTEMA PRELANZAMIENTO |
| Dominio informado | fixis.geotactics.com.ec |
| Fixis | experiencia cliente (familias/personas que requieren oficios) |
| Fixis PRO | experiencia profesional/prestador |
| Estado | desarrollo/prepublicación; **no** servicio comercial activo |
| Evidencia en repo/Sheet/Wix | no aparece |
| Confianza | CONFIRMADO_PROPIETARIO |
| Pendiente | HTTP del dominio; fecha de lanzamiento |

### Observatorio (GADMLA)

| Campo | Contenido |
|---|---|
| Tipo | PRODUCTO / PLATAFORMA PROPIA en desarrollo o prelanzamiento |
| Dominio | observatorio.geotactics.com.ec (200 en auditoría 1.5) |
| Propósito | analizar inversión del Municipio de Lago Agrio |
| No inventar | fuentes, indicadores, presupuestos, contratos, obras, APIs, frecuencia, GIS, arquitectura |
| Sheet | cliente = Geotactics; categoría legado; typos — CONFLICTO de presentación vs propósito GADMLA |
| Confianza | CONFIRMADO_PROPIETARIO (propósito); CONFIRMADO_DOCUMENTO (URL) |

---

## C. Componentes

### CAPTURE

| Campo | Contenido |
|---|---|
| Tipo | COMPONENTE / APP MÓVIL DE CAPTURA TERRITORIAL |
| No es | sucesor de SIGDR; ni DataSucumbíos; ni el PDOT |
| Uso PDOT | tablets a actores de parroquias rurales; 31 parroquias; info georreferenciada (ciudadanos, viviendas, infraestructura, otras variables); alimenta BD central / base territorial |
| Flujo de datos | CAPTURE → Base Territorial → DataSucumbíos (DS consume; no alimenta la base) |
| Cifra | 27.539 «Ciudadanos Capturados» (tablero visual) — no = habitantes |
| URL prototipo | capture.geotactics.com.ec — 000 en 1.5 |
| Padre | implementación parcial SIGDR |
| Confianza | CONFIRMADO_PROPIETARIO; URL PENDIENTE/rota |

### Capa BI de monitoreo del levantamiento

| Campo | Contenido |
|---|---|
| Tipo | CAPA OPERACIONAL DE MONITOREO BI |
| No es | DataSucumbíos completo |
| Usuarios | Prefecto; Dirección de Planificación; asesores; directores de áreas |
| Variables (evidencia visual citada) | cantón; parroquia; comunidad; fecha; género; edad; autoidentificación étnica; lengua materna; discapacidad; actividad económica; nivel educativo; enfermedad catastrófica |
| Condición | tiempo real **cuando hay cobertura** |
| Confianza | CONFIRMADO_PROPIETARIO |

---

## D. I+D+i / conceptuales

### SIGMD

| Campo | Contenido |
|---|---|
| Tipo | PROPUESTA / PRODUCTO CONCEPTUAL HISTÓRICO |
| Ámbito | deportivo; lógica similar a SIGDR |
| Estado | nunca implementado; pandemia |
| No presentar | caso de éxito |
| Confianza | CONFIRMADO_PROPIETARIO |

### Predicción

| Campo | Contenido |
|---|---|
| Tipo | I+D+i / NO CONSOLIDADO |
| Ámbito | principios GOST a procesos electorales (encuestas; georref. recintos; contraste territorial; análisis; seguimiento jornada) |
| Estado | desarrollo perdido/no consolidado en pandemia |
| No afirmar | producto disponible; resultados electorales oficiales |
| Hijo | Termómetro Social |
| Confianza | CONFIRMADO_PROPIETARIO |

---

## E. Casos / implementaciones (no productos)

| Caso | Producto/componente usado | Año | Cliente | Confianza | Notas |
|---|---|---|---|---|---|
| Gualsaqui | SIGDR | 2017 | Comuna Gualsaqui | CONFIRMADO_DOCUMENTO | |
| Vacas Galindo | SIGDR | 2018 | GADPR Vacas Galindo | CONFIRMADO_DOCUMENTO | |
| Pimampiro | SIGC | 2018 | Junta Aguas / JAAPP | CONFIRMADO_DOCUMENTO | |
| La Victoria | SIGC | 2019 | Junta Aguas La Victoria / JALV | CONFIRMADO_DOCUMENTO | |
| EMAPAI | SIGC (comercial 2018) + YAKU (~2019) | 2018–2019 | EMAPAI | CONFIRMADO_DOCUMENTO | no duplicar como dos productos EMAPAI |
| Dayuma | SIGDR | 2022 Wix/I1 vs 2024 Sheet | GADPR Dayuma | CONFLICTO año | |
| Inés Arango | SIGDR | 2022 I1; fusionado en Sheet | GADPR Inés Arango | CONFLICTO fusión | |
| PDOT Sucumbíos 2023–2038 | consultoría; CAPTURE + BI monitoreo + DataSucumbíos | 2023–2038 | GADP Sucumbíos | CONFIRMADO_PROPIETARIO + DOCUMENTO | etapas: preparatoria, diagnóstico, levantamiento, diagnóstico territorial, propuesta, modelo de gestión |
| O/T en GADPS | O/T | 2023 | GADP Sucumbíos | CONFIRMADO_PROPIETARIO | mismo cliente que PDOT; **otro** entregable |
| Patas a la Obra | RSE registro mascotas | 2023 I1 | Corposucumbíos | CONFIRMADO_DOCUMENTO | no producto catálogo |
| Paper CTEA-IE-2020 | estudio | 2020 | — | CONFIRMADO_DOCUMENTO (Wix) | no producto |

**PENDIENTE_CLASIFICACION_HISTORICA:** Inqui, Ecuador Ancestral, E-GPS (solo Index1). No bloquean Fase 2. No inventar genealogía.

---

## F. Contradicciones abiertas

1. Año Dayuma 2022 vs 2024.  
2. Cliente Termómetro: Oreja Multimedia vs ES AHORA.  
3. Año MadaRadio 2023 vs 2025 vs 2025+.  
4. Cifra 28K ticker vs 27.539 Ciudadanos Capturados.  
5. Demo GUANTA = URL MadaRadio.  
6. Sheet presenta DataSucumbíos/CAPTURE/SIGDR como filas de “proyecto”.  
7. Observatorio: cliente Sheet = GeoTactics vs propósito GADMLA.  
8. RANTYI “subasta inversa” (Sheet) vs modelo C2C georreferenciado (propietario).  
9. Sede Ibarra (Wix) vs solo Nueva Loja (web 2026).  
10. ExploraSucumbíos cliente GADPS vs producto propio vertical OrangeMap (puede ser ambos: producto propio usado/impulsado con GAD — PENDIENTE cómo se publica).
