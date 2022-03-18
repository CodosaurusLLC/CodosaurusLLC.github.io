---
author: Dave Aronson
date: 2022-03-18
layout: blog-post
permalink: blog/tools-for-quality-and-productivity-metrics
section: Blog
tags: productivity software-quality tools
title: Tools for Quality and Productivity Metrics?
---

Once again I waxed verbose on Quora, answering:

> [What are the best tools out there to obtain software quality and development team productivity metrics?](https://www.quora.com/What-are-the-best-tools-out-there-to-obtain-software-quality-and-development-team-productivity-metrics/answer/Dave-Aronson){:target="_new"}

and wanted to preserve my answer here on my own "property", so:

`===8<---cut-here---`

This is a rather sticky question.&nbsp;
It’s very difficult to know what metrics to use,
and most of them are very difficult to measure in the first place.

With productivity, it often becomes a circular question &mdash;
"we know Alice is the most productive because
she produces the most *whatevers* per week,
and that’s what we use to measure productivity,
because it correlates well with productivity,
which we know because Alice is
so much more productive than that idiot Bob".&nbsp;
That raises the question of exactly what they consider "productivity”,
and whether *that*’s any good.&nbsp;
If you measure it in lines, we know we get bloat.&nbsp;
If we measure it in stories,
we get people gaming the system by picking the tiny stories,
and bloating the backlog with them,
often splitting up things that *should* be done as one.&nbsp;
If we measure it in story *points*,
our estimation gets even worse than it usually is
because people game *that*.&nbsp;
Some places count firefighting heroics towards productivity,
ignoring all the productivity gains from fire *prevention*.&nbsp;
And some pointy-haired morons still count
"hours spent with butt in seat at office, looking busy”.

With software quality, again we need to define it but
there are many different angles to look at it from.&nbsp;
Not only are any two people,
even if both are developers and working in the same program,
likely to disagree on what exactly should be looked at
when considering quality,
but also the priority of those different aspects,
and how well something rates in a given aspect.&nbsp;
This is something I’ve been working on for a while,
and I’ve come up with something I call **ACRUMEN**,
which stands for the idea that software should be:

* **A**{:class="acrumen"}ppropriate: doing what the stakeholders need
* **C**{:class="acrumen"}orrect: doing that without errors
* **R**{:class="acrumen"}obust: hard to make it malfunction, or even seem to
* **U**{:class="acrumen"}sable: easy for the intended users to use, despite challenges
* **M**{:class="acrumen"}aintainable: easy for devs to change, even if new to the project
* **E**{:class="acrumen"}fficient: easy on resources, technical and other

and these are in rough priority order, in the *usual* case, but may vary.&nbsp;
More info on [my website](https://www.codosaur.us/acrumen),
including what the N stands for.&nbsp;
;-)

Even under that system though,
most of it is very hard to quantify,
let alone develop tools to measure.&nbsp;
Efficiency can be benchmarked to some extent.&nbsp;
Correctness can be implied from passing tests,
*if* you have complete code coverage,
*and* that coverage is actually *meaningful*,
as measured by things like have no survivors from a mutation testing tool...
but even then, if you have
X number of bugs in Y number of lines or statements or K of binary or whatever,
can you turn that into a meaningful metric?&nbsp;
Perhaps with great difficulty,
and only comparable within a very narrow context.&nbsp;
The rest of it is *much* too squishy for me to think that there will be
reasonably easily gathered/measured metrics on it any time soon.&nbsp;
That’s why one of the FAQs I answer in
[my ACRUMEN presentations](https://www.youtube.com/playlist?list=PLMrm16n64BuaRo9N8xY8OnTOWZ5K2aFG1){:target="_new"}
is about how to quantify it,
and I usually advise you just *don’t*.
