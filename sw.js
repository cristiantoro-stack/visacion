/* Lanzador de la app de visación (Android). No guarda nada: ni la app ni los documentos quedan en el teléfono.
   Existe solo para que Chrome ofrezca "Instalar app"; cada pedido va directo a la red. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(c => caches.delete(c)))).then(() => self.clients.claim())));
self.addEventListener('fetch', () => {});
