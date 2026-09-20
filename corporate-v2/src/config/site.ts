/**
 * Site configuration — Experience Spec v1.1 (frozen copy).
 * Alpha 3.6: Corporate shell + Signals + contact + footer. Home noindex hasta cutover.
 */

export const site = {
	name: 'GeoTactics',
	url: 'https://www.geotactics.com.ec',
	version: '3.8.0-beta.1',
	locale: 'es_EC',
	lang: 'es',
	/** Alpha: do not index accidental deploys. */
	indexable: false,
	originLine: 'Nueva Loja · Sucumbíos · Amazonía ecuatoriana',
	coordinates: '0.091, −76.89',
	anchor2017: 'Primera materialización documentada · 2017',
	FONT_ASSET_PENDING: true,
	SVG_OFFICIAL_PENDING: true,
} as const;

export const copy = {
	h1: 'Construimos sistemas alrededor de problemas reales.',
	supporting:
		'Empresa ecuatoriana de tecnología. Integramos información, territorio, procesos y tecnología —incluida la herencia de Business Intelligence y Data / Warehouse - Mart— para que las organizaciones funcionen mejor y las personas vivan mejor.',
	ctaPrimary: 'Conversemos sobre el problema',
	ctaSecondary: 'Cómo trabajamos',
	description:
		'Empresa ecuatoriana de tecnología. Sistemas alrededor de problemas reales. Origen en Ibarra. Base en Nueva Loja, Sucumbíos.',
} as const;

/** Nav destinations (Inicio = logo oficial compacto → /). */
export const navItems = [
	{ href: '/que-hacemos', label: 'Qué hacemos' },
	{ href: '/productos', label: 'Productos' },
	{ href: '/casos', label: 'Casos' },
	{ href: '/archivo', label: 'Archivo' },
	{ href: '/tecnologia', label: 'Tecnología' },
	{ href: '/nosotros', label: 'Nosotros' },
] as const;

export const conversarHref = '/contacto';
export const conversarLabel = 'Conversar';

/** Home + /que-hacemos intro. Headline from 3.1 brief; aligned to SoT (capacidades ≠ productos). */
export const capabilitiesIntro = {
	microcode: 'GT / CAPABILITIES',
	eyebrow: 'Qué hacemos',
	headline: 'Seis clases de problema. No seis tecnologías.',
	supporting:
		'Las familias describen qué clase de problema abordamos. BI, GIS, móvil o web son disciplinas o capas, no el mapa corporativo.',
} as const;

export const productsIntro = {
	microcode: 'GT / PRODUCTS',
	eyebrow: 'Productos',
	headline: 'Las capacidades se materializan en sistemas concretos.',
	supporting:
		'Productos desarrollados por GeoTactics para resolver problemas de territorio, gestión, operación, mercado y trabajo de campo.',
	catalogSupporting:
		'Una trayectoria de sistemas en operación, productos en evolución y desarrollos que forman parte de la experiencia tecnológica de GeoTactics.',
} as const;

export const evidenceItems = [
	{
		id: 'EV-2017',
		concept: 'Trayectoria documentada',
		anchor: '2017',
		text: 'Primera materialización localizada: sistemas en territorio (SIGDR, Gualsaqui).',
	},
	{
		id: 'EV-PDOT',
		concept: 'Escala territorial',
		anchor: '27.539 · 31 parroquias',
		text: 'Habitantes registrados en la base GeoTactics en las 31 parroquias rurales del levantamiento.',
	},
	{
		id: 'EV-CAP',
		concept: 'Experiencia',
		anchor: 'Territorio + gestión + operación',
		text: 'Experiencia en sistemas territoriales, gestión institucional y operación de campo.',
	},
] as const;
