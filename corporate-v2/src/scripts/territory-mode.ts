import L from 'leaflet';
import type { FamilyId } from '../data/taxonomy';
import type { RecordKind } from '../data/records';

export type TerritoryPin = {
	slug: string;
	title: string;
	yearLabel: string;
	kind: RecordKind;
	kindLabel: string;
	family: FamilyId;
	familyTitle: string;
	territory: string;
	note: string;
	lat: number;
	lng: number;
	detailHref?: string;
};

const kindCta: Record<RecordKind, string> = {
	product: 'Ver producto',
	case: 'Ver caso',
	component: 'Ver',
	prototype: 'Ver',
	experience: 'Ver',
};

export function initTerritory(canvas: HTMLElement, pins: TerritoryPin[], hq: { lat: number; lng: number; label: string }) {
	if (canvas.dataset.ready === '1') return;
	canvas.dataset.ready = '1';

	const map = L.map(canvas, { scrollWheelZoom: false, attributionControl: false });
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

	const group = L.featureGroup();
	const hqIcon = L.divIcon({
		className: 'gt-pin gt-pin--hq',
		html: '<span></span>',
		iconSize: [14, 14],
		iconAnchor: [7, 7],
	});
	L.marker([hq.lat, hq.lng], { icon: hqIcon })
		.bindPopup(`<div class="gt-tpop"><p class="gt-tpop__k">Cuartel general</p><p>${hq.label}</p></div>`, {
			className: 'gt-tpopwrap',
		})
		.addTo(group);

	for (const p of pins) {
		const icon = L.divIcon({
			className: 'gt-pin',
			html: '<span></span>',
			iconSize: [12, 12],
			iconAnchor: [6, 6],
		});
		const archive = `/archivo?familia=${p.family}&hito=${p.slug}`;
		const detail = p.detailHref
			? `<a class="gt-tpop__a" href="${p.detailHref}">${kindCta[p.kind]}</a>`
			: '';
		const html = `<div class="gt-tpop">
			<p class="gt-tpop__k">${p.kindLabel} · ${p.yearLabel}</p>
			<p class="gt-tpop__t">${p.title}</p>
			<p>${p.familyTitle}</p>
			<p>${p.territory}</p>
			<p class="gt-tpop__n">${p.note}</p>
			<p class="gt-tpop__acts"><a class="gt-tpop__a" href="${archive}">Ver en archivo</a>${detail}</p>
		</div>`;
		L.marker([p.lat, p.lng], { icon })
			.bindPopup(html, { className: 'gt-tpopwrap' })
			.addTo(group);
	}

	group.addTo(map);
	map.fitBounds(group.getBounds().pad(0.45), { maxZoom: 9 });
}
