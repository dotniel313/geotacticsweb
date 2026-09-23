import { readdir, readFile, access } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const distUrl = new URL('../dist/', import.meta.url);
const dist = fileURLToPath(distUrl);

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const out = [];
	for (const entry of entries) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...(await walk(path)));
		else out.push(path);
	}
	return out;
}

async function exists(path) {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => extname(file) === '.html');
const failures = [];

for (const file of htmlFiles) {
	const html = await readFile(file, 'utf8');
	for (const match of html.matchAll(/href=["']([^"'#]+)["']/g)) {
		const raw = match[1];
		if (
			raw.startsWith('http://') ||
			raw.startsWith('https://') ||
			raw.startsWith('mailto:') ||
			raw.startsWith('tel:') ||
			raw.startsWith('javascript:')
		) continue;
		if (!raw.startsWith('/')) continue;

		const pathname = raw.split('?')[0].replace(/\/$/, '') || '/';
		if (pathname.startsWith('/_astro/')) continue;
		if (/\.[a-z0-9]{2,8}$/i.test(pathname)) continue;

		const relative = pathname === '/' ? '' : pathname.slice(1);
		const candidates = pathname === '/'
			? [join(dist, 'index.html')]
			: [
				join(dist, relative, 'index.html'),
				join(dist, `${relative}.html`),
			];

		if (!(await Promise.any(candidates.map(async (candidate) => {
			if (await exists(candidate)) return true;
			throw new Error('missing');
		})).catch(() => false))) {
			failures.push({ source: file.replace(dist, ''), href: raw });
		}
	}
}

if (failures.length) {
	console.error('Internal link validation failed:');
	for (const failure of failures) console.error(`- ${failure.source} -> ${failure.href}`);
	process.exit(1);
}

console.log(`Internal links OK across ${htmlFiles.length} generated HTML files.`);
