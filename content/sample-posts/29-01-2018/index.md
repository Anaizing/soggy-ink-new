---
title: "Git commands Pt3-Day 27"
cover: "https://images.unsplash.com/photo-1506223327129-a4405640764e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ed0181345e1725c056998383fe80d9c&auto=format&fit=crop&w=1400&q=80"
category: "git"
date: "29/01/2018"
---

![girl walking with skateboard](https://images.unsplash.com/photo-1506223327129-a4405640764e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ed0181345e1725c056998383fe80d9c&auto=format&fit=crop&w=1400&q=80)

# Undoing Changes

So here goes the last section of Git Commands, for all the mistakes you will undoubtedly make. Now you can make them with confidence`!`

# Changing the last commit

# `git --amend`

With the --amend flag, you can alter the most-recent commit.

    $ git commit --amend

If your Working Directory is clean (meaning there aren't any uncommitted changes in the repository), then running git commit --amend will let you provide a new commit message. Your code editor will open up and display the original commit message. Just fix a misspelling or completely reword it! Then save it and close the editor to lock in the new commit message.

### Add Forgotten Files To Commit

Alternatively, git commit --amend will let you include files (or changes to files) you might've forgotten to include. Let's say you've updated the color of all navigation links across your entire website. You committed that change and thought you were done. But then you discovered that a special nav link buried deep on a page doesn't have the new color. You could just make a new commit that updates the color for that one link, but that would have two back-to-back commits that do practically the exact same thing (change link colors).

Instead, you can amend the last commit (the one that updated the color of all of the other links) to include this forgotten one. To do get the forgotten link included, just:

* edit the file(s)
* save the file(s)
* stage the file(s)
* and run `git commit --amend`

So you'd make changes to the necessary CSS and/or HTML files to get the forgotten link styled correctly, then you'd save all of the files that were modified, then you'd use `git add` to stage all of the modified files (just as if you were going to make a new commit!), but then you'd run `git commit --amend` to update the most-recent commit instead of creating a new one.

# Reverting a commit

When you tell Git to revert a specific commit, Git takes the changes that were made in commit and does the exact opposite of them. Let's break that down a bit. If a character is added in commit A, if Git reverts commit A, then Git will make a new commit where that character is deleted. It also works the other way where if a character/line is removed, then reverting that commit will add that content back!

# `git revert`

Lets say I've made a commit with some changes, I can revert it with the git revert command

    $ git revert <SHA-of-commit-to-revert>

If the SHA of the most-recent commit is db7e87a, to revert it: I'll just run git revert db7e87a (this will pop open my code editor to edit/accept the provided commit message)

I'll get the following output:

![terminal output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4dedb_ud123-l6-git-revert-post/ud123-l6-git-revert-post.png)

The output of the git revert command tells us what it reverted.  It uses the commit message of the commit that I told it to revert. Something that's also important is that it creates a new commit.

Recap

 the git revert command is used to reverse a previously made commit:

    $ git revert <SHA-of-commit-to-revert>

This command:

* will undo the changes that were made by the provided commit
* creates a new commit to record the change

# Reset vs Revert

At first glance, resetting might seem coincidentally close to reverting, but they are actually quite different. Reverting creates a new commit that reverts or undoes a previous commit. Resetting, on the other hand, erases commits!

    Resetting is Dangerous

You've got to be careful with Git's resetting capabilities. This is one of the few commands that lets you erase commits from the repository. If a commit is no longer in the repository, then its content is gone.

To alleviate the stress a bit, Git does keep track of everything for about 30 days before it completely erases anything. To access this content, you'll need to use the `git reflog` command. Follow these links for a bit more info on reflog.

* [git reflog docs](https://git-scm.com/docs/git-reflog)
* [Rewriting History](https://www.atlassian.com/git/tutorials/rewriting-history)
* [reflog, your safety net](http://gitready.com/intermediate/2009/02/09/reflog-your-safety-net.html)

### Relative Commit References

You already know that you can reference commits by their SHA, by tags, branches, and the special HEAD pointer. Sometimes that's not enough, though. There will be times when you'll want to reference a commit relative to another commit. For example, there will be times where you'll want to tell Git about the commit that's one before the current commit...or two before the current commit. There are special characters called "Ancestry References" that we can use to tell Git about these relative references. Those characters are:

* `^` – indicates the parent commit
* `~` – indicates the `first` parent commit

Here's how we can refer to previous commits:

* the parent commit – the following indicate the parent commit of the current commit
    * HEAD^
    * HEAD~
    * HEAD~1
* the grandparent commit – the following indicate the grandparent commit of the current commit
    * HEAD^^
    * HEAD~2
* the great-grandparent commit – the following indicate the great-grandparent commit of the current commit
    * HEAD^^^
    * HEAD~3

The main difference between the `^` and the `~` is when a commit is created from a merge. A merge commit has two parents. With a merge commit, the `^` reference is used to indicate the first parent of the commit while `^2` indicates the second parent. The first parent is the branch you were on when you ran `git merge` while the second parent is the branch that was merged in.

It's easier if we look at an example. This what my `git log` currently shows:

    * 9ec05ca (HEAD -> master) Revert "Set page heading to "Quests & Crusades""
    * db7e87a Set page heading to "Quests & Crusades"
    *   796ddb0 Merge branch 'heading-update'
    |\  
    | * 4c9749e (heading-update) Set page heading to "Crusade"
    * | 0c5975a Set page heading to "Quest"
    |/  
    *   1a56a81 Merge branch 'sidebar'
    |\  
    | * f69811c (sidebar) Update sidebar with favorite movie
    | * e6c65a6 Add new sidebar content
    * | e014d91 (footer) Add links to social media
    * | 209752a Improve site heading for SEO
    * | 3772ab1 Set background color for page
    |/  
    * 5bfe5e7 Add starting HTML structure
    * 6fa5f34 Add .gitignore file
    * a879849 Add header to blog
    * 94de470 Initial commit

Let's look at how we'd refer to some of the previous commits. Since HEAD points to the 9ec05ca commt:

* HEAD^ is the db7e87a commit
* HEAD~1 is also the db7e87a commit
* HEAD^^ is the 796ddb0 commit
* HEAD~2 is also the 796ddb0 commit
* HEAD^^^ is the 0c5975a commit
* HEAD~3 is also the 0c5975a commit
* HEAD^^^2 is the 4c9749e commit (this is the grandparent's (HEAD^^) second parent (^2))

# `git reset`

The `git reset` command is used to reset (erase) commits:

    $ git reset <reference-to-commit>

It can be used to:

* move the HEAD and current branch pointer to the referenced commit
* erase commits
* move committed changes to the staging index
* unstage committed changes


### Git Reset Flags

The way that Git determines if it erases, stages previously committed changes, or unstages previously committed changes is by the flag that's used. The flags are:

* `--mixed`
* `--soft`
* `--hard`

![git areas diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27971867_10159881556575117_2719193303220750502_n.jpg?oh=a42e8d62abbfde8d72d02ab0a94657d8&oe=5B1EDC7D)

As you can see above, there are 3 areas to which a commit that is reset can go to.

    1. The Working Directory
    2. Staging Index
    3. Trash (erased)

Running for example, git reset parent 

    git reset HEAD~1

Will move HEAD and master to the previous commit, so these 3 tags represent how that left over commit is treated...

![git areas diagram](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/27751915_10159881575825117_7213121364030311453_n.jpg?oh=26ae7b79a8c04d1bae63a46e802024d6&oe=5B20CEC2)

as you can see commit 3 is left hanging. 

# `--mixed`

This is the default. So running 

    git reset HEAD~1

without a flag is the same as running

    git reset --mixed HEAD~1

So if we stage the files, and commit again, we'll get the same commit content. We'll get a different commit SHA, because the timestamp of the commit will be different from the original one, but the commit content will be exactly the same.

</br>

# `--soft`

    git reset --soft HEAD~1

Using this flag we'll move the changes that were made in the commit with SHA 3 to the `Staging Index`, its the same changes, and now they're even staged for you, all we need to do is run `git commit` to get the commit back. Again since the time stamp will be different, the SHA will change, but not the content of the commit.

# `--hard`

    git reset --hard HEAD~1

This will throw out all of the changes that were made in the commit with SHA 3

Remember that using the `git reset` command will erase commits from the current branch. So its a good idea to create a backup branch.

    $ git branch backup

Recap

To recap, the git reset command is used erase commits:

    $ git reset <reference-to-commit>

It can be used to:

* move the HEAD and current branch pointer to the referenced commit
* erase commits with the `--hard` flag
* moves committed changes to the staging index with the --soft flag
* unstages committed changes `--mixed` flag

Typically, ancestry references are used to indicate previous commits. The ancestry references are:

* `^` – indicates the parent commit
* `~` – indicates the first parent commit

![graduate popping a bottle of champagne](https://images.unsplash.com/photo-1506967236291-3d3c4ad88abd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8966dd3034be8631151ec07601acfa02&auto=format&fit=crop&w=1498&q=80)

The End...



Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
