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
	lead: 'Antes de elegir una herramienta, necesitamos entender qué está pasando. GOST es la forma de pensar que ha acompañado a GeoTactics desde su origen.',
	body: [
		'GOST —Gestión Operativa de Sistemas Territoriales— nació de una necesidad práctica: hacer visible una organización que funcionaba entre procesos dispersos, poca información y decisiones difíciles de seguir. Desde entonces, nos ayuda a ordenar la realidad antes de construir la solución.',
		'El nombre surgió entre 2007 y 2008 inspirado en «ghost»: algo que no siempre se ve, pero cuya presencia se reconoce por lo que hace. Esa idea terminó convirtiéndose en una forma de conectar gestión, información, territorio y tecnología.',
		'Las herramientas han cambiado con los años. BI, GIS, datos, OLAP, web o móvil aparecen cuando aportan valor al problema. Lo que permanece es la lógica: comprender primero, construir después y aprender de cada implementación.',
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
		note: 'SIGDR · Sistema Integrado de Gestión Para Desarrollo Rural.',
	},
} as const;

export const adn = {
	headline: 'ADN GeoTactics',
	lead: 'Lo que hemos aprendido proyecto a proyecto terminó formando una manera propia de construir tecnología.',
	items: [
		{ code: '01', title: 'Problema real', text: 'Primero entendemos la realidad y qué necesita cambiar. La tecnología viene después.' },
		{ code: '02', title: 'GOST', text: 'Nos ayuda a conectar información, personas, procesos y territorio antes de diseñar la respuesta.' },
		{ code: '03', title: 'Disciplinas', text: 'Elegimos BI, GIS, datos, OLAP, móvil o web cuando ayudan a resolver mejor el problema.' },
		{ code: '04', title: 'Herencia BI', text: 'Nuestra historia con Business Intelligence y Data / Warehouse - Mart dejó una idea central: los datos deben servir para comprender y decidir.' },
		{ code: '05', title: 'Implementación', text: 'Una solución demuestra su valor cuando entra en contacto con el territorio, la institución, la operación o el mercado para el que fue creada.' },
		{ code: '06', title: 'Aprendizaje', text: 'Cada implementación nos enseña algo nuevo y ese aprendizaje vuelve al siguiente problema.' },
	],
} as const;
