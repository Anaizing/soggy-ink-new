---
title: "Basic Intro to React-Day 29"
cover: "https://images.unsplash.com/photo-1516478379578-ea8bea43365f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f484d00625536efcf544aa8f799a84b5&auto=format&fit=crop&w=1050&q=80"
date: "01/02/2018"
category: "React"
tags:
    - javascript
    - intro
    - react
---

## 15 min read...

![a spoon full of 100s and 1000s](https://images.unsplash.com/photo-1516478379578-ea8bea43365f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f484d00625536efcf544aa8f799a84b5&auto=format&fit=crop&w=1050&q=80)

# Basic Intro to React

Today im gonna take you through a a very basic, entry level introduction to React. Jump on your codepen if you wanna follow along. Youll also have to go to codepen's settings and under Javascript at the bottom of the options you have pulldown menu named Quick-add.To this add  `react` and also add `reactDOM`, and also set the Javascript Preprocessor to `Babel`. Now we're ready to play.

![Pen settings example](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/28378783_10159965921895117_1859583864089104581_n.jpg?oh=4a7f9840f7a92196a20e9c0c799ce9d6&oe=5B15D020)

lets start with some HTML 

```html
<div class="person">
    <h1>Anai</h1>
    <p>Your Age: 32</p>
</div>

<div class="person">
    <h1>Alex</h1>
    <p>Your Age: 29</p>
</div>
```

and add some CSS

```css
.person {
    display: inline-block;
    margin: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
}
```

At this point as you can see we've created a couple of cards, nothing too fancy. The issue here is that to do this we have to replicate the div element for each card we want to make.

We can think of each `div` as a component. And the idea with react is that we'd be able to build one and re-generate it to use in various places within our application.

lets add some JS

```js
function Person() {
    return (
        <div class="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

```
This here, is the equivalent of the card we built with html. As you can see we have a function and that funny syntax inside `return()` is what we call JSX. 

But to make this into React component, we have to use react to render it onto the screen. Theres a couple thing we need to change. 

```html
<div id="p1"></div>
```

```js
function Person() {
    return (
        <div class="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

ReactDOM.render();
```

* first change a div-give it an id eg. `id="p1"`
* in the JS window, underneath the function add `ReactDOM.render();`
* and to apply the css we wrote change the class (which is a keyword in JS) to className

```js
function Person() {
    return (
        <div className="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

ReactDOM.render();
```

The react package we imported is responsible for parsing the JSX code we added inside the function. Although it looks like HTML it is not, and once parsed it is transpiled to javascript. The other package we imported ReactDOM, exposes an object, which has a render method. This method allows us to render a javascript function as a component to the real DOM.

We can render this function by turning it into a html element, using this JSX syntax. eg. `<Person />` A custom self closing html element.

```js
ReactDOM.render(<Person />, document.querySelector('#p1'));
```

ReactDOM.render takes in two arguments, first our custom element. the second argument specifies where to render this element, there we reach out to the document and we use a query selector (normal javascript code) to select any element with the id p1, like so `document.querySelector('#p1')`.

With that im telling react that i want to render this function (the person component) to the div with the id p1.

But its not really reusable yet.


```html
<div id="p1"></div>

<div id="p2"></div>

```
Now lets get rid of the other html div we created at the start and put in another div with an id of p2, like above.
Say we have this second hook p2 in my html file and we wanted to render a different component, a different person. We would have to hard code the values into that and create a new component. with React we can configure them dynamically as we need them.

So what we will do is add an argument to the function called `props`. You could all it anything else, but the concept we are using here is props.

React automatically gives us an argument in that function which we turn into a component with this syntax `<Person />`, and `props` contains all the `attributes` which we add to our component. Lets add some attributes...

```js

ReactDOM.render(<Person name="Anai" age="32"/>, document.querySelector('#p1'));
```

Once we do this we can take change the jsx in our function to output this information dynamically. like so...

```js
function Person() {
    return (
        <div class="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<Person name="Anai" age="32"/>, document.querySelector('#p1'));
```
* we output dynamic content in React with curly braces
* only one pair of curly braces not 2
* then we reach out to props.name and or props.age, which are the attributes we stated below the function.

This is great, what we can now do is repeat the render query selector
```js
ReactDOM.render(<Person name="Alex" age="28"/>, document.querySelector('#p2'));
```
* and just change the id to match the html div we created.
* we can now pass different props to that query selector like we see above.

Now both components use the same base. The use the same function which is turned into a component by react and we then pass in different props to differentiate them. We're really taking advantage of the component concept, because we only wrote the html(jsx function) once, and now we can re-use it over and over gain.

# note this is just to show you how react works

So your js window should look like this...
```js
function Person() {
    return (
        <div class="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<Person name="Anai" age="32"/>, document.querySelector('#p1'))
ReactDOM.render(<Person name="Alex" age="28"/>, document.querySelector('#p2'))
```
Your pen should look like this at this point...

![codepen screenshot](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/28279017_10159966672640117_8347520914967789252_n.jpg?oh=10ea62bbd388aa243c7b1767dcf9afad&oe=5B049661)

Im sure you can see the potential of this. In big applications you can compose the entire application of re-usable pieces. And this component is not even using any logic, its not using state, as in its not listening out for clicks or anything like that. That can be done and I will cover it in future blog posts. And once we do append our logic to our components, we will have small reusable, mantainable and easy to manage pieces with their own logic contained in them, which we can use anywhere to build amazing applications

But that is the main idea behind React, the reusable components, this is why react is so great. And why this component concept is so great




# and now...


Lets do one more thing though. At this point we are calling `ReactDOM.render` twice, so lets fix that.

What we can do is...

* get rid of the seccond div
* change the id name to app
* get rid of the second ReactDOM.render 
* add a variable under our function.

```js
var app = (
  <div>
    <Person name="Alex" age="28"/>
    <Person name="Anai" age="32"/>
  </div>
);

```

* we wrap this variable in parenthesis so we can use JSX, over multiple lines.
* Then we can output our person component as we did before, with the necessary attributes
* wrap the component(s) in a parent div, since JSX has a requirement of only having one root element.

* once this is done, we can mount the app variable as the first argument to ReactDOM.render, like so...

```js
ReactDOM.render(app, document.querySelector('#app'));

```
 * and also adjust the id name to app as our query selector.

 ![screenshot of codepen](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/28468588_10159966798290117_9097745506838485354_n.jpg?oh=ecc90d7789d9d300ee574b76de4bb229&oe=5B16DEBF)

 What we now have is both elements nested in the same div. this method of only having one react DOM render call, and creating the app inside it with nested components, is the prefered method, and far more popular way of building apps in React.
 With this approach we are creating SINGLE PAGE APPS or SPAs

Resources

[Udemy-react-the-complete-guide-incl-redux ](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8268496?start=0)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
