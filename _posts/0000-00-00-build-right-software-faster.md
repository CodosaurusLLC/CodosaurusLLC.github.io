---
author: Dave Aronson
date: 2023-04-16
layout: blog-post
permalink: blog/build-right-software-faster
section: Blog
tags: appropriateness maintainability productivity software-quality tests tools
title: How can we build the right software faster?
---

Another one that started as a Quora answer:

> [How can we build the right software faster?](https://www.quora.com/How-can-we-build-the-right-software-faster/answer/Dave-Aronson){:target="_new"}

Thank you so much for including the phrase
"the _right_ software" (emphasis added)!&nbsp;
So many people are interested in simply building software faster,
rushing off the cliff of solving the _wrong problem!_

First and foremost,
we have to make sure that what we’ll build
is indeed "the right software".&nbsp;
This is all about _requirements analysis_.&nbsp;
Unfortunately,
that is far more involved with
_domain_ knowledge,
_psychology_,
and for major programs,
_prediction_ of the future
(requiring even _more_ knowledge of the domain,
and its current _trajectory_),
rather than anything to do with
actually writing software.

This will help us
build the right software faster
by reducing false starts in the wrong direction.&nbsp;
Once we’re going in the right direction,
though,
we have to make sure we
_keep_ going in the right direction.&nbsp;
There will invariably be details that crop up later and get misinterpreted,
and the stakeholders will often change their minds about various parts or even the whole thing.

Instead we need to use a small-a agile approach.&nbsp;
(Not necessarily some defined big-A Agile Methodology.)&nbsp;
We need to check in with the client once in a while and ask:
"This is what we’ve done.&nbsp;
Is this what you wanted?&nbsp;
Also, this is what we’re about to do.&nbsp;
Is it what you still want?"&nbsp;
This could be done weekly,
monthly,
whatever,
depending on the size of the chunk of work to be done,
but as often as _practical_ for that work,
and as _simply_ as possible so as to minimize its overhead.

Where this affects actual coding is that
the code should be as _adaptable_ as practical,
where things are likely to change.&nbsp;
This means heavy use of separation of responsibilities,
dependency injection,
swappable wrappers around
third-party libraries and services
that can be otained from multiple sources
that operate differently,
and so on.&nbsp;
Quite a lot of the standard software engineering advice,
especially in the Object-Oriented community,
is aimed precisely at this,
so I won’t go into further detail.

Now,
how to build it faster?&nbsp;
Mainly, _do not rush!_&nbsp;
Rushing leads to _errors_ and _cut corners_,
which mean taking the time to fix it or do it over.&nbsp;
Take the time to test it,
including writing _automated_ tests.&nbsp;
Not only will they help ensure that your software is correct _now_,
but also _later_ they will serve as a _regression_ test suite,
to give you the _confidence_ to _refactor_ as needed.&nbsp;
(You don’t _have_ to write the tests first,
just make sure that you _do_ have high test coverage.&nbsp;
Ideally, also use techniques such as
mutation testing
to ensure that
the coverage actually means what you think it means.)
