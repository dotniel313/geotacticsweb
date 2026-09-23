# GeoTactics Corporate 2.0 — Asset Publication Register 3.9

**Estado:** CONTENT RECONCILIATION  
**Rama:** `fix/3.8-integrated-qa`  
**Regla:** ningún activo histórico entra al sitio por valor decorativo. Debe tener relación verificable con una persona, producto, caso o momento de la trayectoria.

## Pipeline

`DISCOVERED → NEEDS_REVIEW → APPROVED → PUBLICABLE`

- **DISCOVERED**: localizado en una fuente histórica o repositorio.
- **NEEDS_REVIEW**: identidad, fecha, contexto, derechos o calidad todavía requieren revisión.
- **APPROVED**: el OWNER confirma identidad/contexto y autoriza su uso.
- **PUBLICABLE**: además de aprobado, existe una versión técnicamente apta para Corporate 2.0 con alt/caption/destino definidos.

No se completa PhotoFan con stock. 0 activos = fallback corporativo; 1 = imagen única; 2 = composición de dos; 3+ = máximo tres imágenes en abanico.

## Registro inicial

| ID | Relación | Tipo | Fuente conocida | Estado | Uso candidato | Revisión pendiente |
|---|---|---|---|---|---|---|
| A-SIGDR-VIDEO-01 | SIGDR | video | YouTube histórico | DISCOVERED | detalle SIGDR / Archivo | validar vigencia, título y contexto |
| A-SIGC-VIDEO-01 | SIGC | video | YouTube histórico | DISCOVERED | detalle SIGC / Archivo | validar vigencia, título y contexto |
| A-GUAL-01 | Gualsaquí | fotografía(s) | Wix / corpus histórico | NEEDS_REVIEW | PhotoFan caso | identidad, fecha, derechos, calidad |
| A-VG-01 | Vacas Galindo | fotografía(s) | Wix / corpus histórico | NEEDS_REVIEW | PhotoFan caso | identidad, fecha, derechos, calidad |
| A-PIMA-01 | Pimampiro / SIGC | fotografía(s) | Wix / corpus histórico | NEEDS_REVIEW | PhotoFan caso | socialización, fecha, personas, derechos |
| A-EMAPAI-01 | EMAPAI / YAKU | fotografía(s) | Wix / informes históricos | NEEDS_REVIEW | PhotoFan caso | actividad, fecha, personas, derechos |
| A-DAY-01 | Dayuma–Inés Arango | fotografía(s) | Wix / corpus histórico | NEEDS_REVIEW | PhotoFan caso | distinguir parroquia/actividad/fecha |
| A-PDOT-01 | PDOT Sucumbíos | fotografía(s) | Wix / corpus PDOT | NEEDS_REVIEW | PhotoFan caso | actividad, fecha, personas, derechos |
| A-OT-01 | O/T Sucumbíos | fotografía(s) | Wix / corpus histórico | NEEDS_REVIEW | PhotoFan caso | socialización/capacitación, fecha |
| A-TEAM-01 | Fundadores / equipo histórico | fotografía(s) | Wix histórico | MIXED | Nosotros | EQ01–EQ04 PUBLICABLE y visibles vía Wix CDN; EQ05–EQ07 APPROVED/no publicados; originales aún pendientes de copiar al repo |
| A-MADA-KEY-01 | MadaRadio | presentación | archivo .key histórico | DISCOVERED | evidencia interna / extracción de capturas | revisar contenido y derechos |
| A-NURSE-KEY-01 | Nurse GO | presentación | archivo .key histórico | DISCOVERED | interno | producto aún no publicable |

## Enlaces históricos conocidos

- SIGDR: https://youtu.be/bjt1cSFzcOg
- SIGC: https://www.youtube.com/watch?v=cHJkqTo-i8A

Los enlaces se registran como evidencia; no se convierten automáticamente en CTA pública.

## Reglas de copy y metadatos

Cada activo PUBLICABLE debe definir:
1. relación canónica (producto/caso/persona);
2. fecha o periodo cuando se conozca;
3. caption factual y breve;
4. texto alternativo descriptivo;
5. procedencia;
6. autorización/criterio de publicación;
7. destino en Corporate 2.0.

Si una fotografía contiene personas, el caption no identifica a nadie sin confirmación. Si la fecha exacta no está respaldada, se usa periodo o se omite.

## Próxima revisión OWNER

Prioridad visual: **PDOT/CAPTURE → Dayuma–Inés Arango → EMAPAI/YAKU → Pimampiro/SIGC → Gualsaquí/SIGDR → equipo histórico**.

La revisión debe hacerse sobre miniaturas reales, no sobre nombres de archivo. Tras aprobación se copian únicamente los activos PUBLICABLES a Corporate 2.0 y se enlazan a `assets[]` / galerías correspondientes.


## Mapeo OWNER aprobado — equipo histórico

El 20 Sep 2026 el OWNER confirmó visualmente el siguiente mapeo de los siete retratos históricos recuperados de Wix. Este mapeo sustituye cualquier variante nominal del inventario automático y no debe reconstruirse por inferencia facial.

| ID visual | Nombre confirmado | Uso editorial |
|---|---|---|
| EQ01 | Daniel Orellana | Dirección actual + fundador |
| EQ02 | Luis Padilla | Fundador histórico |
| EQ03 | Germán Flores | Fundador histórico |
| EQ04 | Christian Montalvo | Fundador histórico |
| EQ05 | María José Trujillo | Equipo histórico; rol/periodo público pendiente |
| EQ06 | Geovanny Romero | Equipo histórico; rol/periodo público pendiente |
| EQ07 | Marcos Landy | Equipo histórico; rol/periodo público pendiente |

### Restricciones

- EQ01–EQ04 pueden vincularse a los perfiles de fundadores ya existentes.
- EQ05–EQ07 no se presentan como fundadores ni como equipo actual sin evidencia adicional.
- No usar variantes automáticas “Giovanni Romero” ni “Marco Landi”; prevalecen los nombres confirmados por OWNER.
- Las fotografías están aprobadas para identidad, pero todavía no son PUBLICABLES hasta copiar los originales desde el archivo histórico local y registrar alt/caption/procedencia.
- No sustituir retratos por stock ni generar rostros.


## Metadatos históricos de personas — recuperación Wix

Los retratos no son el único activo de equipo. Para cada persona histórica se debe recuperar, cuando exista en Wix, el contexto textual asociado y conservarlo separado del perfil corporativo actual.

Campos a recuperar:
- nombre mostrado;
- cargo / función histórica;
- apodo o nombre informal mostrado públicamente;
- biografía o texto de presentación;
- periodo o contexto visible;
- enlaces sociales o de contacto históricos;
- página / sección de origen;
- URL de origen;
- evidencia textual cercana.

Criterio de publicación:
- estos campos se preservan como HISTORICAL_METADATA aunque ya no describan la situación actual;
- un cargo histórico no se convierte en cargo vigente;
- un apodo solo se publica si aparece explícitamente en la fuente histórica o es confirmado por OWNER;
- los datos de contacto antiguos no se republican automáticamente;
- las variantes de nombre del scraping no sustituyen los nombres confirmados por OWNER;
- cuando el dato tenga valor patrimonial pero no comercial actual, puede vivir en Archivo / historia del equipo sin mostrarse en la ficha pública principal.

Estado actual: el mapeo visual EQ01–EQ07 está confirmado por OWNER. La recuperación exhaustiva de cargo, apodo, biografía y otros metadatos Wix todavía está pendiente de extracción/reconciliación.


## Recuperación de metadatos históricos — fundadores

Se preservan en contenido estructurado, separados de la presentación pública actual:

| Persona | Cargo histórico documentado | Apodo / alias histórico | Fuente |
|---|---|---|---|
| Daniel Orellana | Fundador & CEO | Chuky | Wix / Index1 |
| Luis Padilla | Fundador & Jefe de Programación | Luchin | Wix / Index1 |
| Germán Flores | Fundador & Jefe de Políticas Públicas | Jefe | Wix / Index1 |
| Christian Montalvo | Fundador & Gerente General | — | Wix |

Los alias proceden del material histórico Index1; no se atribuyen a Wix cuando Wix no los muestra. Se conservan como metadatos históricos y no se muestran automáticamente en la ficha pública.


## Estado técnico equipo — 22 Sep 2026

Se creó `corporate-v2/src/assets/history/team-historical/manifest-team-3.9.csv` con:
- mapeo EQ01–EQ07;
- nombre OWNER confirmado;
- archivo original;
- ruta dentro del archivo histórico;
- SHA-256;
- estado editorial;
- estado actual de entrega.

Esto elimina la ambigüedad entre “foto identificada”, “foto publicada” y “original preservado en repo”.
