import type { APIRoute } from 'astro';
import { site } from '../config/site';

const routes = [
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

export const GET: APIRoute = () => {
	const urls = routes
		.map(
			(path) => `  <url>
    <loc>${site.url}${path === '/' ? '' : path}</loc>
    <changefreq>weekly</changefreq>
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
