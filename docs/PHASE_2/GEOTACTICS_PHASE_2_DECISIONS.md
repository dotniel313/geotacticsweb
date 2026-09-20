# Decisiones Fase 2

**SoT:** GeoTactics Corporate 2.0 v1.0 (sin modificar).  
**Experience & Design Specification v1.1:** FROZEN FOR IMPLEMENTATION (2.2.0).  
v1.0 (2.1) = base; addendum 2.2 integrado. SoT v1.0 sin modificar. ADR Astro sin cambio.

## Cerradas en 2.2

Signals (SIGNALS / Actualidad); `/noticias` definitiva no en nav; `phases[]`; Timeline ≠ TrustGrid; privacy sin CMP falso; terceros inventariados; form states; 404/fallbacks; CWV ampliados.

## Cerradas en 2.1 (ya no preguntar)

Nav 7 ítems; Tecnología en principal; H1 B + supporting 2.1; CTA “Conversemos sobre el problema” / “Cómo trabajamos”; GOST público (4 + 8); Home productos A/B/C; DS destacado pero no dominante, sin iframe, sin disclaimer footer; 2017 Home / 2008 Nosotros memoria; 27.539 no Home (`NO_PUBLICAR` en caso); mapa CASO+SEDE; Ibarra no sede; tactical layer secundaria; TOS interno; drag desktop opcional / móvil no; históricos en Productos como trayectoria.

## Aún bloqueantes para copy/assets (no bloquean blueprint)

| Tema | Por qué sigue abierto | ¿Bloquea Fase 3 de estructura? |
|---|---|---|
| Cifra pública de años (“9 años” vs solo 2017) | Copy EvidenceStrip | No (usar 2017) |
| 27.539 en ficha PDOT | Flag NO_PUBLICAR | No (no renderizar) |
| Cliente Termómetro | CONFLICTO | No (omitir cliente) |
| Año MadaRadio | CONFLICTO | No (sin año o 2025+) |
| Dayuma / Inés Arango año y fusión | CONFLICTO | No (fuera de índice hasta cierre) |
| Explora vs GADPS | Cómo se publica | No (producto propio; no afirmar cliente único) |
| Demo YAKU :81 | ¿mostrable? | No (no Home) |
| Equipo público / aliases | Personas | No (empty / lista mínima) |
| Dossier rehost | PDF Wix | No (sin CTA dossier) |
| LinkedIn empresa | Canal | No |
| Fotos Wix PDyOT / G_L_2024 / screenshots | Assets P1; ver MEDIA_INVENTORY | **Sí visual** |
| Autorización personas en fotos | peopleVisible | Sí para AUTHORIZED |
| Textos legales | REQUIERE_REVISION_LEGAL | No estructura |
| Activar analytics/CMP | solo si se añade tercero | No (default: sin CMP) |
| Contenido news real | ticker Sheet NEEDS_REVIEW | Signals hidden si 0 |
| Análisis .key RANTYI / MadaRadio | Funciones | No (no inferir) |
| Formulario Conversar (backend) | Fuera de SSG | No (canales existentes) |

Tabla 2.0.0 histórica queda debajo como archivo de proceso; las filas “requiere aprobación” ya resueltas en 2.1 no reabren SoT.

---

# Histórico 2.0.0

**Fecha:** 18 septiembre 2026  
**SoT:** GeoTactics Corporate 2.0 v1.0.

| DECISIÓN | MOTIVO | EVIDENCIA | ALTERNATIVA DESCARTADA | RIESGO | REQUIERE APROBACIÓN DEL PROPIETARIO |
|---|---|---|---|---|---|
| Nav: Inicio, Qué hacemos, Productos, Casos, Tecnología, Nosotros, Conversar | Distingue producto/caso/método; “Proyectos” confundía | SoT 1.6; IA 1.6.1; auditoría (Sheet mezcla filas) | Nav B “Soluciones/Huella”; ítem “Proyectos”; fusionar Tecnología en Qué hacemos | 7 ítems aprietan en tablet | **Sí** (cerrar nav) |
| Tecnología en nav principal | GOST es metodología, no capacidad vendible; página de confianza | GOST_CONTEXT §7 | Solo ancla en Qué hacemos | Página delgada si se pide stack | **Sí** si se prefiere menú de 6 |
| Headline de trabajo = alternativa B (tecnológica) | La web 2.0 debe leerse como empresa de sistemas, no solo consultora territorial | Brief 2.0; SoT (empresa ≠ DS) | A o C como único H1 | C puede sonar turística; A más “consultora” | **Sí** (slogan no es definitivo; elegir H1) |
| CTA primario: “Conversemos sobre el problema.” | Coherente con empresa que resuelve, no “Contáctanos” vacío | Brief 2.0 | mailto “Iniciar proyecto”; “Unlock” | Tono informal para GAD | **Sí** (tono institucional vs táctico) |
| 5 capacidades (no las 5 fichas antiguas) | Fichas actuales son categorías de proyectos Sheet, no oferta | Inventario B+C; auditoría | Copiar territorial/gobernanza/recursos/legado/especiales | Visitante antiguo no encuentra “especiales” | No (derivado del portafolio) |
| Home productos: DS, OrangeMap, Explora, SIGDR, YAKU, Observatorio | Jerarquía CURRENT / HISTORICAL / PRELAUNCH; URLs o rol documental | Matriz presentación; SoT URLs y estados | 13 cards iguales; Home = solo DS | DS puede seguir dominando visualmente | **Sí** (selección Home) |
| CAPTURE fuera de `/productos` | Es componente | SoT C-CAP | Card de producto CAPTURE | Quien busque “Capture” no lo ve en catálogo (sí en PDOT y Tecnología) | No |
| GOST en 4 pasos públicos mapeados al ciclo de 8 | Home no es paper; no se pierde el significado | GOST_CONTEXT ciclo | Diagrama tipo Datawheel; omitir GOST | Copy jurídico / si GOST no se nombra en público | **Sí** (¿GOST se nombra en web?) |
| No publicar “desde 2008” | Evidencia documental pendiente; 2017 es primera materialización | HISTORY; GOST_CONTEXT | Badge “desde 2008” o “9 años” automático | Subestimar origen del fundador | **Sí** (2008 memoria en Nosotros; cifra de años) |
| 27.539 y 28K: 28K nunca; 27.539 PLACEHOLDER_NO_PUBLICAR | Conflicto / glosa metodológica | HISTORY; inventario 1.6.1 | Ticker habitantes | Perder prueba de escala PDOT | **Sí** (publicar 27.539 con glosa o no) |
| Mapa = casos + sede, no productos/clientes mezclados | Evitar el error actual de capas | Auditoría mapa; linaje casos | Un pin por fila Sheet | Ibarra ausente o presente mal | **Sí** (mencionar sede Ibarra) |
| Clientes = nombres tipográficos | Sheet sin logos autorizados | Auditoría aliados | Logo wall genérica / Flaticon | Menos “confianza visual” | No |
| Drag opcional; móvil sin drag | Tactical without friction | Auditoría UX; brief 2.0 | Drag único desktop; eliminar fichas | Perder gesto identitario | **Sí** (¿se conserva drag secundario?) |
| Históricos visibles en `/productos` con estado Trayectoria | No esconder trayectoria ni venderlos como SaaS | SoT estados | Solo actuales; históricos solo en Nosotros | Visitante pide demo SIGDR | **Sí** (históricos en Productos vs solo Casos) |
| Termómetro, MadaRadio, GUANTA, RANTYI, Fixis: catálogo, no Home | Conflictos de cliente/año/demo/.key | EVIDENCE_REGISTER | Home llena de prelanzamiento | Subrepresentar productos propios 2025–26 | **Sí** si el dueño quiere MadaRadio/GUANTA en Home |
| Dayuma / Inés Arango fuera de Home | CONFLICTO de año/fusión | HISTORY | Publicar 2022 o 2024 sin cierre | Error factual | **Sí** (uno o dos casos; año) |
| No iframe DataSucumbíos | Empresa ≠ producto | SoT principio | Home = visor .tech | Recaer en clon Datawheel | No |
| Dossier no enlazado | 404 en dominio; PDF Wix no es CTA corporativo 2.0 | Auditoría | CTA Dossier | Perder lead magnet | **Sí** (¿rehostear PDF?) |
| LinkedIn personal fuera del FAB de marca | Voz de empresa | Auditoría | Perfil personal como canal oficial | Menos canales | **Sí** (página empresa) |
| Tono sede = Nueva Loja, no “Cuartel General” | Precisión territorial; HUD es visual no jerga | Brief 2.0; IA pendiente | Label militar | Pérdida de “personalidad táctica” en copy | **Sí** |
| Equipo: sin aliases internos hasta lista autorizada | Overlay actual expone aliases | Auditoría; IA §8 | Publicar Sheet tal cual | Personas / apodos | **Sí** (quién aparece) |
| Inqui, Ancestral, E-GPS fuera de IA pública | PENDIENTE_CLASIFICACION_HISTORICA | SoT 1.6.1 | Inventar genealogía | Hueco vs Index1 | No (no bloquea) |
| Demo YAKU :81 no en Home | Pendiente si es mostrable | EVIDENCE YAKU | CTA demo HTTP | Seguridad / vigencia | **Sí** |
| Explora vs GADPS | Producto propio; rol de GAD pendiente | CONFLICTO presentación | “Cliente GADPS” como hecho único | Copy comercial incorrecto | **Sí** |
| Metáfora visual Territorial Operating System | Une mapa + interfaz + dato sin decir que son un OS | Brief 2.0 | Palantir-like / SaaS violeta / folclore | Malentendido “vendemos un OS” | **Sí** (nombre interno de dirección; no slogan) |
| Open Sans + coral/café + retícula | No destruir personalidad | AUDIT KEEP | Inter/Geist dark SaaS | Quedar “viejos” | No (evolución, no reemplazo) |
| Schema SoftwareApplication solo actuales con URL | No SaaS-ificar históricos | SEO plan | Schema en los 13 | Google interprete SIGDR como app viva | No |
| Noticias fuera de nav | Ticker con typos; 1 noticia | Auditoría | Sala de prensa en menú | Canal muerto | No |

**Esta fase 2.0 no programaba; 2.1 cierra experiencia. No inicia Fase 3.**
