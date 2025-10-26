const cacheName = 'maze-game-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './pave (1).png',
  './wall (1) (1).png',
  './mouse (1).png',
  './cat (1).png',
  './applause.mp3',
  './crowd.mp3',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
