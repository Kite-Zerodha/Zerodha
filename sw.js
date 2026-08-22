self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Chrome को खुश करने के लिए डमी फेच (Dummy Fetch)
});
