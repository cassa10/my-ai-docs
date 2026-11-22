const REPO_URL = 'https://github.com/cassa10/my-ai-docs';
const HOME = 'README.md';

const sidebar = document.querySelector('#sidebar');
const content = document.querySelector('#content');
const search = document.querySelector('#search');
const menuBtn = document.querySelector('#menu-btn');
const scrim = document.querySelector('#scrim');

let docs = [];
let current = null;
let routeId = 0;

const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function resolve(path) {
  const exact = docs.find((d) => d.path === path);
  if (exact) return exact;
  const dir = path.replace(/\/+$/, '');
  if (!dir) return null;
  const inside = docs.filter((d) => d.path.startsWith(`${dir}/`));
  return inside.find((d) => d.path === `${dir}/README.md`) ?? inside[0] ?? null;
}

function isDir(path) {
  return path === '' || docs.some((d) => d.path.startsWith(`${path.replace(/\/+$/, '')}/`));
}

function renderSidebar() {
  const groups = new Map();
  for (const d of docs) {
    if (!groups.has(d.group)) groups.set(d.group, []);
    groups.get(d.group).push(d);
  }
  sidebar.innerHTML = [...groups]
    .map(([group, items]) => `
      <details class="group" open>
        <summary>${esc(group)}</summary>
        <ul>
          ${items.map((d) => `<li data-search="${esc(`${d.title} ${d.path}`.toLowerCase())}"><a href="#/${encodeURI(d.path)}" data-path="${esc(d.path)}">${esc(d.title)}</a></li>`).join('')}
        </ul>
      </details>`)
    .join('');
}

function markCurrent(path) {
  for (const a of sidebar.querySelectorAll('a[data-path]')) {
    if (a.dataset.path === path) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  }
}

// Links inside a doc: other docs stay in the UI, everything else opens on GitHub.
function rewriteLinks(root) {
  for (const a of root.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) continue;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
      a.target = '_blank';
      a.rel = 'noopener';
      continue;
    }
    const path = decodeURIComponent(new URL(href, `http://site/${current}`).pathname).replace(/^\//, '');
    if (isDir(path) || docs.some((d) => d.path === path)) {
      a.href = `#/${encodeURI(path)}`;
    } else {
      a.href = `${REPO_URL}/blob/main/${encodeURI(path)}`;
      a.target = '_blank';
      a.rel = 'noopener';
    }
  }
}

function closeMenu() {
  sidebar.classList.remove('open');
  scrim.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
}

async function route() {
  if (location.hash && !location.hash.startsWith('#/')) return;
  const requested = decodeURIComponent(location.hash.slice(2)) || HOME;
  const id = ++routeId;
  closeMenu();

  const doc = resolve(requested);
  if (!doc) {
    markCurrent(null);
    document.title = 'No encontrado · My AI Docs';
    content.innerHTML = `<article class="doc"><h1>Documento no encontrado</h1><p>No existe <code>${esc(requested)}</code>.</p><p><a href="#/${HOME}">Volver al inicio</a></p></article>`;
    return;
  }
  if (doc.path !== requested) history.replaceState(null, '', `#/${encodeURI(doc.path)}`);

  content.innerHTML = '<p class="muted">Cargando…</p>';
  try {
    const res = await fetch(encodeURI(doc.path));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const markdown = await res.text();
    if (id !== routeId) return;

    current = doc.path;
    content.innerHTML = `<article class="doc">${marked.parse(markdown)}<p class="edit"><a href="${REPO_URL}/blob/main/${encodeURI(doc.path)}" target="_blank" rel="noopener">Ver o editar en GitHub ↗</a></p></article>`;
    rewriteLinks(content);
    document.title = `${doc.title} · My AI Docs`;
    markCurrent(doc.path);
    window.scrollTo({ top: 0 });
    content.focus({ preventScroll: true });
  } catch (err) {
    if (id === routeId) content.innerHTML = `<p class="muted">No se pudo cargar el documento (${esc(err.message)}).</p>`;
  }
}

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  for (const li of sidebar.querySelectorAll('li')) li.hidden = Boolean(q) && !li.dataset.search.includes(q);
  for (const group of sidebar.querySelectorAll('details')) {
    group.hidden = Boolean(q) && !group.querySelector('li:not([hidden])');
    if (q) group.open = true;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' && document.activeElement === search) {
    search.value = '';
    search.dispatchEvent(new Event('input'));
    search.blur();
  }
});

menuBtn.addEventListener('click', () => {
  const open = !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', open);
  scrim.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
});
scrim.addEventListener('click', closeMenu);

window.addEventListener('hashchange', route);

(async () => {
  try {
    docs = await (await fetch('manifest.json')).json();
  } catch {
    content.innerHTML = '<p class="muted">No se pudo cargar el índice de documentos.</p>';
    return;
  }
  renderSidebar();
  route();
})();
