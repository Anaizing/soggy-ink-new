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

## Rotate

With Rotate we can use XY or Z axis. However if we rotate along the X or the Y axis, its a bit like a roast pig on a stick, as in that is the direction of the rotation so you wont be able to see it as clearly as the z rotations. Only a small variation in the height of the element. Rotating via the z index will show a clockwise or anti-clockwise rotation.

rotate takes a value of `deg` representing degrees, and it can be a positive value (clockwise) or a negative value (anti-clockwise), the point is anchored from the middle of the element.

```css
img {
    transform: rotateZ(90deg);
}
```
Here the element rotates 90 degrees clockwise

```css
img {
    transform: rotateZ(-90deg);
}
```
Here it rotates 90 degrees ant-clockwise

## mash moves

But to really have some fun we can use more than one of these properties at once. They can be chained together like soo...

```css
img {
    transform: rotateZ(-90deg) translateY(200px);
}
```
Here we rotate the element 90 degrees ant-clockwise, then move it up 200px, which is now technically right, since we rotated it first.

The order of the chaining matters. Had we switched the last two properties around the element would be in a different place.

We can then also make it bigger by adding scale at the end, this works sequentially
```css
img {
    transform: rotateZ(-90deg) translateY(200px) scale(2);
}
```
Here we rotate the element 90 degrees ant-clockwise, then move it up 200px, which is now technically right, since we rotated it first, then we're making it twice as big on both axisesesesss.

# Transitions

Transitions are the simplest way to do a bit of animation on a page, what they do is transition an element from one state to another, in a certain way over a certain amount of time.


The certain way could be;

* linear
* ease
* ease-in
* ease-out
* ease-in-out
* cubic-bezier(n,n,n,n)

The certain amount of time usually refers to seconds and or milliseconds, described as '0.something s'

You can create many different very cool animations with transitions to mimic natural responsive flow within user interactions.

You can combine more than one transition, controlling a separate action or elements at the same time. You can also alter the timing of transitions to compliment the desired movement or movements.

Here we have a circle with an `on hover` state.
```css
.circle {
  width: 100px;
  padding: 50px 0;
  line-height: 0;
  margin: 60px auto;
  background: pink;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: 1s, transform 1s 1s linear;
}

.circle:hover {
  background-color: salmon;
  transform: rotate(360deg);
}
```

<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/s/sdicx/cxiqsl" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>



Resources

[CSS Animations-by the Net Ninja](https://www.youtube.com/watch?v=PH35-BDak0M&index=2&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)
