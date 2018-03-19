---
title: "Git Commands-Day 24"
cover: "https://images.unsplash.com/photo-1498393533405-8dd2ddbf6db4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0d844d6e1250b2e051d16ae47601581&auto=format&fit=crop&w=1502&q=80"
category: "git"
date: "27/01/2018"
slug: "Big-Sample_Test"
tags:
    - git
    - git basics
    - init
    - clone
    - log
    - add
---

![bondi rock pools](https://images.unsplash.com/photo-1498393533405-8dd2ddbf6db4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0d844d6e1250b2e051d16ae47601581&auto=format&fit=crop&w=1502&q=80)

This is my hood btw^^^

Beware this is pretty much a copy&paste, but this post contains all the important commands you need to know when working with Git. If you haven't done the [Udacity course on Git Version Control](https://classroom.udacity.com/courses/ud123), go do it now! Its fantastic and very in depth.

Beware its not a short course, but its a MUST!!

I LOVE THIS FUCKING JOB`!!!`


# `git init`

Use the git init command to create a new, empty repository in the current directory.

    $ git init

Running this command creates a hidden `.git directory`. This `.git directory` is the brain/storage center for the repository. It holds all of the configuration files and directories and is where all of the commits are stored.

# `git clone`

The git clone command is used to create an identical copy of an existing repository.

    $ git clone <path-to-repository-to-clone>

This command:

* takes the path to an existing repository
* by default will create a directory with the same name as the repository that's being cloned
* can be given a second argument that will be used as the name of the directory
* will create the new repository inside of the current working directory

# `git status`

The git status command will display the current status of the repository.

    $ git status

I can't stress enough how `important` it is to use this command all the time as you're first learning Git. This command will:

* files that Git is tracking that have been modified
* a whole bunch of other things that we'll be learning about throughout the rest of the course ;-)
* tell us about new files that have been created in the Working Directory that Git hasn't started tracking, yet

# `git log`

![git log on the console](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27657326_10159853961255117_281364771818047276_n.jpg?oh=638b0f7616bd2ef8569dc3326cb9486c&oe=5B1C8DC9)

Let's do a quick recap of the `git log` command. The git log command is used to display all of the commits of a repository.

    $ git log

By `default`, this command displays:

* the `SHA`
* the author
* the date
* and the message

Git uses the command line pager, Less, to page through all of the information. The important keys for Less are:

* to scroll down, press
     * `j` or `↓` to move down one line at a time
     * `d` to move by half the page screen
     * `f` to move by a whole page screen
* to scroll up, press
    * `k` or ↑ to move up one line at a time
    * `u` to move by half the page screen
    * `b` to move by a whole page screen
* press `q` to quit out of the log (returns to the regular command prompt)



# `git log --oneline`

![git log --oneline output](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27540365_10159853976050117_6974441610426936104_n.jpg?oh=2a6cf8a6f7f0f8af5b70bcf4f076d34e&oe=5ADD6DF7)

The git log command has a flag that can be used to alter how it displays the repository's information. That flag is `--oneline`:

    $ git log --oneline


# `git log --stat`

![git log --stat output](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27336461_10159854002020117_8174758123756931869_n.jpg?oh=3135744227fe99344a132c294ee2eb7d&oe=5B22C22D)

To recap, the --stat flag is used to alter how git log displays information:

    $ git log --stat

This command:

* displays the file(s) that have been modified
* displays the number of lines that have been added/removed
* displays a summary line with the total number of modified files and lines that have been added/removed

# `git log -p`

![git log -p output](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27657073_10159854029435117_7372991187624436886_n.jpg?oh=5bf90f053282049763a04c84f9116653&oe=5B2521E4)

The git log command has a flag that can be used to display the actual changes made to a file. The flag is `--patch` which can be shortened to just `-p`:

    $ git log -p

This command adds the following to the default output:

* displays the files that have been modified
* displays the location of the lines that have been added/removed
* displays the actual changes that have been made

There is also a way to display a specific commit's details without the whole list of commits.
You can focus on one by supplying the `SHA` of a commit as the final argument for all of these commands. For example:

    $ git log -p fdf5493

Keep in mind that it will also show all of the commits that were made prior to the supplied `SHA`.


# `git show`

    $ git show

Running it like the example above will only display the most recent commit. Typically, a `SHA` is provided as a final argument:

    $ git show fdf5493

The git show command will show only one commit. So don't get alarmed when 
you can't find any other commits - it only shows one. The output of the git show command is exactly the same as the git log -p command. So by default, git show displays:

* the commit
* the author
* the date
* the commit message
* the patch information

However, git show can be combined with most of the other flags we've looked at:

* `--stat` - to show the how many files were changed and the number of lines that were added/removed
* `-p` or `--patch` - this the default, but if `--stat` is used, the patch won't display, so pass `-p` to add it again
* `-w` - to ignore changes to whitespace
* You are now among the git logging elite!

# Once you're ready for action

Lets say you've `git init` and built up your file structure, then you checked your `git status`. Lets get into it...


Let's do a quick review of what's going on and what we're about to do:

* we have some new files that we want Git to start tracking
* for Git to track a file, it needs to be committed to the repository
* for a file to be committed, it needs to be in the Staging Index
* the `git add` command is used to move files from the Working Directory to the Staging Index

![staging index diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/19030766_10159854563970117_7018375236833559539_n.jpg?oh=18960f43d6ef97bfefef32526784648d&oe=5B1CCF1B)

# STAGING FILES


# `git add`

    $ git add index.html

This will move put our file in the staging area

we can check using 

    $ git status

Then this happens

![command output](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27332680_10159854589715117_3378965814419955502_n.jpg?oh=949acb709e24409e8b02b7446bebeaef&oe=5ADD5E85)

* Here we can see by the green that that `index.html` was indeed added to the `staging area`. 
* It shows that `index.html` is now in the `Changes to be committed` category. (same thing)



### Changes To Be Committed

TIP: Did you also notice the helpful text that's located just beneath `Changes to be committed`? It says `(use "git rm --cached <file>..." to unstage)` This is a hint of what you should do if you accidentally ran git add and gave it the wrong file.

As a side note, `git rm --cached` is not like the shell's `rm` command. `git rm --cached` will not destroy any of your work; it just removes it from the `Staging Index`.

Also, this used the word `unstage`. The act of moving a file from the Working Directory to the Staging Index is called `staging`. If a file has been moved, then it has been `staged`. Moving a file from the Staging Index back to the Working Directory will unstage the file. If you read documentation that says "stage the following files" that means you should use the `git add command`.

### Stage Remaining Files

The `index.html` file has been staged. Let's stage the other two files. Now we could run the following:

    $ git add css/app.css js/app.js

...but that's a lot of extra typing. We could use a special command line character to help:

### The Period `.`

The period refers to the current directory and can be used as a shortcut to refer to all files and directories (including all nested files and directories!).

    $ git add css/app.css js/app.js
    // would become
    $ git add .

The only thing to be careful of is that you might accidentally include more files than you meant to. Right now we want both `css/app.css` and `js/app.js` to be staged, so running this command is fine right now. But let's say you added some images to an img directory but didn't want to stage them just yet. Running git add . will stage them. If you do stage files that you didn't mean to, remember that git status will tell you the command to use to "unstage" files.

### Make a commit


# `git commit`

If you did configure your editor, then go ahead and make a commit using the git commit command:

    $ git commit

Remember, your editor should pop open and you should see something like this:

![code editor commit file](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a38a0b_ud123-l4-git-commit-editor/ud123-l4-git-commit-editor.png)

### Terminal Hangs

If you switch back to the Terminal for a quick second, you'll see that the Terminal is chillin' out just waiting for you to finish with the code editor that popped up. You don't need to worry about this, though. Once we add the necessary content to the code editor and finally close the code editor window, the Terminal will unfreeze and return to normal.

### Code Editor Commit Message Explanation

Ok, switch back to the code editor. Here's what's showing in my editor:

    # Please enter the commit message for your changes. Lines starting
    # with '#' will be ignored, and an empty message aborts the commit.
    # On branch master
    #
    # Initial commit
    #
    # Changes to be committed:
    #    new file:   css/app.css
    #    new file:   index.html
    #    new file:   js/app.js
    #

The first paragraph is telling us exactly what we need to do - we need to supply a message for this commit. Also, any line that begins with the `#` character will be ignored. Farther down it says that this will be the initial commit. Lastly, it's giving us a list of the files that will be committed.

Since this is the very first commit of the repository, we'll use the commit message `Initial commit`. The text "Initial commit" isn't special, but it's the de facto commit message for the very first commit. If you want to use something else, feel free!

Type out your commit message on the first line of the code editor:


![initial commit](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a38aab_ud123-l4-git-commit-initial-commit/ud123-l4-git-commit-initial-commit.png)

### Finish Committing

Now save the file and close the editor window (closing just the pane/tab isn't enough, you need to close the code editor window that the git commit command opened).

Awesome, now switch back to the Terminal and you should see something like the following:

![terminal](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a38ad8_ud123-l4-git-commit-finished/ud123-l4-git-commit-finished.png)

### Bypass The Editor With The -m Flag

TIP: If the commit message you're writing is short and you don't want to wait for your code editor to open up to type it out, you can pass your message directly on the command line with the -m flag:

    $ git commit -m "Initial commit"

In the example above, the text `Initial commit` is used as the commit message. Be aware that you can't provide a description for the commit, only the message part.


Theres more but that'll do for today

See ya`!`


![Bronte pool](https://images.unsplash.com/photo-1501141659789-9fd58caa98b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb951c0e16c65f015d78951a8d10d64a&auto=format&fit=crop&w=1396&q=80)


Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](http://anaizing.design/)
