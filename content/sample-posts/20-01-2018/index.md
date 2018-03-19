---
title: "Stack it! -Day 17"
cover: "https://images.unsplash.com/photo-1506718468845-7578aa47670b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=058c56f9d18bea58d07c1934e5cd52bd&auto=format&fit=crop&w=750&q=80"
date: "20/01/2018"
category: "Data Structures"
tags:
    - javascript
    - data structures
    - stack
---

![rock stack](https://images.unsplash.com/photo-1506718468845-7578aa47670b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=058c56f9d18bea58d07c1934e5cd52bd&auto=format&fit=crop&w=750&q=80)

Lets do some more data structures, today its all about Stacks. If it sounds familiar you either know what you're doing and probably shouldnt be reading this or you've heard that Javascript has a stack, either way you're doing allright. WooOOooooo  nerd life forever`!`

# Stacks

Lists are a natural form of organization for data. We have already seen how to use the `List` class to organize data into a list ([last blog post](http://soggy-ink.surge.sh/Day-16)). When the order of the data being stored doesn’t matter, or when you don’t have to search the data stored, lists work wonderfully. For other applications, however, plain lists are too simple and we need a more complex, list-like data structure.

A list-like structure that can be used to solve many problems in computing is the _stack_. Stacks are efficient data structures because data can be added or removed only from the top of a stack, making these procedures fast and easy to implement. Stacks are used extensively in programming language implementations for everything from expression evaluation to handling function calls.

# Stack operations

A stack is a list of elements that are accessible only from one end of the list, which is called the top. One common, real-world example of a stack is the stack of trays at a cafeteria. Trays are always removed from the top, and when trays are put back on the stack after being washed, they are placed on the top of the stack. The stack is known as a last-in, first-out (LIFO) data structure. Because of the last-in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed. To get to an element at the bottom of the stack, you have to dispose of all the elements above it first. The two primary operations of a stack are adding elements to a stack and taking elements off a stack. Elements are added to a stack using the `push()` operation. Elements are taken off a stack using the `pop()` operation.

![Stack graph ](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/26993922_10159817189425117_2977734534649133465_n.jpg?oh=13c3650ef41d9fb394bc7c1c1f9485a2&oe=5AD9026C)

Another common operation on a stack is viewing the element at the top of a stack. The `pop` operation visits the top element of a stack, but it permanently removes the element from a stack. The `peek` operation returns the value stored at the top of a stack without removing it from the stack. To keep track of where the top element is, as well as keeping track of where to add a new element, we use a top variable that is incremented when we `push` new elements onto the stack and is decremented when we `pop` elements off the stack. While pushing, popping, and peeking are the primary operations associated with a stack, there are other operations we need to perform and properties we need to examine. The `clear()` operation removes all the elements from a stack. The `length()` property holds the number of elements contained in a stack. We also define an empty property to let us know if a stack has no elements in it, though we can use the `length` property for this as well. 

# A Stack implementation

To build a stack, we first need to decide on the underlying data structure we will use to store the stack elements. We will use an array in our implementation. We begin our stack implementation by defining the constructor function for a Stack class.

```js
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}
```

The array that stores the stack elements is named `dataStore`. The constructor sets it to an `empty array`. The top `variable` keeps track of the top of the stack and is initially set to 0 by the constructor, indicating that the 0 position of the array is the top of the stack, at least until an element is pushed onto the stack. The first function to implement is the `push()` function. When we push a new element onto a stack, we have to store it in the top position and increment the top variable so that the new top is the next empty position in the array. Here is the code.

```js
function push(element) {
    this.dataStore[this.top++] = element;
}
```

Pay particular attention to the placement of the increment operator after the call to `this.top`. Placing the operator there ensures that the current value of top is used to place the new element at the top of the stack before top is incremented. The `pop()` function does the reverse of the `push()` function—it returns the element in the top position of the stack and then decrements the top variable.

```js
function pop() {
    return this.dataStore[--this.top];
}
```

The `peek()` function returns the top element of the stack by accessing the element at the top-1 position of the array.

```js
function peek() {
    return this.dataStore[this.top-1];
}
```

If you call the `peek()` function on an empty stack, you get undefined as the result. That’s because there is no value stored at the top position of the stack since it is empty. There will be situations when you need to know how many elements are stored in a stack. The `length()` function returns this value by returning the value of top.

```js
function length() {
    return this.top;
}
```

Finally, we can `clear` a stack by simply setting the top variable back to 0.

```js
function clear() {
    this.top = 0;
}
```

Lets see a complete implementation of the `Stack` class

```js
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
```

Ok now lets test this implementation

```js
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());

// length: 3
// Bryan
// The popped element is: Bryan
// Raymond
// Cynthia
// length: 0
// undefined
// Clayton
```

The next-to-last value, `undefined`, is returned because once a stack is cleared, there is no value in the top position and when we peek at the top of the stack, `undefined` is returned.

# Palindromes

A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome. We take the original string and push each character onto a stack, moving from left to right. When the end of the string is reached, the stack contains the original string in reverse order, with the last letter at the top of the stack and the first letter at the bottom of the stack.

![stack graph](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27073408_10159817190830117_8860398995799532291_n.jpg?oh=65e07d56c039fb313fc7f7747b5ae016&oe=5AF00791)

_Using a stack to determine if a word is a palindrome_

Once the complete original string is on the stack, we can create a new string by popping each letter the stack. This process will create the original string in reverse order. We then simply compare the original string with the reversed work, and if they are equal, the string is a palindrome.

Now lets look at a program, minus the Stack class code, that determines if a given string is a palindrome.


```js
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
    return true;
    }
    else {
        return false;
    }
}
var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}


// hello is not a palindrome.
// racecar is a palindrome.
```


Once you grasp the concept its not as boring as it seems and its also pretty basic... wax on wax off!













See ya

Resources

[missing]()

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)