---
title: " this !!!!-Day 18"
cover: "https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&auto=format&fit=crop&w=1350&q=80"
date: "22/01/2018"
category: "javascript"
tags:
    - javascript
    - ajax
    - asynchronous js
---

#### 20 min read...

![man holding a smoke flame](https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&auto=format&fit=crop&w=1350&q=80)

Lets break `this` the fuck down. Repeat after me "I refuse to listen to one more fucking person tell me how hard or confusing `this` is to learn or understand, I'm just gonna fucking learn it". 

Although I've now messed up my blog post by mentioning it as well, shit. 

`this` is gonna be fun... Ha`!`



# Every* function, while executing, 
# has a reference to its current execution
# context, called `this.`

(The asterisk is for arrow functions, which dont have a `this` keyword)

Did you know that Javascript has 2 pretty funky mechanisms that can be used in parallel with one another?
Not a retorical question, the answer is YES you did. Hint one of these is about `this`. 

Aaaaand there's 4 rules for how the `this` keyword works in Javascript.

# Lexical & Dynamic Scope

These are the two mechanisms I mentioned. So JS has a thing which is kind of like dynamic scope and it also has lexical scope.

`Lexical Scope`-The model by which scopes are nested within eachother.<br>
`Dynamic Scope`-is the `this` keyword

Lexical scope is a fixed, predictable thing, while dynamic scope aka `this` is a dynamic, flexible thing. both of which are at your service, and you can use to your advantage in writing code.

# 4 Rules
There are four rules for how the `this` keyword works in Javascript.
These are solely dependent on `how the function was called`. Not where the function was written, nor where the function is called from. Given, a `this` aware function like the one below...

```js
function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var o2 = {bar: "bar2", foo: foo };
var o2 = {bar: "bar3", foo: foo };

foo();
o2.foo();
o3.foo()
```

#### The only thing that matters is HOW the function was called


# 1-Default binding

If a function does not match any of the other rules, the default is, in non strict mode, the `this` keyword will default to the global object. 

```js
1   function foo() {
2       console.log(this.bar);
3   }
4
5   var bar = "bar1";
6   var o2 = {bar: "bar2", foo: foo };
7   var o2 = {bar: "bar3", foo: foo };
8
9   foo(); //"bar1"
```

* Here the default binding rule kicks in. 
* It looks at the `this` on line 2 and then finds the global variable on line 5. 
* Had this code been in `strict` mode the result stays undefined, it would have tried to do `undefined.bar` which would have thrown an `error`

Strict mode turns this into an error because its almost always a mistake to have a `this` aware function that you call like line 9. And if you do and you accidentally point to the global object, its almost certainly a bug in your program.

# 2-Implicit binding

If the function is called and at the call site there isa context object like we see on line 9 and/or 10.

```js
1   function foo() {
2    console.log(this.bar);
3   }
4
5   var bar = "bar1";
6   var o2 = {bar: "bar2", foo: foo };
7   var o3 = {bar: "bar3", foo: foo };
8
9   o2.foo(); //"bar2"
10  o3.foo(); //"bar3"
```

* Here we call foo in the context of o2. 
* That comes to us from line 6. 
* On line 6 we borrow a reference to the foo function and set that reference directly on o2. 
* By borrowing that reference we can now make the call site look like line 9 and we can implicitly say, call foo `in the context of` o2.
* By borrowing that reference we can now make the call site look like line 9 and we can implicitly say, call foo `in the context of` o2. (I put this is twice because its important)
* same thing for line 10.

That's the implicit binding rule.

This is the important one of the 4 rules and you should be able to pick up on it by taking a quick look at it, and know where the `this` is pointing to.

# 3-Explicit binding

A third way for a function to be called is with the `.call()` or `.apply()` methods. These are explicit bindings.


```js
1   function foo(){
2       console.log(this.bar);
3   }
4
5   bar bar = "bar1";
6   var obj = { bar: "bar2"};
7
8   foo.call(obj);  //"bar2"
```

* Here we are calling foo via the `.call()` method. we could've also used `.apply()`.
* The first `argument` passed to both `call` and `apply` is used as the `this` binding for that function indication.
* Here we are explicitly saying call `foo` and use `obj` as its `this` context.
* which is why we get "bar2"

One of the problems we have is that when we make these `this` aware functions, we may not have any control over how the function is called, this is called "Loosing your `this` binding". So to remedy said problem we introduce a second form of explicit binding which is called `hard binding`, and its applied via the `bind()` method.

Although hard binding helps make our code predictable, the downside is that it also makes our code less flexible/dynamic. Which is the whole point of having a dynamic scoping method aka `this`.

Lets go through 2 more examples of hard binding.

```js
1   function foo() {
2    console.log(this.bar);
3   }
4
5   var obj = {bar: "bar" }
6   var obj2 = {bar: "bar2" }
7
8   var orig = foo;
9   foo = function(){orig.call(obj); };
10
11  foo();          // "bar"
12  foo.call(obj2); // "bar"
```

* If we wanted to create a function that no matter how it was called it had a predictable `this`, we could create a hard bound function like line 11.
* from line 11 we look at how foo is defined in line 9
* its defined to hard code the `.call` into it so that it forceably says use `obj` no matter how you're called
* so then on line 12 if we try to overwrite it just silently ignores that and goes with `obj`
* this pattern of making a function that explicitly hard binds the `this` is ugly and long, so we can use a utility thats built into JS called `.bind()` instead

```js
1   function foo(baz, bam) {
2       console.log(this.bar + " " 
3           + baz + " " + bam);
4   }
5
6   var obj = { bar: "bar" };
7   foo = foo.bind(obj, "baz"); 
8
9   foo("bam"); // "bar baz bam"
```

* On line 7 we make a hard bound version of foo by calling `.bind()`
* and the first argument we pass in, `obj`, is the `this` that it will be hard bound to.
* so now on line 9 it doesnt matter how we call it, its always gonna use the obj as its `this`
* this is a `hard bound function`

So if you need to create a hard bound function out of a `this` aware function, instead of passing in the function itself pass in  a hard bound version of the function. Then you'll know its always gonna be called using  the `this` you wanted it to be called with.



# 4-the `new` keyword

The forth and last aproach to binding a `this` for a function is to use the `new` keyword.

The new keyword has nothing to do with instantiating a class. It does do 4 things when we put it in front of a function call though...

1. It creates a brand new empty object out of thin air.

2. That newly created object gets linked to another object*

3. That newly created object from step 1, gets passed in as the `this` context to the function call.

4. if that function does not already return its own object the new keyword assumes that you meant to return that object that was passed in, so it implies a return `this`.

#### So the fourth and final way to make a `this` keyword point at something is to use the `new` keyword to create an object for it to point to.

# order of precedence

As you may have guessed, you could have several of these 4 rules applied in one go. So which one wins out?? Here's the questions you need to ask yourself to figure that out, in this exact order.

1. Is the function called by `new`? If so use the newly created object

2. If not, is the function called by `call()` or `apply()`? If so use the explicitly provided object as the `this` context.

Note that `bind()` uses `apply()` under the covers

3. If not, was it called with a context object? If so use that context object. (like the o2 we used above in implicit binding)

4. Last rule, DEFAULT to the `global` object (except in `strict` mode which will just cause an `error`)

That's it`!` Those 4 rules in that order... 

![man with arms stretched out and confetti falling over him](https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf0408ee4eba2cb1650fa5e0398f444b&auto=format&fit=crop&w=1350&q=80)

So for example if you were to put a `new` keyword in front of a `hard bound` function, just like the above list says, the new object would take precedence or override the hard binding.

# Arrow Functions

Arrow functions dont have a `this` so they always lexically inherit from their enclosing scope. In other words they could easily end up calling the global scope object if you're not careful.





I hope this closed some gaps for you, I know it did for me`!`


See ya

Resources

[FrontEndMasters- Deep Javascript Foundations By Kyle Simpson](https://frontendmasters.com/courses/javascript-foundations/)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)