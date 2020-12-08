var cacheName = 'quotes-gen-pwa';
var databaseName = 'quotes-app-data'
var filesToCache = [
    '/FakeSlackQuoteGenerator/',
    '/FakeSlackQuoteGenerator/index.html',
    '/FakeSlackQuoteGenerator/favicon.ico',
    '/FakeSlackQuoteGenerator/manifest.json',
    '/FakeSlackQuoteGenerator/images/favicon-96x96.png',
    '/FakeSlackQuoteGenerator/main.css'
];

// Start the service worker and cache all of the app's content
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline
self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function(response) {
            // Fall back to network
            return response || fetch(event.request);
        })
    );
});

// Remove previous cached data from disk
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});