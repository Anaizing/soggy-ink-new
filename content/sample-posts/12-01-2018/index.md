---
path: "/Day-9"
date: "2018-01-12T17:12:33.962Z"
title: "WTF is CI??-Day 9"
---
##### 20 min read... Continuous Intergration/

![a chest of files](https://images.unsplash.com/photo-1463527882365-18201e85a091?auto=format&fit=crop&w=819&q=80)

# Continuous Intergration

Its pretty much what its saying it is, its continuous and it intergrates. A bit like an assembly line of slave kids making you shoes, except instead of sad children its you and I making the shoes (and the shoes are code). Who doesn't like shoes right!?

Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early. 

By integrating regularly, you can detect errors quickly, and locate them more easily.

### Why its so great

Because you’re integrating so frequently, there is significantly less back-tracking to discover where things went wrong, so you can spend more time building features.

Continuous Integration is cheap. Not integrating continuously is expensive. If you don’t follow a continuous approach, you’ll have longer periods between integrations. This makes it exponentially more difficult to find and fix problems. Such integration problems can easily knock a project off-schedule, or cause it to fail altogether.

### CI Principles

Continuous Integration is backed by several important principles and practices.

Practices

* Maintain a single source repository
* Automate the build
* Make your build self-testing
* Every commit should build on an integration machine
* Keep the build fast
* Test in a clone of the production environment
* Make it easy for anyone to get the latest executable version
* Everyone can see what’s happening 
* Automate deployment

How to do it

* Developers check out code into their private workspaces
* When done, commit the changes to the repository
* The CI server monitors the repository and checks out changes when they occur
* The CI server builds the system and runs unit and integration tests
* The CI server releases deployable artifacts for testing
* The CI server assigns a build label to the version of the code it just built
* The CI server informs the team of the successful build
* If the build or tests fail, the CI server alerts the team
* The team fixes the issue at the earliest opportunity
* Continue to continually integrate and test throughout the project

Team Responsibilities

* Check in frequently
* Don’t check in broken code
* Don’t check in untested code
* Don’t check in when the build is broken
* Don’t go home after checking in until the system builds

Many teams develop rituals around these policies, meaning the teams effectively manage themselves, removing the need to enforce policies from on high.

### CI Tooling

Continuous Integration came as an adoption of a more refined programming practice, which aims to help developers with preventing serious integration pitfalls. As you continue to build your project, there are more things to integrate, and back-tracking can quickly become a time-consuming chore. CI Tools automate many tedious tasks and make it easier to quickly backtrack before you end up releasing a disaster, all while keeping a neat and tidy record of the growth of your project.

 [Here is 51 CI tools you can browse through](https://stackify.com/top-continuous-integration-tools/) If you got the time.

### Free stuff

Lets dive into some popular free and open source CI, this list includes Jenkins, GitLab CI, Buildbot, Drone, and Concourse.

![guy holding up a sign saying explore](https://images.unsplash.com/photo-1496166487634-6ac9f4adf9a8?auto=format&fit=crop&w=334&q=80)

# Jenkins

Jenkins is one of the earliest open-source continuous integration servers and remains the most common option in use today. Originally a part of the Hudson project, the community and codebase split following trademark conflicts with Oracle after their acquisition of Sun Microsystems, the original developers. Hudson was originally released in 2005, while the first release as Jenkins was made in 2011.

Over the years, Jenkins has evolved into a powerful and flexible system of automating software-related tasks. Jenkins itself serves mainly as an automation framework with much of the important logic implemented through a library of plugins. Everything from listening for web hooks or watching repositories to building environments and language support is handled by plugins. While this provides a great deal of flexibility, your CI process may come to rely on numerous third-party plugins, which can be fragile.

Jenkins' pipeline workflow—also provided through a plugin—is a relatively new addition, available as of 2016. The CI process can be defined either declaratively or imperatively using the Groovy language in files within the repository itself or through text boxes in the Jenkins web UI. One common criticism of Jenkins is that the plugin-centric configuration model and ability to define pipeline or build processes outside of repositories can sometimes make it difficult to easily replicate a configuration on a different Jenkins instance.

Jenkins is written in Java and released under an MIT license. 

# GitLab CI

GitLab CI is a continuous integration tool built into GitLab, a git repository hosting and development tools platform. Originally released as a standalone project, GitLab CI was integrated into the main GitLab software with the release of GitLab 8.0 in September, 2015.

The CI/CD process in GitLab CI is defined within a file in the code repository itself using a YAML configuration syntax. The work is then dispatched to machines called runners, which are easy to set up and can be provisioned on many different operating systems. When configuring runners, you can choose between different executors like Docker, shell, VirtualBox, or Kubernetes to determine how the tasks are carried out.

The tight coupling of GitLab CI with the GitLab repository platform has definite implications on the how the software can be used. GitLab CI is not an option for developers who use other repository hosting platforms. On the positive side, the integrated functionality allows GitLab users to set up a CI/CD environment without installing and learning an additional tool. Automated testing can begin by enabling a few options in the web interface, registering a runner machine, and adding a pipeline definition file into the repository. The close relationship also allows you to share runners between projects, see the current build status within the repository automatically, and keep build artifacts with the code that produced them.

GitLab and GitLab CI are written in Ruby and Go and released under an MIT license. 

# Buildbot


Buildbot is a continuous integration framework that offers tremendous amounts of flexibility. First released in 2003 as an alternative to Mozilla's Tinderbox project, Buildbot was designed primarily as a way to automate build testing across a wide array of platforms.

Buildbot is released with GPL licensing and written in Python using the Twisted library. Rather than abstracting away the underlying language for the sake of simplified configuration, Buildbot's configuration is written entirely in Python. This means that the configuration tends to be significantly more complex than other systems but administrators have more scope to design their ideal workflow and process. Each stage of the build is clearly separated and programmable. Buildbot positions itself as a framework with tools to build your own custom processes, comparable to how web frameworks allow you to build custom sites.

Buildbot's history as a build testing platform means that it has support for many different operating systems and version control systems. Likewise, because it was designed with open-source testing in mind, its architecture allows users to easily submit workers with their preferred platforms to projects to expand the available test base. The user only needs to install a few Python packages on the system and then provide the credentials to the project.


# Drone

Drone is a modern CI/CD platform built with a containers-first architecture. While the tools discussed above all include the option of running builds with Docker, a container-based workflow is at the core of Drone's design. Drone is written in Go and was first released in 2014 under an Apache license.

Drone acts as a middle coordinating layer between Docker and a repository provider. Rather than starting up the CI/CD server and then hooking into a version control system hosting service afterwards, Drone requires the repository account information upfront to bootstrap its own authentication, user, and permissions models. As with all of its CI processes, Drone itself is run as a container. It supports multiple database backends and repository providers and has builtin support for setting up TLS/SSL certificates with Let's Encrypt for transport encryption.

Drone looks for special YAML files within repositories for the pipeline definition. The syntax is designed to be easy to read and expressive so that anyone using the repository can understand the continuous integration process. Drone provides a plugin system, but it is used differently than the one in Jenkins. In Drone, plugins are special Docker containers used to drop preconfigured tasks into the regular workflow. This makes it easier to accomplish common tasks by calling the plugin with a few parameters rather than scripting the entire process manually. In this sense, Drone plugins are somewhat similar to Unix utility commands that are designed to do one narrowly-focused task well.


# Concourse

Concourse is a relatively new continuous integration platform initially released in 2014. Concourse's approach to the CI/CD space is significantly different from the other tools we've looked at in that it attempts to take itself out of the equation as much as possible, minimizing state and abstracting every external factor into something it calls "resources". The goal of this philosophy is to make the integration server entirely disposable so that the same processes can easily be run on any Concourse server.

Every part of the continuous integration process is composed from basic primitives that model different elements of the system. Each part of the process defines its dependencies explicitly. For example, the first task may require the latest commit to a VCS repository while later parts of the process may require the latest commit that passed previous stages. This method of constructing pipelines by mapping the exact dependencies of each step leads to strictly-defined behavior.

To further remove incidental state from the process, Concourse does not implicitly pass anything between jobs and does not provide any internal way of storing build artifacts. All information needed by the next stage must be explicitly defined, and potentially pushed to an external store to be pulled into the next step. By requiring explicit definitions, Concourse hopes to minimize the number of assumptions and unknown variables that the system has to account for.

Concourse is written in Go and released under an Apache license. 

![two beers cheersing](https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=750&q=80)

Wooah, that was a big one... my fingers hurt... THATS WHAT SHE SAID xo

See Ya


_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)