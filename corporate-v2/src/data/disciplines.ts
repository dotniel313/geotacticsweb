/** Disciplines / layers — DRAFT_EDITORIAL. Matrix: SoT 06. */

export type EvidenceLevel = 'confirmed' | 'partial' | 'historical' | 'not_confirmed';

export const disciplines = [
	{
		id: 'captura',
		title: 'Captura',
		role: 'Llevar el dato desde el lugar donde ocurre hasta el sistema que necesita utilizarlo.',
		confirmed: ['CAPTURE', 'Termómetro Social', 'MadaRadio'],
	},
	{
		id: 'datos',
		title: 'Datos / integración',
		role: 'Unir información dispersa y convertirla en una base que pueda comprenderse y utilizarse.',
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
		role: 'Una herencia tecnológica que nos enseñó a organizar información para que pueda convertirse en análisis y gestión.',
		confirmed: [],
		historical: true,
	},
	{
		id: 'bi',
		title: 'Business Intelligence',
		role: 'Convertir datos en una lectura que permita ver qué ocurre, seguir cambios y tomar decisiones.',
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
		role: 'Transformar datos en señales que ayuden a saber dónde estamos, qué cambia y dónde actuar.',
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
		role: 'Conectar planes, actividades e información para que una organización pueda seguir lo que hace y ajustar lo que necesita.',
		confirmed: ['YAKU', 'O/T'],
	},
	{
		id: 'surfaces',
		title: 'Web / móvil',
		role: 'Llevar el sistema a las personas mediante interfaces para capturar, gestionar, consultar o trabajar con la información.',
		confirmed: ['SIGDR', 'CAPTURE', 'ExploraSucumbíos', 'Termómetro Social', 'MadaRadio', 'DataSucumbíos'],
	},
] as const;
