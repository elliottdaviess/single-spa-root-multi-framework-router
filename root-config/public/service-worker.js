// const staticCacheName = 'my-static-cache-v1';

// const urlsToCache = [
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/login',
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/static/css/main.5bd7ab97.chunk.css',
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/static/js/config.3d5f6d51.chunk.js',
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/static/js/main.530c708a.chunk.js',
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/static/js/product-metadata.1b724710.chunk.js',
//   'https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/static/media/SourceSansVariable-Roman.ttf.13ac647c.woff2',
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(staticCacheName)
//       .then(cache => {
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       })
//   );
// });
