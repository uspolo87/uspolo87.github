// const staticCacheName = "site-static";
// const assets = [
//     "/",
//     "index.html",
//     "css/style.css",
//     "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
//     "manifest.json",
//     "images/family-tv.png",
//     "images/header-bg.png",
//     "images/manageprofile.png",
//     "images/icon512.png",
//     "images/mailbox.gif",
//     "images/registration.png",
//     "images/newConnectionImg.png",
//     "images/loader-gif",
//     "images/header-bg.png",
//     "images/DownloadMCT.gif",
//     "images/gotop.png",
//     "images/bg-2.png",
//     "images/bg-7.png"
// ];


// self.addEventListener("install", evt => {
//     evt.waitUntil(
//         caches.open(staticCacheName).then(cache => {
//             console.log("cacheing all assets");
//             cache.addAll(assets);
//         })
//     );
// });

// self.addEventListener("fetch", evt => {
//     evt.respondWith(
//         caches
//         .match(evt.request)
//         .then(cacheRes => {
//             return (
//                 cacheRes ||
//                 fetch(evt.request).then(fetchRes => {
//                     return fetchRes;
//                 })
//             );
//         })
//         .catch(e => {
//             console.log(e);
//         })
//     );
// });