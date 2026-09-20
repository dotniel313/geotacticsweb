import L from 'leaflet';
import type { FamilyId } from '../data/taxonomy';
import type { RecordKind } from '../data/records';

export type TerritoryPin = {
	slug: string;
	recordSlug: string;
	title: string;
	yearLabel: string;
	kind: RecordKind;
	kindLabel: string;
	family: FamilyId;
	familyTitle: string;
	color: string;
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

	const familyLayers = new Map<FamilyId, L.LayerGroup>();
	const bounds = L.latLngBounds([[hq.lat, hq.lng]]);
	const hqIcon = L.divIcon({
		className: 'gt-pin gt-pin--hq',
		html: '<span></span>',
		iconSize: [14, 14],
		iconAnchor: [7, 7],
	});

	L.marker([hq.lat, hq.lng], { icon: hqIcon })
		.bindPopup(`<div class="gt-tpop"><p class="gt-tpop__k">Base actual</p><p>${hq.label}</p></div>`, {
			className: 'gt-tpopwrap',
		})
		.addTo(map);

	for (const p of pins) {
		if (!familyLayers.has(p.family)) familyLayers.set(p.family, L.layerGroup());
		const icon = L.divIcon({
			className: 'gt-pin',
			html: `<span style="--gt-pin-family:${p.color}"></span>`,
			iconSize: [12, 12],
			iconAnchor: [6, 6],
		});
		const archive = `/archivo?familia=${p.family}&hito=${p.recordSlug}`;
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
			.addTo(familyLayers.get(p.family)!);
		bounds.extend([p.lat, p.lng]);
	}

	const root = canvas.closest<HTMLElement>('.gt-tm');
	const buttons = [...(root?.querySelectorAll<HTMLButtonElement>('[data-territory-family]') ?? [])];
	const allButton = root?.querySelector<HTMLButtonElement>('[data-territory-all]') ?? null;
	const active = new Set<FamilyId>(
		buttons.filter((button) => !button.disabled).map((button) => button.dataset.territoryFamily as FamilyId),
	);

	const redraw = () => {
		for (const [family, layer] of familyLayers) {
			if (active.has(family)) {
				if (!map.hasLayer(layer)) layer.addTo(map);
			} else if (map.hasLayer(layer)) {
				map.removeLayer(layer);
			}
		}
		buttons.forEach((button) => {
			const family = button.dataset.territoryFamily as FamilyId;
			const on = active.has(family);
			button.classList.toggle('is-active', on);
			button.setAttribute('aria-pressed', String(on));
		});
		const enabled = buttons.filter((button) => !button.disabled);
		const allOn = enabled.length > 0 && enabled.every((button) => active.has(button.dataset.territoryFamily as FamilyId));
		allButton?.classList.toggle('is-active', allOn);
		allButton?.setAttribute('aria-pressed', String(allOn));
	};

	for (const family of active) familyLayers.get(family)?.addTo(map);
	map.fitBounds(bounds.pad(0.45), { maxZoom: 9 });

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const family = button.dataset.territoryFamily as FamilyId;
			active.has(family) ? active.delete(family) : active.add(family);
			redraw();
		});
	});
	allButton?.addEventListener('click', () => {
		const enabled = buttons.filter((button) => !button.disabled);
		const allOn = enabled.every((button) => active.has(button.dataset.territoryFamily as FamilyId));
		active.clear();
		if (!allOn) enabled.forEach((button) => active.add(button.dataset.territoryFamily as FamilyId));
		redraw();
	});
	redraw();
}
