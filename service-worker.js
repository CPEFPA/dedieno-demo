// 🔥 service-worker.js - Cache stratégique pour mode hors-ligne
const CACHE = 'dedieno-v1';
const ASSETS = [
  '/',
  '/dedieno-demo/',
  '/dedieno-demo/index.html',
  '/dedieno-demo/agent.html',
  '/dedieno-demo/login.html',
  '/dedieno-demo/logo.png',
  '/dedieno-demo/favicon.ico',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  // Stratégie : Network first, fallback cache (idéal pour app temps réel)
  e.respondWith(
    fetch(e.request).then(res => {
      // Met à jour le cache en arrière-plan
      caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
