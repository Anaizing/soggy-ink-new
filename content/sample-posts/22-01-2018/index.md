---
title: " Module Formats-Day 19"
cover: "https://images.unsplash.com/photo-1483213097419-365e22f0f258?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e88da1d97339e40683ada077dd34b86a&auto=format&fit=crop&w=750&q=80"
date: "22/01/2018"
category: "javascript"
tags:
    - javascript
    - design patterns
    - module
---

#### 15 min read...

![two one way signs pointing in different directions](https://images.unsplash.com/photo-1483213097419-365e22f0f258?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e88da1d97339e40683ada077dd34b86a&auto=format&fit=crop&w=750&q=80)

So if you read [book](), you'd know Javascript has a pretty long selection of design patterns, not all of which are depicted in Addy's book, although its a fantastic point of reference. 

```css
* JavaScript Design Patterns
    * Constructor Pattern
    * Module Pattern
    * Revealing Module Pattern
    * Singleton Pattern
    * Observer Pattern
    * Mediator Pattern
    * Prototype Pattern
    * Command Pattern
    * Facade Pattern
    * Factory Pattern
    * Mixin Pattern
    * Decorator Pattern
    * Flyweight Pattern
* JavaScript MV* Patterns
    * MVC Pattern
    * MVP Pattern
    * MVVM Pattern
* Modern Modular JavaScript Design Patterns
    * AMD
    * CommonJS
    * ES Harmony
* Design Patterns In jQuery
    * Composite Pattern
    * Adapter Pattern
    * Facade Pattern
    * Observer Pattern
    * Iterator Pattern
    * Lazy Initialization Pattern
    * Proxy Pattern
    * Builder Pattern
```

<br>


Today Im just gonna focus on one aspect of it, MODULES. Or as Addy calls them "Modern Modular JavaScript Design Patterns", although he only covers 3 of these in the book.

Within Module Formats lie a few favorite and also some outdated options. Out of those i'll cover 5 you should be aware of.

In case you dont know what modules are, its basically a way to organize your code, by splitting it up into small folders containing separate concerns. Its not a complex topic despite  the extravagant names these module formats have. And the different module formats are basically different ways in which the separate concerns (small chunks of code) relate to eachother. Theres always more than one way to skin a cat in Javascript.

You basically need to think about how to design your software so that the proper separation of responsabilities is in place. Generally refering to UI's and API's

Watch out for opinions...

# 5 Module Formats

    1. IIFE

    2. Asynchronous Module definition (AMD)

    3. CommonJS (CJS)

    4. Universal Module Definition (UMD)

    5. ES6 Modules



<br>

# IIFE

`IIFE` Javascript modules are a design pattern that allow you to encapsulate your code into smaller self managing pieces. It stands for `Immediately Invoked Function Expression`, aka Classic Module Pattern. Codified most noteably by Doug Crockford in the early 2000's.

```js
1   var foo = (function() {
2
3       var o = { bar: "bar"};
4
5       return {
6           bar: function() {
7               console.log(o.bar);
8           }
9       };
10
11   })();
12
13   foo.bar();
```

<br>


* As you can see that we have an outer enclosing function that starts on line 1 and executes itself on line 11
* Inside the function when we declare a variable, or if we were to make a function declaration, by default all of those are lexically hidden scope wise from the rest of the outside world.
* the only stuff thats available to see from the outside world is whatever we put in the object on line 5
* this object we return which gets pointed at by the foo variable, represents the public API for this module. It is the stuff we choose to expose
* everything else stays hidden.

As you know writing code on the Global scope is the devil and should be avoided at all costs, so thats basically how IIFEs came into existence, to save us from ourselves.


# Asynchronous Module  definition (AMD)

The AMD format is a way of defining modules where both the module and dependencies can be asynchronously loaded. Its all about `define()` and `require()`, these two methods work similarly to export and import, where you have different files that come together in the end via the paths created by `define()` & `require()`. To oversimplify it, its a filing system.

* `define()`- takes in 3 arguments, Module_id (which is optional), an array of `[dependencies]`, and a `function` to instantiate the module/ object.

Check out the sudo code

```js
// A module_id (myModule) is used here for 
//demonstration purposes only
define( "myModule",
 
    ["foo", "bar"],
 
// module definition function
// dependencies (foo and bar) are mapped to 
//function parameters
    function ( foo, bar ) {
// return a value that defines the module export
// (i.e the functionality we want to expose 
//for consumption)
 
        // create your module here
        var myModule = {
            doStuff: function () {
                console.log( "Yay! Stuff" );
            }
        };
 
    return myModule;
});
 
// An alternative version could be..
define( "myModule",
 
    ["math", "graph"],
 
    function ( math, graph ) {
 
 /* Note that this is a slightly different 
 pattern. With AMD, it's possible to define 
 modules in a few different ways due to it's 
 flexibility with certain aspects of the 
 syntax */
        return {
            plot: function( x, y ){
                return graph.drawPie( 
                    math.randomGrid( x, y ) );
            }
        };
});
```

<br>


* `require()`-is typically used to load code in a top-level JavaScript file or within a module should we wish to dynamically fetch dependencies.

more sudo code

```js
/* Consider "foo" and "bar" are two external 
modules. In this example, the "exports" from 
the two modules loaded are passed as function 
arguments to the callback (foo and bar) so 
that they can similarly be accessed */
 
require(["foo", "bar"], function ( foo, bar ) {
    // rest of your code here
    foo.doSomething();
});
```
For a full blown description read [AMD-A Format For Writing Modular JavaScript In The Browser](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailamd)

# Universal Module Definition (UMD)

 Blends AMD with CommonJS. UMD essentially creates a way to use either of the two, while also supporting the global variable definition. As a result, UMD modules are capable of working on both client and server.

```js

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(['myModule', 'myOtherModule'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory(require('myModule'), 
    require('myOtherModule'));
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory(root.myModule, 
    root.myOtherModule);
  }
}(this, function (myModule, myOtherModule) {
  // Methods
  function notHelloOrGoodbye(){}; // A private method
  function hello(){};   // A public method because it's 
                        //returned (see below)
  function goodbye(){}; // A public method because it's 
                        //returned (see below)

  // Exposed public methods
  return {
      hello: hello,
      goodbye: goodbye
  }
}));
```

<br>

# CommonJS

CommonJS module is a reusable piece of JavaScript which exports specific objects made available to any dependent code. CommonJS is composed of a free variable called `exports` and a `require` function that modules can use to import the exports of other modules. 
* So you create a variable which is passed in `require()` and that takes an argument, this being the file path to the package library. (its basically another filing system)
* at the bottom of your code you place the export variable along with the name of the module you are exporting aka the function name.
* you can add multiple dependencies

sudo time

```javascript
// package/lib is a dependency we require
var lib = require( "package/lib" );
 
// behaviour for our module
function foo(){
    lib.log( "hello world!" );
}
 
// export (expose) foo to other modules
exports.foo = foo;
```

<br>


# ES6 Module

`ES6 Modules` are also known as `ES2015 Modules`, since this was the official name of the 2015 release, which released this feature.
ES6 Modules are `Standardized`- meaning in the future when the platforms you run on have full support for ES6 and modules, you wont have to transpile your code, it also means anyone joining your team is more likely to feel more comfortable with your code.

ES6 modules are great because you cant create them dynamically, although this sounds like a drawback, this was a deliberate design decision because it makes our code statically analyzable, meaning our code can be read and analyzed, in a predictable way because the behavior of our imports can be changed at runtime.
When code can be analyzed this way we get a shit load of benefits, drumroll please...

* Improved autocompletion support since our editor can determine clearly what functions are currently in scope from each module.
* the ability to quickly alert you to valid imports, to functions that dont exist etc
* code fails fast- so you find out about your mistakes more quickly and often in a clearer way
* enable tree shaking, which is just dead code elimination
* easy to read
* you can further clean up your code using named imports, they allow you to easily declare variables that reference pieces of the file that you're importing
* Default exports- which specify clearly how others can consume your module.

Its clear, logical and gorgeous to look at. So its pretty much the tits, and the clear winner

![ballons floating in the sky](https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b807386a6b525bd1e72c613ec138cee&auto=format&fit=crop&w=1350&q=80)

In conclusion, IIFEs, AMDs & UMDs are mostly a thing of the past, you may still use CommonJS if you're writing on Node but the way of the future from here on is `ES6 Modules`. 

Long live ES6 Modules `!`



See ya

Resources


[Building a JavaScript Development Environment By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)
[Learning Javascript Design Patterns By Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)