---
author: Dave Aronson
date: 2022-01-17
layout: blog-post
permalink: blog/acrumen-efficiency
section: Blog
tags: ACRUMEN software-quality efficiency
title: ACRUMEN Efficiency
---

Despite how much we developers tend to worship ths,
**E**{:class="acrumen"}fficiency
is is in fact the _least_ most important aspect,
out of the ones in the **ACRUMEN**{:class="acrumen"} definition!&nbsp;
It used to be much more important,
when the CPU speeds were measured in kilohertz.&nbsp;
(Most of you probably don't even remember
speeds lower than hundreds of _megahertz_,
and today, if your CPU isn't running at several _gigahertz_,
_plus_ having at _least_ two cores,
it's considered obsolete.)

So what does it mean, in **ACRUMEN**{:class="acrumen"} terms,
for a piece of software to be **E**{:class="acrumen"}fficient?

The short answer is that it's easy on _resources_.&nbsp;
So what kind of "resources" are we talking about?&nbsp;
What leaps immediately to most people's minds,
whether developers or users or whatever,
would be the CPU.&nbsp;
(Okay, non-technical users might not _say_ CPU,
but it's what they usually mean,
or at least think they mean,
when they speak of _speed_.)&nbsp;
But there are many other technical resources we should go easy on.&nbsp;
Most developers would also be aware of things such as
memory,
[I/O bandwidth](https://en.wikipedia.org/wiki/Bandwidth_(computing)){:rel="nofollow" target="_new"},
and disk space.&nsbp;
Another one annoyingly wasted lately, in the world of web-apps,
is _screen_ space.&nbsp;
But there are many
_non_-technical resources
we should be aware of as well,
such as the user's
_brainpower_ and _stamina_,
and the company's _money_.&nbsp;
(Yes, this overlaps quite a lot with **U**{:class="acrumen"}sability,
and other concerns beyond the scope of **ACRUMEN**{:class="acrumen"}.)

So how can we ensure that
our software is **E**{:class="acrumen"}fficient?&nbsp;
There are many different ways, appropriate for different resources.&nbsp;
Most of the time, though, we mean "it's slow".&nbsp;
The cause of slowness is usually either something
[architectural](https://en.wikipedia.org/wiki/Software_architecture){:rel="nofollow" target="_new"},
which is more complex than I want to delve into in this post,
or an inefficient
[algorithm](https://en.wikipedia.org/wiki/Algorithm){:rel="nofollow" target="_new"}.

So, more specifically, how can we ensure that
our _algorithms_ are **E**{:class="acrumen"}fficient?&nbsp;
The usual approach is to stare at the code,
spot where we _think_ it's inefficient,
spent a lot of time optimizing the proverbial snot out of that piece,
run the program again,
and find that the program is . . .
_still slow_.

_Don't do_ that!&nbsp;
_Measure_ it instead!&nbsp;
Humans aren't really very good at spotting the inefficiencies,
but there are
[profilers](https://en.wikipedia.org/wiki/Profiling_(computer_programming)){:rel="nofollow" target="_new"}
and
[packet analyzers](https://en.wikipedia.org/wiki/Packet_analyzer){:rel="nofollow" target="_new"}
and so on,
that will _tell_ us _exactly_ where
(or at least _when_)
we're using too much CPU, RAM, bandwidth, etc.

Once we find _where_ (or _when_) it's slow,
there's still the question of _why_.&nbsp;
Different kinds of systems
are susceptible to different causes of slowness.&nbsp;
For instance,
a distributed system may be doing too much communication
(too many messages, or they're too large),
or using a slow network.&nbsp;
A database-driven system may have an inefficient data model or query.&nbsp;
And so on.&nbsp;
But usually it boils down to a bad algorithm.&nbsp;
There's no simple easy fix,
but it really helps if we get familiar with the common basic
data structures and algorithms.&nbsp;
We should be able to:
- spot them when we see them in real-life situations,
- analyze their demands on our resources,
- compare and contrast them, and
- choose and _change_ and _combine_ them.

If we're lucky, we can select one that has
a ready-made implementation in some library or framework,
that is known to be efficient _enough_,
has stood the test of time,
and might even be well-tested in the software sense.&nbsp;
Then we don't have to waste the resource of _development time_
(and thus the company's money)
reinventing that wheel.
