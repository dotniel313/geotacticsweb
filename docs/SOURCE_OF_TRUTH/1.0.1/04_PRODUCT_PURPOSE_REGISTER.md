# Registro de propósito de producto / sistema

```
SOURCE OF TRUTH — GEOTACTICS CORPORATE 2.0
Versión documental: 1.0.1
Fecha: 18 septiembre 2026
```

Campos posibles: identity, origin_problem, purpose, domain, ownership, business_model, gost_*, information/operational/territorial/analytics, methods, technologies, capabilities, genealogy, implementation, cases, evidence, current_status, value_generated, limitations, public_claims_*, superficies (corporate_detail, product_landing, web_app, mobile_app, demo_url, external_url, destination_status, publication_status).

Vacío = `UNKNOWN` / `NEEDS_REVIEW`. Superficies detalladas: `10_PRODUCT_DIGITAL_SURFACES_REGISTER.md`.

Pila futura de ficha (no programar): Descriptor → Problema → Propósito → Qué hace → ADN → Capacidades → Genealogía → Casos → Visual → Fases → Documentos → Estado.

---

## SIGDR — Sistema Integrado de Gestión Para Desarrollo Rural

identity: producto histórico fundacional. ownership: GeoTactics (histórico).  
origin_problem: información rural social/demográfica/productiva/geográfica/organizativa no estructurada para gestión.  
purpose: estructurarla para caracterización, líneas base, planificación, seguimiento, indicadores y gestión.  
gost: GOST → SIGDR. ONTOLOGICAL_FOUNDATION + METHODOLOGICAL_APPLICATION + TECHNOLOGICAL_IMPLEMENTATION (temprana). NOT complete cycle.  
evidencia visión (OWNER / docs): móvil, web, comunidades, comunas, pueblos indígenas, juntas parroquiales, proyectos, caracterización socioeconómica, información geográfica, planificación, indicadores. CMI: UNKNOWN (visión citada; no CONFIRMED de módulo).  
cases: Gualsaquí 2017; Vacas Galindo 2018; Dayuma–Inés Arango = CASE (ver 12).  
status: trayectoria. No app de encuestas.  
superficies: corporate_detail futuro; web/móvil históricos UNKNOWN URL.

## SIGC — Sistema Integrado para Gestión de Cartera

identity: producto histórico.  
purpose: organizar registros nominales, financieros y de cartera para seguimiento, recaudación, indicadores y gestión.  
gost: GOST → SIGC. CONFIRMED_OWNER. METHODOLOGICAL_APPLICATION. No implementación formal completa.  
evidencia (OWNER/docs): usuarios, cartera, situación financiera, sectores/sucursales, recaudación, estadísticas, indicadores.  
cases: Pimampiro/JAAPP 2018; EMAPAI 2018 (programa); La Victoria/JALV 2019.  
status: trayectoria.

## YAKU

genealogy: GOST ontológico; SIGC → YAKU PRODUCT_EVOLUTION.  
purpose: convertir procesos institucionales en planificación, ejecución, seguimiento e información de gestión.  
evidencia: EMAPAI ~2019; planificación; actividades; POA; indicadores; seguimiento; control. PMA: UNKNOWN. Niveles estratégico/táctico/operacional: UNKNOWN como nomenclatura formal en corpus. OLAP + visualizador: CONFIRMED_DOCUMENT (Sheet).  
ISO: referencias en docs de proyecto ≠ certificación ISO de GOST.  
demo_url: `http://comercial.emapai.gob.ec:81/yaku/` 200 HTTP — destination_status NEEDS_REVIEW / no CTA 3.2.  
status: trayectoria.

## O/T

identity: sistema histórico implementado.  
genealogy: GOST → SIGC → YAKU → O/T.  
purpose: conectar planificación institucional con ejecución, seguimiento, indicadores y control.  
case: GAD Provincial de Sucumbíos, 2023. Distinto del CASE PDOT.  
evidencia: POA, PAC, socialización, capacitación, CGA, Corposucumbíos. Gantt: UNKNOWN. PDOT como marco institucional del cliente, no = el producto O/T.  
No publicar causas políticas de discontinuidad.  
status: trayectoria.

## CAPTURE (COMPONENTE)

No producto. genealogy: GOST → SIGDR → CAPTURE (parcial PDOT).  
DATA_FLOW: CAPTURE → BASE TERRITORIAL → DataSucumbíos.  
purpose: capa controlada de adquisición/registro en territorio.  
31 parroquias rurales. 27.539 Ciudadanos Capturados = indicador administrativo, no población. 28K = conflicto / no publicar.  
capture.geotactics.com.ec: BROKEN (000).  
status: componente de caso.

## DataSucumbíos

identity: producto en operación. ownership: GeoTactics. NO es la empresa; NO SIGDR v2; NO el PDOT (restricciones internas).  
genealogy conceptual: GOST → experiencia SIGDR → CAPTURE/otras fuentes → base territorial → DS. CONCEPTUAL_DESCENDANT + DATA_FLOW.  
purpose: convertir información territorial dispersa en conocimiento estructurado para observar territorio, analizar indicadores y apoyar gestión y decisión.  
evidencia: GIS `/geografico`; BI Looker (Wix, vigencia reporte UNKNOWN); OLAP Sheet; indicadores. Arquitectura DW interna: UNKNOWN.  
case: PDOT Sucumbíos.  
web_app: https://www.datasucumbios.tech LIVE. publication: operación.  
status: en operación.

## OrangeMap

identity: producto propio actual.  
gost: GOST → OrangeMap ONTOLOGICAL_FOUNDATION.  
origin: encontrar un producto localmente sin saber qué negocio lo ofrece.  
purpose: conectar necesidad, oferta comercial y territorio.  
modelo: necesidad → búsqueda → oferta declarada → localización → descubrimiento → establecimiento. No «mapa de negocios».  
web_app: https://orangemap.geotactics.com.ec LIVE (pide JS).  
status: en operación.

## ExploraSucumbíos

CONFIRMED_OWNER: desarrollo **propio** GeoTactics.  
GADPS: TARGET_CLIENT; hay conversaciones. NO cliente confirmado, NO implementación contratada, NO contrato.  
genealogy: GOST → OrangeMap → ExploraSucumbíos (lógica). Código compartido: UNKNOWN. AR: no afirmar.  
purpose: descubrimiento territorial aplicado al turismo (lugares, oferta, operadores, cultura/patrimonio si respaldado).  
web_app: https://explorasucumbios.geotactics.com.ec LIVE. mobile_app: OWNER (existencia).  
status: en operación (superficie); relación comercial GAD: NEEDS_REVIEW / conversaciones.

## Predicción

I+D+i histórico. GOST → Predicción.  
Descriptivo/neutral: análisis territorial/electoral, opinión, georreferenciación, observación/reporte.  
No producto actual. No persuasión. No resultados oficiales.  
status: no consolidado (pandemia).

## Termómetro Social

OWNERSHIP: GeoTactics. BUSINESS_MODEL: arrendamiento. CONFIRMED_OWNER.  
No buscar cliente propietario. Implementaciones/clientes solo con evidencia específica. CONFLICTO Sheet/Index1 (Oreja vs ES AHORA): Oreja queda anclado a MadaRadio; cliente Termómetro = NEEDS_REVIEW / no publicar.  
genealogy: GOST → Predicción → Termómetro.  
purpose: hacer observables levantamientos/encuestas georreferenciadas en campo y analizarlas territorialmente después.  
roles: Admin, Cliente, Encuestador (OWNER). No limitar a elecciones.  
status: desarrollado. Catálogo; no Home. No SaaS activo afirmado.

## SIGMD

I+D+i. GOST → SIGMD. Lógica tipo SIGDR en deporte (deportistas, entrenadores, disciplinas, planes, seguimiento, recursos — visión).  
**NO IMPLEMENTADO.** No caso de éxito.

## MadaRadio

OWNER: GeoTactics desarrollo. Cliente: Oreja Multimedia. CONFIRMED_OWNER.  
2021 = origen (EXACT según OWNER). 2025 = evolución tecnológica de app y funciones (PERIOD).  
gost: ONTOLOGICAL_FOUNDATION.  
.key analizado: radio EN VIVO; denuncias; mapa (incendio, inundación, acto delictivo, emergencia médica, problema vial, contaminación, otro, tu ubicación); estadísticas «Impacto Social en Sucumbíos»; historial; perfil de héroe (etiqueta menú); eventos especiales (etiqueta); configuración; cerrar sesión. Muro de Honor / ranking: **Próximamente** → no operativo. Gamificación operativa: no. DW por pie de marca: no.  
madaradio.com: BROKEN.  
status: en desarrollo / evolución 2025. Año público: preferir 2021 origen + 2025 evolución; no un solo año Sheet.

## GUANTA

Desarrollo propio / diversificación privada. GOST ONTOLOGICAL_FOUNDATION.  
purpose general: digitalizar/hacer observable operación física mina/cantera.  
funciones detalladas: NEEDS_REVIEW (no importar repos). Demo Sheet = madaradio.com BROKEN/CONFLICT.  
status: en desarrollo.

## RANTYI

Diversificación privada. GOST ONTOLOGICAL_FOUNDATION.  
purpose: conectar oferta C2C, necesidad y territorio.  
rantiy.key: icono + plantilla; funciones NEEDS_REVIEW. No marketplace inverso público. No inventar tokens/monetización/privacidad.  
status: prelanzamiento.

## Fixis / Fixis PRO

Diversificación privada. GOST ONTOLOGICAL_FOUNDATION.  
purpose: conectar necesidades de servicios con profesionales y operación del trabajo; territorio cuando corresponda.  
Fixis = demandante; Fixis PRO = prestador (OWNER). Monetización: UNKNOWN.  
fixis.geotactics.com.ec: informado; HTTP NEEDS_REVIEW.  
status: prelanzamiento. No servicio comercial activo.

## Nurse GO

NUEVO. CONFIRMED_OWNER: nombre Nurse GO; ownership GeoTactics / propio; familia diversificación privada; GOST ONTOLOGICAL_FOUNDATION (declaración general).  
purpose, functions, status, platform, business_model, year, client, URL: **NEEDS_REVIEW**.  
evidencia localizada (no auditada como funciones): repo Flutter `nurse_go` (pubspec description genérica); `nurse_admin`; `NURSEGO.key` (2 ene 2026) = isotipo gorro de enfermería; `NURSE_GO KIT.numbers`. Pipeline: DISCOVERED → NEEDS_REVIEW. **No catálogo público. No card.**

## Observatorio GADMLA

GOST ONTOLOGICAL_FOUNDATION.  
purpose: analizar información de inversión del Municipio de Lago Agrio.  
indicadores/obras/fuentes/mapas/ejecución/módulos: NEEDS_REVIEW / no inventar.  
observatorio.geotactics.com.ec LIVE 200; publication_status prelanzamiento; PUBLIC_NEEDS_POLISH hasta aprobación CTA.  
Sheet «cliente GeoTactics» vs propósito GADMLA: CONFLICTO de presentación.

---

## Value (interno, no métrica)

Sin cifras de impacto. Valor = capacidad descrita en purpose/mechanism. `value_generated` cuantificado = UNKNOWN en todos salvo indicadores administrativos explícitos (27.539, 31 parroquias).
