---
title: "Git commands Pt2-Day 26"
cover: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73c00aaa6d23115d7fbe494c0cc1e5e3&auto=format&fit=crop&w=1050&q=80"
category: "git"
date: "29/01/2018"
tags:
    - git
    - diff
    - gitignore
    - tagging
    - branching
    - merging

---

![man starting at his laptop](https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73c00aaa6d23115d7fbe494c0cc1e5e3&auto=format&fit=crop&w=1050&q=80)

Strap yourself in, we're not done yet`!`

# `git diff`

![terminal output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a3901f_ud123-l4-git-diff/ud123-l4-git-diff.png)

The git diff command can be used to see changes that have been made but haven't been committed, yet.

    $ git diff

`git log -p` uses git `diff` under the hood.

# Globing

`Globbing` lets you use special characters to match patterns/characters. In the `.gitignore` file, you can use the following:

blank lines can be used for spacing
* `#` - marks line as a comment
* `*` - matches 0 or more characters
* `?` - matches 1 character
* `[abc]` - matches a, b, or c
* `**` - matches nested directories - `a/**/z` matches
    * `a/z`
    * `a/b/z`
    * `a/b/c/z`

So if all of the 50 images are JPEG images in the "samples" folder, we could add the following line to `.gitignore` to have Git ignore all 50 images.

    samples/*.jpg

</br>

# `.gitignore`

To recap, the `.gitignore` file is used to tell Git about the files that Git should not track. This file should be placed in the same directory that the .git directory is in.

# Tagging, Branching & Merging


![code editor waiting on tag message](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a39be9_ud123-l5-editor-with-tag-message/ud123-l5-editor-with-tag-message.png)

# `git tag`

The `git tag` command is used to add a marker on a specific commit. The tag does not move around as new commits are added

    $ git tag -a v1.0

This command will:

* add a tag to the most recent commit
* add a tag to a specific commit if a SHA is passed

### Annotates tags

Above the `-a` flag is used. This flag tells Git to create an annotated flag. If you don't provide the flag (i.e. `git tag v1.0`) then it'll create what's called a lightweight tag.

Annotated tags are recommended because they include a lot of extra information such as:

* the person who made the tag
* the date the tag was made
* a message for the tag

Because of this, you should always use annotated tags.

You can use `git log` to see the annotated tag.

### Deleting  Tag

What if you accidentally misspelled something in the tag's message, or mistyped the actual tag name (v0.1 instead of v1.0). How could you fix this? The easiest way is just to delete the tag and make a new one.

A Git tag can be deleted with the -d flag (for delete!) and the name of the tag:

    $ git tag -d v1.0

</br>

### Adding A Tag To A Past Commit

Running `git tag -a v1.0` will tag the most recent commit. But what if you wanted to tag a commit that occurred farther back in the repo's history?

All you have to do is provide the SHA of the commit you want to tag!

    $ git tag -a v1.0 a87984

</br>

# Branching

The git branch command is used to interact with Git's branches:

    $ git branch

It can be used to:

* list all branch names in the repository
* create new branches
* delete branches

If we type out just git branch it will list out the branches in a repository:

### Create a Branch

To create a branch, all you have to do is use `git branch` and provide it the name of the branch you want it to create. So if you want a branch called "sidebar", you'd run this command:

    $ git branch sidebar

</br>

### Switching Branches


Remember that when a commit is made that it will be added to the current branch. So even though we created the new `sidebar`, no new commits will be added to it since we haven't switched to it, yet. If we made a commit right now, that commit would be added to the `master` branch, not the sidebar branch. 

# `git checkout`

To switch between branches, we need to use Git's `checkout` command.

    $ git checkout sidebar

Running this command will:

* remove all files and directories from the Working Directory that Git is tracking
    * (files that Git tracks are stored in the repository, so nothing is lost)
* go into the repository and pull out all of the files and directories of the commit that the branch points to

Running this command will:

* remove all files and directories from the Working Directory that Git is tracking
(files that Git tracks are stored in the repository, so nothing is lost)
* go into the repository and pull out all of the files and directories of the commit that the branch points to

The funny thing, though, is that both sidebar and master are pointing at the same commit, so it will look like nothing changes when you switch between them. But the command prompt will show "sidebar", now:

![terminal showing sidebar](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4c60a_ud123-l5-git-checkout-sidebar/ud123-l5-git-checkout-sidebar.png)

### Branches in the log

The branch information in the command prompt is helpful, but the clearest way to see it is by looking at the output of git log. But just like we had to use the --decorate flag to display Git tags, we need it to display branches.

    $ git log --oneline --decorate

In the output above, notice how the special "HEAD" indicator we saw earlier has an arrow pointing to the sidebar branch. It's pointing to sidebar because the sidebar branch is the current branch, and any commits made right now will be added to the sidebar branch.

### The Active Branch

The command prompt will display the active branch. But this is a special customization we made to our prompt. If you find yourself on a different computer, the fastest way to determine the active branch is to look at the output of the git branch command. An asterisk will appear next to the name of the active branch.

![active branch bar output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4c6aa_ud123-l5-git-branch-asterisk/ud123-l5-git-branch-asterisk.png)


### Delete a branch

A branch is used to do development or make a fix to the project that won't affect the project (since the changes are made on a branch). Once you make the change on the branch, you can combine that branch into the master branch (this "combining of branches" is called `merging` and we'll look at shortly).

Now after a branch's changes have been merged, you probably won't need the branch anymore. If you want to delete the branch, you'd use the `-d` flag. The command below includes the `-d` flag which tells Git to delete the provided branch (in this case, the "sidebar" branch).

    $ git branch -d sidebar

One thing to note is that you can't delete a branch that you're currently on. So to delete the sidebar branch, you'd have to switch to either the `master` branch or create and switch to a new branch.

If you created the sidebar branch, added commits to it, and then tried to delete it with the git branch `-d` sidebar, Git wouldn't let you delete the branch because you can't delete a branch that you're currently on. If you switched to the master branch and tried to delete the sidebar branch, Git also wouldn't let you do that because those new commits on the sidebar branch would be lost! To force deletion, you need to use a capital D flag - git branch `-D`h sidebar.

Recap

    // to list all branches
    $ git branch

    // to create a new "footer-fix" branch
    $ git branch footer-fix

    // to delete the "footer-fix" branch
    $ git branch -d footer-fix

</br>

### Switch and Create Branch In One Command

The way we currently work with branches is to create a branch with the `git branch` command and then switch to that newly created branch with the `git checkout` command.

But did you know that the `git checkout` command can actually create a new branch, too? If you provide the `-b` flag, you can create a branch and switch to it all in one command.

    $ git checkout -b anaizing-branch-for-awesome-changes

If you wanted to create a new footer branch and have this footer branch start at the same location as the master branch you would do this:

    $ git checkout -b footer master

Now if we run a quick git log --oneline --decorate, we should see (your commit messages might be different):

![terminal](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4d41d_ud123-l5-git-checkout-b-footer-master/ud123-l5-git-checkout-b-footer-master.png)

The Terminal application showing the output of `git log --oneline --decorate`. The special `HEAD` pointer is pointing at the footer branch. The footer branch is on the same commit as the "master" branch.

### See all branches at Once

The `--graph` flag adds the bullets and lines to the leftmost part of the output. This shows the actual branching that's happening. The `--all` flag is what displays all of the branches in the repository.

    $ git log --oneline --decorate --graph --all

Running this command will show all branches and commits in the repository:

![terminal](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4d51e_ud123-l5-git-log-graph-all/ud123-l5-git-log-graph-all.png)

# Merging

Remember that the purpose of a topic branch (like sidebar) is that it lets you make changes that do not affect the master branch. Once you make changes on the topic branch, you can either decide that you don't like the changes on the branch and you can just delete that branch, or you can decide that you want to keep the changes on the topic branch and combine those changes in with those on another branch.

Combining branches together is called `merging`.

Git can automatically merge the changes on different branches together. This branching and merging ability is what makes Git incredibly powerful! You can make small or extensive changes on branches, and then just use Git to combine those changes together.

### Know the branch

It's very important to know which branch you're on when you're about to merge branches together. Remember that making a merge makes a commit.
If you make a merge on the wrong branch, use this command to undo the merge:

    git reset --hard HEAD^

Make sure to include the `^` character! It's a known as a `Relative Commit Reference` and indicates `the parent commit`.

### The Merge Command 

The git merge command is used to combine Git branches:

    $ git merge <name-of-branch-to-merge-in>

When a merge happens, Git will:

* look at the branches that it's going to merge
* look back along the branch's history to find a single commit that both branches have in their commit history
* combine the lines of code that were changed on the separate branches together
* makes a commit to record the merge

### Fast forward merge 

Say I've checked out the master branch and I want it to have the changes that are on the `footer` branch. If I wanted to verbalize this, I could say this is - `"I want to merge in the footer branch"`. That `merge in` is important; when a merge is performed, the other branch's changes are brought into the branch that's currently `checked out`.

Let me stress that again - When we merge 
* we're merging some other branch into the current (checked-out) branch. 
* We're not merging two branches into a new branch. 
* We're not merging the current branch into the other branch.

Now, since `footer` is directly ahead of `master`, this merge is one of the easiest merges to do. Merging `footer` into `master` will cause a `Fast-forward merge`. A Fast-forward merge will just move the currently checked out branch forward until it points to the same commit that the other branch (in this case, footer) is pointing to.

To merge in a footer branch, run:

    $ git merge footer

### Perform a regular Merge 

So let's do the more common kind of merge where two divergent branches are combined. You'll be surprised that to merge in a divergent branch like sidebar is actually no different!

To merge in the sidebar branch, make sure you're on the master branch and run:

    $ git merge sidebar

Because this combines two divergent branches, a commit is going to be made. And when a commit is made, a commit message needs to be supplied. Since this is a merge commit a default message is already supplied. You can change the message if you want, but it's common practice to use the default merge commit message. So when your code editor opens with the message, just close it again and accept that commit message.

This is what my Terminal shows after using the default commit message:

![The Terminal application showing the result of merging the sidebar branch](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4d84e_ud123-l5-git-merge-sidebar/ud123-l5-git-merge-sidebar.png)

To recap, the git merge command is used to combine branches in Git:

    $ git merge <other-branch>

There are two types of merges:

* Fast-forward merge – the branch being merged in must be ahead of the checked out branch. The checked out branch's pointer will just be moved forward to point to the same commit as the other branch.
* the regular type of merge
    * two divergent branches are combined
    * a merge commit is created

# Merge Conflict

When a merge fails, it's called a `merge conflict`. If a merge conflict does occur, Git will try to combine as much as it can, but then it will leave special markers (e.g. >>> and <<<) that tell you where you (yep, you the programmer!) needs to manually fix.

### What Causes A Merge Conflict

As you've learned, Git tracks lines in files. A merge conflict will happen when the exact same line(s) are changed in separate branches. For example, if you're on a alternate-sidebar-style branch and change the sidebar's heading to "About Me" but then on a different branch and change the sidebar's heading to "Information About Me", which heading should Git choose? You've changed the heading on both branches, so there's no way Git will know which one you actually want to keep. And it sure isn't going to just randomly pick for you!
Remember that a merge conflict occurs when Git isn't sure which line(s) you want to use from the branches that are being merged. 


This is what the terminal will look like when two branches alter the same file

![terminal output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4dbc5_ud123-l5-git-merge-conflict-prep2/ud123-l5-git-merge-conflict-prep2.png)

Remember to view the branch structure you input

    $ git log --oneline --decorate --graph --all

When you perform a merge conflict your terminal will have this output 

![Terminal output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a4dc22_ud123-l5-git-merge-conflict/ud123-l5-git-merge-conflict.png)

### Merge Conflict Output Explained

    $ git merge heading-update 
    Auto-merging index.html
    CONFLICT (content): Merge conflict in index.html
    Automatic merge failed; fix conflicts and then commit the result.

Notice that right after the git merge heading-update command, it tries merging the file that was changed on both branches (index.html), but that there was a conflict. Also, notice that it tells you what happened - "Automatic merge failed; fix conflicts and then commit the result".

and your code editor will look something like this

![code editor output](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/58a74de1_ud123-l5-git-merge-conflict-indicators/ud123-l5-git-merge-conflict-indicators.png)

### Merge Conflict Indicators Explanation

The editor has the following merge conflict indicators:

    * <<<<<<< HEAD everything below this line 
    (until the next indicator) shows you what's 
    on the current branch
    * ||||||| merged common ancestors everything 
    below this line (until the next indicator) 
    shows you what the original lines were
    * ======= is the end of the original lines, 
    everything that follows (until the next 
    indicator) is what's on the branch that's 
    being merged in
    * >>>>>>> heading-update is the ending 
    indicator of what's on the branch that's 
    being merged in (in this case, the 
    heading-update branch)

</br>

### Resolving a merge conflict

Git is using the merge conflict indicators to show you what lines caused the merge conflict on the two different branches as well as what the original line used to have. So to resolve a merge conflict, you need to:

    1. choose which line(s) to keep
    2. remove all lines with indicators

</br>

### Commit Merge Conflict

Once you've removed all lines with merge conflict indicators and have selected what heading you want to use, just save the file, add it to the staging index, and commit it! Just like with a regular merge, this will pop open your code editor for you to supply a commit message. Just like before, it's common to use the provided merge commit message, so after the editor opens, just close it to use the provided commit message.


### Merge Conflict Recap

A merge conflict happens when the same line or lines have been changed on different branches that are being merged. Git will pause mid-merge telling you that there is a conflict and will tell you in what file or files the conflict occurred. To resolve the conflict in a file:

* locate and remove all lines with merge conflict indicators
* determine what to keep
* save the file(s)
* stage the file(s)
* make a commit

Be careful that a file might have merge conflicts in multiple parts of the file, so make sure you check the entire file for merge conflict indicators - a quick search for <<< should help you locate all of them


And yeah, theres still more!

See ya

Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
