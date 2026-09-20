/** Six corporate families — OWNER_APPROVED 3.7. Problem classes, not technologies. */

export const familyIds = [
	'inteligencia-territorial',
	'gobierno-y-gestion',
	'sociedad-y-participacion',
	'operaciones-y-trazabilidad',
	'mercados-y-servicios',
	'turismo-y-territorio',
] as const;

export type FamilyId = (typeof familyIds)[number];

export type Family = {
	id: FamilyId;
	code: string;
	order: number;
	title: string;
	cue: string;
	shortDescription: string;
	color: string;
	visual: 'territory' | 'gov' | 'society' | 'ops' | 'market' | 'tour';
};

export const families: Family[] = [
	{
		id: 'inteligencia-territorial',
		code: '01',
		order: 1,
		title: 'Inteligencia territorial',
		cue: 'Territorio + información',
		shortDescription:
			'Problemas de lectura, registro y análisis del territorio para apoyar gestión y decisión.',
		color: '#E84C3D',
		visual: 'territory',
	},
	{
		id: 'gobierno-y-gestion',
		code: '02',
		order: 2,
		title: 'Gobierno y gestión',
		cue: 'Institución + proceso',
		shortDescription:
			'Problemas de planificación, seguimiento, control e información institucional pública o de gestión.',
		color: '#3498DB',
		visual: 'gov',
	},
	{
		id: 'sociedad-y-participacion',
		code: '03',
		order: 3,
		title: 'Sociedad y participación',
		cue: 'Ciudadanía + territorio',
		shortDescription:
			'Problemas de participación, opinión y visibilidad ciudadana desde el territorio.',
		color: '#9B59B6',
		visual: 'society',
	},
	{
		id: 'operaciones-y-trazabilidad',
		code: '04',
		order: 4,
		title: 'Operaciones y trazabilidad',
		cue: 'Flujo + registro',
		shortDescription:
			'Problemas de operación física o administrativa que requieren trazar un flujo de punta a punta.',
		color: '#27AE60',
		visual: 'ops',
	},
	{
		id: 'mercados-y-servicios',
		code: '05',
		order: 5,
		title: 'Mercados y servicios',
		cue: 'Oferta + demanda',
		shortDescription:
			'Problemas de encuentro entre oferta, demanda e información, con o sin dimensión territorial.',
		color: '#4A3E3D',
		visual: 'market',
	},
	{
		id: 'turismo-y-territorio',
		code: '06',
		order: 6,
		title: 'Turismo y territorio',
		cue: 'Lugar + experiencia',
		shortDescription:
			'Problemas de descubrimiento turístico, operadores y ventanas digitales sobre el territorio.',
		color: '#F39C12',
		visual: 'tour',
	},
];

export function familyById(id: FamilyId) {
	return families.find((f) => f.id === id)!;
}
