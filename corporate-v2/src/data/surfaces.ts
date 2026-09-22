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
		id: 'inq-landing',
		product: 'inqui',
		label: 'Inquilino',
		url: 'http://www.inquilino.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER el 22 sep 2026.',
	},
	{
		id: 'ea-landing',
		product: 'ecuador-ancestral',
		label: 'Ecuador Ancestral',
		url: 'http://www.ecuadorancestral.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER el 22 sep 2026.',
	},
	{
		id: 'nursego-landing',
		product: 'nurse-go',
		label: 'Nurse GO',
		url: 'http://www.nursego.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER el 22 sep 2026; la ficha corporativa completa sigue pendiente de reconciliación.',
	},
	{
		id: 'mada-landing-owner',
		product: 'madaradio',
		label: 'MadaRadio',
		url: 'http://www.madaradio.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER. Sustituye como superficie de marketing al dominio histórico roto.',
	},
	{
		id: 'explora-app-landing',
		product: 'explorasucumbios',
		label: 'Explora App',
		url: 'http://www.exploraapp.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing de marketing aportada y autorizada por OWNER; convive con la plataforma pública.',
	},
	{
		id: 'termometro-landing-owner',
		product: 'termometro-social',
		label: 'Termómetro Social',
		url: 'http://www.termometrosocial.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER el 22 sep 2026.',
	},
	{
		id: 'rantiy-app-landing',
		product: 'rantyi',
		label: 'RANTYI App',
		url: 'http://www.rantiyapp.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing aportada y autorizada por OWNER. El hostname conserva rantiyapp; el producto canónico es RANTYI.',
	},
	{
		id: 'orange-app-landing',
		product: 'orangemap',
		label: 'Orange App',
		url: 'http://www.orangeapp.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'NEEDS_REVIEW',
		ctaType: 'none',
		publicationStatus: 'needs_review',
		note: 'Owner-recovered landing URL. Existing OrangeMap platform remains canonical until this landing is verified.',
	},
	{
		id: 'guanta-landing-owner',
		product: 'guanta',
		label: 'GUANTA',
		url: 'http://www.guanta.geotactics.com.ec',
		surfaceType: 'LANDING',
		status: 'LIVE',
		ctaType: 'conocer',
		publicationStatus: 'publicable',
		note: 'Landing de marketing aportada y autorizada por OWNER; separada del host de aplicación previamente no disponible.',
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

export function publicSurfaces(productSlug: string) {
	return digitalSurfaces.filter(
		(s) =>
			s.product === productSlug &&
			s.status === 'LIVE' &&
			s.publicationStatus === 'publicable' &&
			s.ctaType !== 'none' &&
			Boolean(s.url),
	);
}

export function publicSurface(productSlug: string) {
	return publicSurfaces(productSlug)[0];
}

export function publicLanding(productSlug: string) {
	return publicSurfaces(productSlug).find((s) => s.surfaceType === 'LANDING');
}

export const ctaLabels: Record<Exclude<CtaType, 'none'>, string> = {
	abrir_plataforma: 'Abrir plataforma',
	conocer: 'Conocer',
	ver_demo: 'Ver demo',
	ver_desarrollo: 'Ver desarrollo',
	ver_proyecto: 'Ver proyecto',
};
