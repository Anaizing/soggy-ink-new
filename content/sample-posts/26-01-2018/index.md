---
title: "Github & Git/ Version Control-Day 23"
cover: "https://images.unsplash.com/photo-1498622429433-bbb22b92ee02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfea5f4bae9d48800b7a85cf4669a704&auto=format&fit=crop&w=1500&q=80"
category: "test3"
date: "26/01/2018"
tags:
    - git
    - github
    - verison control
---

![two developers working back to back](https://images.unsplash.com/photo-1498622429433-bbb22b92ee02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfea5f4bae9d48800b7a85cf4669a704&auto=format&fit=crop&w=1500&q=80)

# What is Version Control?

So a Version Control System is just software that helps you control (or manage) the different versions...of something (typically source code). For example `git`.
There's a few out there, but three of the most popular ones are
* Git
* Subversion
* Mercurial

There is also two categories of version control

1. Centralized

2. Distributed

### Centralized model

![one computer with arrows pointing to a smaller set of four computers](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27545653_10159852887655117_3439104775970373671_n.jpg?oh=caf5d452019e6ccf4af68f5dda4942cf&oe=5AE42E8B)

In the centralized model, there's one all powerful central computer that hosts all the projects. The interaction has to go through this central computer.

### Distributed model

![four computers connected in a circle](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27540734_10159852891655117_5116401059418827759_n.jpg?oh=281d4806e11557d7d292b43d9a317dd7&oe=5AD98C28)

In the distributed model, there's no central repository of information, each developer has a complete copy of the project on their computer which is great cause it means we can work offline.

# Git vs Github

These are two different & separate things. And btw Git is a `Distributed Version Control System`.

* Git is a Version control tool
* Github is a service that hosts git projects.

To work with git projects you're not required to work with Github. But its awesome so why wouldnt you.

# Terminology time!

### Version Control System (VCS) or Source Code Manager (SCM): 
A VCS allows you to revert files back to a previous state, revert the entire project back to a previous state, review changes made over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. 

### Commit (snapshot): 
Git thinks of its data like a set of snapshots of a mini file system. Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. 

### Repository (repo): 
A directory that contains your project work, as well as a few files
(hidden by default in Mac OS X) which are used to communicate with Git. Repositories
can exist either locally on your computer or as a remote copy on another computer

### Working Directory: 
The files that you see in your computer's file system. When you open your project files up on a code editor, you're working with files in the Working Directory. 

This is in contrast to the files that have been saved (in commits!) in the repository.

When working with Git, the Working Directory is also different from the command line's concept of the current working directory which is the directory that your shell is "looking at" right now.

### Checkout: 
When content in the repository has been copied to the Working Directory. It is possible to checkout many things from a repository; a file, a commit, a branch, etc. 

### Staging Area or Staging Index or Index: 
A file in the Git directory that stores information about what will go into your next commit. You can think of the staging area as a prep table where Git will take the next commit. Files on the Staging Index are poised to be added to the repository.

### SHA: 
A SHA is basically an ID number for each commit. It is a 40-character string composed of characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. "SHA" is shorthand for "SHA hash". A SHA might look like this: 

* e2adf8ae3e2e4ed40add75cc44cf9d0a869afeb6

### Branch: 
A branch is when a new line of development is created that diverges from the main line of development. This alternative line of development can continue without altering the main line.

You can think of a branch as where you make a save point in your game and then decide to try out a risky move in the
game. If the risky move doesn't pan out, then you can just go back to the save point. The key thing that makes branches incredibly powerful is that you can make save points on one branch, and then switch to a different branch and make save points there, too.

# inside a Git repository

In a Git repository there are three main areas we need to know about.
1. First theres the `Working Directory`
2. Then there's the `Staging Index`
3. and last is the `Repository`
You might not know about these three areas when you start working with Git, because you dont really see any visible changes to the files on your computer. Git manages these three different areas, and you normally would use the `git` shell command to interact with files, and move them from section to section. 

### The way it works

* Say we've created a Git repository, it starts out empty.
* Then once we update the files we're working on in our working directory, we pass them on to the Staging index- this where we place the files that are about to be committed. 
* Now we can commit the files, which moves them to the repository. 
* Three easy steps. 
* So if we make changes to some of our files, git knows which files are new or changed, and they go from the staging index, once we commit them, to the repository again where they are safe. 
* Only files inside the staging index will be committed to the repository when we make a commit.

    1. ![stage 1 diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27332434_10159853142610117_3975327115813249859_n.jpg?oh=2c4782d25c1ffe82e93d254ad18559cc&oe=5AE0785A)

    2. ![stage 1 diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27337151_10159853146105117_4614216936357344929_n.jpg?oh=f1ee2d5ea4d3c7b3c654472b10e8e448&oe=5B25106A)

    3. ![stage 1 diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27539951_10159853257080117_6625463665342808019_n.jpg?oh=3fda890d74532c19d20ac35ac524f3d5&oe=5B1F445D)

    For the full course on getting started with Git visit the link in the resources. Its free, and I highly recommend it since you'll probably be using these tools the rest of your life.

    See Ya!



Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)