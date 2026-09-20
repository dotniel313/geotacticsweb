import type { CollectionEntry } from 'astro:content';
import { publicPlatform, publicSurface } from '../data/surfaces';

export const statusLabels = {
	en_operacion: 'En operación',
	en_desarrollo: 'En desarrollo',
	prelanzamiento: 'Prelanzamiento',
	trayectoria: 'Trayectoria',
	desarrollado: 'Desarrollado',
} as const;

export const groupCopy = {
	operation: {
		id: 'en-operacion',
		label: 'En operación',
		micro: 'A · OPERACIÓN',
		lead: 'Productos y plataformas que hoy pueden explorarse o forman parte de operaciones activas.',
	},
	next: {
		id: 'nueva-generacion',
		label: 'Nueva generación',
		micro: 'B · EVOLUCIÓN',
		lead: 'Nuevos productos que trasladan la experiencia GeoTactics hacia operaciones, servicios, participación y otros mercados.',
	},
	lineage: {
		id: 'trayectoria',
		label: 'Trayectoria',
		micro: 'C · TRAYECTORIA',
		lead: 'Sistemas que construyeron capacidades, abrieron nuevas líneas de trabajo y explican cómo evolucionó GeoTactics.',
	},
	catalog: {
		id: 'otros',
		label: 'Otros productos',
		micro: 'CATÁLOGO',
		lead: 'Otros desarrollos publicables de GeoTactics.',
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
