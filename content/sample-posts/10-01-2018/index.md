---
path: "/Day-7"
date: "2018-01-10T17:12:33.962Z"
title: "Ways to create React Components-Day 7"
---
##### 3min read... 4 Mainstream ways


![react logo](https://cdn-images-1.medium.com/max/675/1*oi8WLwC2u0EEI1j9uKmwWg.png)

# 4 Main ways

### createClass (ES5)
If you've used React for a while, its likely this is the style you're familiar with. This was the original way to create components when react was first launched, works great in ES5.

```js
var HelloWorld = React.createClass({
    render: function () {
        return (
            <h1>Hello World</h1>
            );
        }
    });
```

### class (ES6)
Some important differences to note when you work with ES6 classes in React

* No autobind- ES5 autobound for you ES6 doesnt. This means you have to understand the quirky nuances of the `this` keyword. That the context of `this` changes depending on the caller. To solve this, there is a few different ways to handle it, you can call `.bind` inline with your render function, however for performance reasons you should bind your functions to `this` in the `constructor`.

```js
class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
}
```

* PropTypes declared separately (unlike ES5)
* Default props declared separately (unlike ES5)
If you want to declare your prop types within your class you'll have to enable stage 1 support in Babel.
* Set initial state in constructor- the set initial state function isnt utilized in ES6 classes. Instead you set the initial state in the component's
`constructor`.

### stateless functional (ES5)
The Stateless Functional Component was introduced in React.14, it has a simpler syntax. You simply define a function and React assumes the return statement is your render function. The only argument is the props passed in. If your component doesn't need to manage state, utilize component life cycle methods or do performance optimizations, you can declare a stateless functional component.
* They have no state
* They get their data solely from props, which are immutable.

```js
var HelloWorld = function(props) {
    return(
        <h1>Hello World</h1>
    );
};
```

### stateless function (ES6)
Here we use `const` to make sure our component isn't accidentally re-assigned. We also typically use the arrow function instead of the function keyword, but we can use either.

```js
const HelloWorld = (props) => {
    return(
        <h1>Hello World</h1>
    );
};
```

### 9 key benefits of using Stateless Functional Components

![screenshot](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/26196121_10159740812160117_6391108645435182703_n.jpg?oh=1f52643985a9abb7f5d1df0f82d310d7&oe=5AFE1845)

1. No class needed- plain functions are preferable and eliminating the class related stuff like the extends keyword and the constructor
2. They avoid the `this` keyword- the stateless component is just a function thus all the annoying and confusing quirks with JS's `this` keyword are avoided. The entire component becomes easier to understand without it. it eliminates the need for calling bind to pass the `this` context around. (left line 17, right line 12)
3. Enforced best practices-stateless functional components are useful for dumb presentational components. Presentational components focus on the UI rather than the behavior, so its important to avoid using state in presentational components. instead state should be managed by higher level components, or via Flux, Redux etc. Stateless functional components don't support state or lifecycle methods and this is a good thing because it protects us from laziness, its always tempting to add a little state to a presentational component, its a hacky way to quickly add a new feature. Since stateless functional components don't support local state, you cant jump to that approach. Thus they programmatically enforce, keeping our component pure, you are forced to put state management where it belongs in higher level container components.
4. High signal-to-noise ratio- they require less typing which results in less noise. the 27 line component on the left became 21 lines on the right. That's a 20% reduction
5. Enhanced code completion/ intellisense- if you destructure your `props` in ES6, like in the example, then all the data you use is specified in a single simple function argument, which improves your code completion.
6. Bloated components are obvious- a function that takes a lot of parameters is a code smell, when you use ES6 destructuring with your stateless components, the argument list clearly conveys your components dependencies thus its easy to spot components that need attention, in this case you can either break up the component or re-think the data structure that you're passing around.
7. Easy to understand- when you see a stateless component, you know its simply a function that takes props and spits out HTML. Even if it contains a lot of markup its conceptually simple. Its a pure function.
8. Easy to test- since its a pure function your assertions are very straight forward, given these values for `props` I expect it to return this markup. So for the example Hello World component, we can assert that when the render function is called with the value of 'Anai' for `props.name` it returns a `div` with 'Hi Anai' inside. With React stateless functional components, each component can be easily tested in isolation. No mocking, state manipulation, special libraries or tricky test harnesses are needed.
9. Performance. since there's no state or lifecycle methods to worry about, the react team plans to avoid unnecessary checks and memory allocations in future releases.

# ...but wait, there's more
Other ways to create components

#### Object.create

#### Mixins

#### Parasitic Components

#### StampIt

but ill leave these for another blog post.

Resources
[Building Applications with React and Redux in ES6, By Cory House ](https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=14&mode=live) on [pluralsight](https://www.pluralsight.com/)



See Ya


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)