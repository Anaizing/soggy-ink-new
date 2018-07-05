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

Lets build a javascript development environment with all the good stuff minus the javascript frameworks in under 100 steps. Including  Package Mananagement, Bundling, Minification, Sourcemaps, Transpiling, Dynamic HTML Generation, Centralised HTTP, Mock API Framework, Component Libraries, Development Web Server, Linting, Automated Testing, Continuous Intergration, Automated Build, Automated Deployment, separating API and IU, Working Example app, Sharing work in progress, Error Tracking. Dont blink now.

## Git started, add editor config

1. Start a new repo on Github, make sure to add `node` to the `.gitignore`
2. Clone said repo to your magical computer machine of choice. And open in your editor of choice (I'm in love with VS code)
3. Create an `.editorconfig` file at the root of the project. Mine looks like this...

```

## editorconfig.org
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

## package managment and security

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

## Development web servers

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

## share work in progress

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

## Configure transpiler

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

## Bundling

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

## Linting

28. Add file watching functionality to ESLint. In `package.json` add a script under `open:src`

```json
"lint": "esw webpack.config.* src buildScripts"
```

* `esw` is the executable for ESLint watch, and we are passing it the list of files we'd like it to watch. Also make sure to dissable any linting pluggins you may have in your code editor, so they dont override the ones you put in.

* run 

```
npm run lint
```

29. Remove warnings from any exceptions you may need the console.log placed with either of these in the corresponding files.

```
// eslint-disable-line no-console
/* eslint-disable no-console */
```

30. Create a separate script to watch our files. under the `lint` script add

```json
"lint:watch": "npm run lint -- --watch"
```

* now run 

```
npm run lint:watch
```

31. Add the `lint:watch` task to the end of the start script, so it runs in parallel

* now if we type `npm start -s` we...
  * get our start message
  * get our security check
  * run webpack
  * start our development web server
  * open the app in our default browser
  * lint our files
  * re-run lint on our files anytime we hit save
  * followed by a loud mic drop

## testing and CI

32. Testing setup. Create a new file in the buildScripts folder called `testSetup.js` in it place this logic

```js
//this file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')()

// Disable webpack features that mocha doesnt understand.
require.extensions['.css'] = function() {}


```

33. Add a test script. In package.json under the `share` script add this script

```json
"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",
```

Mocha offers a variety of reporters, this setting determines how the test output should display, here we've used the `progress` reporter because its clean and simple. Next we tell mocha to run the the testSetup scriptwe just set up, after its finished running that it will run any tests that it finds within our src directory and any sub directories. We define test files as any files that ends in `.test.js`

<br>

Now we can run 

```
npm test
```
to run mocha. It will fail saying it cannot find any test files, until you write some tests.

34. Write a test. In the src folder create a new file called `index.test.js`.

* Mocha doesnt come with an assertion lib, so we will use `chai`

in this new file add this logic. Our first test.

```js
import {expect} from 'chai'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})
```
Now run `npm test` and you should see 1 test passing.

35. Watching tests. In the package.json, underneath the test script write a new script

```json
 "test:watch": "npm run test -- --watch",
```

then we also want to call this as part of our start script, so add the script to the end of the start script

```json
"start": "npm-run-all --parallel security-check open:src lint:watch test:watch",
```

run `npm start -s` to see it all in action.

36. Add Continuous Integration-TravisCI. Go to the [Travis website](https://travis-ci.org/) sign in with your github account, find your repo and turn it on. Create a `.travis.yml` file in the root of your project and add the following code

```yml
language: node_js
node_js:
- "8"
- "9"

```

37. Then call `git add .` and commit changes also, `push` your commits to the repo and if you go to the travisCI page you will see the CI running. Easy peacy!

38. Add AppVeyor which covers window users. Add an `appveyor.yml` place this in it

```yml
# Test against this version of Node.js
environment:
  matrix:
  # node.js
  - nodejs_version: "6"

# Install scripts. (runs after repo cloning)
install:
  # Get the latest stable version of Node.js or io.js
  - ps: Install-Product node $env:nodejs_version
  # install modules
  - npm install

# Post-install test scripts.
test_script:
  # Output useful info for debugging.
  - node --version
  - npm --version
  # run tests
  - npm test

# Don't actually build.
build: off
```

39. Go to the [AppVeyor](https://www.appveyor.com/) website, login via your github account, select the project you're on.
* again you need to add and commit all files then push them up to github, then you can go back to AppVeyor, click on latest and you'll see your project in action.

## HTTP calls

40. Set up `fetch`. Open srcServer and add a new route beneath the current `app.get` already there...

```js
app.get('/users', function(req, res) {
  // ! hard coding for simplicity. pretend its a real data base
  res.json([
    {"id": 1, "firstName": "Bec", "lastName":"Hunt", "email": "hunt@gmail.com" },
    {"id": 1, "firstName": "Alex", "lastName":"Sanra", "email": "alex@gmail.com" },
    {"id": 1, "firstName": "Jess", "lastName":"Beling", "email": "jess@gmail.com" }
  ])
})

```

41. Create a folder called `api` in the src folder, and inside it, a file called `userApi.js` and paste this in

```js
import 'whatwg-fetch'

export function getUsers() {
  return get('users')
}

function get(url) {
  return fetch(url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  console.log(error) //eslint-disable-line no-console
}
```

42. Add a table to the `index.html` file.

```html
  <h1>Users</h1>
    <table>
      <thead>
        <th>&nbsp;</th>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody id="users">

      </tbody>
    </table>
```

43. change the code in the index.js file for this

```js
import {getUsers} from './api/userApi'

// * Populate table of users using via API call
getUsers().then(result => {
  let usersBody = ""

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  })

  global.document.getElementById('users').innerHTML = usersBody
})
```

44. Build a mock http. Create a file called `mockDataSchema.js` inside buildScripts. In there place this code

```js
export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
```

45. Generate Mock Data. Create new file in buildScripts called `generateMockData.js` inside place this code

```js
/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
```

46. create a script to generate mock data under test:watch

```json
"generate-mock-data": "babel-node buildScripts/generateMockData"
```
* now run `npm generate-mock-data` in the terminal and you should see in green, "Mock data generated", as well as a new db.json file created in the api folder.

47. Create a new script under the last one.

```json
"start-mockapi": "json-server --watch src/api/db.json --port 3001"
```

* now run `npm start-mockapi` and voala! They even have the sweetest emoji


48. Create a new script above the previous one, called 

```json
"prestart-mockapi": "npm run generate-mock-data"
```

* also add `start-mockapi` to the start script

49. We need the app to inteligently point to proper baseURL in each environment. So create a file called `baseUrl.js` in the `api` folder, put this in it.

```js
export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost'
  return inDevelopment ? 'http://localhost:3001/' : '/'
}
```

50. Import `getBaseUrl` to the `userApi` file and alter it to look like this

```js
import 'whatwg-fetch'
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers() {
  return get('users')
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  console.log(error) //eslint-disable-line no-console
}

```

51. Activate delete button. In `userApi` add an export function to `deleteUser` under `getUsers`

```js
export function deleteUser(id) {
  return del(`users/${id}`)
}
```

and under the get(url) function place this function

```js

// ! Cant call func delete since its a reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  })
  return fetch(request).then(onSuccess, onError)
}
```

52. Activate the Delete buttons. Add the following code to your inde3x.js file inside the getUsers promise

```js

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  })

```

## Production build

53. Webpack configuration and minification. Make a copy of the webpack.config and change the name to `webpack.config.prod.js`

54. Inside the webpack production config change the devtool setting to `source-map`. This makes sure we can still see our original code in the browser even though its been minified and bundled. Should now look like this...

```js
//...
export default {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  //...
```

55. Change the output path to a new folder called `dist`. You still need to build this, and the file will now look like this

```js
//...
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

//...
```

56. Add two webpack plugins

```js
//...
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    }),

    // * Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // * Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  //...
```

57. Make sure you `import webpack from 'webpack'` at the top of the file

58. Create new file inside buildScripts and call it `build.js` inside it place this code

```js
/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

process.env.NODE_ENV= 'production'

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));


webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occured. Stop here
    console.log(chalk.red(err));
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  // if we got this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to /dist!'))

  return 0
})

```


59. Create a new file inside buildScripts called `distServer.js` and copy and paste in it the logic from srcServer

60. It should look like this.


```js
import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

/* eslint-disable no-console */

const port = 3000;
const app = express()

app.use(compression()) // * enables gzip compression in express
app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', function (req, res) {
  // ! hard coding for simplicity. pretend its a real data base
  res.json([
    { "id": 1, "firstName": "Bec", "lastName": "Hunt", "email": "hunt@gmail.com" },
    { "id": 1, "firstName": "Alex", "lastName": "Sanra", "email": "alex@gmail.com" },
    { "id": 1, "firstName": "Jess", "lastName": "Beling", "email": "jess@gmail.com" }
  ])
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})

```
61. Edit the baseUrl file inside the `api`folder  to look like this...

```js
export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/'
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

```

62. Add production build npm scripts. Underneath `start-mockapi`, in your package.json place the following 4 scripts

```json
//...
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js"
//...
```
63. Remove this script from index.html, since we are now dynamically building a bundle.js

```html
  <script src="bundle.js"></script>
```

64. In `webpack.config.prod.js` add this import 

```js
import HtmlWebpackPlugin from 'html-webpack-plugin'
```

65. Then inside plugins add the following

```js
    // * Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
```

66. Copy what you just did in steps 62 and 63 over to the `webpack.config.dev` file. This allows webpack to handle our html in both our dev and production environment.

<br>

To check its running correctly in production run

```
npm run build -s
```

If you inspect devtools and open the network tab, refresh, then look up the bundle.js file you will see the file size to around 3.7K instead of the actual size around 12K which webpack printed to your terminal when you ran the build.

67. Configure our html webpack plugin to minify our html. In the `webpack.config.prod.js`, inside our `new HtmlWebpackPlugin()` under the template and above the inject, add `minify`

```js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
```

Now you can run the build and see the html minified, by right clicking on web page and clicking on `open source`

68. Bundle splitting. In the `webpack.config.prod` file change the entry from an array to an object and add the vendor path, to look like this instead

```js
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
}
```

69. Create the vendor file in the src folder `vendor.js`, inside it place this

```js

/* This file contains references to the vendor libraries
 we're using in this project. This is used by webpack
 in the production build only*. A separate bundle for vendor
 code is useful since it's unlikely to change as often
 as the application's code. So all the libraries we reference
 here will be written to vendor.js so they can be
 cached until one of them change. So basically, this avoids
 customers having to download a huge JS file anytime a line
 of code changes. They only have to download vendor.js when
 a vendor library changes which should be less frequent.
 Any files that aren't referenced here will be bundled into
 main.js for the production build.
 */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch'
```

70. Go to the webpack prod file and above plugins add optimization.splitchunks like this

```js
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
```

71. Now that we're generating multiple bundles we cannot hardcode the filename so lets change that to 

```js
filename: '[name].[chunkhash].js'
```

Now if you run the build you should be able to see in your terminal, webpack has printed two separate chunks aka bundles, main.js and vendor.js and the size has been split between the two, its also generated mapping files for both. And in the webpage if you now open source you can see that both main.js and vendor.js are referenced. And if you look at the network tab you can also see both being requested.

72. Cache busting. Add this import atthe top of the webpack prod file

```js
import WebpackMd5Hash from 'webpack-md5-hash'
```

73. Add the hash to your plugins

```js
// Hash the files using MD5 so that their names change when the content changes.
     new WebpackMd5Hash()
```

Note we've already updated our filename format to update the hash that webpack generates by adding

```js
filename: '[name].[chunkhash].js'
```

Now if we run the build you can see that our filenames will have a hashes placed in the middle of them. And since we are using htmlwebpackconfig, if we open index.html we can see that the references were dynamically written for us.

74. Configure webpack to generate a separate css file for the production build. 

<br>

75. a install these 3 npm packages


```
npm install --save--dev uglifyjs-webpack-plugin
```

```
npm install --save--dev mini-css-extract-plugin
```

```
npm install --save--dev optimize-css-assets-webpack-plugin
```
<br> 

76. b import this into the prod file


```js
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
```

77. Add an entry point 

```js
entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index'),
    // talking about this one underneath
    styles: path.resolve(__dirname, 'src/index.css')
  },
```
78. To the Optimization add a minimizer with the new plugins

```js
optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    // talking about the one under this comment
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
```

79. to plugins add the other plugin you imported

```js
new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

```

80. Change the module rules to...

```js
module: {
     rules: [
     {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
     {test: /\.css$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]}
     ]
  }
```


## webpack.config.prod.js

So far the `webpack.config.prod.js`, should look like this

```js
import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'

export default {
  mode: 'production',
  resolve: {
     extensions: ['*', '.js', '.jsx', '.json']
     },
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index'),
    styles: path.resolve(__dirname, 'src/index.css')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    // * Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // * Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: false,
    }),

  ],
  module: {
     rules: [
     {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
     {test: /\.css$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]}
     ]
  }
}

```

## webpack.config.dev.js

and the webpack dev file should look like this

```js
import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
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
    // * Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: false,
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}

```

81. Error logging(tracking) with `Track.js`. Go to the [Trackjs website](https://trackjs.com/) and set up an account, once in there are two simple steps.

![track js webpage](https://scontent.fsyd1-1.fna.fbcdn.net/v/t1.0-9/36583128_10160471201535117_1207487861511684096_o.jpg?_nc_cat=0&oh=b2247485bb7bf0a5e4a9145e1ad7ccb5&oe=5BA11EC0)

First take the script they give you and paste it at the very top of your index.html file in the <head>

```html
<!-- BEGIN TRACKJS -->
<script type="text/javascript">window._trackJs = { token: 'INSERT YOUR TOKEN HERE' };</script>
<script type="text/javascript" src="https://cdn.trackjs.com/releases/cu/tracker.js"></script>
<!-- END TRACKJS -->
```
Then run the build and  paste step 2 in the console, to see that its working go to their website and you shpould see the error in trackjs, and if you click on it you get all this information

![first error log](https://scontent.fsyd1-1.fna.fbcdn.net/v/t1.0-9/36542601_10160471221305117_5135121658545176576_o.jpg?_nc_cat=0&oh=63e2a1d86b35ab93305ea1717bdf4194&oe=5BB0705D)

82. Adding conditionals to your html. This is so the code we just pasted into our html from trackjs only runs in our production build and not in our dev env.

Htmlwebpack plugin supports a number of different templating languages out of the box including jade, ejs, underscore, handlebars and html loader, and if you dont specify a loader then it defaults to embeded js aka ejs, you can read about the ejs syntax [here](http://www.embeddedjs.com/).

<br>

Store the trackjs TOKEN you were given on their website in the `webpack.config.prod.js` inside the `htmlWebpackPlugin`, beneath inject.

```js
// Properties you define here are available in index.html
// using htmlWebpackPlugin.options.varName
trackJSToken: 'INSERT YOUR TOKEN HERE'
```

83. Using ejs, declare this section should only be rendered when we have a trackjs token defined in webpack config. Around the trackjs script place this

```html
<% if (htmlWebpackPlugin.options.trackJSToken) { %>

  <!-- BEGIN TRACKJS -->
  <script type="text/javascript">window._trackJs = { token: '<%=htmlWebpackPlugin.option.trackJSToken%>' };</script>
  <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
  <!-- END TRACKJS -->

<%  }  %>
```

and turn the token into a variable accesible via webpack, writen in the ejs syntax like you see above `token: '<%=htmlWebpackPlugin.option.trackJSToken%>'`

then place an explanitory comment in your index html

```html
<!--
  **NOTE:** This is a template for index.html.
  It uses ejs and htmlWebpackPlugin to generate a different index.html for each environment.
  htmlWebpackPlugin will dynamically add references to the scripts and styles that it bundles
  to this file. The generated bundles have hash-based filenames,
  so it's necessary to add the references dynamically.
  For more info on ejs, see http://www.embeddedjs.com/.
  For examples of using it with htmlWebpackPlugin,
  see https://github.com/jaketrent/html-webpack-template/blob/master/index.ejs
  -->
```

then run npm build to test its working acordingly.


## Production Deploy

84. Automated API deploy via Heroku. Go to the [Heroku website](https://www.heroku.com/), create a free account with them and set your `primary development language` to `Node.js`. Once you're inside you should see this landing page, click on the Node.js icon, this will open the docs on how to get started with Heroku

![heroku introduction landing page](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/36682145_10160475281450117_1531083659803623424_n.jpg?_nc_cat=0&oh=08463ee3cbf15a80ec934509ed0ee4bc&oe=5B9F00A1)

85. Follow the heroku introduction and setup steps, and once you reach the third step `Prepare the app`, instead of using their app, go [here](https://github.com/Anaizing/js-dev-env-demo-api) and make sure you `fork` the repo so you have the right to work on it in heroku. And open the forked repo in your code editor. Run npm install.

86. Change the name on package.json to point to your repo on github.

87. Open the terminal and type

```
heroku login
```

Follow the login prompts

88. Configure your app to work with heroku. Run

```
heroku create
```
This will give you a website, with a welcome message.

89. In the command line run

```
heroku git:remote -a  calm-beach-81430
```

but change out `calm-beach-81430` for whatever name you were given

90. then run 
```
git push heroku master
```

This will give you a url you paste to the browser, and if you go to it and add `/users` after it, you will see the json coming backwith our users, so we have our API now hosted in production. Any time we make any changes to our API we'll just commit our changes and run

```
git push heroku master
```

to push our changes up to heroku. Heroku will take the code from github and deploy it to our url.

91. Jump back to our UI project aka js-dev-env. Go into the api folder and in it baseUrl.js change the url for production from the local to the one you created in heroku, should look similiar to this, except with your url.

```js
export default function getBaseUrl() {
return getQueryStringParameterByName('useMockApi')
  ? 'http://localhost:3001/'
  : 'https://calm-beach-81430.herokuapp.com/'
}
```

make sure to include the trailing / at the end.

92. open distServer.js insde the buildScripts folder,remove this section

```js

app.get('/users', function (req, res) {
  // ! hard coding for simplicity. pretend its a real data base
  res.json([
    { "id": 1, "firstName": "Bec", "lastName": "Hunt", "email": "hunt@gmail.com" },
    { "id": 1, "firstName": "Alex", "lastName": "Sanra", "email": "alex@gmail.com" },
    { "id": 1, "firstName": "Jess", "lastName": "Beling", "email": "jess@gmail.com" }
  ])
})
```

93. Deploy static front end. Surge (a static web publisher for front end) is already installed globally, since it was in the package.json. So go to the package.json file nd under postbuild add this script

```json
"deploy": "surge ./dist"
```

94. Run the build, open dev tools, look in network and hover over users, you'll see we're making a call to heroku. with all this set up you can now run

```
npm run deploy
```

This will call surge, assigns a random domain, click enter, this will print out the url with said random domain, and if you paste it to the browser you should see the app live in production and using the heroku api for the data.

THE END





For the full course with brilliant explinations and to give you an indepth understanding of why we did the things we did go to

[Building a javascript dev environment-By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)