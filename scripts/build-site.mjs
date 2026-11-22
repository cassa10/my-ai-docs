// Builds the static site into _site/: the UI from site/, every git-tracked .md, and manifest.json.
// Usage: node scripts/build-site.mjs [--serve]   (--serve also starts http://localhost:4173)
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { basename, dirname, extname, join, sep } from 'node:path';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, '_site');

// Sidebar groups, in display order. Root-level files go to 'Inicio' (empty folder key).
const GROUPS = {
  '': '🏠 Inicio',
  agents: '🤖 Agents',
  apps: '🖥️ Apps',
  mcps: '🔌 MCPs',
  skills: '🧩 Skills',
  setup: '⚙️ Setup',
  templates: '🧱 Templates',
};

const files = execFileSync('git', ['ls-files', '--', '*.md'], { cwd: ROOT, encoding: 'utf8' })
  .split('\n')
  .filter((f) => f && !f.startsWith('.'));

const docs = files
  .map((path) => {
    const text = readFileSync(join(ROOT, path), 'utf8').replace(/```[\s\S]*?```/g, '');
    const heading = text.match(/^#\s+(.+)$/m);
    const title = heading ? heading[1].replace(/[`*_[\]]/g, '').trim() : basename(path, '.md');
    const top = path.includes('/') ? path.split('/')[0] : '';
    return { path, title, group: GROUPS[top] ?? top };
  })
  .sort((a, b) => {
    // Within a folder, README.md sorts first.
    const key = (d) => d.path.replace(/README\.md$/, ' README.md');
    const rank = (d) => Math.max(0, Object.values(GROUPS).indexOf(d.group));
    return rank(a) - rank(b) || key(a).localeCompare(key(b));
  });

rmSync(OUT, { recursive: true, force: true });
cpSync(join(ROOT, 'site'), OUT, { recursive: true });
for (const d of docs) {
  mkdirSync(dirname(join(OUT, d.path)), { recursive: true });
  cpSync(join(ROOT, d.path), join(OUT, d.path));
}
writeFileSync(join(OUT, 'manifest.json'), `${JSON.stringify(docs, null, 2)}\n`);
console.log(`Site built: ${docs.length} docs -> ${OUT}`);

if (process.argv.includes('--serve')) {
  const types = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.md': 'text/plain; charset=utf-8',
  };
  const port = Number(process.env.PORT) || 4173;
  createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = join(OUT, path === '/' ? 'index.html' : path);
    if (!file.startsWith(OUT + sep)) return res.writeHead(403).end();
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' }).end(body);
    } catch {
      res.writeHead(404).end('Not found');
    }
  }).listen(port, () => console.log(`Serving at http://localhost:${port}`));
}
