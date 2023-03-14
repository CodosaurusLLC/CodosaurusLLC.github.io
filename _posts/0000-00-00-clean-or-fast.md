---
author: Dave Aronson
date: 2023-03-14
layout: blog-post
permalink: blog/clean-or-fast
section: Blog
tags: software-quality
title: Clean or Fast?
---

Another one that started as a Quora answer:

> [Is it better to prioritize writing clean code or delivering features quickly?](https://www.quora.com/Is-it-better-to-prioritize-writing-clean-code-or-delivering-features-quickly/answer/Dave-Aronson){:target="_new"}

As always, It Depends.

Are you at a brand new startup,
still working on a Minimum Viable Product that you will almost certainly throw away and rewrite?&nbsp;
Okay, then,
you might be better served by delivering features quickly,
even if "dirtily".&nbsp;
This will get the features to market sooner,
to validate or invalidate the app’s overall concept in the first place
(along with various other techniques to do so,
like getting pre-orders),
ideally before you run out of runway.&nbsp;
After that,
you can work on the rewrite,
or pivot to something else.

Anything else?&nbsp;
They’re the same thing, really,
so I ass-u-me you mean "quick" as in "quick and dirty".&nbsp;
In the immediate term,
"get this feature basically working",
"quick and dirty" may be quicker to hand off the ticket to the next stage (whether that’s closing or hand off to QA or whatever).&nbsp;
However, it will have a much higher level of bugs,
meaning that in the timeframe of "working properly",
it will probably get kicked back from QA,
get bug reports from customers,
and so on,
taking net more time than if you had done it "right" the first time,
with proper testing and so on.&nbsp;
Meanwhile, if it gets deployed,
your company gets a reputation for buggy software.

Even if the difference is zero or even less,
if the code isn’t clean,
dirty code
(especially in the sense of software design)
will make later features much harder to implement.&nbsp;
That’s one of the main reasons why we don’t do that!&nbsp;
Suppose you have a series of twenty features to implement,
sized such that implementing each one on a clean codebase should take two units of time.&nbsp;
Done dirty,
it might look more like
1 1 2 2 2 2 3 3 3 3 3 3 4 4 4 4 4 4 4 4 = 60,
rather than the 40 it would take if you kept it clean --
and it will only get worse,
until it’s cleaned up (which also takes time).
