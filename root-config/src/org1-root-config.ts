import { registerApplication, start } from "single-spa";

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('Service worker registered: ', registration);
//     }).catch(error => {
//       console.error('Service worker registration failed: ', error);
//     });
//   });
// }

// const registerServiceWorker = async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register(
//         '~service-worker.js'
//       );
//       if (registration.installing) {
//         console.log('Service worker installing');
//       } else if (registration.waiting) {
//         console.log('Service worker installed');
//       } else if (registration.active) {
//         console.log('Service worker active');
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

registerApplication({
  name: "@org1/react-app",
  app: () => System.import("@org1/react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});

//registerServiceWorker();
