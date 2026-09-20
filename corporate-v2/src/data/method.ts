/** Method, GOST, ADN — 3.7 OWNER_APPROVED. */

export const methodFlow = [
	{ id: 'problema', title: 'Problema real' },
	{ id: 'comprension', title: 'Comprensión' },
	{ id: 'gost', title: 'GOST' },
	{ id: 'disciplinas', title: 'Tecnologías / disciplinas necesarias' },
	{ id: 'sistema', title: 'Sistema / prototipo / producto' },
	{ id: 'implementacion', title: 'Implementación' },
	{ id: 'aprendizaje', title: 'Aprendizaje' },
	{ id: 'evolucion', title: 'Evolución' },
] as const;

export const rdFlow = [
	{ id: 'problema', title: 'Problema' },
	{ id: 'investigacion', title: 'Investigación / exploración' },
	{ id: 'gost', title: 'GOST' },
	{ id: 'tecnologias', title: 'Tecnologías' },
	{ id: 'prototipo', title: 'Prototipo / I+D+i' },
	{ id: 'producto', title: 'Producto / solución' },
	{ id: 'implementacion', title: 'Implementación' },
	{ id: 'aprendizaje', title: 'Aprendizaje' },
] as const;

export const gost = {
	acronym: 'G.O.S.T.',
	name: 'Gestión Operativa de Sistemas Territoriales',
	lead: 'Metodología, marco conceptual y forma de estructurar problemas. El eje de continuidad de GeoTactics.',
	body: [
		'GOST —Gestión Operativa de Sistemas Territoriales— es la forma en que GeoTactics organiza un problema antes de elegir la tecnología. El dominio cambia; esa forma de pensar se mantiene.',
		'El nombre surgió entre 2007 y 2008. Se inspiró intencionalmente en «ghost»: algo cuyos efectos podían percibirse aunque el sistema que los producía no fuera visible.',
		'No es un software, ni un producto de catálogo, ni BI, GIS, DW u OLAP. Esas son disciplinas o capas que se combinan cuando el problema lo requiere. Cada desarrollo recorre el ciclo según el caso.',
	],
	conception: {
		year: '2007–2008',
		status: 'owner_confirmed',
		publicNote: 'A partir de un problema institucional en el GADP de Sucumbíos.',
		note: 'OWNER_CONFIRMED. Evidencia documental independiente del año: pendiente. No es fecha de constitución societaria.',
	},
	firstMaterialization: {
		year: '2017',
		status: 'documented',
		note: 'Primera materialización localizada: SIGDR.',
	},
} as const;

export const adn = {
	headline: 'ADN GeoTactics',
	lead: 'Hábitos que se repiten cuando un problema se convierte en sistema.',
	items: [
		{ code: '01', title: 'Problema real', text: 'La tecnología se elige después de estructurar el problema.' },
		{ code: '02', title: 'GOST', text: 'Eje transversal. No es el producto.' },
		{ code: '03', title: 'Disciplinas', text: 'BI, GIS, OLAP, móvil, web: capas, cuando hacen falta.' },
		{ code: '04', title: 'Herencia BI', text: 'Data / Warehouse - Mart forma parte de la identidad histórica de la empresa.' },
		{ code: '05', title: 'Implementación', text: 'El sistema se prueba en un territorio, una institución o un mercado.' },
		{ code: '06', title: 'Aprendizaje', text: 'La siguiente solución hereda método, no necesariamente código.' },
	],
} as const;
