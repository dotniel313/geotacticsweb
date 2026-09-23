import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
	const body = site.indexable
		? `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`
		: `User-agent: *
Disallow: /

# PRELAUNCH — indexación bloqueada hasta activar site.indexable.
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
