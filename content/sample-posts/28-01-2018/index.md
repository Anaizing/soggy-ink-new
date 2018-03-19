---
title: "What To Include In A Commit-Day 25"
cover: "https://images.unsplash.com/photo-1500305614571-ae5b6592e65d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dcb1979a8d5add2d0a31b8b9647526c6&auto=format&fit=crop&w=755&q=80"
category: "git"
date: "28/01/2018"
tags:
    - git
    - version control
    - commit
---

# What To Include In A Commit

Another copy&paste sorry. Important point.

When you're on your own, how do you know what you should include in a commit and when/how often you should make commits?

# The goal is that each commit has a single focus. 
Each commit should record a single-unit change. Now this can be a bit subjective (which is totally fine), but each commit should make a change to just one aspect of the project.

Now this isn't limiting the number of lines of code that are added/removed or the number of files that are added/removed/modified. Let's say you want to change your sidebar to add a new image. You'll probably:

* add a new image to the project files
* alter the HTML
* add/modify CSS to incorporate the new image

A commit that records all of these changes would be totally fine!

Conversely, a commit shouldn't include unrelated changes - changes to the sidebar and rewording content in the footer. These two aren't related to each other and shouldn't be included in the same commit. Work on one change first, commit that, and then change the second one. That way, if it turns out that one change had a bug and you have to undo it, you don't have to undo the other change too.

The best way to think about what should be in a commit is to think, "What if all changes introduced in this commit were erased?". If a commit were erased, it should only remove one thing.

Don't worry, commits don't get randomly erased.



## Git Commit Recap

The git commit command takes files from the Staging Index and saves them in the repository.

    $ git commit

This command:

* will open the code editor that is specified in your configuration

Inside the code editor:

* a commit message must be supplied
* lines that start with a # are comments and will not be recorded
* save the file after adding a commit message
* close the editor to make the commit


Then, use git log to review the commit you just made!





Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)
