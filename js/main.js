window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/FakeSlackQuoteGenerator/sw.js');
    }
}