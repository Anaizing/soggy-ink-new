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

## Scale

What scale does is just that, scales the element, makes it bigger or smaller. Again we can use scaleX or scaleY or just scale and pass in two values.

```css
img {
    transform: scaleX(1);
}
```
This does nothing, here we are telling it we want a 1:1 scale so it doesnt change.

Above 1 is going to strtch it and below 1 is going to shrink it
```css
img {
    transform: scaleX(3);
}
```
This is going to make it 3 times as big along the x axis.

```css
img {
    transform: scaleX(0.5);
}
```
This will make it twice as small again along the x axis

And we can do the same along the Y axis
```css
img {
    transform: scaleY(0.5);
}
```
This is making the element half its size along the Y axis

Now if we type scale and pass in one number it will scale that amount in both the x and y axis
```css
img {
    transform: scale(4);
}
```
Here the element is 4 times as big on both X and Y axis

If we pass in two numbers, it refers to the x first and the y second
```css
img {
    transform: scale(3, 0.5);
}
```
Now the element is 3times as long and half as tall as it was initially.








Resources

[CSS Animations-by the Net Ninja](https://www.youtube.com/watch?v=PH35-BDak0M&index=2&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)
