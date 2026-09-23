# GeoTactics Corporate 2.0 — Session Checkpoint · 2026-09-21

**Rama:** `fix/3.8-integrated-qa`  
**Estado general:** 3.9 content reconciliation muy avanzada; 3.10 premium experience iniciada sin alterar la composición 3.8 congelada.  
**Último commit funcional de la sesión:** `33ab9ff` — rebalanceo del bloque Personas / Fundadores históricos.

## Congelado / no tocar salvo regresión

- Composición 3.8.
- Header / footer.
- Archivo, timeline y Operación Territorial.
- Retícula, paleta, grafos y lenguaje visual.
- Página Casos compacta 3/2/1 columnas.
- Hero de detalle de casos con fotografía histórica rebalanceada.
- Ritmo global del cierre CTA / footer después de la corrección.
- Coordenadas simétricas Ibarra · Imbabura / Nueva Loja · Sucumbíos.

## Cerrado hoy

- Humanización editorial: Home, Qué hacemos, Productos, Casos, Tecnología/GOST y Nosotros.
- Framework 3.10 Premium Experience.
- Prefetch interno por intención.
- Estado activo semántico mobile.
- Validación del formulario de contacto.
- Hardening de enlaces externos en casos.
- Metadatos históricos de fundadores separados del perfil actual:
  - Daniel Orellana — Fundador & CEO · alias histórico Chuky.
  - Luis Padilla — Fundador & Jefe de Programación · alias histórico Luchin.
  - Germán Flores — Fundador & Jefe de Políticas Públicas · alias histórico Jefe.
  - Christian Montalvo — Fundador & Gerente General.
- Mapeo OWNER de retratos históricos EQ01–EQ07 preservado.
- /nosotros: Dirección actual separada de Fundadores históricos; Daniel no se duplica en la lista histórica.

## Pendientes prioritarios para retomar

### P0 — terminar 3.9 sin cambiar estética

1. **Equipo histórico**
   - copiar al repo los originales aprobados del archivo histórico, no depender del CDN Wix;
   - verificar uno a uno EQ01–EQ07 contra el mapeo OWNER;
   - registrar SHA-256, procedencia, alt y caption;
   - decidir publicación de EQ05 María José Trujillo, EQ06 Geovanny Romero y EQ07 Marcos Landy;
   - recuperar/reconciliar cargo, alias, bio y contexto Wix restante;
   - mantener contactos históricos fuera de publicación automática.

2. **Assets históricos**
   - actualizar `GEOTACTICS_ASSET_APPROVAL_QUEUE.md`, que quedó desfasado respecto de los 21 assets de casos ya integrados;
   - reconciliar estados NEEDS_REVIEW / APPROVED / PUBLICABLE;
   - validar SIGDR y SIGC videos antes de CTA pública;
   - revisar MadaRadio / NurseGO / RANTYI .key cuando corresponda.

3. **Pasada editorial transversal final**
   - Contacto;
   - Archivo;
   - microcopy de detalles de productos/casos;
   - eliminar cualquier remanente de tono audit/interno;
   - conservar problema → intervención → utilidad.

### P1 — 3.10 Premium Experience, no invasivo

4. Auditoría de foco real en:
   - menú;
   - PhotoFan / lightbox;
   - mapa;
   - formulario;
   - drag + alternativa click/tap.

5. Continuidad de navegación:
   - listado → detalle → relacionado → retorno;
   - contexto mínimo en detalles largos;
   - mejores salidas Archivo → caso/producto;
   - sin barras permanentes nuevas.

6. QA técnico:
   - `npm run build`;
   - Astro check;
   - Lighthouse/PageSpeed baseline;
   - revisar LCP / CLS / INP;
   - Android / iOS / desktop / red lenta;
   - reduced-motion.

### P2 — cierre pre-cutover

7. SEO / percepción:
   - OG/social cards autorizadas;
   - favicon/app metadata final;
   - structured data Organization / WebSite / BreadcrumbList;
   - captions históricos donde haya evidencia.

8. Superficies digitales:
   - revalidar antes del corte DataSucumbíos, OrangeMap, Explora, Observatorio y Fixis;
   - no revivir URLs rotas/restringidas.

## Observaciones abiertas

- El detalle gráfico de “grafo de familia dentro del marco PhotoFan” queda **pospuesto**: el primer intento generó regresión en la continuidad de timeline y fue revertido. Solo reabrir si se implementa de forma completamente aislada.
- No hacer microversiones por pequeños ajustes visuales. Trabajar por bloques funcionales.
- No introducir rediseño SaaS, glassmorphism, gradientes de moda ni animación ornamental.
- White space sigue siendo parte de la identidad; corregir únicamente cuando sea espacio accidental por acumulación de paddings/márgenes.

## Punto exacto de reanudación

**Mañana:** empezar por cerrar el paquete de Equipo histórico / assets reales, actualizar la cola de activos a estado real y después continuar 3.10 con navegación contextual + auditoría de foco.
