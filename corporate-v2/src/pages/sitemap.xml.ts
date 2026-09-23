import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { isPublicCase } from '../lib/cases';

const staticRoutes = [
	'/',
	'/que-hacemos',
	'/productos',
	'/casos',
	'/archivo',
	'/territorio',
	'/tecnologia',
	'/nosotros',
	'/noticias',
	'/contacto',
	'/privacidad',
	'/legal',
];

export const GET: APIRoute = async () => {
	const products = (await getCollection('products'))
		.filter((entry) => entry.data.public)
		.map((entry) => `/productos/${entry.data.slug}`);

	const cases = (await getCollection('cases'))
		.filter(isPublicCase)
		.map((entry) => `/casos/${entry.data.slug}`);

	const news = (await getCollection('news'))
		.filter((entry) => entry.data.publicationStatus === 'public')
		.map((entry) => `/noticias/${entry.data.slug}`);

	const routes = [...new Set([...staticRoutes, ...products, ...cases, ...news])].sort();

	const urls = routes
		.map(
			(path) => `  <url>
    <loc>${site.url}${path === '/' ? '' : path}</loc>
  </url>`,
		)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
		{
			headers: { 'Content-Type': 'application/xml; charset=utf-8' },
		},
	);
};
