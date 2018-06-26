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

  32. Configure mocha. Add a file inside buildScripts, call it `testSetup.js` inside it place

  ```js
//this file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')()

// Disable webpack features that mocha doesnt understand.
require.extensions['.css'] = function() {}
  ```

33. Add test script.

  ```json
"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\""
  ```

34. add a file in src called `index.test.js` put this in it

```js
import {expect} from 'chai'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

```

* now run `npm test` and you should see 1passing

34. import jsdom and fs to the index.test.js file and add the following code

```js
import jsdom from 'jsdom'
import fs from 'fs'

describe('index.html', () => {
  it('should say HELLO', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8")
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal("HELLO WORLD!")
      done()
      window.close()
    })
  })
})
```

35. Automate test watch. Add a script under test

```json
"test:watch": "npm run test -- --watch"
```

also call it from the start script so it looks like this

```json
"start": "npm-run-all --parallel security-check open:src lint:watch test:watch"
```

36. Add TravisCI. Go to the [Travis website](https://travis-ci.org/) sign in with your github account, find your repo and turn it on. Create a `.travis.yml` file in the root of your project and add the following code

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

46. Create a new script under the last one.

```json
"start-mockapi": "json-server --watch src/api/db.json --port 3001"
```

* now run `npm start-mockapi` and voala! They even have the sweetest emoji











// TODO: testing!! and change numbers














47. Create a new script above the previous one, called 

```json
"prestart-mockapi": "npm run generate-mock-data"
```

* also add `start-mockapi` to the start script

48. We need the app to inteligently point to proper baseURL in each environment. So create a file called `baseUrl.js` in the `api` folder, put this in it.

```js
export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost'
  return inDevelopment ? 'http://localhost:3001/' : '/'
}
```

49. Import `getBaseUrl` to the `userApi` file and alter it to look like this

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

50. Activate delete button. In `userApi` add an export function to `deleteUser` under `getUsers`

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

51. Activate the Delete buttons. Add the following code to your inde3x.js file inside the getUsers promise

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

52. Webpack configuration and minification. Make a copy of the webpack.config and change the name to `webpack.config.prod.js`

53. Inside the webpack production config change the devtool setting to `source-map`. This makes sure we can still see our original code in the browser even though its been minified and bundled.

54. Change the output path to a new folder called `dist`





























[Building a javascript dev environment-By Cory House](https://www.pluralsight.com/courses/javascript-development-environment)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)