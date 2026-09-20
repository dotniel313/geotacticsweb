/** Product lineage — not a timeline. Edges ≠ shared code. Nurse GO omitted (internal). */

export type LineageKind =
	| 'ontological_foundation'
	| 'product_evolution'
	| 'component_flow'
	| 'data_flow'
	| 'conceptual_influence';

export const lineageKinds: Record<LineageKind, string> = {
	ontological_foundation: 'Fundamento ontológico',
	product_evolution: 'Evolución de producto',
	component_flow: 'Componente',
	data_flow: 'Flujo de datos',
	conceptual_influence: 'Influencia conceptual',
};

export const lineageNodes: Record<string, { label: string; href?: string; kind?: 'method' | 'component' | 'product' | 'layer' | 'research' }> =
	{
		gost: { label: 'GOST', kind: 'method', href: '/tecnologia#gost' },
		sigdr: { label: 'SIGDR', kind: 'product', href: '/productos/sigdr' },
		capture: { label: 'CAPTURE', kind: 'component' },
		base: { label: 'Base territorial', kind: 'layer' },
		datasucumbios: { label: 'DataSucumbíos', kind: 'product', href: '/productos/datasucumbios' },
		sigc: { label: 'SIGC', kind: 'product', href: '/productos/sigc' },
		yaku: { label: 'YAKU', kind: 'product', href: '/productos/yaku' },
		ot: { label: 'O/T', kind: 'product', href: '/productos/ot' },
		prediccion: { label: 'Predicción', kind: 'research' },
		termometro: { label: 'Termómetro Social', kind: 'product', href: '/productos/termometro-social' },
		orangemap: { label: 'OrangeMap', kind: 'product', href: '/productos/orangemap' },
		explora: { label: 'ExploraSucumbíos', kind: 'product', href: '/productos/explorasucumbios' },
		madaradio: { label: 'MadaRadio', kind: 'product', href: '/productos/madaradio' },
		guanta: { label: 'GUANTA', kind: 'product', href: '/productos/guanta' },
		rantyi: { label: 'RANTYI', kind: 'product', href: '/productos/rantyi' },
		fixis: { label: 'Fixis', kind: 'product', href: '/productos/fixis' },
		observatorio: { label: 'Observatorio', kind: 'product', href: '/productos/observatorio-gadmla' },
		sigmd: { label: 'SIGMD', kind: 'research' },
	};

export const lineageBranches = [
	{
		id: 'intel',
		title: 'Territorio e inteligencia',
		note: 'CAPTURE es componente. DataSucumbíos consume la base; no es SIGDR v2.',
		steps: [
			{ id: 'gost', kind: 'ontological_foundation' as LineageKind },
			{ id: 'sigdr', kind: 'ontological_foundation' as LineageKind },
			{ id: 'capture', kind: 'component_flow' as LineageKind },
			{ id: 'base', kind: 'data_flow' as LineageKind },
			{ id: 'datasucumbios', kind: 'data_flow' as LineageKind },
		],
	},
	{
		id: 'gestion',
		title: 'Gestión institucional',
		note: 'Evolución de producto. No implica el mismo código.',
		steps: [
			{ id: 'gost', kind: 'ontological_foundation' as LineageKind },
			{ id: 'sigc', kind: 'ontological_foundation' as LineageKind },
			{ id: 'yaku', kind: 'product_evolution' as LineageKind },
			{ id: 'ot', kind: 'product_evolution' as LineageKind },
		],
	},
	{
		id: 'survey',
		title: 'Campo / predicción',
		note: 'I+D+i y spin-off. Predicción no está en catálogo público.',
		steps: [
			{ id: 'gost', kind: 'ontological_foundation' as LineageKind },
			{ id: 'prediccion', kind: 'ontological_foundation' as LineageKind },
			{ id: 'termometro', kind: 'conceptual_influence' as LineageKind },
		],
	},
	{
		id: 'market',
		title: 'Descubrimiento territorial',
		note: 'Vertical lógica. Código compartido: no documentado.',
		steps: [
			{ id: 'gost', kind: 'ontological_foundation' as LineageKind },
			{ id: 'orangemap', kind: 'ontological_foundation' as LineageKind },
			{ id: 'explora', kind: 'conceptual_influence' as LineageKind },
		],
	},
] as const;

export const ontologicalLeaves = [
	'madaradio',
	'guanta',
	'rantyi',
	'fixis',
	'observatorio',
	'sigmd',
] as const;
