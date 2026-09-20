import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		date: z.coerce.date(),
		type: z.enum([
			'proyecto',
			'producto',
			'investigacion',
			'empresa',
			'publicacion',
			'actualizacion',
		]),
		summary: z.string(),
		location: z.string().optional(),
		heroAsset: z.string().optional(),
		gallery: z.array(z.string()).default([]),
		documents: z.array(z.string()).default([]),
		relatedProducts: z.array(z.string()).default([]),
		relatedCases: z.array(z.string()).default([]),
		publicationStatus: z.enum(['public', 'draft', 'internal']).default('draft'),
		evidenceStatus: z.enum(['documented', 'partial', 'needs_review']).default('needs_review'),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

const capabilities = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/capabilities' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		order: z.number(),
		title: z.string(),
		shortDescription: z.string(),
		microcode: z.string(),
		status: z.enum(['active']),
		seoTitle: z.string(),
		seoDescription: z.string(),
		cue: z.string(),
		visual: z.enum(['territory', 'gov', 'society', 'ops', 'market', 'tour']),
	}),
});

const people = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		name: z.string(),
		publicName: z.string(),
		rolePublic: z.string(),
		roleConfirmed: z.string(),
		roleStatus: z.enum(['confirmed', 'owner_review', 'needs_confirmation']),
		bio: z.string(),
		bioStatus: z.enum(['confirmed', 'owner_review', 'needs_confirmation']),
		photo: z.string().optional(),
		photoStatus: z.enum(['missing', 'needs_review', 'publicable', 'do_not_use']),
		public: z.boolean(),
		founder: z.boolean().default(false),
		currentActive: z.boolean().default(false),
		order: z.number(),
		evidence: z.array(z.string()),
	}),
});

const offices = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/offices' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		name: z.string(),
		place: z.string(),
		region: z.string(),
		country: z.string(),
		kind: z.enum(['origin', 'current']),
		coordinates: z.string().optional(),
		note: z.string(),
		order: z.number(),
		public: z.boolean(),
	}),
});

const company = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/company' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
	}),
});

const products = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		name: z.string(),
		shortName: z.string(),
		summary: z.string(),
		status: z.enum([
			'en_operacion',
			'en_desarrollo',
			'prelanzamiento',
			'trayectoria',
			'desarrollado',
		]),
		group: z.enum(['operation', 'next', 'lineage', 'catalog']),
		type: z.string(),
		year: z.number().optional(),
		yearLabel: z.string().optional(),
		yearStatus: z.enum(['publish', 'omit', 'conflict']),
		public: z.boolean(),
		featuredHome: z.boolean(),
		homeOrder: z.number(),
		primaryFamily: z.string().optional(),
		capabilities: z.array(z.string()),
		problem: z.string().optional(),
		origin: z.string().optional(),
		purpose: z.string().optional(),
		howItWorks: z.string().optional(),
		gostRelation: z.string().optional(),
		disciplines: z.array(z.string()).default([]),
		relatedProducts: z.array(z.string()).default([]),
		asset: z.string().optional(),
		assetStatus: z.enum(['approved', 'needs_review', 'missing', 'do_not_use']),
		url: z.string().optional(),
		urlStatus: z.enum(['live', 'none', 'conflict', 'review']),
		visual: z.enum([
			'intel',
			'geo',
			'tour',
			'ops',
			'c2c',
			'craft',
			'radio',
			'invest',
			'rural',
			'water',
			'inst',
			'plan',
			'survey',
		]),
		seoTitle: z.string(),
		seoDescription: z.string(),
	}),
});

const cases = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		title: z.string(),
		shortTitle: z.string(),
		caseType: z.enum(['territorial', 'institutional', 'plan']),
		publicationStatus: z.enum(['public', 'draft', 'needs_review', 'internal']),
		contentStatus: z.enum(['draft_editorial', 'sot_literal']),
		evidenceStatus: z.enum(['documented', 'partial', 'needs_review']),
		featuredHome: z.boolean().default(false),
		order: z.number(),
		client: z.string().optional(),
		location: z.object({
			country: z.string(),
			province: z.string(),
			canton: z.string().optional(),
			parish: z.string().optional(),
			locality: z.string(),
			lat: z.number().optional(),
			lng: z.number().optional(),
			coordinateStatus: z.enum(['confirmed', 'verified_source', 'needs_review', 'unknown']),
			coordinateSource: z.string().optional(),
		}),
		period: z.object({
			start: z.string().optional(),
			end: z.string().optional(),
			display: z.string().optional(),
			dateStatus: z.enum(['publish', 'omit', 'unresolved']),
		}),
		summary: z.string(),
		problem: z.string().optional(),
		context: z.string().optional(),
		intervention: z.string().optional(),
		outcome: z.string().optional(),
		products: z.array(z.string()).default([]),
		components: z.array(z.string()).default([]),
		methodologies: z.array(z.string()).default([]),
		capabilities: z.array(z.string()).default([]),
		phases: z
			.array(
				z.object({
					id: z.string(),
					title: z.string(),
					period: z.string().optional(),
					summary: z.string().optional(),
				}),
			)
			.default([]),
		gallery: z
			.array(
				z.object({
					id: z.string(),
					caption: z.string().optional(),
					src: z.string().optional(),
					phase: z.string().optional(),
					publicationStatus: z.enum(['discovered', 'needs_review', 'approved', 'publicable']),
				}),
			)
			.default([]),
		documents: z
			.array(
				z.object({
					id: z.string(),
					title: z.string(),
					type: z.string().optional(),
					year: z.string().optional(),
					url: z.string().optional(),
					publicationStatus: z.enum(['discovered', 'needs_review', 'approved', 'publicable']),
				}),
			)
			.default([]),
		evidence: z
			.array(
				z.object({
					id: z.string(),
					claim: z.string(),
					status: z.enum(['documented', 'owner', 'internal', 'no_publicar']),
					public: z.boolean().default(false),
				}),
			)
			.default([]),
		relatedCases: z.array(z.string()).default([]),
		externalLinks: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
					status: z.enum(['live', 'none', 'review', 'do_not_use']),
				}),
			)
			.default([]),
		visual: z.enum(['rural', 'water', 'inst', 'plan', 'province', 'canton']),
		seoTitle: z.string(),
		seoDescription: z.string(),
	}),
});

export const collections = { news, capabilities, products, people, offices, company, cases };
