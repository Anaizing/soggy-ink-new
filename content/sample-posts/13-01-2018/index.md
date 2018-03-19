---
path: "/Day-10"
date: "2018-01-13T17:12:33.962Z"
title: "About React -Day 10"
---
##### 3 min read... 

![girl looking at heart shaped light](https://images.unsplash.com/photo-1500395235658-f87dff62cbf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=caf592fe79ef67c69701deafb3fc17aa&auto=format&fit=crop&w=750&q=80)

# Why is react great

There is a whole lot of reasons why many of developers have turned to React. Probably more than i'll cover here, either way here goes a bunch of bullet points you should know about React.

* it handles a very specific set of concerns; packaging, composing and rendering HTML components. Because of this focus, React is lightweight and makes it easy to create complex UI's by composing many simple components together.

* it can be used along with other frameworks like Angular and Backbone. Fun fact, facebook swapped out PHP for react one component at a time, which shows how flexible react is since its built in small pieces and you can control how much if not all the puzzle pieces you want to move/refactor.

* it utilizes a VIRTUAL DOM, this makes it very fast. It compares the old state to the new state in memory and then updates the DOM in the least _expensive_ way. This saves resources and makes React notably faster than many of today's popular alternatives.

* with the power of the virtual DOM, React can support rendering on both the client and the server. This is critical for building ISOMORPHIC apps.

* it has unidirectional data flow, meaning data flows down the tree from parent to child. This makes tracking the source and destination easy compared to other architectures where data may be coming from many parts of the application.

* it gives you the option of writing in JSX (which is compiled down to javascript), or in plan javascript... but JSX looks better and is more readable.

* react moved away from the MVC pattern and focuses on being a composable components library. Some people say react is the V in MVC, but in reality what compose react components, compose of both the V and the C in MVC.

* with react you create controller views which end up operating a lot like controllers that you're used to in MVC. A controller view is a term that is used for react views that handle data concerns and compose other _dumb_ components together. So your controller view has a number of child components that sit under it. Controller views promote re-use and separation of concerns.

* removes _two-way_ binding (with unidirectional data flow), since two-way-binding can lead to unpredictable interactions. One change would trigger a corresponding model change and that model would trigger another model, etc creating cascading updates. These interactions can become hard to predict and follow in a complex application, particularly for multiple devs interacting with the same code base.


* there is a clear separation between data and the DOM, the DOM is merely a representation of current state, this makes applications easier to understand and test.

* the synthetic events system gives us performance for free, by doing the right things behind the scenes for free and abstracting away browser quirks.

* the virtual DOM allows for other innovations such as Isomorphic rendering and React Native, which allow you to use React to build native mobile applications.

* with react you can create/ compose every component in isolation.

* it has a pretty sweet error window that comes up instead of a blank/non-working page, with the location of your error.

* if you need to debug its easy to set a breakpoint and view the original code in the browser by typing `debugger` at the required line.



# History

* Created by facebook in 2011

* React was used on instagram a year later in 2012

* After 2 years of internal use, facebook open sourced React in 2013

* React's popularity lead facebook to open source React Native in 2015-this is a related library which allows you to create native mobile applications for IOS and Android using React.

* In 2015 React puplished a new version, React 15 (previous was 0.14)

* 2017 brings us React v16.0!


Woooo!




Resources 

[React, the big picture-By Cory House](https://app.pluralsight.com/library/courses/react-big-picture/table-of-contents) 


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)