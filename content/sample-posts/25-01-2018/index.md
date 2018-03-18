---
title: "The Cache API-Day 22"
cover: "https://images.unsplash.com/photo-1494888427482-242d32babc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a689c51340e923fd138d8f3b5f578110&auto=format&fit=crop&w=1500&q=80"
date: "25/01/2018"
category: "PWA"
tags:
    - cache api
    - cache
    - api
    - javascript
    - pwa
---

![a dollar bill](https://images.unsplash.com/photo-1494888427482-242d32babc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a689c51340e923fd138d8f3b5f578110&auto=format&fit=crop&w=1500&q=80)

Now lets talk about the Cache API, now before I start loosing you into delusions of grandeur, although pronounced the same, they're obviously two very fucking different things.

The cache API is defined as a part of the service worker specification itself. However the cache API is not specific to service workers. Available on the worker object inside a service worker, or on the window object inside of the normal scripting environment that you should already be used to. Like fetch, its also defined as a living standard, which means its going to be updated and changed over time for the better. The cache api is available in all the expected browsers, because its part of the service worker specification, its support is very similar to the browser support for the service worker itself.

# Cache API

The cache API is simple and has 2 concepts you need to learn.

1. `Cache Storage`- which represents all of the named caches that are available for any given origin.

2. `Cache`- which is one of those named instances and it contains a collection of request response pairs, where the request is the key of the cache and the response is the value.

# Cache Storage

The CacheStorage interface, represents the storage for individual cache objects. It has several different methods on it to help us utilize and work with our individual caches.

* `open()`- It takes in a name and allows us to open up some individual cache. If we pass in a cache name that doesnt exist, `open()` will create that cache for us and return it through a promise. Since `open()` will return an existing cache or create and then open a cashe that doesnt already exist...
* `has()`- we can use `has()` to check that name, to see if it exists or not.
* `delete()`- allows us to delete a cache object.
* `keys()`- list off all the names of our different caches.
* `match()`- a bit of a helper function, that takes in a request, which is one of the keys and will look through all of our different cache objects trying to find the first match, it will gives us back that response. This is handy if we're trying to do a match across multiple different caches, its like an umbrella method that works across the top of all of them.

# Cache

Once we get back a cache from the open method, we'll interact with in these ways...

* `match()`- the cache object also has a `match()` method on it, but this match method is constrained to only look within one individual cache. When it matches it will return the first response that matches but if there are multiple matches you can get those back by  using...
* `matchAll()`- the matching algorithms work similarly to previous HTTP caching mechanisms, not only do they use the url as part of the key, but they use any of the headers that are specified in the very HTTP header to generate a more complex key. So when we're setting our [very]() header, we need to mindful so that we dont get too much [charting]() across our cache.
* `keys()`-like the CacheStorage object, the Cache object has a `keys()` method that will return to us all of the requests that are keys within the cache
* `add()`- this method takes in a request, it will do the fetch for that request and automatically store the response for us so we dont even have to handle the fetch.
* `addAll()`- if we have multiple things we want to add to the cache at once, we use this method, and pass in a collection of requests
* `put()`- and we need a bit more control, say we want to manipulate the response before store it in the cache, we can use this method, where we explicitly put in the request and the response together, and however we want to generate that response is up to us.
* `delete()`- however this cache API does not respect expiration in cache control headers like the standard HTTP cache does so we are left to delete anything that we put into the cache on our own.

# Caching Patterns

![coins on the floor](https://images.unsplash.com/photo-1511873364543-cccea2309397?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=871068968edae7377edffdda7c8edf3e&auto=format&fit=crop&w=1567&q=80)

Theres a few common patterns and practices that we can use to make creating service workers much easier. Im gonna touch on 5 key caching patterns, however there are many others, and both google and mozilla have caching pattern catalogs called the...

[The offline cookbook-Google](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
[The service worker cookbook- Mozilla](https://serviceworke.rs/)

The 5 patterns we'll cover are

    * Network Only
    * Cache Only
    * Cache First
    * Network First
    * Fastest

# 1 Network Only

This is essentially what web apps have always done, up until service workers allowed them to do something else.
* they handle a request by trying to fetch the url from the network
* but if the network fails, then the whole request fails as well
* basically if this is the pattern you're using you dont need a service worker at all.

```js
event.respondWith(
    fetch(event.request)
)
```
* implementing it in the service worker is pretty simple though, is pretty simple. We just respond with the result of fetching the original request.


# 2 Cache Only

The opposite of a network only pattern, is the cache only pattern.
* in this pattern we try to resolve any url from the cache and only from the cache
* so if the item is in fact in the cache, we return successfully and if not we fail.
* we might wanna use this caching pattern if we're trying to be very sensitive about going across the network, perhaps our user is in a low power state mode on their device

```js
event.respondWith(
    caches.match(event.request)
);
```

* implementing the cache only pattern is also pretty easy like the network only pattern
* we would respond with a match from the caches object passing in a request for a key

# 3 Cache First

* In this pattern if the request matches a cache entry we return that back to the browser no problem.
* but when it doesn't match we go to the cache (no match),
* then we go to the network and when that returns, we write the return response to the cache and pass the result back to the browser.
* that means, in any subsequent request, cache will be primed with this content
* this option is very good for content that doesnt change very often, maybe some static content
* and this pattern is aka `Read Through Cache`

lets see how we would implement this pattern

```js
event.respondWith(
    caches.match(event.request).then(function(cResponse){
        if (cResponse){ return cResponse; }
        return fetch(event.request).then(function(fResponse){
            return caches.open('v1').then(function(cache){
                return cache.put(event.request, fResponse.clone()).then(function(){
                    return fResponse;
                });
            });
        });
    });
)
```
Lets walk it out

* when we go to respond with the `cache first pattern`, first thing we'll do is, we'll check to see if theres a match in the cache
```js
caches.match(event.request)
```
* if there is we simply return the cache response
```js
if (cResponse){ return cResponse; }
```
* if theres not, then we fetch from the network the same request that was passed in
```js
 return fetch(event.request)
```
* when that returns we open up our cache (here we're using 'v1' but you'd use whatever cache youre trying to store this thing in)
```js
return caches.open('v1')
```
* and we put a clone of the fetched response into the cache 
```js
return cache.put(event.request, fResponse.clone())
```
* and then we return the fetch response back to the browser
```js
 return fResponse;
```

# 4 Network First

In this case we try to handle the request by going directly to the network, and go to the cache only in failure situations
* the difference here though, is when the network does succeed, we write to the cache as well, preemptively that way we're ready for when there is a failure to the network
* so since we write to the cache in our first request, the next request, when we go to the network and it fails, then we can try going to the cache and theoretically the object will be there
You may have seen this pattern before, HTTP uses this pattern quite often and they call it the `stale while error pattern`. Its useful to use this pattern for things like API requests where you'd like to serve the freshest data possible, but if the user is offline its ok to give them the last thing that they saw.
This method does have some flaws- if theres a problem with the user's connection, as in if there's a `LIE FI` situation (when the wifi is lying to you with one bar lit up), they're gonna have to wait, maybe a WHILE for the network to fail, before they're gonna be able to get content back. There are ways around that with the implementation of timeouts etc.

```js
event.respondWith(
    fetch(event.request).then(function(fResponse){
        return caches.open('v1').then(function(cache){
            if(!fResponse.ok){
                return cache.match(event.request);
            } else {
                cache.put(event.request, fResponse.clone());
                return fResponse;
            }
        });
    });
);
```

The implementation for `Network First` is very similar to `Cache First`, we just flip around the order in which we do things.
* first we make a fetch to the network using the `events.request`
```js
fetch(event.request)
```
* then we open up whatever cache we wanna use
```js
return caches.open('v1')
```
* and if the network's response is not good, then we return a match from the cache.
```js
if(!fResponse.ok){
    return cache.match(event.request);
```
* but if it is good, we clone it and then we put it in the cache and then we return it.
```js
cache.put(event.request, fResponse.clone());
return fResponse;
```


# 5 Fastest

* This pattern requests are dispatched to both the network and the cache at the same time
* and whichever returns a response first, will get passed back to the browser
* most of the time, this is gonna be the cache
* but the nice thing about this pattern is that when the network does respond, we take that response and we insert it into the cache.
* So we're getting the benefit of a fast result from the cache when its available, but we're also updating that cache on every read
* The downside of this strategy, is that a network request is happening every single time, even if you're just returning the same data, you're burning up extra bandwidth 
* and obviously when you're offline, those requests are just gonna fail every single time anyway.

```js
even.respondWith(() => {
    var promises = [caches.match(event.request),
                    fetch(event.request)];
    return new Promise((resolve, reject) => { 
        // Promise.race doesnt work well here...
        promises.map(p => Promise.resolve(promise));
        promises.forEach(p => p.then(resolve));
        promises.reduce((a, b) => a.catch(() => b))
        .catch(() => reject(new Error('Both promises failed booo!')));
        
        });
    }
);
```
So if you think about the implementation for this you might be thinking, "Hey, this is clearly just a Promise.race call!", nope. 
* Unfortunately `Promise.race` is not very useful for us here, because, when you use `race` if any one of the promises fail, the entire promise set fails
* In this case its perfectly acceptable for one of them to fail, so long as one of them succeeds.
* although we kinda have to implement our own pattern here, and we cant use the .race method thats available to the promise API


Lets walk it out

* So first and foremost, we're gonna catch the 2 promises that we need to do the split, when we go to the network and do the cache, an array. The first promise in that array is goin to the cache while we're trying to match the request
* and the second one will go to the network by fetching `event.request` 
```js
var promises = [caches.match(event.request),
    fetch(event.request)];
```
* with that array we can go ahead and create a `new Promise`
```js
 return new Promise((resolve, reject)
```
* and we'll go ahead and map that array of promises through, to resolve each of these promises, 
* in this case we really dont need to do that because our array is filled with promises, 
* but if your array happened to have some kind of set value in it, `Promise.resolve`
just wraps that up to be a `thenable`
```js
promises.map(p => Promise.resolve(promise));
```
* then we'll `forEach` over each item in the array and call, `then(resolve)`
```js
promises.forEach(p => p.then(resolve));
```
* and lastly we'll use this tricky bit of code here, where we'll call `reduce` on the array,
* which basically takes the 2 values that are available, and calls `.catch` on a,
* and if that is called it will envoke b, which if that is also caught on the next line
```js
promises.reduce((a, b) => a.catch(() => b))
```
* and if any of those have a problem, then we reject the entire chain by throwing a `new Error`
```js
.catch(() => reject(new Error('Both promises failed booo!')));
```


But if all of this is way too much for you, dont worry! There's help out there, a library called [Service Worker Toolbox](https://github.com/GoogleChromeLabs/sw-toolbox) for example

Now you can make it rain with all your cache`!`

Ha`!`


See Ya

Resources

[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)