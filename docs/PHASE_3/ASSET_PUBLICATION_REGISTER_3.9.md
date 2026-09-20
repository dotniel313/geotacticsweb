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
| A-TEAM-01 | Fundadores / equipo histórico | fotografía(s) | Wix histórico | NEEDS_REVIEW | Nosotros | identificar personas y periodo; no inferir equipo actual |
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
