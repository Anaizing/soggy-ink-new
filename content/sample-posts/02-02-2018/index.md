---
title: "Setting up a javascript dev environment-Day 30"
cover: "https://images.unsplash.com/photo-1519488968503-724f3ff337df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=799255929af2c534a2ef55074522a3d6&auto=format&fit=crop&w=1400&q=80"
date: "02/02/2018"
day: "01"
category: "javascript"
tags:
    - javascript
    - fundamentals
    - dev env
---

![building foundations](https://images.unsplash.com/photo-1519488968503-724f3ff337df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=799255929af2c534a2ef55074522a3d6&auto=format&fit=crop&w=1400&q=80)

# Steps to remember

1. Start a new repo on Github, make sure to add `node` to the `.gitignore`
2. Clone said repo to your magical computer machine of choice. And open in your editor of choice (I'm in love with VS code)
3. Create an `.editorconfig` file at the root of the project. Mine looks like this...

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```
<br>
You may need to add editorconfig to your editor for it to work.
4. Create a package.json file at the root of your project, like this one...

```json
{
  "name": "javascript-development-environment",
  "version": "1.0.0",
  "description": "JavaScript development environment by Anai Araya",
  "scripts": {},
  "author": "Anai Araya",
  "license": "MIT",
    "dependencies": {
    "whatwg-fetch": "^2.0.4"
    },
    "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-latest": "^6.24.1",
    "babel-register": "^6.26.0",
    "chai": "^4.1.2",
    "chalk": "^2.4.1",
    "cheerio": "^1.0.0-rc.2",
    "compression": "^1.7.2",
    "cross-env": "^5.2.0",
    "css-loader": "^0.28.11",
    "eslint": "^4.19.1",
    "eslint-plugin-import": "^2.12.0",
    "eslint-watch": "^3.1.5",
    "express": "^4.16.3",
    "extract-text-webpack-plugin": "^3.0.2",
    "jsdom": "^11.11.0",
    "json-schema-faker": "^0.5.0-rc15",
    "json-server": "^0.14.0",
    "localtunnel": "^1.9.0",
    "mocha": "^5.2.0",
    "nock": "^9.3.3",
    "npm-run-all": "^4.1.3",
    "nsp": "^3.2.1",
    "numeral": "^2.0.6",
    "open": "0.0.5",
    "rimraf": "^2.6.2",
    "style-loader": "^0.21.0",
    "webpack": "^4.12.0",
    "webpack-dev-middleware": "^3.1.3",
    "webpack-hot-middleware": "^2.22.2",
    "webpack-md5-hash": "0.0.6"
    }
}
```
5. run `npm i` aka `npm install`
6. Install a security platform-this will check your npm packages for any dodgy ones.
```
npm install -g nsp
```
<br>
you can then run it by running `nsp check` in the command line
7. Set up web server I'm using `express`. Add a `buildScripts` folder to the root and inside it a `srcServer.js` file. Here add...
```js
var express = require('express')
var path = require('path')
var open = require('open')

var port = 3000;
var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err) {
  if(err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
```


8.
9.
10.
11.
12.
13.
14.


[Building a javascript dev environment-By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)