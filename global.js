(function () {
if ('serviceWorker' in navigator) {
    console.log('Service Worker registration in progress.');
    navigator.serviceWorker.register('/service-worker.js').then(function (){
        console.log('Service Worker registration complete.');  
    }, function(){
        console.log('Service Worker registration failed.');
    });
} else {
    console.log('Service Worker not supported.');  
}
})();