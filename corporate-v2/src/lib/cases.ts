import type { CollectionEntry } from 'astro:content';

export type CaseEntry = CollectionEntry<'cases'>;

export const isPublicCase = (entry: CaseEntry) => entry.data.publicationStatus === 'public';

export const mappableStatuses = new Set(['confirmed', 'verified_source']);

export function sortCases(entries: CaseEntry[]) {
	return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export function casesForProduct(entries: CaseEntry[], productSlug: string) {
	return sortCases(entries.filter((e) => isPublicCase(e) && e.data.products.includes(productSlug)));
}

export function publicMapLocations(entries: CaseEntry[]) {
	const groups = new Map<
		string,
		{
			lat: number;
			lng: number;
			locality: string;
			province: string;
			coordinateStatus: string;
			cases: { slug: string; title: string; href: string }[];
		}
	>();

	for (const entry of sortCases(entries.filter(isPublicCase))) {
		const loc = entry.data.location;
		if (loc.lat === undefined || loc.lng === undefined) continue;
		if (!mappableStatuses.has(loc.coordinateStatus)) continue;
		const key = `${loc.lat.toFixed(5)},${loc.lng.toFixed(5)}`;
		const current = groups.get(key) ?? {
			lat: loc.lat,
			lng: loc.lng,
			locality: loc.locality,
			province: loc.province,
			coordinateStatus: loc.coordinateStatus,
			cases: [],
		};
		current.cases.push({
			slug: entry.data.slug,
			title: entry.data.shortTitle,
			href: `/casos/${entry.data.slug}`,
		});
		groups.set(key, current);
	}

	return [...groups.values()];
}

export function periodLabel(entry: CaseEntry) {
	if (entry.data.period.dateStatus !== 'publish') return undefined;
	return entry.data.period.display;
}

export function placeLabel(entry: CaseEntry) {
	const loc = entry.data.location;
	return [loc.locality, loc.province].filter(Boolean).join(' · ');
}
