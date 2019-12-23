//checkinh the browser requirement for install of service wroker

var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
    '/',
    'index.html',
    'css/style.css',
    'images/favicon.png',
    'manifest.json',
    'css/bootstrap.min.css',
    'images/header-bg.png',
    'images/family-tv.png',
    'images/mailbox.gif',
    'images/icons-login.png',
    'images/icon-connection.png',
    'images/tab-install-icon.svg',
    'images/registration.png ',
    'images/customer-service.png',
    'images/payment-img.gif',
    'images/aboutus-bg.png',
    'images/download-new-bg.png',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('caching all assets');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['my-site-cache-v1'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//fetching the cached assets when user navigates to another page or refreshed it

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(res => {
            //cache hit - return response
            if (res) { // if requested asset is found in caches, returns it
                return res;
            }
            //else make a request to network
            return fetch(event.request);
        })
    )
})






// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     navigator.serviceWorker.register('sw.js').then(e => {
//         console.log('service worker is registered and push is supported ', e)
//         swRegistration = e;
//         askPermission();
//     }).catch(e => {
//         console.log(e);
//     })
// } else {
//     // console.log('Push messaging is not supported');
//     pushButton.textContent = 'push Now Supported';
// }

// //---------------------------------------------install banner code-----------------------------------------------------

// var deferredPrompt;

// window.addEventListener('beforeinstallprompt', function(e) {
//     e.preventDefault();
//     deferredPrompt = e;
//     console.log(deferredPrompt);
//     showButton();
// });

// const btnAdd = document.querySelector('.btnAdd');

// function showButton() {
//     btnAdd.style.display = 'block';
// }
// btnAdd.addEventListener('click', (e) => {

//     btnAdd.style.display = 'none';
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice
//         .then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('User accepted the A2HS prompt');
//             } else {
//                 console.log('User dismissed the A2HS prompt');
//                 btnAdd.style.display = 'block';
//             }
//             deferredPrompt = null;
//         });
// });

// window.addEventListener('appinstalled', (evt) => {
//     console.log('a2hs installed');
// });




// var request = Notification.requestPermission();

// function askPermission() {
//     if (Notification.permission = "granted") {

//         var newNotification = new Notification('Rinku Cable', {
//             body: 'welcome to Rinku Cable',
//             icon: 'https://icons-for-free.com/iconfiles/png/512/cable+mintie+screen+set+television+tv+icon-1320190746401799363.png',
//             tag: 'Explore Packages Now'
//         });


//     }


// }



// //***********************************Notifications by Service worker*****************************************/