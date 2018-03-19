---
path: "/Day-8"
date: "2018-01-11T17:12:33.962Z"
title: "Ways to Style React Components-Day 8"
---
##### 10min read... Options/Plain CSS/Compiled languages that enhance CSS/Inline Styles/CSS Modules/CSS in JS libraries

![5 colorful cacti](https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1050&q=80)

# Options

When styling React components, there are 5 main options to consider. Its best you and your team agree on a method before you start building. They all have pros and cons, which you'll have to consider depending on the project you're working on, you're not limited to one method though, you may use a variety of these together so its good to be well informed. The options are

* Plain CSS
* Compiled languages that enhance CSS
* React Inline Styles
* CSS Modules
* CSS in JS libraries

Opinions vary around town, but here's a list of the styling method(s) of choice used by popular React Component Libraries on github.

    React Toolbox:   CSS modules with
                    cssNext via PostCSS
                    
    React Bootstrap: Less with bs prefix

    Ant:             Less with bs prefix

    Blueprint:       Sass

    Grommet:         Sass with BEM with
                    grommetux prefix

    Material-UI:     Inline styles(also
                    offer unstyled exports)


# 1. Plain CSS

I think this one is pretty self explanitory. Just one good old vanilla CSS file to rule the world.

### Pros

* Themeable

* Offer Full CSS support!

* Write in standardized CSS

* Syntax Highlighting

* No build setup


### Cons

* Not encapsulated but you can use `BEM`

# 2. Compiled languages that enhance CSS

No matter the compiled CSS solution you pick, the issue is that they all compile to plain CSS

### Pros

* Themeable

* Offer Full CSS support!

* Syntax Highlighting

### Cons

* Not encapsulated but you can use `BEM`

* Build setup- you need a webpack loader.

* Bloated files- since its a plain CSS file poeple are often afraid to delete any styles in case they're in use, therefore bloating up the stylesheet with extra junk.

# 3. Inline Styles
React's documentation encourages the use of inline styles. This is similar to css inline styles except here; the keys are camelCased, values are strings, use commas instead of semicolons and vendor prefixes begin with a capital letter. Its pretty easy to pick up. One big issue with this is the missing support on CSS features.

### Pros

* Deterministic- meaning when you specify a style you TRULY KNOW that it'll be applied. Because you apply the style at the call site.

* Dead Code Elimination

* Encapsulated by default, therefore no style leaking, into other components.

* Build setup-None

* no mental mapping overhead

* Dynamic styles

### Cons

* Lack full CSS support- missing CSS variables, actions like `:hover` etc, transform, animations, media queries & keyframes.

* Themeable- but not easy to do.

# 4. CSS Modules

Separated files, lots of files. Class names are scoped locally by default. its modular and reusable CSS

1. write plain css
2. Import stylesheet
3. Reference style like an object

Modules are a pretty sweet way of styling as long as you dont mind the setup. You can write in plain CSS, Sass or Less, you can reuse the styles which are automatically encapsulated

### Pros

* Deterministic- meaning when you specify a style you TRULY KNOW that it'll be applied. Because you apply the style at the call site.

* Dead Code Elimination

* Encapsulated by default, therefore no style leaking, into other components.

* Themeable-but ther's no standard approach to do so.

* Offer Full CSS support!

* Write in standardized CSS

* Syntax Highlighting

### Cons

* Build setup-css loader, or PostCSS. this is a big con for modules, well the only main one. You're gonna have to keep a lot of separate files for each component. This is manageable but worth a conversation at the start of a project.

* Theming is tricky

# 5. CSS in JS libraries

There are more than 50 open source projects for handling react styles via Javascript. There's plenty variety out there so making a choice might take a while. Some of the favourites on github are...

    Aphrodite
    Radium
    JSS
    jsxstyle
    Styled-components
    Glamour

### Pros

* You already know JS

* JS is a better more mature language

* Tooling- you can leverage your JS tooling, like you Linter, you can also minify using the same tools

* Deterministic- meaning when you specify a style you TRULY KNOW that it'll be applied. Because you apply the style at the call site.

* Dead Code Elimination

* Encapsulated by default, therefore no style leaking, into other components.

* build setup-none

### Cons

* Full CSS support- not typically

* No sourcemap

* may lack full CSS support eg. media queries, pseudo elements

* confusing when mixed with CSS



# What is...

### B.E.M.

A solution to global CSS. It is a NAMING SCHEME for CSS, a consistent naming standard. It's a manual way to encapsulate your styles.

You use classes to declare all styles

BEM splits classes into 3 groups

## Block-

the root of the component (in react each component is a block)

```css
// Block
.registrationform {}
```

## Element-

part of the component(eg a label). Elements are noted by x2 underscores

```css
//Element
.registrationform__submitbutton {}
```

## Modifier- 

a variant/extension (a state, eg an error state)Modifiers are noted by x2 hyphons

```css
// Modifier
.registrationform--error {}
```

![guy watching clouds with his thumbs up](https://images.unsplash.com/photo-1452697620382-f6543ead73b5?auto=format&fit=crop&w=750&q=80)

>Good luck picking your winning horse or horses...

See ya


Resources 

[Creating Reusable React Components, By Cory House ](https://app.pluralsight.com/player?course=react-creating-reusable-components&author=cory-house&name=react-creating-reusable-components-m0&clip=0&mode=live) 


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)