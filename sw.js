self.addEventListener("install", evt => {
    // caches.open(staticChache).then(cache => {
    //   cache.addAll(data);
    // });
});

self.addEventListener("activate", evt => {
    console.log("activated");
});

self.addEventListener("fetch", evt => {
    // console.log("fetch event", evt);
});


const staticCacheName = "site-static-v1";
const dynamicCacheName = "dynamic-site-v2";
const assets = [
    "/",
    "index.html",
    "newconnection.html",
    "css/style.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    "manifest.json",
    "packages.html",
    "images/pack-banner.jpg",
    "images/pack-logo.jpg",
    "images/family-tv.png",
    "images/header-bg.png",
    "images/manageprofile.png",
    "images/icon512.png",
    "images/mailbox.gif",
    "images/registration.png",
    "images/newConnectionImg.png",
    "images/loader-gif",
    "images/header-bg.png",
    "images/DownloadMCT.gif",
    "images/gotop.png",
    "images/bg-2.png",
    "images/bg-7.png"
];

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > 3) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

self.addEventListener("install", evt => {
    //console.log('service worker is installed');

    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("cacheing all assets");
            cache.addAll(assets);
        })
    );
});

//tkl
self.addEventListener("activate", evt => {
    //console.log("service worker is activated");

    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(
                keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", evt => {
    if (evt.request.url.indexOf("googleapi") > -1) {
        return evt.request.url;
    }

    evt.respondWith(
        caches
        .match(evt.request)
        .then(cacheRes => {
            return (
                cacheRes ||
                fetch(evt.request).then(fetchRes => {
                    caches.open(dynamicCacheName).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone());
                        //limitCacheSize(dynamicCacheName,2);
                        return fetchRes;
                    });
                })
            );
        })
        .catch(e => {
            console.log(e);
        })
    );
});

//const staticCache = 'staticCache-v3';
// const dynamicCacheName = 'dynamicCache-v3';



// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(staticCache).then(function(cache) {
//             return cache.addAll(
//                 [
//                     '/',
//                     'index.html',
//                     'newconnection.html',
//                     'fallback.html',
//                     'js/custom.js',
//                     'js/app.js',
//                     'manifest.json',
//                     'packages.html',
//                     'contactus.html',
//                     'css/style.css',
//                     'images/header-bg.png',
//                     'images/family-tv.png',
//                     'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
//                     'https://code.jquery.com/jquery-3.3.1.slim.min.js'

//                 ]
//             );
//         })
//     );
// });


// self.addEventListener('fetch', evt => {

//     evt.respondWith(
//         caches.open(dynamicCacheName).then(function(cache) {
//             return cache.match(evt.request).then(function(response) {
//                 console.log(response);
//                 return response || fetch(evt.request).then(function(response) {
//                     cache.put(evt.request, response.clone());
//                     return response;
//                 })
//             })
//         })
//     );
// })

// self.addEventListener("activate", evt => {
//     //console.log("service worker is activated");

//     evt.waitUntil(
//         caches.keys().then(keys => {
//             // console.log(keys);
//             return Promise.all(
//                 keys
//                 .filter(key => key !== staticCache && key !== dynamicCacheName)
//                 .map(key => caches.delete(key))
//             );
//         })
//     );
// });




// self.addEventListener('fetch', evt => {
//     evt.respondWith(
//         caches.open(dynamicCacheName).then(function(cache) {
//             return cache.match(evt.request).then(response => {
//                 return response || fetch(evt.request).then(c => {
//                     cache.put(evt.request, response.clone());
//                 })
//             })
//         })
//     )
// })