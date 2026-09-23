# GeoTactics Corporate 2.0 — Premium Experience Framework 3.10

Status: working framework.  
Scope: potenciar la experiencia sin rediseñar la identidad visual ni alterar la composición 3.8 congelada.

## Principio rector

**No rediseñar lo que ya funciona. Potenciar percepción, velocidad, orientación, profundidad y respuesta.**

La experiencia premium de GeoTactics no debe venir de añadir efectos decorativos. Debe sentirse en cinco cosas: entender rápido dónde estoy, encontrar profundidad cuando la quiero, recibir respuesta inmediata a cada interacción, navegar con continuidad y percibir que cada detalle fue intencional.

## Guardrails

- Mantener paleta coral / grafito / grises / off-white.
- Mantener logo histórico, retícula territorial, grafos, PhotoFan, Archivo, Timeline, Operación Territorial y lenguaje editorial actual.
- Mantener aire y blanco como parte de la identidad.
- No introducir estética SaaS genérica, glassmorphism, gradientes de moda, cards indiscriminadas ni animación ornamental.
- No reemplazar navegación visible por navegación experimental.
- No ocultar contenido importante detrás de más de un nivel de disclosure.
- Motion solo para feedback, continuidad espacial o cambio de estado.
- Toda mejora debe respetar teclado, touch, reduced-motion y rendimiento.

## Arquitectura de experiencia

### 1. Capa de orientación

La navegación principal debe seguir siendo estable y predecible. La mejora premium ocurre en microseñales: estado activo coherente, contexto dentro de detalles y continuidad entre listado → detalle → relacionado.

Prioridad:
- estado activo desktop/mobile;
- breadcrumb editorial solo donde añada contexto real;
- enlaces relacionados al final de casos/productos;
- retorno contextual a Casos, Productos o Archivo sin crear barras nuevas permanentes.

### 2. Capa de escaneo

La primera pantalla debe responder tres preguntas: qué hace GeoTactics, por qué importa y dónde profundizar. Las páginas largas deben alternar bloques de lectura, evidencia, visual y salida.

Aplicación:
- títulos con promesa o tensión, no etiquetas técnicas;
- resúmenes compactos en listados;
- detalles completos solo al entrar al contenido;
- mantener tarjetas compactas cuando el objetivo es comparar/explorar;
- evitar repetir la misma explicación en hero, intro y primera sección.

### 3. Capa de profundidad progresiva

Mostrar primero lo esencial y ofrecer profundidad bajo demanda.

GeoTactics ya tiene una buena base para esto:
- Home → señal;
- Qué hacemos → familia;
- Producto/Caso → detalle;
- Archivo → trayectoria;
- Territorio → lectura espacial.

No crear un tercer o cuarto nivel innecesario. La profundidad debe sentirse rica, no laberíntica.

### 4. Capa de interacción

Cada interacción debe responder rápido y de forma visible.

Objetivos:
- navegación percibida como inmediata;
- hover/focus informativo, no decorativo;
- estados de apertura/cierre claros;
- drag siempre acompañado de alternativa click/tap;
- lightbox, mapa y menú con foco correcto;
- ningún movimiento imprescindible para comprender la interfaz.

### 5. Capa de continuidad

Los cambios de página deben sentirse como partes del mismo sistema.

Estrategia:
- prefetch por intención para enlaces internos;
- preservar shell/header/footer;
- estudiar más adelante View Transitions nativas y solo activarlas si no rompen scripts, foco, mapa, Archivo o reduced-motion;
- no introducir ClientRouter global hasta validar todos los componentes interactivos.

### 6. Capa de confianza

La percepción premium también es editorial.

- casos con contexto → intervención → cambio útil;
- productos con problema → propuesta → uso;
- cifras con significado, no como decoración;
- fotografías históricas como evidencia narrativa;
- estados de producto claros;
- enlaces externos solo cuando la superficie es válida;
- ninguna afirmación inflada.

### 7. Capa de rendimiento

Presupuesto objetivo:
- INP p75 <= 200 ms;
- evitar tareas largas en interacciones;
- imágenes con dimensiones declaradas;
- lazy-loading fuera de pantalla;
- JS solo donde exista interacción real;
- mapas y componentes pesados aislados;
- prefetch de navegación por intención, no descargas masivas.

### 8. Capa de accesibilidad premium

Premium significa que funciona igual de bien con mouse, teclado, touch o preferencias de movimiento reducidas.

- foco visible;
- objetivos táctiles >= 44 px donde el sistema ya lo usa;
- mínimo WCAG 2.2 AA;
- alternativas a drag;
- active state semántico con aria-current;
- dialogs con foco y Escape;
- reduced-motion obligatorio.

## Backlog no invasivo

### P0 — sin cambio visual
- Intent-based prefetch interno.
- Estado activo semántico desktop/mobile.
- Auditoría de foco en menú, PhotoFan/lightbox, mapa y formularios.
- Validar build + Astro check.
- Lighthouse/PageSpeed baseline antes del cutover.
- Registro de LCP / CLS / INP en producción.

### P1 — microinteracción controlada
- feedback de presión/selección consistente en CTAs, tarjetas y archivos;
- transiciones de estado usando tokens actuales;
- continuidad lista → detalle evaluada con View Transitions nativas;
- mantener reduced-motion.

### P2 — profundidad editorial
- contexto relacionado al cierre de productos/casos;
- navegación contextual mínima en detalles largos;
- captions históricos cuando exista evidencia;
- mejores salidas desde Archivo hacia casos/productos.

### P3 — percepción de producto
- OG/social cards autorizadas;
- favicon/app metadata final;
- structured data Organization / WebSite / BreadcrumbList donde aplique;
- RUM de Web Vitals;
- pruebas reales en Android/iOS/desktop y red lenta.

## Criterio de aceptación

Una mejora 3.10 solo entra si cumple las cuatro condiciones:
1. mantiene intacta la identidad visual;
2. reduce fricción o aumenta comprensión;
3. no degrada accesibilidad ni rendimiento;
4. puede revertirse de forma aislada si genera regresión.
