---
title: "Promises/A+ Day 13"
cover: "https://images.unsplash.com/photo-1511548774318-563182fe8d03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=226688553251c9261fa28de062b96b40&auto=format&fit=crop&w=750&q=80"
date: "16/01/2018"
category: "javascript"
tags:
    - javascript
    - fundamentals
    - promises
---
![the letter A](https://images.unsplash.com/photo-1511548774318-563182fe8d03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=226688553251c9261fa28de062b96b40&auto=format&fit=crop&w=750&q=80)

# What's the story with Promises/A+ ??

Im so glad you asked, hint its not about batteries! Although I touched on this topic on day5, lets look at how this came about and what it is. In case you're still a bit fuzzy...

Once upon a time, an engineer from Mozilla, named [Kevin Dangoor](https://www.linkedin.com/in/kdangoor/) started a group called CommonJS. The goal of CommonJS was to build up the Javascript ecosystem for web servers, desktop and command line apps, as well as in-browser applications. The group mostly did this by putting together specifications to help push the Javascript community forward. Several other specifications are implemented and live on, even today. For example their specifications around packages and modules are still widely used. They had several proposals for how promises would be implemented in Javascript... This is the juice of what I'm talking about...
These proposals were named

* Promises/A
* Promises/B
* Promises/KISS
* Promises/C- which was retracted by its author
* Promises/D

Out of the bunch, Promises/A won out (as in its the one thats been implemented by browsers and node), BUT, hold on to your nerd hats...
Issue is that the Promises/A specification is a _very_ small specification. It's about 2 paragraphs long and although thats what made it the winner, it also left too much to the implementor to interpret, which meant many promise libraries that were slightly incompatible. So to clean this up, in comes the follow up spec Promises/A+ to save the day!! 

[Promises/A+](https://promisesaplus.com/j) is the full detailed specification that the browsers implement and that you'll find in Node.


Resources

[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)