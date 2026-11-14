/* GlycoTens – service worker : fonctionnement hors ligne et mises à jour */
const VERSION = 'glycotens-v8';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/jspdf.umd.min.js',
  './vendor/xlsx.full.min.js',
  './fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-700-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache d'abord, puis mise à jour en arrière-plan.
// Les requêtes « no-store » ou « reload » (bouton Rechercher une mise à jour) vont directement sur le réseau.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.cache === 'no-store' || req.cache === 'reload') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});

// Demande de l'application : recharger tous les fichiers depuis le réseau
self.addEventListener('message', (event) => {
  const d = event.data || {};
  if (d.type === 'REFRESH') {
    const reply = () => { if (event.source) event.source.postMessage({ type: 'REFRESHED' }); };
    event.waitUntil(
      caches.open(VERSION)
        .then((cache) => Promise.all(SHELL.map((u) => cache.add(new Request(u, { cache: 'reload' })))))
        .then(reply, reply)
    );
  }
  if (d.type === 'SKIP_WAITING') self.skipWaiting();
});

// Clic sur une notification : ouvre l'application sur la saisie
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) { if ('navigate' in c) c.navigate(url).catch(() => {}); return c.focus(); }
      }
      return self.clients.openWindow(url);
    })
  );
});
