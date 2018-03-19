---
title: "WTF is Declarative?-Day 4"
cover: "https://images.unsplash.com/photo-1511548774318-563182fe8d03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=226688553251c9261fa28de062b96b40&auto=format&fit=crop&w=750&q=80"
date: "07/01/2018"
category: "javascript"
tags:
    - javascript
    - ajax
    - asynchronous js
---
##### 3min read... Imperative vs Declarative


![react logo](https://cdn-images-1.medium.com/max/675/1*oi8WLwC2u0EEI1j9uKmwWg.png)

# Imperative vs Declarative

Imperative programming is a programming paradigm that uses statements that change a program’s state.
When you are writing Imperative code you are telling the computer _HOW_ to do something.

```js
//Imperative (HOW)

var numbers = [2,4,3,6];
var total = 0;
for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
```

This is an Imperative way of adding the numbers together because we are going through each step, instructing the computer _HOW_ to run this program, with our for loop.

Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow.
A Declarative approach is more concerned with _WHAT_ we want to have happen.

```js
//Declarative (WHAT)

var numbers = [2,4,3,6];
numbers.reduce(function (previous, current){
    return previous + current;
})
```

Here because reduce is doing something under the hood, we are able to tell reduce _WHAT_ we want to have happen rather than how.

#### Why Declarative
Declarative code has some benefits...

* Reduces Side Effects
* Minimize Mutability
* More readable code
* Less Bugs

A side effect is something you'll hear a lot about in the functional programing world. They refer to; whenever you are modifying state, whenever you are mutating something or whenever you are making an API request. By having declarative code you are reducing the amount of side effects in your code and minimize mutability.
Mutability means if something is able to mutate, immutable is the opposite.

When writing React, it’s often good not to think of _HOW_ you want to accomplish a result, but instead _WHAT_ the component should look like in it’s new state. This sets us up for a good control flow where state goes through a series of predictable and replicable mutations. This doesn’t just apply to components, it also applies to application state.

See Ya

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
