---
author: Dave Aronson
date: 2022-01-16
layout: blog-post
permalink: blog/acrumen-maintainability
section: Blog
tags: ACRUMEN software-quality maintainability
title: ACRUMEN Maintainability
---

Despite this being the _entirety_ of some definitions of software quality,
in **ACRUMEN**{:class="acrumen"} terms,
this is (usually) only the _fifth_ most important aspect,
_second to last_ out of six!&nbsp;
That's mainly because the end users
(and most other stakeholders)
_have no clue_ about it!&nbsp;
They aren't usually _allowed_ to see the code,
wouldn't _bother_ if they could
(even most of us geeks
don't bother inspecting the code of
the tons of Open Source software we use),
and mostly wouldn't _understand_ it if they saw it,
let alone be able
(in terms of _either_ skills _or_ time)
to _evaluate_ it for
**M**{:class="acrumen"}aintainability.

So what does it mean, in **ACRUMEN**{:class="acrumen"} terms,
for a piece of software to be **M**{:class="acrumen"}aintainable?&nbsp;
The _obvious_ answer is that it's easy to change.&nbsp;
But _for who_ to change?&nbsp;
If you've been on the same project for five years,
maybe its code is easy for you to change,
because you know it
(and all the underlying technology)
so well.&nbsp;
But I mean it should be easy to change,
_with_ low probablity of error,
and low _fear_ of error,
even for a _novice_ programmer,
who is _new_ to the project.

So how do we _achieve_ that?&nbsp;
For better or worse, the _vast_ majority of software engineering advice
is aimed _squarely_ at this.&nbsp;
Well, not usually the part about _fear_.&nbsp;
So rather than blather on about assorted principles like
[Single Responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle){:rel="nofollow" target="_new"},
[Low Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)){:rel="nofollow" target="_new"} versus
[High Cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)){:rel="nofollow" target="_new"},
[Good Naming](https://carlalexander.ca/importance-naming-programming/){:rel="nofollow" target="_new"},
and so on,
I'll tell you how fear plays into it.

[Fear is the mind-killer.](https://dune.fandom.com/wiki/Litany_Against_Fear){:rel="nofollow" target="_new"}&nbsp;
It makes a developer creep along slowly and carefully,
_afraid_ of breaking something,
and _not noticing_ (let alone fixing it)
until users start complaining.&nbsp;
By contrast,
if you have a good _regression test suite_
forming a "safety net" to "catch" anything you break,
your _clear and focused mind_
will let you proceed at a swift, steady, _confident_ pace.&nbsp;
This is just _yet another_ reason
to have very high test coverage.

(But if I may stray from maintainability for a moment,
there's another kind of fear we should watch out for,
beyond that of simply breaking something.&nbsp;
Many workplaces lack
[_psychological safety_](https://en.wikipedia.org/wiki/Psychological_safety){:rel="nofollow" target="_new"}.&nbsp;
In a psychologically-safe workplace,
making a mistake usually means you fix it,
maybe you get some _training_ if applicable,
and if there is a system or process that
_enabled_ the mistake too easily,
that gets looked at too.&nbsp;
In a psychologically-unsafe workplace,
making a mistake may mean
far more serious negative effects,
from ridicule to pay-cuts or even termination.&nbsp;
This will of course magnify fear,
often to the point where it becomes crippling &mdash;
and _causes_ the kind of lack of productivity,
or sometimes the kind of error,
that will subject the person to _exactly_ the feared consequences.)

There are also lots of kinds of _tools_ we can use, like
[linters](https://en.wikipedia.org/wiki/Lint_(software)){:rel="nofollow" target="_new"},
style checkers, object-orientation checkers,
and other kinds of 
[static analyzers](https://en.wikipedia.org/wiki/Static_program_analysis){:rel="nofollow" target="_new"},
that will tell us about assorted maintainability issues.&nbsp;
Even just cranking up the _warnings_ on your
compiler, interpreter, or whatever,
will often reveal a lot of things that are suspicious,
and sometimes even bugs.&nbsp;
I have often "inherited" a buggy codebase,
cranked up the warnings,
fixed the causes of warnings,
and had bugs disappear.
