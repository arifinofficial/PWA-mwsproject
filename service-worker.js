"use strict";

console.log('Executing');

var version = 'v1.1::';

var offline = [
    '/',
    'index.html',
    'style.css',
    'global.js',
    'images/favicon.ico',
    'images/icon.svg',
    'images/photo.jpg',
    'project1/add2numbers.js',
    'project1/calculator.html',
    'project2/mapbox.html',
    'project2/css/style.css',
    'project2/js/app.js',
    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
    'project3/bali.html',
    'project3/css/style.css',
    'project3/data/peta.json',
    'project3/js/app.js',
];

self.addEventListener("install", function (event) {
    console.log('Install event in progress.');

    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function (cache){
            return cache.addAll(offline);
        })
        .then(function(){
            console.log('Worker install complete'); 
        })
    ); 
});

self.addEventListener("fetch", function (event) {
    console.log('Fetch event in progress.');
    
    if(event.request.method !== 'GET'){
        console.log('Fetch event ignored!', event.request.method, event.request.url);
        return;
    }

    event.respondWith(
        caches
        .match(event.request)
        .then(function(cached){
            var networked = fetch(event.request)
            .then(fetchedFromNetwork, unableToResolve)
            .catch(unableToResolve);

            console.log('Fetch event', cached ? '(cached)' : '(network)', event.request.url);
            return cached || networked;
        
            function fetchedFromNetwork(response){
                var cacheCopy = response.clone();
                console.log('Fetch response from network.', event.request.url);
                
                caches
                .open(version + 'pages')
                .then(function add(cache){
                    return cache.put(event.request, cacheCopy);
                })
                .then(function(){
                    console.log('Fetch response stored in cache. ', event.request.url);
                });
                return response;
            }

            function unableToResolve(){
                console.log('Fetch request failed.');
                
                return new Response('<h1>Service Unavailable</h1>', {
                    status      : 503,
                    statusText  : 'Service Unavailable',
                    headers     : new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            }
        })
    );
});

self.addEventListener("activate", function (event) {
    console.log('Activate event in progress');
    
    event.waitUntil(
        caches
        .keys()
        .then(function(keys) {
            return Promise.all(
                keys
                .filter(function(key){
                    return !key.startsWith(version);
                })
                .map(function (key){
                    return caches.delete(key);
                })
            );
        })
        .then(function() {
            console.log('Activate Complete');
        })
    );
});