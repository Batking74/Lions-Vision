const dynamicCacheName = 'site-dynamic-v1';
const staticCacheName = 'site-cache-v1';

const assets = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/Error.html'
];

// Install Event
self.addEventListener('install', event => event.waitUntil(handleInstall()));

// Activate Event
self.addEventListener('activate', event => event.waitUntil(handleActivate()));

// Fetch Event
self.addEventListener('fetch', event => event.respondWith(handleFetch(event)));

// Pre-Caching Assets
async function handleInstall() {
    try {
        const cache = await caches.open(staticCacheName);
        console.log('Caching assets during install');
        await cache.addAll(assets);
    }
    catch (error) {
        console.error('Failed to cache assets during install:', error);
    }
}


async function handleActivate() {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(cacheName => {
            // Keep static and dynamic caches, as well as category caches
            if (cacheName !== staticCacheName && cacheName !== dynamicCacheName) return caches.delete(cacheName);
        }));
        console.log('Old caches cleaned up');
    }
    catch (error) {
        console.error('Failed to clean up old caches:', error);
    }
}


async function handleFetch(event) {
    try {
        // Check if the request is in the Api Cache
        const cache = await caches.match(event.request);
        if (cache) return cache;

        // Fetch from the Network
        const response = await fetch(event.request);

        // Cache Api Cache
        cacheStore = await caches.open(dynamicCacheName);
        cacheStore.put(event.request, response.clone());

        // Limit the size of the cache
        await limitCacheSize(cacheStore, 600);

        return response;
    }
    catch (error) {
        // Offline Fallback Page/Conditional Fallbacks
        return caches.match('/assets/Error.html');
    }
}

async function limitCacheSize(cache, MAX_CACHE_ENTRIES) {
    const keys = await cache.keys();
    if (keys.length > MAX_CACHE_ENTRIES) {
        // Delete the oldest entry
        await cache.delete(keys[0]);
    }
}