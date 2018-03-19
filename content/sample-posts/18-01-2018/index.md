---
title: "Empty Promises -Day 15"
cover: "https://images.unsplash.com/photo-1470073755300-6ec0f9cfa01c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644f6ac0c5c1568cf26610d934e14635&auto=format&fit=crop&w=755&q=80"
date: "18/01/2018"
category: "javascript"
tags:
    - javascript
    - promises
    - fundamentals
---

#### 15 min read...

![giraffe sticking tongue out](https://images.unsplash.com/photo-1470073755300-6ec0f9cfa01c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644f6ac0c5c1568cf26610d934e14635&auto=format&fit=crop&w=755&q=80)
Just to be clear the only empty promise is the one I made earlier about not making any more blog posts on promises. Ha`!`

# Promise Constructor

The easiest way to look at creating Promises is to begin with how we might build a synchronous API

```js
function example() {
    //do some work...
    if (successful)
        return result;
    else
        throw new Error('It didnt work');
}
```

So we have some example function, we might do some work to calculate a result, if we're successful calculating that result we return it, and otherwise we throw an exception.

If we wanted to return a promise from this API, the first thing we would do is take this function and wrap it up in the `new Promise` constructor...

```js
new Promise (function example(fulfill, reject) {
    //do some work...
    if (successful)
        return result;
    else
        throw new Error('It didnt work');
})
```

Once its wrapped in a `new Promise` constructor, the parameters for the example function are now `fulfill` and `reject`, those are the two callbacks that make promises work.
Now that we have fulfill and reject available to us instead of using the synchronous `return result` statement that we're used to, we instead call `fulfill` passing in the result.

```js
new Promise (function example(fulfill, reject) {
    //do some work...
    if (successful)
        fulfill (result);
    else
        throw new Error('It didnt work');
})
```
and instead of throwing the error, we instead call reject, passing in that error

```js
new Promise (function example(fulfill, reject) {
    //do some work...
    if (successful)
        fulfill (result);
    else
        reject (new Error('It didnt work');
})
```
Thats it. Pretty easy right?!

# shortcut city

In some special situations there are some Promise API's that'll let you take shortcuts

If all you're doing in your constructor is calling the fulfill and passing along some value, you'll never reject if for some reason your code is safe from rejection, then you can instead use the `resolve()` method on promise.

```js
// instead of 
new Promise(function(fulfill, reject) {
    fulfill(someValue);
});

// use
Promise.resolve(someValue);
```

`resolve()` is a static type method like `race()` and `all()`. But you can just say `Promise.resolve()` and pass in some value, and that is exact same as if used a constructor as we did above it.


On the other hand if all you're gonna do is reject passing in some error, then you can call `Promise.reject(someError)`. Now technically `reject()` takes in an object and you can reject anything that you want to but by convention its highly recommended that that object is always an error.

```js
// instead of 
new Promise(function(fulfill, reject) {
    reject(someError);
});

// use
Promise.reject(someError);
```

# a lil louder for the cheap seats

Ok last example. Lets say we have a function that gives us our geographic location, `geolocation` is a feature that most browsers offer, and it has a `getCurrentLocation()` method

```js
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude);
}, function(error){
    console.error(error.message);
});
```

![chrome pop up](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27336809_10159816510795117_5095913736021965314_n.jpg?oh=6ec596b8c76aaef1427a8965c9a56329&oe=5B22ECA4)

Now if you run this in your console you'll get a pop window asking if you want to allow or block  the browser from knowing your location(depending on your settings). Click allow and the console will log will print your location

![geolocation -34.0460194](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27072623_10159816512170117_8370547475061278306_n.jpg?oh=7aeab2ef54c4b906bec537a49a973c44&oe=5AD91730)

Otherwise if you click block you'll get a `user denied Geolocation` print on your console.

![error-user denied geolocation](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/26991937_10159816508385117_7797497115545999816_n.jpg?oh=21b3391b1a14b87c002714c8cc7a9268&oe=5B1C14B0)

Cool. Feel free to follow along on an editor. I promise it gets better...

1. first we'll wrap the code into a function that takes in a fulfill and a reject


```js
function(fulfill, reject) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude);
    }, function(error){
        console.error(error.message);
    });
};
```

2. now with that function, we can wrap it up in the `new Promise()` constructor

```js
new Promise(function(fulfill, reject) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude);
    }, function(error){
        console.error(error.message);
    });
});
```

3. finally we wrap the whole thing in a function we'll call `getCurrentPositionWithPromise(){}`, and we will `return` the promise

```js
function getCurrentPositionWithPromise(){
    return new Promise(function(fulfill, reject) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
        }, function(error){
            console.error(error.message);
        });
    });
}
```

4. Now, where we `console.log` the position, this is our success case, so we will call the `fulfill` handler and we'll pass the `position` instead. And likewise where we `console.log` the error, we will call the `reject` handler and pass in the `error` instead.

```js
function getCurrentPositionWithPromise(){
    return new Promise(function(fulfill, reject) {
        navigator.geolocation.getCurrentPosition(function(position){
            fulfill(position);
        }, function(error){
            reject(error);
        });
    });
}
```


So lets now give it a shot. Let's execute the promise beneath and chuck it on the console.

```js
function getCurrentPositionWithPromise(){
    return new Promise(function(fulfill, reject) {
        navigator.geolocation.getCurrentPosition(function(position){
            fulfill(position);
        }, function(error){
            reject(error);
        });
    });
}

getCurrentPositionWithPromise()
.then(r => console.log(r.coords.latitude) || r)
.catch(r => console.error(r.message));
```

![allow location pop up](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27067690_10159816820295117_8100961055969671214_n.jpg?oh=890a6c5cb69533d60cd4141baa21f662&oe=5B1FDDEE)

Here we can see the console returns a `Promise{}` object


![console prints latitude](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27067681_10159816766425117_7711497833909562363_n.jpg?oh=6cb197f8521038d8f5d47692635dfef5&oe=5B1CEA32)

And if you click on allow you will see the user's latitude printed on the console, and you can even see the PromiseStatus is "resolved"


# refactor time

Like we talked about earlier, since `getCurrentPosition()` on the 3rd line, takes a function that takes in one argument just like fulfill does, we can just tell it to call `fulfill`. And because its error handler takes a function with one argument we can just tell it to `reject`.


```js
function getCurrentPositionWithPromise(){
    return new Promise(function(fulfill, reject) {
        navigator.geolocation.getCurrentPosition(fulfill,reject);
    });
}

getCurrentPositionWithPromise()
.then(r => console.log(r.coords.latitude) || r)
.catch(r => console.error(r.message));
```
Check it still works... mine does and tada, Bob's your uncle

![girl with arms stretched out in joy](https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a335dacc73eae08f2717edfda4652ab&auto=format&fit=crop&w=753&q=80)







See ya
Resources

[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)