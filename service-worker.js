/* Caché limitada a recursos públicos de interfaz. Nunca guarda datos de clientes, Firebase ni respuestas de órdenes. */
const CACHE='ciber-acajutla-pwa-v1';
const ASSETS=['./offline.html','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET'||req.mode!=='navigate')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;e.respondWith(fetch(req).catch(()=>caches.match('./offline.html')))});
