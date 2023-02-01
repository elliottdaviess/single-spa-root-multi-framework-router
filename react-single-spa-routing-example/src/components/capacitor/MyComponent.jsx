import React, { useEffect } from "react";
import { urlsToCache } from "../../../../root-config/public/service-worker";

const MyComponent = () => {
  // useEffect(() => {
  //     if ('serviceWorker' in navigator && 'caches' in window) {
  //       caches.open('my-static-cache-v1')
  //         .then(cache => {
  //             fetch('https://cors-anywhere.herokuapp.com/https://myaccount.admiral.com/login', {
  //                 headers: {
  //                     'origin': window.location.origin,
  //                     'x-requested-with': 'XMLHttpRequest'
  //                 }
  //             })
  //             .then(response => {
  //               cache.addAll('https://myaccount.admiral.com/login', response.clone());
  //             });
  //         });
  //     }
  //   }, []);

  // useEffect(() => {
  //     if ('serviceWorker' in navigator) {
  //       navigator.serviceWorker.register('/service-worker.js').then(registration => {
  //         console.log('Service worker registered: ', registration);
  //       }).catch(error => {
  //         console.error('Service worker registration failed: ', error);
  //       });
  //     }
  //   }, []);

  function handleButtonClick() {
    window.location = "https://myaccount.admiral.com/login";
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Go to External URL</button>
      <link rel="prefetch" href="https://myaccount.admiral.com/login">
        {" "}
        test
      </link>
    </div>
  );
};

export default MyComponent;
