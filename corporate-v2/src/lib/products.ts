import type { CollectionEntry } from 'astro:content';
import { publicPlatform, publicSurface } from '../data/surfaces';

export const statusLabels = {
	en_operacion: 'En operación',
	en_desarrollo: 'En desarrollo',
	prelanzamiento: 'Prelanzamiento',
	trayectoria: 'Trayectoria',
	desarrollado: 'Desarrollado',
	prototipo: 'Prototipo',
	desarrollo_pausado: 'Desarrollo pausado',
	no_comercializado: 'No comercializado',
} as const;

export const groupCopy = {
	operation: {
		id: 'en-operacion',
		label: 'En operación',
		micro: 'A · OPERACIÓN',
		lead: 'Sistemas que ya están convirtiendo información, territorio y procesos en herramientas de trabajo.',
	},
	next: {
		id: 'nueva-generacion',
		label: 'Nueva generación',
		micro: 'B · EVOLUCIÓN',
		lead: 'Nuevas respuestas a problemas que encontramos en operaciones, servicios, participación y mercados.',
	},
	lineage: {
		id: 'trayectoria',
		label: 'Trayectoria',
		micro: 'C · TRAYECTORIA',
		lead: 'Sistemas que resolvieron problemas concretos, nos obligaron a aprender y abrieron el camino hacia lo que GeoTactics es hoy.',
	},
	catalog: {
		id: 'otros',
		label: 'Otros productos',
		micro: 'CATÁLOGO',
		lead: 'Otras ideas y sistemas nacidos de necesidades concretas que ampliaron nuestra forma de resolver problemas.',
	},
} as const;

export type ProductEntry = CollectionEntry<'products'>;

export function sortProducts(entries: ProductEntry[]) {
	return [...entries].sort((a, b) => a.data.homeOrder - b.data.homeOrder);
}

export function catalogHref(slug: string) {
	return `/productos/${slug}`;
}

export function showLiveUrl(entry: ProductEntry) {
	return Boolean(publicPlatform(entry.data.slug));
}

export function platformHref(entry: ProductEntry) {
	return publicPlatform(entry.data.slug)?.url;
}

export function publicSurfaceFor(entry: ProductEntry) {
	return publicSurface(entry.data.slug);
}
