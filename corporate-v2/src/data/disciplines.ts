/** Disciplines / layers — DRAFT_EDITORIAL. Matrix: SoT 06. */

export type EvidenceLevel = 'confirmed' | 'partial' | 'historical' | 'not_confirmed';

export const disciplines = [
	{
		id: 'captura',
		title: 'Captura',
		role: 'Registrar cuando el problema lo exige.',
		confirmed: ['CAPTURE', 'Termómetro Social', 'MadaRadio'],
	},
	{
		id: 'datos',
		title: 'Datos / integración',
		role: 'Organizar fuentes e información estructurada.',
		confirmed: [],
	},
	{
		id: 'gis',
		title: 'GIS',
		role: 'Cuando el problema tiene una dimensión espacial, integramos herramientas geográficas para capturar, analizar y comprender el territorio.',
		confirmed: ['CAPTURE', 'DataSucumbíos', 'Termómetro Social', 'MadaRadio'],
	},
	{
		id: 'dw',
		title: 'DW / Data Mart',
		role: 'Parte de nuestra herencia tecnológica: organizar información para convertirla en una base útil para análisis y gestión.',
		confirmed: [],
		historical: true,
	},
	{
		id: 'bi',
		title: 'Business Intelligence',
		role: 'Datos → análisis → indicadores → visualización → seguimiento → decisión.',
		confirmed: ['DataSucumbíos', 'Monitoreo PDOT'],
		featured: true,
	},
	{
		id: 'olap',
		title: 'OLAP',
		role: 'Análisis multidimensional para explorar información desde distintas perspectivas cuando el sistema lo requiere.',
		confirmed: ['YAKU', 'DataSucumbíos'],
	},
	{
		id: 'indicadores',
		title: 'Indicadores',
		role: 'Pasar del dato al indicador y del indicador a la gestión.',
		confirmed: ['DataSucumbíos', 'Monitoreo PDOT'],
	},
	{
		id: 'cmi',
		title: 'CMI',
		role: 'Cuadro de mando integral. No forma parte de las capas documentadas en los productos públicos.',
		confirmed: [],
		muted: true,
		public: false,
	},
	{
		id: 'gestion',
		title: 'Gestión',
		role: 'Planificación, seguimiento y control cuando el sistema lo materializa.',
		confirmed: ['YAKU', 'O/T'],
	},
	{
		id: 'surfaces',
		title: 'Web / móvil',
		role: 'Superficies de captura, gestión o explotación. Capas, no marca.',
		confirmed: ['SIGDR', 'CAPTURE', 'ExploraSucumbíos', 'Termómetro Social', 'MadaRadio', 'DataSucumbíos'],
	},
] as const;
