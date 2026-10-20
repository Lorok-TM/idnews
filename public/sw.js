const CACHE_NAME = 'id-news-pwa-cache-v2'; 
const urlsToCache = [
  '/',
  '/offline.html',
  '/favicon.ico',
  '/posts/',
  '/tags/',
  '/tags/blogging/',
  '/archives/',
  '/about/',
  '/search/'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Simpan aset utama Situs');
    await cache.addAll(urlsToCache);
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map((cache) => {
        if (cache !== CACHE_NAME) {
          console.log('Hapus cache lama:', cache);
          return caches.delete(cache);
        }
      })
    );
  })());
  self.clients.claim();
});

async function handleFetch(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const responseClone = response.clone();
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, responseClone);
    }
    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    const isHtmlRequest = request.mode === 'navigate' || 
      (request.headers.get('accept') && request.headers.get('accept').includes('text/html'));
    if (isHtmlRequest) {
      const offlinePage = await caches.match('/offline.html');
      if (offlinePage) return offlinePage;
    }
    const homePage = await caches.match('/');
    if (homePage) return homePage;
    return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
  }
}
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(handleFetch(event.request));
});

self.addEventListener('push', (event) => {
  let title = 'Kabar Terbaru, Bro!';
  let options = {
    body: 'Ada artikel baru yang menarik di web. Klik untuk baca!',
    icon: 'https://id-news.vercel.app/192.png',
    badge: 'https://id-news.vercel.app/72.png',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now() }
  };
  if (event.data) {
    try {
      const dataJson = event.data.json();
      title = dataJson.title || title;
      options.body = dataJson.body || options.body;
      if (dataJson.icon) options.icon = dataJson.icon;
    } catch (e) {
      options.body = event.data.text();
    }
  }
  event.waitUntil((async () => {
    await self.registration.showNotification(title, options);
  })());
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const windowClients = await clients.matchAll({ type: 'window' });
    for (let i = 0; i < windowClients.length; i++) {
      let client = windowClients[i];
      if (client.url === new URL('/', self.location.origin).href && 'focus' in client) {
        return client.focus();
      }
    } 
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  })());
});
