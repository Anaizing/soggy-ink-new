---
title: "Promises again -Day 14"
cover: "https://images.unsplash.com/photo-1484506169663-9e54114d6eee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a82e747bcec08b7a525f9feaf3f08127&auto=format&fit=crop&w=750&q=80"
date: "17/01/2018"
category: "javascript"
tags:
    - javascript
    - promises
    - fundamentals
---

![hang loose hand gesture](https://images.unsplash.com/photo-1484506169663-9e54114d6eee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a82e747bcec08b7a525f9feaf3f08127&auto=format&fit=crop&w=750&q=80)

I promise this is the last post on promises. Bazinga

# How to Promise

So now we know that a promise is just an object that has a `then()` method on it, or a `thenable` so lets look at the mechanics of it.

![promise diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/26906942_10159805635185117_5611440809466017016_n.jpg?oh=64ad5f8faf87963f2071b1ae8c56b2e5&oe=5AF14557)

Promises follow a very simple state machine.

* They begin as `pending` then they move into either a `fulfilled` or a `rejected` state. 

* When a promise has `fulfilled` or `rejected` we would say that its been settled.

* When a promise goes from `pending` to a `fulfilled state` a _value_ is passed along.

* And when it moves from `pending` to a `rejected state`, a _reason why it was rejected_ is passed along

This state machine is very very simple

* A promise can only succeed or fail once, it doesn't repeat its actions

* It cant switch from a succeed state to a reject state, once it moves to one of its settled stated its there

* A promise remembers its state, if you have a promise thats already been settled and then you add a success or a failure callback, that callback will be executed immediately with the fulfilled value or the rejected reason. So you dont have to set up your callbacks before moving on a pending state.

# the API that browsers use for promises

```js
var ajax = someHelper();
ajax.get('/my-awesome-api')
.then(onFulfilled, onRejected);
```

* Here we have `someHelper()` for ajax and we're gonna do a `get` call to `'my-awesome-api'`.
* Because that call to `get` returns a `Promise`(a `thenable`)
* that means we can call a `then()` method, and we can pass it two different parameters `onFulfilled` callback or an `onRejected` callback

When you implement these callbacks, its important you do one of three things...

1. return another promise
2. return a value, like we would in synchronous code
3. the last option is to throw an error, you do that from either the onFulfilled or the onRejected callback.

```js
var ajax = someHelper();
ajax.get('/my-awesome-api')
.then(function(value) {
    //1. Return another promise
    //2. Return a value
    //3. Throw an error
}, onRejected);
```

Either way you want one of these 3 options. If you dont do one of these 3 things, it could lead to a shitload of problems. So remember you HAVE TO do one of these three.

# the flow

Now lets see how promises flow from one to another...

```js
var ajax = someHelper();
ajax.get('/my-awesome-api')
.then(onFulfilled, onRejected)
.then(onFulfilled, onRejected)
.then(null, onRejected)
.then(onFulfilled, null);
```
Here we have a bunch of different promises chained together.

* The first `.then()` to the second `.then()`,
* and we use the optional parameters for the last two `.then()`. As in `onFulfilled` being optional because we pass in null, and on the last `.then()` onRejected also being optional because we passed in null.

The flow of these goes as follows

![.then order code](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/26991706_10159815198610117_6443632634167817822_n.jpg?oh=bd60fc267c74c2e4a040b9bf68e7f8ce&oe=5AEABEF6)

* if `get` returns a promise that fulfills, then the `onFulfilled` method of the first `.then()` handler would be executed, and `onRejected` would not be

* if `onFulfilled` returns something that rejects or throws an exception, the next `.then()` would execute the `onRejected` method, and it's `onFulfilled` would never be called. 

* Now even though we went into an error state, perhaps this `onRejected` method can handle that and it would return a promise that becomes fulfilled or just a regular value so we have a fulfilled promise there.

* so then because we're in a good state we're not gonna call the `onRejected` of the third `.then()` handler, and obviously we're not gonna call `null`, 

* so we move on to the next `.then()` and we execute its `onFulfilled`

In this case we'll say that it handled everything properly, so we went through our promise chain we even ended up in an error state at some point but ultimately we recovered. Yeeeew

To make this all look a bit better lets refactor it, since the use of these optional parameters when passing in `null` is pretty shitty

```js
var ajax = someHelper();
ajax.get('/my-awesome-api')
.then(onFulfilled, onRejected)
.then(onFulfilled, onRejected)
.catch(onRejected)
.then(onFulfilled);
```
Instead of passing in `null` on that last line we can get rid of it.

and if all we wanna do is pass in an `onRejected` handler in the 3rd line, we can use some _syntactic sugar_ (love this line) and put catch there instead, and get rid `null`

Thats it.

The Promise API is very simple and theres not a lot of methods that you have to learn. But there are a couple of usefull ones...


# `.all()`

```js
var ajax = someHelper();
Promise.all([
    ajax.get(`my-awesome-api`),
    ajax.get(`your-awesome-api`),
    ajax.get(`their-awesome-api`),
])
.then(allFulfilled, firstRejected)
```

The first of these methods is called `all()`, is kind of a static method. Its pretty much all or nothing. How it works is 

* you pass in an array of promises, in this case we're doing 3 different _gets_ to my Api, your API and their API.

* When using `all()`, like we do here, these three promises will be resolved and only one result or rejected reason will be returned

* so if any one of these promises rejects, the first rejection we get will be passed into this `then()` handler to the `firstRejected`. 

* But if they all fulfill properly then their values will be passed into the `allFulfilled` as an array and the order of values will be in the same order as we executed the promises in the `all()`.

This is a great mechanism if you're trying to parallelize some computing.

# `.race()`

There's one other method on the Promise type and that is `race()`. Again we pass an array of promises, but here

* the first promise to be fulfilled will be passed to the `firstFulfilled` or the first one to reject will be passed to `firstRejected`.

```js
var ajax = someHelper();
Promise.race([
    ajax.get(`my-awesome-api`),
    ajax.get(`your-awesome-api`),
    ajax.get(`their-awesome-api`),
])
.then(allFulfilled, firstRejected)
```
There's one other method on the Promise type and that is `race()`. Again we pass an array of promises, but here the first promise to be fulfilled will be passed to the `firstFulfilled` or the first one to reject will be passed to `firstRejected`. So this is a great way as the name implies, to raise a few different server calls or io operations and use the first one to return results.

Shweeeeeeeeeet.

#### API's built into node and the browser that return promises for you...

* Battery
* StorageQuota
* Font Loading
* Web MIDI
* Streams
* Fetch
* Service Worker
* Cache
* & many other ones

Promises are the backbone in which asynchrony will be built moving forward.

See ya

Resources

[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)