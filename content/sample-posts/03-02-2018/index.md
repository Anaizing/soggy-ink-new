---
title: "CSS Animations 31"
cover: "https://images.unsplash.com/photo-1508624789013-65884640dec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99ff9287fd7b903d6dca28a9412d3f49&auto=format&fit=crop&w=1504&q=80"
date: "03/02/2018"
category: "animation"
tags:
    - css
    - animations
    - transforms
    - transitions
    - keyframes
---

Lets look at all the many ways we can begin to make our sites more interesting and interactive, to enhance overall user experience. Starting with CSS animations...

# Transforms

Transform is a CSS property, which can transform your web elements in a bunch of weird and wonderfull ways.

We can use transforms to stretch an element or change the coordinates, skew an element or even rotate it. we can do all this without ever having to alter the normal document flow.

To do this we target the element, put in the transform property and pass it one or more of the corresponding options, depending on what you'd like to do to the element.

## translate
 Moves element across X or Y axis or both, It can also be a negative number to make the element go backwards.
 
```css
img {
    transform: translateY(-200px);
}
```
Here we go up 200px

```css
img {
    transform: translateY(200px);
}
```
Down 200px

```css
img {
    transform: translateX(-200px);
}
```
Left 200px

```css
img {
    transform: translateX(200px);
}
```
Right 200px


However if we put in two values it can move diagonally, the first being the X axis and the second value being the Y axis.
```css
img {
    transform: translate(-200px, 200px);
}
```
So this will move left then up or NorthWest.








Resources

[CSS Animations-by the Net Ninja](https://www.youtube.com/watch?v=PH35-BDak0M&index=2&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)
