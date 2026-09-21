// @ts-check
import { defineConfig } from 'astro/config';

/** Corporate 2.0 — static output. Isolated from production Apache docroot. */
export default defineConfig({
	site: 'https://www.geotactics.com.ec',
	output: 'static',
	trailingSlash: 'never',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	redirects: {
		'/conversar': '/contacto',
	},
});
