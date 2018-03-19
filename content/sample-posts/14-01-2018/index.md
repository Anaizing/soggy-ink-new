---
path: "/Day-11"
date: "2018-01-14T17:12:33.962Z"
title: "Anti-Pattern -Day 11"
---

##### 5 min read... What are Design Patterns?/Anti-Patterns

![a chest of files](https://images.unsplash.com/photo-1505528638251-3ef301e4988e?auto=format&fit=crop&w=750&q=80)

# What are Design Patterns?

Today lets take a quick look into Anti-Patterns, for a full dive into Design Patterns take a look at [Learning Javascript Design Patterns -By Addy Osmani.](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#antipatterns)
To understand Anti-Patterns, we must first understand what Design Patterns are and why they are important.

"A pattern is a reusable solution that can be applied to commonly occurring problems in software design-in our case- in writing Javascript web applications. Another way of looking at patterns are as a template for how we solve problems- ones which can be used in quite a few different situations."

Here are some advantages patterns have to offer.

* Reusing patterns assists in preventing minor issues that can cause major problems in the application development process. What this means is when code is built on proven patterns, we can afford to spend less time worrying about the structure of our code and more time focusing on the quality of our overall solution. This is because patterns can encourage us to code in a more structured and organized fashion avoiding the need to refactor it for cleanliness purposes in the future.
* Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem. This generalized approach means that regardless of the application (and in many cases the programming language) we are working with, design patterns can be applied to improve the structure of our code.
* Certain patterns can actually decrease the overall file-size footprint of our code by avoiding repetition. By encouraging developers to look more closely at their solutions for areas where instant reductions in repetition can be made, e.g. reducing the number of functions performing similar processes in favor of a single generalized function, the overall size of our codebase can be decreased. This is also known as making code more DRY.
* Patterns add to a developer's vocabulary, which makes communication faster.
* Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community. In some cases this leads to the creation of entirely new design patterns whilst in others it can lead to the provision of improved guidelines on how specific patterns can be best used. This can ensure that pattern-based solutions continue to become more robust than ad-hoc solutions may be.

![einstein drawing on chalkboard](http://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-77017-capture_10--2x1--894.png)


# Anti-Patterns

As you may have concluded from its name, they represent the mad scientist's Frankensteins, the inventor's failed projects, although ugly and not quite right they are the source from which important lessons have stemmed.

"If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned. The term anti-patterns was coined in 1995 by Andrew Koenig in the November C++ Report that year, inspired by the GoF's book Design Patterns. In Koenig’s report, there are two notions of anti-patterns that are presented. "

Anti-Patterns:

* Describe a bad solution to a particular problem which resulted in a bad situation occurring
* Describe how to get out of said situation and how to go from there to a good solution

"The bigger challenges happen after an application has hit production and is ready to go into maintenance mode. A developer working on such a system who hasn’t worked on the application before may introduce a bad design into the project by accident. If said bad practices are created as anti-patterns, they allow developers a means to recognize these in advance so that they can avoid common mistakes that can occur - this is parallel to the way in which design patterns provide us with a way to recognize common techniques that are useful."

An anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JavaScript are the following:

* Polluting the global namespace by defining a large number of variables in the global context
* Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of eval() internally.
* Modifying the Object class prototype (this is a particularly bad anti-pattern)
* Using JavaScript in an inline form as this is inflexible
* The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. We can see here for a live example of this in action. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement is favorable.

Knowledge of anti-patterns is critical for success. Once we are able to recognize such anti-patterns, we're able to refactor our code to negate them so that the overall quality of our solutions improves instantly.

What separates an expert from an intermediate is the ability to select from among various seemingly equivalent ways of doing the same thing... Read the book guys! Its a free online book, awesome read, great intro to Design Patterns (I mean if you're still reading this you likely enjoy indulging the nerd within) therefore you'll love it!

See Ya

![water pattern on spiderweb](https://images.unsplash.com/photo-1512773030458-5b07457c8531?auto=format&fit=crop&w=747&q=80)

Resources 

[Learning Javascript design Patterns- A book by Addy Osmani ](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#antipatterns) 


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)