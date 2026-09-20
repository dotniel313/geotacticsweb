/** Digital surfaces — validated 19 Sep 2026. Only LIVE + allowed CTA emit public links. */

export type SurfaceStatus = 'LIVE' | 'NEEDS_REVIEW' | 'BROKEN' | 'HISTORICAL' | 'INTERNAL' | 'UNKNOWN';
export type SurfaceType = 'PLATFORM' | 'LANDING' | 'DEMO' | 'APP' | 'ARCHIVE' | 'HISTORICAL';
export type CtaType = 'conocer' | 'ver_proyecto' | 'abrir_plataforma' | 'ver_demo' | 'ver_desarrollo' | 'none';
export type PublicationStatus = 'publicable' | 'needs_review' | 'internal' | 'none';

export type DigitalSurface = {
	id: string;
	product: string;
	label: string;
	url?: string;
	surfaceType: SurfaceType;
	status: SurfaceStatus;
	ctaType: CtaType;
	publicationStatus: PublicationStatus;
	note: string;
};

export const digitalSurfaces: DigitalSurface[] = [
	{
		id: 'ds-web',
		product: 'datasucumbios',
		label: 'DataSucumbíos',
		url: 'https://www.datasucumbios.tech',
		surfaceType: 'PLATFORM',
		status: 'LIVE',
		ctaType: 'abrir_plataforma',
		publicationStatus: 'publicable',
		note: 'HEAD 200. 19 sep 2026.',
	},
	{
		id: 'om-web',
		product: 'orangemap',
		label: 'OrangeMap',
		url: 'https://orangemap.geotactics.com.ec',
		surfaceType: 'PLATFORM',
		status: 'LIVE',
		ctaType: 'abrir_plataforma',
		publicationStatus: 'publicable',
		note: 'HEAD 200. Title: Orange Map.',
	},
	{
		id: 'ex-web',
		product: 'explorasucumbios',
		label: 'ExploraSucumbíos',
		url: 'https://explorasucumbios.geotactics.com.ec',
		surfaceType: 'PLATFORM',
		status: 'LIVE',
		ctaType: 'abrir_plataforma',
		publicationStatus: 'publicable',
		note: 'HEAD 200. Title turismo. No contrato GAD.',
	},
	{
		id: 'ob-web',
		product: 'observatorio-gadmla',
		label: 'Observatorio',
		url: 'https://observatorio.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'HEAD 200. Title Observatorio Municipal Ciudadano. I+D+i / prelanzamiento. No abrir como catálogo maduro.',
	},
	{
		id: 'fx-web',
		product: 'fixis',
		label: 'Fixis',
		url: 'https://fixis.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'ver_desarrollo',
		publicationStatus: 'publicable',
		note: 'HEAD 200. Title FIXIS. Prelanzamiento. fixis.pro BROKEN.',
	},
	{
		id: 'yaku-demo',
		product: 'yaku',
		label: 'YAKU EMAPAI',
		url: 'http://comercial.emapai.gob.ec:81/yaku/',
		surfaceType: 'DEMO',
		status: 'INTERNAL',
		ctaType: 'none',
		publicationStatus: 'internal',
		note: 'HTTP :81 LIVE infra / PRIVATE. No enlace público.',
	},
	{
		id: 'capture-demo',
		product: 'capture',
		label: 'CAPTURE',
		url: 'https://capture.geotactics.com.ec',
		surfaceType: 'DEMO',
		status: 'BROKEN',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'HEAD 000. 19 sep 2026.',
	},
	{
		id: 'mada-ext',
		product: 'madaradio',
		label: 'MadaRadio',
		url: 'https://www.madaradio.com',
		surfaceType: 'LANDING',
		status: 'BROKEN',
		ctaType: 'none',
		publicationStatus: 'none',
		note: '.com y .com.ec HEAD 000.',
	},
	{
		id: 'gu-host',
		product: 'guanta',
		label: 'GUANTA',
		url: 'https://guanta.geotactics.com.ec',
		surfaceType: 'PLATFORM',
		status: 'BROKEN',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'HEAD 000.',
	},
	{
		id: 'ra-host',
		product: 'rantyi',
		label: 'RANTYI',
		url: 'https://rantyi.geotactics.com.ec',
		surfaceType: 'PLATFORM',
		status: 'BROKEN',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'HEAD 000.',
	},
	{
		id: 'ts-host',
		product: 'termometro-social',
		label: 'Termómetro Social',
		url: 'https://termometro.geotactics.com.ec',
		surfaceType: 'PLATFORM',
		status: 'BROKEN',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'HEAD 000.',
	},
	{
		id: 'corp-prod',
		product: 'corporate',
		label: 'Corporate producción 2026',
		url: 'https://www.geotactics.com.ec',
		surfaceType: 'HISTORICAL',
		status: 'LIVE',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'Producción actual. No cutover.',
	},
	{
		id: 'corp-wix',
		product: 'corporate',
		label: 'Wix histórico',
		url: 'https://dotniel313.wixsite.com/geotactics',
		surfaceType: 'HISTORICAL',
		status: 'HISTORICAL',
		ctaType: 'none',
		publicationStatus: 'none',
		note: 'Evidencia. No canónico 2.0.',
	},
];

export function publicPlatform(productSlug: string) {
	return digitalSurfaces.find(
		(s) =>
			s.product === productSlug &&
			s.ctaType === 'abrir_plataforma' &&
			s.status === 'LIVE' &&
			s.publicationStatus === 'publicable' &&
			Boolean(s.url),
	);
}

export function publicSurface(productSlug: string) {
	return digitalSurfaces.find(
		(s) =>
			s.product === productSlug &&
			s.status === 'LIVE' &&
			s.publicationStatus === 'publicable' &&
			s.ctaType !== 'none' &&
			Boolean(s.url),
	);
}

export const ctaLabels: Record<Exclude<CtaType, 'none'>, string> = {
	abrir_plataforma: 'Abrir plataforma',
	conocer: 'Conocer',
	ver_demo: 'Ver demo',
	ver_desarrollo: 'Ver desarrollo',
	ver_proyecto: 'Ver proyecto',
};
