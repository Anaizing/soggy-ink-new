---
title: "The Fetch API-Day 21"
cover: "https://images.unsplash.com/photo-1503514731955-7f665dde1225?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a404d2e19cc961dda62daff26b766ae9&auto=format&fit=crop&w=1050&q=80"
date: "24/01/2018"
category: "PWA"
tags:
    - fetch api
    - fetch
    - api
    - javascript
    - pwa

---

![puppy fetching leaf](https://images.unsplash.com/photo-1503514731955-7f665dde1225?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a404d2e19cc961dda62daff26b766ae9&auto=format&fit=crop&w=1050&q=80)

# Why Fetch?

With XMLHTTP request being such a hot mess, the fetch specification steps in and saves the day. It has a lot going for it.
* A modern networking API 
* its built on promises
* its a Living Standard- which means that as developers need more and more features, the spec can be updated, in fact its updated all the time, and we dont have to wait for some major revision to happen like we do in some other specifications.
* its available on both the `window object` which means you can use it right in the browser like you use most other API's, and also on the `worker object` which is how you gain access to it within a service worker.

# The Fetch Standard

![The Fetch standard screenshot](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27459934_10159845230385117_8844098117372533242_n.jpg?oh=a519427665742e110239bba09f4f25cc&oe=5B199EAD)

* [The Fetch Standard](https://fetch.spec.whatwg.org/) is maintained by the `Web Hypertext Application Technology Working Group` (WHATWG), 
* and its a living standard, so as you can see on the image above there was an update very recently. 
* Its updated so quickly that the standard has a twitter account itself, so you can follow along with the updates.
* This means that the update is always slightly ahead of browser implementation, but never too far that it becomes overbearing when the browser vendors have to update their implementations.




<br>

# Example

Lets look at how the fetch API works.

```js
fetch('http://soggy-ink.surge.sh/')
.then(response => {
    if (response.ok)
        return response;

    throw new Error('there was an error');
})
.then(response => response.json())
.then(response => console.dir(response) || response)
.catch(console.error);

```

First we say what we want to do, we want to fetch a certain url. 
* Because its promise based, we can just chain `.then()` methods together to manipulate the response in any way we might want to.
* So first and foremost all we need to do is go straight into checking the http status code, there is no on ready state funkyness.
* In fact making sure the response is ok is boiled down to one liner
* We can use standard control flow syntax, to throw an error when we see a problem. Now all we've done is make sure the response is ok,
* we chain another `.then()` to parse out the response is a json
*  chain on another `.then()` to log it out, here we're doing it in one line so we can both log, and return the promise
* and beacuse this is based on promises we can put in a catch at the end to deal with any errors.


# Fetch API

The `fetch API` centers around 4 main concepts. 

    * A Request
    * A Response
    * Headers
    * Body
<br>

# Request

A request has all of the properties you would expect to see on any HTTP request, they'll have the standards like
* `Url`
* `Method`
which are both strings. They'll have the
* `Headers` &
* potentially a request `Body`
`Headers` and `Body` are two main concepts of `fetch`.
After that we get into some slightly more exotic properties
* `Context`- lets us know `why` the request was being made, was it because of an image tag or maybe an iframe? This is handy from within a service worker when you're not the one issuing a request but instead you're watching a request go by.
* `Referrer`-which gives you access to referrer for a page if the referrer policiy allows you to do so. This policy is a fairly new security feature that dictates when a referrer can be set and read by a client.
* `Mode`- contains a Mode for the request, which tell us a bit about the network environment in which the request is being made, so wether its a `same origin request` or if its `cross origin` and we need to use cors or not use cors
* `Credentials`- dictates wether or not cookies should be passed along with the request, and the name speaks to the fact that typically you'll have some kind of credential for a session store inside of your cookies
* `Redirect`- this property let us set a mode for how fetch should handle redirects. 
    1. It either follow redirects `automatically` or  
    2. it can allow you to follow redirects `manually` or 
    3. it can throw an `error` when a redirect happens
* `Integrity`- is used for sub resource integrity, another security feature that essentially allows you to specify a hash value for what you expect the response to be
* `Cache`- this property allows you to change the way that caching works, wether we're just gonna 
    1. use the default or we 
    2. dont have any cache at all or if we're gonna do a 
    3. hard refresh scenario where we're gonna reload everything

# Response

It has some things that you'd expect like 
* `Url`
* `Headers`
* `Body`
* `Status- which is the number that represents the HTTP status code.
* `Status Text`- which is the string that is also used to reflect the status, you'll know some pretty common status text like if the status code was 200 the status is typically ok and if it was 404 the status would be file not found.
* `Ok`- property is a shortcut, that makes checking if the status code is within the 200 range really easy.
* `Type`- tells you if the request is a normal `same origin` request, or if its a limited cors response or a network error, or there's even something called an `opaque response` which is severely restricted to the access you have to that response in data
* `Redirected`- this a boolean property that lets you know wether or not there were redirects for this request.
* `UseFinalUrl`- which tells you if this url was the final url of the response in the case of redirects.

# Headers

This is the 3rd major component of the `fetch API`. Headers is like a really nice dictionary or structure of key value pairs, whith those key value pairs, you have the ability to 'append()' or 'set()' values
* `append()`- is used to add an additional value to an existing header, but
* `set()`- is used to replace that value outright
So if you have a multivalue header you might wanna use `append()` to continue to add values on, where you'd use set() to completely replace them. In both cases if the key for that header doesnt exist both append and `set()` will create it for you.
* `delete()`- self explanatory
* `get()`- is used to return the first value of a header
* `getAll()`- but if you have a multivalue header you can use this property to return all those values
* `has()` is a nice way to see if a set of headers contains one of the headers that you're looking for, so you might say 
```js
headers.has('Content-Length') 
// returns boolean
``` 
and get a true or false back if that collection of headers has a content header.
* `entries()`- provides an iterator which lets you use the relatively new `for...of` loops in javascript, which are very similar to for loops in C#, to go across all of the keys and values in the collection
* `keys()`- you can also use `keys()` to get a very similar iterator, which just gives you access to the keys
* `values()`- then there's `values()` which does the opposite, it gives you an iterator of just the values.

# Body

The last major component of the Fetch API is Body. Body has several methods that are all pretty aptly named, and they allow you to parse a response into a data type you would work with.
* `arrayBuffer()`- you can call arrayBuffer on a body, and it will return an array buffer to you, which is really good for working with binary responses.
* `blob()`- returns a blob, which is really useful when you're trying to create a data uri on the fly
* `formData()`- is used for form data, the object that you actually get back after calling form data is another collection that basically has the exact same API surface area of headers, but its giving you access to the data that you maybe would have submitted or received back from a form.
* `json()`- converts a response into a json object and,
* `text()`- converts the response into a string.

Each of these methods (`arrayBuffer()`,`blob()`,` formData()`,` json()`, `text()`), can only be called once on a given body. Thats because the body is treated as a stream and once its been used you cant re-read it.
So the `bodyUsed` tells you wether or not you already burned through your stream or not. Now if you wanna read from it twice thats fine you just need to call either

* `Request.clone()` or
* `Response.clone()`
And do that before your first read, and then you'll have two clones and you can clone on one hand text and on the other json or whatever two data formats that you want.


Hope you liked the puppies`!`








See ya

![puppy playing in snow](https://images.unsplash.com/photo-1515747563347-3bd9a4df8ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2d36bd41351e12edfec2339bd3b813b&auto=format&fit=crop&w=1264&q=80)

Resources

[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)