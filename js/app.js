// if ('serviceWorker' in navigator && 'PushManager' in window) {
//   navigator.serviceWorker.register('/sw.js').then(e => {
//     console.log('service worker is registered and push is supported ', e)
//     swRegistration = e;
//     askPermission();
//   }).catch(e => {
//     console.log(e);
//   })
// } else {
//   // console.log('Push messaging is not supported');
//   pushButton.textContent = 'push Now Supported';
// }

// //---------------------------------------------install banner code-----------------------------------------------------

// var deferredPrompt;

// window.addEventListener('beforeinstallprompt', function (e) {
//   e.preventDefault();
//   deferredPrompt = e;
//   console.log(deferredPrompt);
//   showButton();
// });

// const btnAdd = document.querySelector('.btnAdd');

// function showButton() {
//   btnAdd.style.display = 'block';
// }
// btnAdd.addEventListener('click', (e) => {

//   btnAdd.style.display = 'none';
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice
//     .then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//         btnAdd.style.display = 'block';
//       }
//       deferredPrompt = null;
//     });
// });

// window.addEventListener('appinstalled', (evt) => {
//   console.log('a2hs installed');
// });




// var request = Notification.requestPermission();

// function askPermission() {
//   if (Notification.permission = "granted") {

//     var newNotification = new Notification('Rinku Cable', {
//       body: 'welcome to Rinku Cable',
//       icon: 'https://icons-for-free.com/iconfiles/png/512/cable+mintie+screen+set+television+tv+icon-1320190746401799363.png',
//       tag: 'Explore Packages Now'
//     });


//   }


// }



// //***********************************Notifications by Service worker*****************************************/