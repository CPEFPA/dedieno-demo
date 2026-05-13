const CACHE = 'dedieno-v1';
const ASSETS = ['/dedieno-demo/', '/dedieno-demo/index.html', '/dedieno-demo/agent.html', '/dedieno-demo/login.html', '/dedieno-demo/logo.png', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; }).catch(() => caches.match(e.request))); });
