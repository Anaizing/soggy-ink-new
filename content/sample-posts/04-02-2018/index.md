---
title: "Sharing Work In Progress -Day 32"
cover: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22b665e08fd207619e91753d4f2236b3&auto=format&fit=crop&w=1500&q=80"
date: "04/02/2018"
category: "npm"
tags:
    - scripts
    - npm
    - liveshare
---

If you wanna share your work in progress on the web so a client could easily see what you've built before you're production ready, there are a couple super easy great tools you need to know about. And yeah these are free


### These include...
* localtunnel
* ngrok
* surge
* now

[localtunnel](https://localtunnel.github.io/www/)
punches a hole in your firewall so that your local machine can operate as a web server, its crazy easy to use...

## localtunnel


1. first install it globally via npm

```
npm install -g localtunnel
```

2. start up your app- so that its open on a local port

3. then add this command

```
lt --port 8000
```
although you need to adjust that to the port you're on eg 3000 etc
4. thats about it, it'll give you a random web address that your client can use to view the work. 

You could also add another step to make it more legible for the client by adding a subdomain

```
lt --port 8000 --subdomain anaizing
```

which will print out a more legible address like `https://anaizing.localtunnel.me/`

LOVE THIS THING

## ngrok

[ngrok](https://ngrok.com/)
also punches a hole in your firewall, so your local machine can operate as a web server, although their process has a couple extra steps

1. Sign up
2. Install ngrok
3. Onstall authtoken
4. start your app
5. ./ngrok http 80

## now

[now](https://zeit.co/now)
now doesnt punhc a hole in your firewall, instead its an easy way to deploy your app up to the cloud so that others can review it. Any directory that contains a package.json can be uploaded to the cloud using one command `now`.

1. npm install -g now
2. create start script
3. anytime you wanna deploy the app, type `now`

## surge

[surge](https://surge.sh/)
surge supports static files, also does NOT punch a hole in your firewall, and if you wish you could use them to permanently host your web app(same with now).

1. npm install -g surge
2. type `surge` in your project directory


All these tools are fantastic, just depends what you need at the time, if you just want to quickly show someone your work the top two are great but if you wont have your machine open at the time you can use the bottom two.


Happy coding`!!`



[Building a javascript dev environment-By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)

