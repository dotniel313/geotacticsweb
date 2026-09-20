# Genealogía de soluciones GeoTactics

```
SOURCE OF TRUTH — GEOTACTICS CORPORATE 2.0
Versión: 1.0
Fecha: 18 septiembre 2026
```

**Documento:** `GEOTACTICS_PRODUCT_LINEAGE_2008_2026.md`  
**Versión documental:** 1.6.1  

**2008 (dos niveles):** concepción inicial de GOST atribuida por Jhony Daniel Orellana Torres a su experiencia en Plan Ecuador = CONFIRMADO_PROPIETARIO. Evidencia documental independiente del año 2008 = PENDIENTE. Primera materialización/documentación localizada = 2017. **No publicar** “GeoTactics/GOST desde 2008” como hecho documentalmente probado.

**Leyenda del grafo**

- trazo continuo + texto sin marca = **CONFIRMADO_PROPIETARIO** o **CONFIRMADO_DOCUMENTO**  
- `-.->` = **INFERIDO**  
- `---` + `[por validar]` = **PENDIENTE**

---

## 1. Familias (no una sola línea temporal)

### 1.1 Territorio / GOST (parcial)

```mermaid
flowchart TB
  GOST["METODOLOGÍA GOST<br/>Gestión Operativa de Sistemas Territoriales"]
  SIGDR["PRODUCTO HISTÓRICO<br/>SIGDR — Sistema Integrado de Gestión<br/>para Desarrollo Rural"]
  CAP["COMPONENTE<br/>CAPTURE<br/>app móvil de captura"]
  DS["PRODUCTO<br/>DataSucumbíos<br/>explotación territorial / BI / GIS / OLAP"]
  BASE["BASE TERRITORIAL<br/>PDOT Sucumbíos — caso"]
  SIGMD["I+D+i CONCEPTUAL<br/>SIGMD — no implementado"]
  PRED["I+D+i<br/>Predicción — no consolidado"]
  TS["PRODUCTO<br/>Termómetro Social"]

  GOST --> SIGDR
  SIGDR -->|"implementación parcial<br/>PDOT Sucumbíos"| CAP
  SIGDR -->|"explotación / inteligencia territorial<br/>NO es SIGDR v2"| DS
  CAP --> BASE
  BASE -->|"consume la base, entre otras fuentes"| DS
  GOST -.->|"lógica similar<br/>CONFIRMADO_PROPIETARIO;<br/>nunca implementado"| SIGMD
  GOST --> PRED
  PRED -->|"spin-off"| TS
  GOST -->|"aplica/deriva principios GOST<br/>NO implementa todo GOST"| MR_GOST["PRODUCTO<br/>MadaRadio"]
```

**Flujo de datos confirmado (no invertir):**

```
CAPTURE
   ↓
BASE TERRITORIAL
   ↓
DATASUCUMBÍOS
```

DataSucumbíos **consume** la base generada/alimentada por CAPTURE, entre otras fuentes. **No** se representa DataSucumbíos → Base Territorial.

**Relación conceptual simultánea (no es cadena de reemplazo):**

```
SIGDR
 ├─ CAPTURE = captura en implementación parcial
 └─ DataSucumbíos = explotación / inteligencia territorial
```

DataSucumbíos **NO** es SIGDR v2.

**Prohibido en diagrama público:** `SIGDR → CAPTURE → DataSucumbíos` como productos que se sustituyen.

Evolución futura hacia SIGDR más integral: **CONFIRMADO_PROPIETARIO** como intención, no como producto ya entregado.

### 1.2 Agua / gestión institucional

```mermaid
flowchart TB
  SIGC["PRODUCTO HISTÓRICO<br/>SIGC — Sistema Integrado<br/>para Gestión de Cartera"]
  YAKU["SOLUCIÓN / PLATAFORMA HISTÓRICA<br/>YAKU — EMAPAI ~2019"]
  OT["SOLUCIÓN HISTÓRICA IMPLEMENTADA<br/>O/T — GAD Provincial Sucumbíos"]

  SIGC -->|"hereda parte de la experiencia<br/>y línea alrededor de SIGC"| YAKU
  YAKU -->|"genealogía confirmada<br/>por el propietario"| OT
```

No afirmar implementación formal de GOST dentro de YAKU.

### 1.3 Descubrimiento geográfico comercial / turismo

```mermaid
flowchart TB
  OM["PRODUCTO PROPIO ACTUAL<br/>OrangeMap<br/>orangemap.geotactics.com.ec"]
  EX["PRODUCTO PROPIO / VERTICAL<br/>ExploraSucumbíos<br/>explorasucumbios.geotactics.com.ec"]

  OM -->|"lógica derivada<br/>NO afirmar código compartido"| EX
```

### 1.4 Mercado georreferenciado y oficios (sin GOST en el grafo)

```mermaid
flowchart TB
  RAN["PRODUCTO PROPIO PRELANZAMIENTO<br/>RANTYI"]
  FX["ECOSISTEMA PRELANZAMIENTO<br/>Fixis — experiencia cliente"]
  FXP["Fixis PRO — experiencia profesional"]

  FX --- FXP
```

RANTYI y Fixis **no** se cuelgan de GOST en este documento.

### 1.5 Otros productos propios (sin arista GOST)

```mermaid
flowchart LR
  GU["GUANTA<br/>operación mina/cantera"]
  OBS["Observatorio GADMLA<br/>observatorio.geotactics.com.ec"]
```

Nodos independientes hasta confirmación de padre metodológico. **MadaRadio** no está aquí: arista GOST en §1.1 (aplica principios; no es GOST-software).

---

## 2. Tabla de aristas

| Origen | Destino | Tipo de relación | Nivel |
|---|---|---|---|
| GOST | SIGDR | fundamento metodológico / materialización temprana | CONFIRMADO_PROPIETARIO |
| SIGDR | CAPTURE | CAPTURE = capa móvil en implementación **parcial** SIGDR | CONFIRMADO_PROPIETARIO |
| SIGDR | DataSucumbíos | genealogía **conceptual**; no “v2” | CONFIRMADO_PROPIETARIO |
| CAPTURE | base territorial PDOT | una de las fuentes de la base | CONFIRMADO_PROPIETARIO |
| base territorial | DataSucumbíos | DataSucumbíos **consume** la base (entre otras fuentes) | CONFIRMADO_PROPIETARIO |
| GOST | Predicción | aplicación de principios GOST a procesos electorales | CONFIRMADO_PROPIETARIO |
| Predicción | Termómetro Social | spin-off | CONFIRMADO_PROPIETARIO |
| GOST | Termómetro Social | otra aplicación de GOST | CONFIRMADO_PROPIETARIO |
| GOST | MadaRadio | aplica/deriva principios metodológicos GOST (no implementa todo GOST; no es GOST como software) | CONFIRMADO_PROPIETARIO |
| SIGC | YAKU | hereda experiencia / línea SIGC | CONFIRMADO_PROPIETARIO |
| YAKU | O/T | deriva conceptualmente | CONFIRMADO_PROPIETARIO |
| GOST | SIGMD | lógica similar a SIGDR; no implementado | CONFIRMADO_PROPIETARIO (concepto) |
| OrangeMap | ExploraSucumbíos | vertical / lógica derivada | CONFIRMADO_PROPIETARIO |
| OrangeMap | ExploraSucumbíos | código compartido | PENDIENTE (no afirmar) |
| Fixis | Fixis PRO | mismo ecosistema, dos superficies | CONFIRMADO_PROPIETARIO |
| GOST | YAKU | implementación formal GOST | no afirmar |
| GOST | OrangeMap / RANTYI / Fixis / GUANTA / Observatorio | — | no conectar |

---

## 3. Casos ≠ nodos de producto

Los siguientes son **implementaciones**, no productos distintos:

- Comuna Gualsaqui → instancia SIGDR  
- GADPR Vacas Galindo → instancia SIGDR  
- GADPR Dayuma → instancia SIGDR  
- GADPR Inés Arango → instancia SIGDR  
- Junta Pimampiro (JAAPP) → instancia SIGC  
- Junta La Victoria (JALV) → instancia SIGC  
- EMAPAI → programa que incluye modernización comercial/SIGC y YAKU  
- GAD Provincial de Sucumbíos / PDOT 2023–2038 → caso; hospeda CAPTURE, monitoreo BI y DataSucumbíos  
- Corposucumbíos / Patas a la Obra → caso RSE (no producto de catálogo)  
- Mina Guanta → cliente/contexto de producto GUANTA (no duplicar como producto)  
- MadaRadio (organización) → contexto del producto MadaRadio  

---

## 4. Qué no entra en el grafo aún

- Inqui, Ecuador Ancestral, E-GPS: `PENDIENTE_CLASIFICACION_HISTORICA`. No bloquean Fase 2. No inventar genealogía.  
- Ecuador Ancestral **no** se fusiona con ExploraSucumbíos (clientes distintos en fuentes).  
- Paper CTEA-IE-2020: estudio; no es producto.
