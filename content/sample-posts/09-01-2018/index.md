---
path: "/Day-6"
date: "2018-01-09T17:12:33.962Z"
title: "JS Terminology-Day 6"
---
##### 10min read... JS Terminology


# JS Terminology

Here goes a random bunch of JS terminology., Mainly stuff thats not super obvious at first glance. If you have any issues with my definitions, let me know [@Anaizing](https://twitter.com/), or just feel free to follow me ;)

![](https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1500&q=80)

### Promise

A `Promise` is an object which represents an action that hasn't finished yet, but will do somewhere down the line. Its a placeholder for the result of some asynchronous operation, like a http request. As soon as that http request is made it returns a promise straight away, before the data is retrieved and brought back to us. Within that `promise` object, we can register callbacks which will run when the request completes.

### Closure

Closure is when a function remembers its lexical scope even when that function is executed outside of that lexical scope.

Closure is the ability of a function to remember and to continue to access the variables surrounding it in lexical scope, even if you take that function and pass it elsewhere or return it and it executes in an entirely different scope.

### Coercion

Converting a value from one type to another is often called "type casting," when done explicitly, and "coercion" when done implicitly (forced by the rules of how a value is used). There is more to coercion than the double equals ==. The == is governed by the "Abstract Equality Comparison Algorithm" in the [ECMA specification](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3), this is pretty much an algorithm in pseudo code explaining the rules behind the ==.

### Explicit coercion

Explit coercion is when it is _obvious_ from looking at the code that type coercion is happening.

### Implicit coercion

Implicit coercion refers to type coercion hapenning in your code that is not as obvious. Also known as "type casting"

### Mutability

Refers to the ability of values to be "Mutated" aka modified. So if a value is `Immutable` means it cannot be modified and if its `Mutable` means it can. In programming, we use the word to mean objects whose state is allowed to change over time. An immutable value is the exact opposite – after it has been created, it can never change.

A mutable object is an object whose state can be modified after it is created. Some examples are objects, arrays, functions, classes, sets, and maps.

Immutables are the objects whose state cannot be changed once the object is created. Examples are numbers and strings

### Recursion

Recursion in JS refers to a function inside a function calling on the outer function in a sort of never ending loop. Like when you stand bewteen two mirrors that endlesly refect eachother, then you realise you've been staring at it for half an hour. (JUST LIKE YOUR CODE!! ha)

Recursion in JavaScript is, simply put, the ability to call a function from within itself. A nice example, if you remember from math class, when you take the factorial of a number, you multiply that number by each number between itself and one. So the factorial of 5 is equal to...

```js
5 * 4 * 3 * 2 * 1, or 120.

--------------------------

function factorial(n) {
    if (n === 0) {
        return 1;
    } 
// This is it! Recursion!!
    return n * factorial(n - 1);
}

factorial (5);
//120
```

### Lexical scope

The model by which scopes are nested within eachother. 

When you talk about Lexical scope its usually in relation to the process of identifying the scope within which a variable belongs to. One metaphor is, looking for an office in an office building, and as you look for the office and cant find it, you keep moving up levels in the building until you do(lexically searching). The way we might search for a variable belonging in each scope then lexically moving to the outter scope until we find where it belongs, the top being the global scope.

However this metaphor gives the impression that lexical scope is being resolved at runntime, which it is not. Because it is a compile type operation that runs at compile time, as in the compiler already figured out _at compile time_ where that variable belongs to.
Confused yet?

### Service workers

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync. In the future, service workers will support other things like periodic sync or geofencing. Used to build progressive web apps PWA.

It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM if needed.

### Web workers 

Web Workers is a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa.) 

### Lazy loading

Lazy loading is a concept where we delay the loading of the object until the point where we need it. Putting in simple words, on demand object loading rather than loading objects unnecessarily.

It's called lazy loading because, like a lazy person, you are putting off doing something you don't want to. The opposite is Eager Loading, where you load something right away, long before you need it.

### Parse

Parsing is to resolve (a bit of code) into its component parts and describe their syntactic roles. Its like your compiler reading a book, the action of reading is parsing.

### Polyfill

A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will.

Eg.A polyfill can be used to plug the support for older browsers that don't provide... [some cool feature we wanna use]. Its another bandaid we use, as we move foward with technology that isent fully supported.

### Callbacks

A function that is passed to another function as a parameter, aka a high order function.

### Template literals

The lil backticks, on the top left of your keyboard.
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```js
`string text`

`string text line 1
string text line 2`

`string text ${expression} stringtext`

tag `string text ${expression} stringtext`
``` 

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### Array constructor

A new array built by using the `new` keyword and the `Array()` Native, and populating it one index at a time. Not an advised method.

```js
var stuff = new Array();
stuff[0] = 34;
stuff[4] = 20;

// [34, undefined, undefined,undefined, 20]
```

### Array literal

An array built by the preferred method, with a pair of square brackets...

```js
var array = ['I'm', 'an', 'array', 'literal'];
```

When an array is created using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified. If no value is supplied it creates an empty array with zero length.


### Big O notation

Big O informs us of how much slower an algorithm will run if its input grows. If an array gets longer will the runtime of the function stay the same, will it get proportionally larger, will the time get exponentially larger, etc?

### Constant runtime "O(1)"

As this function's size increases  the time it will take to run it, will remain the same.

```js
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}
log ([1,2,3,4]);
log ([1,2,3,4,5,6,7,8,9,10]);
```

### Linear runtime "O(n)"

As our input size increases our runtime will also increase proportionally

```js
function logAll(array) {
    for(var i=0; i< array.length; i++{
        console.log[i];
    }
}
logAll([1,2,3,4,5])
logAll([1,2,3,4,5,6,7,8,9,10])
logAll([1,2,3,4,5,,6,7,8,9,10,11,12,13])
```

### Exponential runtime "O(n^2)"

```js
function addAndLog(array) {
    for (var i=0; i< array.length; i+) {
        for (var j=0; j< array.length j++) {
            console.log(array[i]+array[j]);
        }
    }
}
addAndLog([A,B,C]);     //9 pairslogged out
addAndLog([A,B,C,D]);   //16 pairslogged out
addAndLog([A,B,C,D,E]); //25 pairs logged out
```

These two nested `for loops`, iterate through the array and for each iteration it goes through the whole array and hits on every element again, so all the possible pairs are made. 

So as we add 1 elementto the input the runtime makes an EXPONENTIAL jump. This is not efficient and should be avoided.


### Logarithmic runtime "O(log n)"

A BINARY SEARCH, is an example of Logarithmic Runtime. This method is very efficient.

### Dynamic typing

Some languages emphasize _types_ for values instead of variables. _WEAK TYPING_, otherwise know as _DYNAMIC TYPING_ allows a variable to hold any _type_ of value at any time. It is cited as a benefit for program flexibility, by allowing a single variable to represent a value no matter what type form that value may take at any given moment in the programs logic flow. Javascript uses dynamic typing.

### Control flow

The control flow is the order in which the computer executes statements in a script. Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.


![you got this writen in chalk on the ground](https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?auto=format&fit=crop&w=750&q=80)


Ill post more of these lists as I come across other `not so obvious` terms. Im thinking react terms will be next...


See Ya

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)