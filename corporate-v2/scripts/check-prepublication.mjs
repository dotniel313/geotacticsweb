import { readFile, access, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const failures = [];
const read = async (name) => readFile(join(dist, name), 'utf8');
const exists = async (name) => {
  try { await access(join(dist, name)); return true; } catch { return false; }
};
const sitemap = await read('sitemap.xml');
const robots = await read('robots.txt');
const locs = [...sitemap.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);

if (!sitemap.includes('<urlset ') || locs.length === 0) failures.push('Sitemap missing or empty');
if (locs.length !== new Set(locs).size) failures.push('Duplicate sitemap URLs');
const base = locs.length ? new URL(locs[0]).origin : null;
const allHtml = [];
const walk = async (dir, rel = '') => {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const r = join(rel, e.name);
    if (e.isDirectory()) await walk(join(dir, e.name), r);
    else if (e.name.endsWith('.html')) allHtml.push(r);
  }
};
await walk(dist);

const prelaunch = /(?:^|\n)Disallow:\s*\/(?:\s|$)/m.test(robots);
if (prelaunch && /(?:^|\n)Allow:\s*\/(?:\s|$)/m.test(robots)) failures.push('Conflicting robots policy');
if (!prelaunch && !robots.includes(`Sitemap: ${base}/sitemap.xml`)) failures.push('Published robots sitemap missing');
for (const loc of locs) {
  const url = new URL(loc);
  if (url.origin !== base || url.search || url.hash) {
    failures.push(`Unexpected sitemap URL: ${loc}`);
    continue;
  }
  const pathname = url.pathname.replace(/\/$/, '');
  const file = pathname ? `${pathname.slice(1)}/index.html` : 'index.html';
  if (!(await exists(file))) { failures.push(`Sitemap points to absent route: ${loc}`); continue; }
  const html = await read(file);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
  if (canonical !== loc) failures.push(`Canonical mismatch ${file}: ${canonical || 'missing'}`);
  const robotsMeta = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/)?.[1];
  if (prelaunch && robotsMeta !== 'noindex, nofollow') failures.push(`Prelaunch index leak: ${file}`);
  if (!prelaunch && robotsMeta !== 'index, follow') failures.push(`Public route not indexable: ${file}`);
}
if (!locs.some(loc => new URL(loc).pathname === '/')) failures.push('Home missing in sitemap');
if (locs.some(loc => new URL(loc).pathname === '/404')) failures.push('404 must not appear in sitemap');
const notFound = await read('404.html');
if (!/<meta\s+name="robots"\s+content="noindex, nofollow"/.test(notFound)) failures.push('404 must remain noindex after launch');

if (failures.length) {
  console.error('Prepublication checks failed:');
  failures.forEach(f => console.error('- ' + f));
  process.exit(1);
}
console.log(`Prepublication OK: ${locs.length} sitemap URLs and ${allHtml.length} generated HTML files. Robots: ${prelaunch ? 'prelaunch block' : 'publication allow'}.`);
