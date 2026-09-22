import type { FamilyId } from '../data/taxonomy';
import type { GeoTacticsRecord, RecordStatus } from '../data/records';

export type ArchivePayload = {
	families: {
		id: FamilyId;
		code: string;
		title: string;
		shortDescription: string;
		color: string;
		count: number;
	}[];
	records: GeoTacticsRecord[];
	statusLabels: Record<RecordStatus, string>;
};

const FAMILY_PARAM = 'familia';
const HIT_PARAM = 'hito';

export function initArchive(root: HTMLElement, payload: ArchivePayload) {
	const entry = root.querySelector<HTMLElement>('[data-scene="entry"]');
	const familyScene = root.querySelector<HTMLElement>('[data-scene="family"]');
	const zone = root.querySelector<HTMLElement>('[data-zone]');
	const hint = root.querySelector<HTMLElement>('[data-hint]');
	const familyCards = [...root.querySelectorAll<HTMLElement>('[data-family-card]')];
	const rail = root.querySelector<HTMLElement>('[data-rail]');
	const milestones = [...root.querySelectorAll<HTMLElement>('[data-record]')];
	const lightbox = root.querySelector<HTMLDialogElement>('[data-lightbox]');
	const lbImg = lightbox?.querySelector<HTMLImageElement>('[data-lb-img]');
	const lbCap = lightbox?.querySelector<HTMLElement>('[data-lb-cap]');
	const lbClose = lightbox?.querySelector<HTMLButtonElement>('[data-lb-close]');
	const ctxCode = root.querySelector('[data-ctx-code]');
	const ctxTitle = root.querySelector('[data-ctx-title]');
	const ctxDesc = root.querySelector('[data-ctx-desc]');
	const back = root.querySelector<HTMLButtonElement>('[data-back]');
	const segmentLayer = root.querySelector<HTMLElement>('[data-timeline-segments]');

	let selected: FamilyId | null = null;
	let openFamily: FamilyId | null = null;
	let hintTimer = 0;
	let lbIndex = 0;
	let lbSet: { src: string; alt: string; caption?: string }[] = [];
	let lbTrigger: HTMLElement | null = null;

	const rec = (slug: string) => payload.records.find((r) => r.slug === slug);
	const fam = (id: FamilyId) => payload.families.find((f) => f.id === id);
	const finePointer = () => window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 1025px)').matches;

	const syncTimelineSegments = () => {
		if (!rail || !segmentLayer || window.matchMedia('(max-width: 720px)').matches) return;
		segmentLayer.replaceChildren();
		const visible = milestones.filter((el) => !el.hidden);
		if (visible.length < 2) return;
		const railRect = rail.getBoundingClientRect();
		const points = visible
			.map((el) => el.querySelector<HTMLElement>('.gt-hit__node'))
			.filter((node): node is HTMLElement => Boolean(node))
			.map((node) => {
				const rect = node.getBoundingClientRect();
				return {
					x: rect.left - railRect.left + rail.scrollLeft + rect.width / 2,
					y: rect.top - railRect.top + rail.scrollTop + rect.height / 2,
				};
			});
		for (let i = 0; i < points.length - 1; i += 1) {
			const a = points[i];
			const b = points[i + 1];
			const dx = b.x - a.x;
			const dy = b.y - a.y;
			const segment = document.createElement('span');
			segment.className = 'gt-ax__segment';
			segment.style.left = `${a.x}px`;
			segment.style.top = `${a.y - 1}px`;
			segment.style.width = `${Math.hypot(dx, dy)}px`;
			segment.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
			segmentLayer.append(segment);
		}
	};

	const showHint = (text: string) => {
		if (!hint) return;
		hint.textContent = text;
		hint.dataset.visible = '1';
		window.clearTimeout(hintTimer);
		hintTimer = window.setTimeout(() => {
			hint.dataset.visible = '0';
			hint.textContent = '';
		}, 2600);
	};

	const writeUrl = (family: FamilyId | null, hit: string | null) => {
		const url = new URL(window.location.href);
		if (family) url.searchParams.set(FAMILY_PARAM, family);
		else url.searchParams.delete(FAMILY_PARAM);
		if (hit) url.searchParams.set(HIT_PARAM, hit);
		else url.searchParams.delete(HIT_PARAM);
		history.replaceState(null, '', url);
	};

	const markSelected = (id: FamilyId | null) => {
		selected = id;
		familyCards.forEach((card) => {
			const on = card.dataset.familyCard === id;
			card.classList.toggle('is-selected', on);
			card.setAttribute('aria-pressed', String(on));
		});
		zone?.classList.toggle('has-selection', Boolean(id));
		if (zone) {
			const meta = id ? fam(id) : null;
			zone.setAttribute('aria-label', meta ? `Leer archivos de ${meta.title}` : 'Leer archivos');
		}
	};

	const paintFamily = (id: FamilyId) => {
		const meta = fam(id);
		if (!meta) return;
		if (ctxCode) ctxCode.textContent = `${meta.code} / CATEGORÍA`;
		if (ctxTitle) ctxTitle.textContent = meta.title;
		if (ctxDesc) ctxDesc.textContent = meta.shortDescription;
		const ordered = payload.records
			.filter((r) => r.primaryFamily === id)
			.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title, 'es'));
		const order = new Map(ordered.map((r, i) => [r.slug, i]));
		milestones.forEach((el) => {
			const r = rec(el.dataset.record!);
			const show = Boolean(r && r.primaryFamily === id);
			el.hidden = !show;
		});
		if (rail) {
			[...milestones]
				.filter((el) => !el.hidden)
				.sort((a, b) => (order.get(a.dataset.record!) ?? 0) - (order.get(b.dataset.record!) ?? 0))
				.forEach((el) => rail.appendChild(el));
		}
		milestones.forEach((el) => el.classList.remove('is-last'));
		const visible = milestones.filter((el) => !el.hidden);
		visible.at(-1)?.classList.add('is-last');
		requestAnimationFrame(() => requestAnimationFrame(syncTimelineSegments));
	};

	const highlightHit = (slug: string | null) => {
		milestones.forEach((el) => {
			const on = el.dataset.record === slug;
			el.classList.toggle('is-lit', on);
		});
		if (!slug) return;
		const el = milestones.find((m) => m.dataset.record === slug && !m.hidden);
		requestAnimationFrame(() => {
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
		});
	};

	const showScene = (scene: 'entry' | 'family') => {
		if (entry) {
			entry.hidden = scene !== 'entry';
			entry.inert = scene !== 'entry';
		}
		if (familyScene) {
			familyScene.hidden = scene !== 'family';
			familyScene.inert = scene !== 'family';
		}
		root.dataset.mode = scene;
		if (scene === 'entry') {
			familyScene?.setAttribute('aria-hidden', 'true');
			entry?.removeAttribute('aria-hidden');
		} else {
			entry?.setAttribute('aria-hidden', 'true');
			familyScene?.removeAttribute('aria-hidden');
		}
	};

	const enterFamily = (id: FamilyId, hit: string | null = null) => {
		openFamily = id;
		markSelected(id);
		paintFamily(id);
		showScene('family');
		writeUrl(id, hit);
		highlightHit(hit);
		back?.focus();
		requestAnimationFrame(() => requestAnimationFrame(syncTimelineSegments));
	};

	const leaveFamily = () => {
		openFamily = null;
		showScene('entry');
		writeUrl(selected, null);
		highlightHit(null);
		familyCards.find((c) => c.dataset.familyCard === selected)?.focus();
	};

	const tryOpenZone = () => {
		if (selected) {
			enterFamily(selected);
			return;
		}
		showHint('Selecciona una familia para abrir su archivo.');
		zone?.classList.add('is-nudge');
		window.setTimeout(() => zone?.classList.remove('is-nudge'), 400);
	};

	familyCards.forEach((card) => {
		const id = card.dataset.familyCard as FamilyId;
		card.addEventListener('click', () => {
			if (!finePointer()) {
				enterFamily(id);
				return;
			}
			markSelected(id);
		});
		card.addEventListener('dblclick', () => enterFamily(id));
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				enterFamily(id);
			}
			if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
				e.preventDefault();
				const i = familyCards.indexOf(card);
				const n = familyCards[i + (e.key === 'ArrowRight' ? 1 : -1)];
				n?.focus();
			}
		});
		card.addEventListener('mouseenter', () => zone?.classList.add('is-hint'));
		card.addEventListener('mouseleave', () => {
			if (!zone?.classList.contains('is-over')) zone?.classList.remove('is-hint');
		});
		card.addEventListener('dragstart', (e) => {
			if (!finePointer()) {
				e.preventDefault();
				return;
			}
			e.dataTransfer?.setData('text/gt-family', id);
			e.dataTransfer?.setData('text/plain', id);
			if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
			card.classList.add('is-dragging');
			zone?.classList.add('is-hint');
			markSelected(id);
		});
		card.addEventListener('dragend', () => {
			card.classList.remove('is-dragging');
			zone?.classList.remove('is-hint', 'is-over');
		});
	});

	zone?.addEventListener('click', tryOpenZone);
	zone?.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			tryOpenZone();
		}
	});
	zone?.addEventListener('dragover', (e) => {
		e.preventDefault();
		if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
		zone.classList.add('is-over');
	});
	zone?.addEventListener('dragleave', () => zone.classList.remove('is-over'));
	zone?.addEventListener('drop', (e) => {
		e.preventDefault();
		zone.classList.remove('is-over', 'is-hint');
		const id = (e.dataTransfer?.getData('text/gt-family') || e.dataTransfer?.getData('text/plain')) as FamilyId;
		if (payload.families.some((f) => f.id === id)) enterFamily(id);
		else showHint('Solo se pueden leer las familias.');
	});

	back?.addEventListener('click', leaveFamily);

	const openLb = (
		assets: { src: string; alt: string; caption?: string }[],
		index: number,
		trigger: HTMLElement | null = null,
	) => {
		if (!lightbox || !lbImg || !assets.length) return;
		lbSet = assets;
		lbIndex = index;
		if (trigger) lbTrigger = trigger;
		const a = assets[index];
		lbImg.src = a.src;
		lbImg.alt = a.alt;
		if (lbCap) lbCap.textContent = a.caption ?? '';
		if (!lightbox.open) {
			lightbox.showModal();
			requestAnimationFrame(() => lbClose?.focus());
		}
	};

	const stepLb = (dir: number) => {
		if (!lbSet.length) return;
		lbIndex = (lbIndex + dir + lbSet.length) % lbSet.length;
		openLb(lbSet, lbIndex);
	};

	milestones.forEach((el) => {
		el.addEventListener('keydown', (e) => {
			if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
			e.preventDefault();
			const vis = rail
				? [...rail.querySelectorAll<HTMLElement>('[data-record]:not([hidden])')]
				: milestones.filter((x) => !x.hidden);
			const i = vis.indexOf(el);
			vis[i + (e.key === 'ArrowRight' ? 1 : -1)]?.focus();
		});
		el.querySelectorAll<HTMLElement>('[data-fan-img]').forEach((img, i) => {
			img.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				const r = rec(el.dataset.record!);
				if (!r?.assets.length) return;
				openLb(r.assets, i, img);
			});
		});
	});

	lbClose?.addEventListener('click', () => lightbox?.close());
	lightbox?.querySelector('[data-lb-prev]')?.addEventListener('click', () => stepLb(-1));
	lightbox?.querySelector('[data-lb-next]')?.addEventListener('click', () => stepLb(1));
	lightbox?.addEventListener('close', () => {
		const trigger = lbTrigger;
		lbTrigger = null;
		requestAnimationFrame(() => trigger?.focus());
	});
	lightbox?.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') stepLb(-1);
		if (e.key === 'ArrowRight') stepLb(1);
	});

	if (rail) {
		rail.addEventListener('keydown', (e) => {
			if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
			if ((e.target as HTMLElement).closest('[data-record]')) return;
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			rail.scrollBy({ left: e.key === 'ArrowRight' ? 280 : -280, behavior: reduced ? 'auto' : 'smooth' });
		});
	}

	window.addEventListener('resize', syncTimelineSegments);

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && openFamily && lightbox && !lightbox.open) leaveFamily();
	});

	const params = new URLSearchParams(window.location.search);
	const fromQuery = params.get(FAMILY_PARAM) as FamilyId | null;
	const hit = params.get(HIT_PARAM);
	const validFamily = fromQuery && payload.families.some((f) => f.id === fromQuery) ? fromQuery : null;
	if (validFamily) enterFamily(validFamily, hit && rec(hit) ? hit : null);
	else showScene('entry');
}
