---
title: "Quick history of Ajax-Day 20"
cover: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb35d2683e102d67bcd70b87b100723&auto=format&fit=crop&w=1350&q=80"
date: "23/01/2018"
category: "PWA"
tags:
    - javascript
    - ajax
    - asynchronous js
---

![a man raising an eyebrow in disbelief](https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb35d2683e102d67bcd70b87b100723&auto=format&fit=crop&w=1350&q=80)

Today im gonna touch on `AJAX` and its history, which will lead us to the `fetch API`, one of the key APIs that we need to use to make `service workers` work.

# AJAX

Which stands for Asynchronous Javascript And XML, is a term coined in feb 2005 by Jesse James Garret in an article he wrote, titled [AJAX a new approach to web applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/). In that article Jesse went on to talk about an object available in Javascript called `XMLHTTPRequest`. That object was introduced as a proprietary extension to Internet Explorer 5 in 1999, when the team working on outlook web access for microsoft exchange server 2000 needed a feature to make an in-browser email client work more like a desktop email client. Nearly 6 years later Jesse put a snazzy title to the technique of using an object to gather data from the server asynchronously. And thus we had AJAX.

If we take a moment to look at the XMLHttpRequest object and how its used, you'll understand why `fetch()` is something so necessary.

Example time`!`

```js
var request = new XMLHttpRequest();

```
* first thing we need to do is create an instance of this object. Note you'd need something more robust for this to work on older browsers.

* once you have an instance of the object the next thing to do is to handle the `onreadyStatechange` event. Which awkwardly fires up multiple times for one given request

```js
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status <= 299)
            console.dir(JSON.parse(request.responseText));
        else
            console.error('there was an error');
    }
}

```
* so the first thing we have to do is check this 
```js
 if (request.readyState === 4) {
```
`readyState` line, to see if its equal to 4, meaning the request is done.
* when the request is done, we then need to make sure that it was successful from an HTTPs perspective, and so we look at the status code...
```js
if (request.status >= 200 && request.status <= 299)
```
...and we make sure is in the range of 200-299, since all the 200's mean that something was successful.
* from there we can do whatever we want to, to manipulate the text that we've received
```js
console.dir(JSON.parse(request.responseText));
```
so in this case we parse it into JSON
* if there's a problem it takes a lil more sleuthing to figure out what the error was, so here we'll just log out a generic error message.

All of this code and set up hasn't accomplished anything yet. We still haven't made a request, to do so we need to call `.open()` on the request passing in the method and the url.
```js
request.open('GET', 'http://soggy-ink.surge.sh/', true);
```
but that only initializes the request it doesnt actually make the request. To do that, we need one more line of code
```js
request.send();
```

So this is the result below, and should give you a bit of context into how we've dealt with Ajax for the last 13 years.

```js
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status <= 299)
            console.dir(JSON.parse(request.responseText));
        else
            console.error('there was an error');
    }
}

request.open('GET', 'http://soggy-ink.surge.sh/', true);
request.send();

```
But now that we have fetch we wont have to use this anymore, we'll be able to use something that is native in the browser.

See ya

Resources


[Building Offline Web Apps with Service Worker- By Nik Molnar ](https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)