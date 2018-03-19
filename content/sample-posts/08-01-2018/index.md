---
path: "/Day-5"
date: "2018-01-08T17:12:33.962Z"
title: "Promise?-Day 5"
---
##### 10min read... Promises in Js/Terminology

![three locks on a bridge](https://images.unsplash.com/photo-1439566773766-06344d7ee69a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d0dc1dcda75ac7ec5e0f669babecfec&auto=format&fit=crop&w=753&q=80)



# Promises in JS

A `Promise` is an object which represents an action that hasn't finished yet, but will do somewhere down the line. Its a placeholder for the result of some asynchronous operation, like a http request. As soon as that http request is made it returns a promise straight away, before the data is retrieved and brought back to us. Within that `promise` object, we can register callbacks which will run when the request completes.

...Jake Archibald explains Promises in more detail.

JavaScript is single threaded, meaning that two bits of script cannot run at the same time. Typically JavaScript is in the same queue as painting, updating styles, and handling user actions (such as highlighting text and interacting with form controls). Activity in one of these things delays the others.

At their most basic, promises are a bit like event listeners except:

* A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.

* If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.

## Promise Terminology

A promise can be:

* fulfilled- The action related to the promise succeded
* rejected- The action related to the promise failed
* pending- Hasn't fulfilled or rejected yet
* settled- has fulfilled or rejected

The spec also uses the term `thenable` to describe an object that is promise-like, in that it has a then method.

![group fist bump](https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?auto=format&fit=crop&w=1466&q=80)

## The arrival of Promises to JS

Promises have been around for a while in the form of libraries such as _Q, when, WinJS, RSVP.js_. All these and Javascript Promises share a common standarized behavior called _Promises/A+_.
Jquery have something similar called _Deferreds_, but they are not _Promise/A+_ compliant. Jquery also has a _Promise type_ but it is a subset of Deferred and it has the same issues.

Although promise implementations follow a standardized behavior, their overall APIs differ. JavaScript promises are similar in API to RSVP.js. Here's how you create a promise:

```js
var promise = new Promise(function(resolve, reject) {
// do a thing, possibly async, then…

if (/* everything turned out fine */) {
    resolve("Stuff worked!");
}
else {
    reject(Error("It broke"));
}
});
```

The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.

Like throw in plain old JavaScript, it's customary, but not required, to reject with an Error object. The benefit of Error objects is they capture a stack trace, making debugging tools more helpful.

Here's how you use that promise:

```js
promise.then(function(result) {
console.log(result); // "Stuff worked!"
}, function(err) {
console.log(err); // Error: "It broke"
});
```

`then()` takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.

## Compatibility with other Libraries

The JavaScript promises API will treat anything with a then() method as promise-like, so if you use a library that returns a Q promise, that's fine, it'll work with the new JavaScript promises.

Although, with jQuery's Deferreds you can cast them to standard promises, which is worth doing as soon as possible:

    var jsPromise = Promise.resolve($.ajax('/whatever.json'))


Here, jQuery's $.ajax returns a Deferred. Since it has 
a `then()` method, `Promise.resolve()` can turn it into a 
JavaScript promise. However, sometimes deferreds pass 
multiple arguments to their callbacks, for example: 


```js

var jqDeferred = $.ajax('/whatever.json');

jqDeferred.then(function(response, statusText, xhrObj) {
// ...
}, function(xhrObj, textStatus, err) {
// ...
})
```

Whereas JS promises ignore all but the first:

```js

jsPromise.then(function(response) {
// ...
}, function(xhrObj) {
// ...
})
```

Thankfully this is usually what you want, or at least gives you access to what you want. Also, be aware that jQuery doesn't follow the convention of passing Error objects into rejections.

## Examples 

I found this great examples by Jecelyn Yeen 

```js

/* ES5, using Bluebird */
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);


// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
        })
        .catch(function (error) {
            // ops, mom don't buy it
            console.log(error.message);
        });
}

askMom();



// [object Object] {
//        brand: "Samsung",
//    color: "black"
//        }
```


Resources

* [JavaScript Promises: an Introduction By Jake Archibald ](https://developers.google.com/web/fundamentals/primers/promises)  

* [JavaScript Promises for Dummies by Jecelyn Yeen ](https://scotch.io/tutorials/javascript-promises-for-dummies)


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
