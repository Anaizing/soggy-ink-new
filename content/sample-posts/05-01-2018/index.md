---
path: "/Day-2"
date: "2018-01-05T17:12:33.962Z"
title: "Still here-Day 2"
---
##### 10min read... The Why/Mutator functions/Iterator functions.

# The Why

Welcome to day 2. So I should probably mention the reason I'm actually writing this blog. Aside from the obvious and unoriginal self indulgence that comes with the territory, I've decided, like many before me, to embark on the [#100DaysOfCode challenge](https://medium.freecodecamp.org/join-the-100daysofcode-556ddb4579e4). For those of you that are not familiar, the rules are pretty simple; you must code for at least an hour everyday for 100 days, you must tweet daily about your progress and thoughts, you must support other people doing the challenge.

Pretty easy right. I mean think about it, 100 days of anything will make you pretty fucking good at anything (except maybe being a doctor), but more than that it'll help you create new habits, and to a latecomer developer a bit of maintained focus never goes unrewarded. So I've devised a plan, with three main areas.

* Building a Blog-with daily entries
* Building my interactive/fun/creative/very fucking cool Portfolio Website
* Building my Progressive Web App Passion Project

I figure with the daily blog ill end up with a fountain of resources as well as solidifying my lessons. I want a better more interesting portfolio and I think ill have a lot of fun building it, and then there's my passion project. I've wanted to learn more about progressive web apps for a while now and what better way to learn than to build one, plus I have this idea for an app that hasn't yet been built here in Australia. I'm not concerned with anyone stealing my idea(might not be any good), relying on the fact that no one will probably ever read this anyway, HA!

What better way to start the new year right!, my new years resolution on the other hand is a bit more "you fucking wish" like, wait for it...
To become a snowboard instructor.
It might be a bit difficult since I've not yet ever seen snow in my life. But hey, gotta aim high.

![snowboarder on his knees](https://images.unsplash.com/photo-1486335223442-a034129506f6?auto=format&fit=crop&w=750&q=80)
###### _Photo by Ostap Senyuk on Unsplash_

That was a way bigger spiel than I had expected, if you're still reading, sucked in haha. Oh fun fact, I completely broke my blog app, could not figure out how to fix it so I started again from scratch. On the plus side, I can now build one of these with my eyes closed in a very short period of time.

# Mutator Functions- Javascript
Now for the good stuff, I thought I should start with some basics...
Mutator functions allow you to modify the contents of an array without referencing the individual elements.
### push()
Adds elements to the end of an array

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
console.log(fruits)
// [Banana,Orange,Apple,Mango,Kiwi,LemonPineapple]

var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers)
// [1, 2, 3, 4]
```

### unshift()
Adds elements to the beginning of an array

```js
var fruits = ["Banana", "Orange", "Apple","Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
// [Lemon,Pineapple,Banana,Orange,Apple,Mango]
var a = [1, 2, 3];
a.unshift(4, 5);
console.log(a);
// [4, 5, 1, 2, 3]
```


### shift()
Removes an element from the beginning of an array

```js
var fruits = ["Banana", "Orange", "Apple","Mango"];
fruits.shift();
console.log(fruits);
// [Orange,Apple,Mango]
var a = [1, 2, 3];
var b = a.shift();
console.log(a);
// [2, 3]
console.log(b);
// 1
```

### pop()
Removes an element at the end of an array

```js
var plants = ['cauliflower', 'cabbage', 'kale' 'tomato'];
console.log(plants.pop());
// "tomato"
console.log(plants);
// ["cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// ["cauliflower", "cabbage"]
```

### splice()
Can remove or add elements, takes three arguments
* The starting index(where you want to begin adding elements)
* The number of elements to remove(0 when you are adding elements)
* The elements you want to add to the array

```js
var fruits = ["Banana", "Orange", "Apple","Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// [Banana,Orange,Lemon,Kiwi,Apple,Mango]
var myFish = ['angel', 'clown', 'mandarin','sturgeon'];
myFish.splice(2, 0, 'drum');
// insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum","mandarin", "sturgeon"]
myFish.splice(2, 1); /
/ remove 1 item at 2-index position (that is,"drum")
// myFish is ["angel", "clown", "mandarin","sturgeon"]
```

### join()
Joins the elements of an array into a string, and returns the string. Takes a separator as an argument. The default separator is comma (,).

```js
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join());
// Fire,Wind,Rain
console.log(elements.join(''));
// FireWindRain
console.log(elements.join('-'));
// Fire-Wind-Rain
```


### reverse()
Reverses the order of the elements in an array

```js
var a = ['one', 'two', 'three'];
a.reverse();
console.log(a);
// ['three', 'two', 'one']
```

### sort()
Sorts data lexographically, sorts the elements of an array into order,

works well with strings

```js
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']
```

less so with numbers

```js
var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and
//'0' so '10' is before '2' in Unicode code point order
var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
```

# Iterator Functions- Javascript
These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array

#### _Non-Array-Generating Iterator Functions_
These do not generate an new array, instead they perform an action on each element of an array or generate a single value from an array.

### forEach()
This function takes a function as an argument and applies the called function to each element of an array

```js
function square(num){
    print(num, num*num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
//Output will be...
1 1
2 4
3 9
4 16
2 25
3 36
7 49
8 64
9 81
10 100
```

### every()
Applies a Boolean function to an array and returns true if the function can return true for every element in the array

```js
function isEven(num) {
    return num % 2== 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
    print('all numbers are even');
} else {
    print('not all numbers are even');

// 'all numbers are even'
```

### some()
Will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function.

```js
function isEven(num) {
    return num % 2== 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
    print('some numbers are even');
} else {
    print('no numbers are even');
}
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if(someEven){
    print('some numbers are even')
} else {
    print('no numbers are even');

// Output will be
'some numbers are even'
'no numbers are even'
```

### reduce()
Applies a function to an accumulator and the successive elements of an array until the end of an array is reached, yielding a single value.

```js
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
print(sum);
// 55
```

the reduce() function in conjunction with the add() function, works from left to right, computing a running sum of the array elements, like This

```js
add(1,2) -> 3
add(3,3) -> 6
add(6,4) -> 10
add(10,5) -> 15
add(15,6) -> 21
add(21,7) -> 28
add(28,8) -> 36
add(36,9) -> 45
add(45,10) -> 55
```

### reduceRight()
Works similarly to reduce() only working from the right hand side of the array to the left, instead of from left to right.

```js
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ['the', 'quick', 'brown', 'fox'];
var sentence = words.reduceRight(concat);
print(sentence);
// 'fox brown quick the'

#### _Iterator Functions that return a new Array_
There are two iterator functions that return new arrays
```

### map()
The map function works like the forEach() function, applying a function to each element of an array. The difference between the two is that map() returns a new array with the result of the function application

```js
function curve(grade) {
    return grade += 5;
}
var grades = [77,65,81,92,83];
var newGrades = grades.map(curve);
print(newGrades);
// [82, 70, 86, 97, 88]
```

Here is an example using strings

```js
functin first(word) {
    return word[0];
}
var words = ['for', 'your', 'information'];
var acronym = words.map(first);
print(acronym.join(''));
// 'fyi'
```


### filter()
Works similarly to every(), but instead of returning true if all the elements of an array satisfy a Boolean function, the function returns a new array consisting of those elements that satisfy the Boolean function.

```js
function isEven(num) {
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i+1;
}
var evens = nums.filter(isEven);
print('Even numbers: ');
print(evens);
var odds = nums.filter(isOdd);
print('Odd numbers: ');
print(odds);
// Output will be
Even numbers:
2,4,6,8,10,12,14,16,18,20
Odd numbers:
1,3,5,7,9,11,13,15,17,19
```

We can also use filter() with strings, here is an example that applies the spelling rule "i before e except after c"

```js
function afterc(str) {
    if (str.indexOf('cie') > -1) {
        return true;
    }
    return false;
}
var words = ['recieve', 'deceive', 'percieve', 'deceit', 'concieve'];
var misspelled = words.filter(afterc);
print(misspelled);
// recieve, percieve, concieve
```



Resources include

* [Data Structures & Algorithms With Javascript](https://www.amazon.com/Data-Structures-Algorithms-JavaScript-approaches/dp/1449364934) book

* [MND web docs](https://developer.mozilla.org/en-US/)

* [W3Schools.com](https://www.w3schools.com/js/default.asp)


![Data Structures book cover](https://images-na.ssl-images-amazon.com/images/I/51Z-bQzDZsL._SX379_BO1,204,203,200_.jpg)


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)