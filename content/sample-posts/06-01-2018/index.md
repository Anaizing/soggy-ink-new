---
path: "/Day-3"
date: "2018-01-06T17:12:33.962Z"
title: "Coercion Part1-Day 3"
---
##### 15min read... Coercion in JS/Primitive types/Natives

![a mug saying begin](https://images.unsplash.com/photo-1489533119213-66a5cd877091?dpr=1&auto=format&fit=crop&w=767&h=511&q=60&cs=tinysrgb)

# Coercion in Javascript- Part 1
Coercion can be a flustering topic, however Kyle Simpson has put together a workshop to demystify it. He puts forward the idea that we can all clearly understand even the most magical seeming parts of the language, all we need to do is ask the right questions, find the answers and just try harder to fully understand, because there is no magic.

There is more to coercion than the double equals ==. The == is governed by the "Abstract Equality Comparison Algorithm" in the [ECMA specification](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3), this is pretty much an algorithm in pseudo code explaining the rules behind the ==.

and here it is...

_The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:_

1. _If Type(x) is the same as Type(y), then <br>_
_a. If Type(x) is Undefined, return true.<br>_
_b. If Type(x) is Null, return true.<br>_
_c. If Type(x) is Number, then<br>_
    _i. If x is NaN, return false.<br>_
    _ii. If y is NaN, return false.<br>_
    _iii. If x is the same Number value as y, return true.<br>_
    _iv. If x is +0 and y is −0, return true.<br>_
    _v. If x is −0 and y is +0, return true.<br>_
    _vi. Return false.<br>_
_d. If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.<br>_
_e. If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.<br>_
_f. Return true if x and y refer to the same object. Otherwise, return false._
2. _If x is null and y is undefined, return true._
3. _If x is undefined and y is null, return true._
4. _If Type(x) is Number and Type(y) is String,
return the result of the comparison x == ToNumber(y)._
5. _If Type(x) is String and Type(y) is Number,
return the result of the comparison ToNumber(x) == y._
6. _If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y._
7. _If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)._
8. _If Type(x) is either String or Number and Type(y) is Object,
return the result of the comparison x == ToPrimitive(y)._
9. _If Type(x) is Object and Type(y) is either String or Number,
return the result of the comparison ToPrimitive(x) == y._
10. _Return false._

# Primitive types
The following are the types that are defined in Javascript

    undefined
    string
    number
    boolean
    object
    function
    null- has a bug

there are intrinsic differences in how we use these values

#### typeof primitive types
With this operator we can call typeof something and get some value back. Javascript has _value_ types (not variable types like some other languages)

```js
typeof foo;     //'undefined'
typeof 'foo';   //'string'
typeof 123;     //'number'
typeof true;    //'boolean'
typeof {a:1};   //'object'
typeof function(){alert(e)}; //'function'
typeof null;    //'object'-this is a bug
```

Example

```js
var foo;
typeof foo;     //'undefined'
var bar = typeof bar;   
bar;            //'undefined'
typeof bar;     //'string'
//(because bar='undefined')
typeof typeof2; //'string'
//(because typeof2='number'=a string)
```

### Special values
Within the primitive types there are a few special values...

* NaN - ('not a number')
* Infinity, -Infinity
* null
* undefined (void)
* +0, -0

#### NaN

NaN is not equal to itself, it is the only value in the language that is _not equal to itself_. It is specified in such a way that, it is not equal to any other value so you cant directly test for it

```js
var a = 'a'/2;

a;          //NaN
typeof a;   //'number'
isNaN(a);   //true

isNaN('foo');   //true ?bug
```

* typeof NaN is 'number', because NaN is a number value that means _invalid number_ and typeof invalid number is 'number'
* this global utility was added to the language in ES3- isNaN, you're supposed to be able to pass a value to it and it returns true if you have NaN and false if not BUT there is a long standing bug that this rule does not work because(uses the literal meaning, or the transliteral acronym) it return true if the value is Not A Number. So you cant actually test for NaN with isNaN.

So how do we test for NaN??

```js
if (!Number.isNaN) {
    Number.isNaN = function(num) {
        return (
            typeof num === 'number' &&
            window.isNaN(num)
            )
    }
}
```

 a better way of creating this polyfill

```js
if (!Number.isNaN) {
     Number.isNaN = function(num) {
         return num !== num;
     };
}
```

#### Infinity, -Infinity

Because we have a finite number in computers that has only so many bits, you get infinity(positive) when you multiply big numbers that result in a number bigger than that finite number. Also any number divided by 0 will result in Infinity(positive)

eg.

```js
e^302*e^405 // Infinity
66/0 // Infinity
-3/0 // -Infinity.
```

#### null

The null type is defined as having one and only one value, the null value. It is a keyword, that you can use in your programs.

#### undefined(void)

Undefined is not a keyword, its an identifier. It was a variable that you could set a value  to, until ES5.1 where it became protected in 'strict mode' and you are no longer allowed to set a value to it. The void operator is a special operator, if you put any value with void eg. void function, void 42, void a etc you will get back the undefined value.

#### +0, -0<br>
There is a positive 0 and also a negative 0 in JS, Although the language does a good job of hiding -0 it is very much there.

```js
var foo = 0/3;
foo === -0;         //true
foo === 0;          //true
0 === -0;           //true
(0/-3) === (0/3);   //true

foo;                // 0 (varies in browsers)
```

# Natives
Although people disagree on their name, Natives shouldn't be called _types_ because they don't behave the same way as their corresponding lower case version.

* String()
* Number()
* Boolean()
* Function()
* Object()
* Array()
* RegExp()
* Date()
* Error()

Exercise 1
Have a look see if you can figure these out...

```js
1 var foo = new String('foo');
2 foo;                    // ?
3 typeof foo;             // ?
4 foo instanceof String;  // ?
5 foo instanceof string;  // ?
6
7 foo = String('foo');     
8 typeof foo;             // ?
9
10 foo = new Number(37);
11 typeof foo;             // ?
```

Depending on the browser you're using you will get different answers for line 2. Eg.<br>
old firefox // "foo"<br>
chrome  // String {"foo"}<br>
new firefox // String { "foo" }<br>
line 3 gives "object"<br>
line 4 gives you true<br>
line 5 is nonsence, so it gives a Ref error<br>

line 8 gives you "string"<br>

line 11 gives you "object"<br>

_The purpose of a String native is to do type coercion_
Therefore the best use of these Natives is line 7 &b 10, where they are being properly used for coercion.

Exercise 2

```js
1 var foo;
2
3 foo = new Array(1,2,3); // Dont!
4
5 foo = [1,2,3];          // Do!
6
7 foo = new Object();     // Dont!
8 foo.a = 1;
9 foo.b = 2;
10 foo.c = 3;
11
12 foo = {a:1, b:2, c:3};  // Do!
```

You can create a new Array or Object by putting the _new_ keyword in front however YOU SHOULDNT. This method of creating a new array as seen on lines 3 & 7 is called the _constructor form_, the preferred way is line 5 & 12, this is called the _literal form_, or _bracket literal form_

Exercise 3

```js
var foo;
foo = new RegExp("a*b", "g");

foo = /a*b/g;

foo = new Date()
```

Line 3 is a dynamic regular expression, and its not resolved until runtime and are less performant.
# Coercion
The way coercion happens is from one value type to another value type, when we have one value type and something requires it to be represented in a different value type. The way that happens from the perspective of the specification is that we have defined a set of _Abstract Operations_

...TO BE CONTINUED


![neon sign saying you'll get it eventually](https://images.unsplash.com/photo-1503256575996-7cbe509190b7?auto=format&fit=crop&w=1189&q=80)

Resources include

* [YDKJS book 4/ch4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

* [Kyle Simpson's FrontEndMasters coercion in JS course ](https://frontendmasters.com/courses/javascript-coercion/)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
