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
	/** Public release: only deploy this build to the approved production document root. */
	indexable: true,
	originLine: 'Nueva Loja · Sucumbíos · Amazonía ecuatoriana',
	coordinates: '0.091, −76.89',
	anchor2017: 'Primera materialización documentada · 2017',
	FONT_ASSET_PENDING: true,
	SVG_OFFICIAL_PENDING: true,
} as const;

export const copy = {
	h1: 'Construimos sistemas alrededor de problemas reales.',
	supporting:
		'Entendemos primero el problema. Después construimos la tecnología. Conectamos información, territorio y procesos para convertir realidades complejas en sistemas útiles para gestionar mejor y tomar mejores decisiones.',
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
	{ href: '/territorio', label: 'Operación territorial' },
	{ href: '/tecnologia', label: 'Tecnología' },
	{ href: '/nosotros', label: 'Nosotros' },
] as const;

export const conversarHref = '/contacto';
export const conversarLabel = 'Conversar';

/** Home + /que-hacemos intro. Headline from 3.1 brief; aligned to SoT (capacidades ≠ productos). */
export const capabilitiesIntro = {
	microcode: 'GT / CAPABILITIES',
	eyebrow: 'Qué hacemos',
	headline: 'Seis formas de convertir problemas reales en soluciones útiles.',
	supporting:
		'Cada familia parte de una necesidad concreta: comprender un territorio, mejorar una gestión, conectar personas, seguir una operación, activar un mercado o descubrir un lugar. La tecnología se elige después.',
} as const;

export const productsIntro = {
	microcode: 'GT / PRODUCTS',
	eyebrow: 'Productos',
	headline: 'Ideas que se convirtieron en sistemas para trabajar en el mundo real.',
	supporting:
		'Productos creados por GeoTactics para transformar información en decisiones, ordenar operaciones, conectar personas y hacer más simple la gestión.',
	catalogSupporting:
		'Una trayectoria de sistemas en operación, productos en evolución y desarrollos que forman parte de la experiencia tecnológica de GeoTactics.',
} as const;

export const evidenceItems = [
	{
		id: 'EV-2017',
		concept: 'Construyendo desde el territorio',
		anchor: '2017',
		text: 'Desde SIGDR, convertimos levantamiento de campo e información territorial en herramientas para gestionar y decidir.',
	},
	{
		id: 'EV-PDOT',
		concept: 'Información que nace en campo',
		anchor: '27.539 · 31 parroquias',
		text: '27.539 habitantes registrados en una base territorial construida mediante levantamiento de información en campo.',
	},
	{
		id: 'EV-CAP',
		concept: 'Del problema a la operación',
		anchor: 'Territorio + gestión + operación',
		text: 'Sistemas que conectan territorio, gestión institucional y operación para convertir información en acción.',
	},
] as const;
