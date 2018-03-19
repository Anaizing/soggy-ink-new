---
title: "A List ADT -Day 16"
cover: "https://images.unsplash.com/photo-1461411250718-4b4a5c0b270a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7acd92157777d244d620a2f87d05f38d&auto=format&fit=crop&w=737&q=80"
date: "19/01/2018"
category: "Data Structures"
tags:
    - javascript
    - data structures
    - lists
---

#### 15 min read...

![a line of people](https://images.unsplash.com/photo-1461411250718-4b4a5c0b270a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7acd92157777d244d620a2f87d05f38d&auto=format&fit=crop&w=737&q=80)

Lets dip our toe in the fun pool that is data structures. The backbone of programing...

# A List ADT

An ADT stands for Abstract Data Type. A list is an ordered sequence of data. Each data item stored in a list is called an _element_. In Javascript the elements of a list can be of any data type. There is no predetermined number of elements that can be stored in a list, though the practical limit will be the amount of memory available to the program using the list.

A list with no elements is an _empty_ list. The number of elements stored in a list is called the _length_ of the list. Internally the number of elements in a list is kept in a `listSize` variable. You can _append_ an element to the end of a list, or you can _insert_ an element  into a list after an existing element or at the beginning of a list. Elements are deleted from a list using a _remove_ operation. You can also _clear_ a list so that all of its current elements are removed.

The elements of a list are displayed using either a `toString()` operation, which displays all the current elements, or with a `getElement()` operation, which displays the value of the _current_ element.

Lists have properties to describe location. There is the _front_ of a list and the _end_ of a list. You can move from one element of a list to the next element using the `next()` operation, and you can move backward through a list using the `prev()` operation. You can also move to a numbered position in a list using the `moveTo(n)` operation, where _n_ specifies the position to move to. The `currPos` property indicates the current position in a list.

_The List ADT does not specify a storage function for a list, but for our implementation will use an array named `dataStore`_

### ADT List

`listSize`(property)    Number of elements in list<br>
`pos`(property)         Current position in list<br>
`length`(property)      Returns the number of elements in list<br>
`clear`(function)       Clears all the elements from list<br>
`toString`(function)    Returns string representation of list<br>
`getElement`(function)  Returns element at current position<br>
`insert`(function)      Inserts new element after existing element<br>
`append`(function)      Adds new element to end of list<br>
`remove`(function)      Removes element from list<br>
`front`(function)       Se7ts current oposition to first element of list<br>
`end`(function)         sets current position to last element of list<br>
`prev`(function)        Moves current position back one element<br>
`next`(function)        Moves current position forward one element<br>
`currentPos`(function)  Returns the current position list<br>
`moveTo`(function)      Moves the current position to specified position.<br>

# A List Class Implementation

A list class implementation can be taken straight from the list ADT above. here is a definition of a constructor function, though its not part of the ADT

```js
function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = []; //initializes an empty array
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
   this.contains = contains;
```

# Adding an element lto a list-`append()`

With the `append()` function we can add a new element to the list at the next available position, which will be equal to the value of the `listSize` variable.

```js
function append(element) {
this.dataStore[this.listSize++] = element;
}
```

After the element is added, `listSize` is incremented by 1

# Removing an element from a list-`remove()`

`remove()` is one of the harder functions to implement in the _List_ class. Fist we have to find the element in the list so we can then remove it and adjust the space in the underlying array to fill the hole by removing an element.

* We can make it easier by using the `splice()` mutator function.

* Lets start by defining a helper function `find()`, to find the element we'll remove.

```js
function find(element) {
for (var i = 0; i < this.dataStore.length; ++i) {
if (this.dataStore[i] == element) {
return i;
}
}
return -1;
}
```

# Finding an element in a list-`find()`

```js
function remove(element) {
var foundAt = this.find(element);
if (foundAt > -1) {
this.dataStore.splice(foundAt,1);
--this.listSize;
return true;
}
return false;
}
```

* The `find()` function iterates through our `dataStore` looking for the specified element. 

* If the element is found, the function returns the position where the element was found.

* If the element wasnt found the, the function returns -1, which is a standard value to return when an element cant be found in an array.

* We can use this value for _error checking_ in the `remove()` function.

* The `remove()` function uses the position returned by `find()` to splice the `dataStore` array at that place.

* after the array is modified, `listSize` is decremented by 1 to reflect a new size of the list.

* the function returns `true` if an element is removed, and `false` otherwise.

# Determining the number of elements in a list-`length()`

The `length()` function returns the number of elements in a list.

```js
function length() {
return this.listSize;
}
```

# Retrieving a list's elements-`toString()`

This is a simple toString function

```js
function toString() {
return this.dataStore;
}
```
Strictly speaking, this function returns an array object and not a string, but its utility is
in providing a view of the current state of an object, and just returning the array works
adequately for this purpose.

# Testing

lets see how our program is working

```js
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.toString());
names.remove("Raymond");
print(names.toString());

//[Cynthia,Raymond,Barbara]
//[Cynthia,Barbara]
```
looks good!

# Inserting an element into a list-`insert()`

What if after removing Raymond (above^^) we wanted to put him back in.An
insertion function needs to know where to insert an element, so for now we will say that
insertion occurs after a specified element already in the list. With this in mind, here is
the definition of the `insert()` function.

```js
function insert(element, after) {
var insertPos = this.find(after);
if (insertPos > -1) {
this.dataStore.splice(insertPos+1, 0, element);
++this.listSize;
return true;
}
return false;
}
```

* `insert()` uses the helper function `find()` to determine the right insertion position for the new element by specified in the `after` argument.

* once this position is found, we use `shift()` to insert the new \element into the list

* then we increment `listSize` by 1 and return `true` to show the insertion wa successful.

# Removing all elements from a list-`clear()`

Now, we need a function to clear out the elements of a list and allow new elements to
be entered

```js
function clear() {
delete this.dataStore;
this.dataStore = [];
this.listSize = this.pos = 0;
}
```

* The `clear()` function uses the `delete` operator to delete the `dataStore` array

* and the next line re-creates the empty array.

* The last line sets the values of `listSize` and `pos` to 0 to indicate the start of a new list.

# Determining if a given value is in a list-`contains()`

The `contains()` function is useful when you want to check a list to see if a particular
value is part of the list.

```js
function contains(element) {
for (var i = 0; i < this.dataStore.length; ++i) {
if (this.dataStore[i] == element) {
return true;
}
}
return false;
}
```

# Traversing a List

This final set of functions allows movement through a list, and the last function,
`getElement()`, displays the current element in a list.

```js
function front() {
this.pos = 0;
}
function end() {
this.pos = this.listSize-1;
}
function prev() {
if (this.pos > 0) {
--this.pos;
}
}
function next() {
if (this.pos < this.listSize-1) {
++this.pos;
}
}
function currPos() {
return this.pos;
}
function moveTo(position) {
this.pos = position;
}
function getElement() {
return this.dataStore[this.pos];
}
```

Let’s create a new list of names to demonstrate how these functions work

```js
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
```

Now let’s move to the first element of the list and display it

```js
names.front();
print(names.getElement()); 

// displays Clayton
```

Next, we move forward one element and display the element’s value.
```js
names.next();
print(names.getElement()); 

// displays Raymond
```

Now we’ll move forward twice and backward once, displaying the current element to show how the prev() function works.

```js
names.next();
names.next();
names.prev();
print(names.getElement()); 

// displays Cynthia
```

The behavior we’ve demonstrated in these past few code fragments is captured in the concept of an iterator. Lets have a look...

# Iterating through a List

An iterator allows us to traverse through a list without referencing the internal storage mechanism of the _List_ class. The functions `front()`, `end()`, `prev()`, `next()`, and `currentPos` provide an implementation of an iterator for our List class. Some advantages of using iterators over using array indexing include...

* Not having to worry about the underlying data storage structure when accessing list elements

* Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list

* Providing a uniform means of accessing elements for different types of data stores used in the implementation of a _List_ class

With these advantages in mind, here is how to use an iterator to traverse through a list

```js
for(names.front(); 
names.currPos() < names.length(); 
names.next()) {
print(names.getElement());
}
```

* The for loop starts by setting the current position to the front of the list.
* The loop continues while the value of currPos is less than the length of the list. Each time through the loop
* the current position is moved one element forward through the use of the `next()` function.

We can also traverse a list backward using an iterator. Like so

```js
for(names.end(); 
names.currPos() >= 0; names.prev()) {
print(names.getElement());
}
```

* the loop starts at the last element of the list and moves backwards using the `prev()` function while the current position is greater than or equal to 0

Iterators are used only to move through a list and should not combined with any functions for adding or removing items from a list.

# The End


See ya

Resources

[Data Structures & Algorithms with Javascript](https://www.amazon.com/Data-Structures-Algorithms-JavaScript-approaches/dp/1449364934)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)