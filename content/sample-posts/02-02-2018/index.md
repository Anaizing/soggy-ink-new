---
title: "Setting up a javascript dev environment-Day 30"
cover: "https://images.unsplash.com/photo-1519488968503-724f3ff337df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=799255929af2c534a2ef55074522a3d6&auto=format&fit=crop&w=1400&q=80"
date: "02/02/2018"
day: "01"
category: "javascript"
tags:
    - javascript
    - fundamentals
    - devenv
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
<br>
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
<br>
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
<br>

8. Create a `src` folder at the root, inside it place a `index.html` file with the html boiler plate and a heading saying something so you can test its working. 
<br>
9. Then run express by calling the folder `srcServer.js` with node

```
node buildScripts/srcServer.js
```

<br>
You should now see whatever h1 you made in port 3000
<br>
10. Add localtunnel
<br>
11. Add script to start dev env, in package.json inside scripts

```json
"start": "node buildScripts/srcServer.js"
```
<br>
now we start the environment with 
```
npm start
```
<br>
12. Put in a starting message for user. Create a file inside `buildScripts` called `startMessage.js` there add your message and color of choice...

```js
import chalk from 'chalk'

console.log(chalk.green('Starting app in dev mode you cool cat'))


```

<br>

13. Add a prestart script in `package.json` above the start script, to run the start message we created.

```json
  "prestart": "node buildScripts/startMessage.js"
```

* npm support convention based `pre` and `post` hooks, so any scripts that you prefix with the word `pre`, will run before the script with the same name. And any scripts that prefix with the word `post` will run after the script with the same name.

14. Create a script to run the node security check. Place it after the start script.

```json
"security-check": "nsp check"
```

15. Create a script to run localtunnel, under `security-check`.

```json
"share": "lt --port 3000 --subdomain loveit"
```

16. Use a package called `npm-run-all` to run concurrent tasks in `--parallel`. Lets run the security check at the same time as we start the web server, simply change the name of the start script to `open:src` and make a new start script wich includes the `security-check` and the `open:src`

```json
"start": "npm-run-all --parallel security-check open:src",
"open:src": "node buildScripts/srcServer.js"
```

* to start the app without all the extra noise just run the start command with -s at the end

```
npm start -s
```

17. Create a script that runs localtunnel and starts up a web server at the same time. Change the share script to be called  localtunnel and make a new share script that runs open:src as well as localtunnel

```json
"localtunnel": "lt --port 3000 --subdomain loveit",
"share": "npm-run-all --parallel open:src localtunnel"
```

18. Configure a transpiler, Babel. Create a folder in the root of the project called `.babelrc`, in it place this code...


```json
{
  "presets": [
    "latest"
  ]
}

```

19. Call `babel-node` on the prestart script, the open:src script to finish configuration.

```json
"open:src": "babel-node buildScripts/srcServer.js",
//...
"prestart": "babel-node buildScripts/startMessage.js"
```

* now the syntax for the srcServer can be updated to ES6 imports etc.

20. Configure webpack. Create a `webpack.config.dev.js` file in the root of the project, in it place this code.

```js
import webpack from 'webpack'
import path from 'path'

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
}

```
21. Set up our developmenmt server to serve our webpack bundle. In the `srcServer.js` import `webpack` and `config` as well as a middleware function, the top of the file should look like this.

```js
import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000;
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
```

* the rest of the file beneath this code will remain as it was.

22. Create an app entry point. Create `index.js` in the root of our `src` directory. Here we can add some js to test webpack is bundling our code, eg.

```js
import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${courseValue} for this awesome course`)
```

23. Reference the `index.js` file in the `index.html` file, in the body.

```html
<script src="bundle.js"></script>
```

Now if we run npm start and start our dev tools open network, and refresh we should see bundle getting sent down, and if we scroll about a million hours we will find a transpiled version of our index.js code.

24. Handling CSS with webpack. We've already defined a css loader in the webpack config file. now just add a `index.css` file in the `src` root of the project and place in it some styles to test

```css
body
{
  font-family: sans-serif;
}
table th {
  padding: 5px;
}

```
25. In the `index.js` file import the `index.css` at the top.

```js
import './index.css'
```

* now if we start our app and open dev tools, in bundle search for padding and there you will see a transpiled/bundled version of our css.

26. You have enabled `inline-source-maps` in the webpack config, so you can throw the `debugger` keyword anywhere in your code which creates a breakpoint so you can debug your code, and be able to inspect it in devtools as you wrote it. Have a play around.

27. Set up ESLint. create a `eslintrc.json` file in the root of the project. In it place this code

```json

{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "no-console": 1
  }
}
```

28. Add file watching functionality to ESLint. In `package.json` add a script under `open:src`

```json
"lint": "esw webpack.config.* src buildScripts"
```

* `esw` is the executable for ESLint watch, and we are passing it the list of files we'd like it to watch. Also make sure to dissable any linting pluggins you may have in your code editor, so they dont override the ones you put in.


[Building a javascript dev environment-By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)