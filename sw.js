self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('buchapay-v1').then(cache => cache.addAll(['./','./index.html','./assets/css/style.css','./assets/js/app.js','./assets/img/icon.png','./manifest.json'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});