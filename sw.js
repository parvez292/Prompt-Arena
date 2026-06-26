// PWA Install Script
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // সরাসরি ইন্টারনেট থেকে লেটেস্ট কোড আনবে (অটো-আপডেট ঠিক রাখার জন্য)
    e.respondWith(fetch(e.request).catch(() => new Response('Offline mode not supported.')));
});
