---
title: "The TC39 process for ECMAScript features-Day 28"
cover: "https://images.unsplash.com/photo-1465765639406-044153778532?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c43bc938c4abd051a81ba80a5a2d0e60&auto=format&fit=crop&w=1500&q=80"
date: "31/01/2018"
category: "javascript"
tags:
    - tc39
    - ecmascript features
    - javascript
---

![stairs](https://images.unsplash.com/photo-1465765639406-044153778532?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c43bc938c4abd051a81ba80a5a2d0e60&auto=format&fit=crop&w=1500&q=80)

Each proposal for an ECMAScript feature goes through the following maturity stages, starting with stage 0. The progression from one stage to the next one must be approved by TC39.

# Stage 0: strawman

What is it? A free-form way of submitting ideas for evolving ECMAScript. Submissions must come either from a TC39 member or a non-member who has registered as a TC39 contributor.

What’s required? The document must be reviewed at a TC39 meeting (source) and is then added to the page with stage 0 proposals.

# Stage 1: proposal

What is it? A formal proposal for the feature.

What’s required? A so-called champion must be identified who is responsible for the proposal. Either the champion or a co-champion must be a member of TC39 (source). The problem solved by the proposal must be described in prose. The solution must be described via examples, an API and a discussion of semantics and algorithms. Lastly, potential obstacles for the proposal must be identified, such as interactions with other features and implementation challenges. Implementation-wise, polyfills and demos are needed.

What’s next? By accepting a proposal for stage 1, TC39 declares its willingness to examine, discuss and contribute to the proposal. Going forward, major changes to the proposal are expected.

# Stage 2: draft  

What is it? A first version of what will be in the specification. At this point, an eventual inclusion of the feature in the standard is likely.

What’s required? The proposal must now additionally have a formal description of the syntax and semantics of the feature (using the formal language of the ECMAScript specification). The description should be as complete as possible, but can contain todos and placeholders. Two experimental implementations of the feature are needed, but one of them can be in a transpiler such as Babel.

What’s next? Only incremental changes are expected from now on.

# Stage 3: candidate  

What is it? The proposal is mostly finished and now needs feedback from implementations and users to progress further.

What’s required? The spec text must be complete. Designated reviewers (appointed by TC39, not by the champion) and the ECMAScript spec editor must sign off on the spec text. There must be at least two spec-compliant implementations (which don’t have to be enabled by default).

What’s next? Henceforth, changes should only be made in response to critical issues raised by the implementations and their use.

# Stage 4: finished  

What is it? The proposal is ready to be included in the standard.

What’s required? The following things are needed before a proposal can reach this stage:

Test 262 acceptance tests (roughly, unit tests for the language feature, written in JavaScript).
Two spec-compliant shipping implementations that pass the tests.
Significant practical experience with the implementations.
The ECMAScript spec editor must sign off on the spec text.
What’s next? The proposal will be included in the ECMAScript specification as soon as possible. When the spec goes through its yearly ratification as a standard, the proposal is ratified as part of it.

Resources

[TC39 process for ECMAScript features](http://2ality.com/2015/11/tc39-process.html)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
