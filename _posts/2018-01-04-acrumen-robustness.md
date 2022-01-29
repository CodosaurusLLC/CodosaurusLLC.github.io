---
date: 2022-01-14
layout: blog-post
permalink: blog/acrumen-robustness
section: Blog
tags: ACRUMEN software-quality robustness
title: ACRUMEN Robustness
---

This is usually (though not always)
the _third_ most important thing about a piece of software.&nbsp;
So what does it mean, in **ACRUMEN**{:class="acrumen"} terms,
for a piece of software to be **R**{:class="acrumen"}obust?

The short definition is that
it's hard to make it malfunction,
or even _seem_ to.&nbsp;
But what does _that_ mean?

Most of what I mean is covered by
a basic concept from
[information security](https://en.wikipedia.org/wiki/Information_security){:rel="nofollow" target="_new"},
the
[CIA Triad](https://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA){:rel="nofollow" target="_new"}.&nbsp;
No, it's nothing to do with spies and gangsters,
but the combination of
**C**{:class="big"}onfidentiality,
**I**{:class="big"}ntegrity, and
**A**{:class="big"}vailability.&nbsp;
So, mainly,
robust software should not
_reveal_ information when it's not supposed to,
_alter_ information when it's not supposed to,
or
_become unavailable_ when it's not supposed to.&nbsp;
(Some people would add that it should not
_become available_ when it's not supposed to,
but so long as it doesn't significantly raise
the risk of violate either of the other two,
it's usually not a big deal.)

There's also the question of _seeming_ to malfunction.&nbsp;
By this I mean mainly showing abstruse error messages,
that might lead the user to think something has gone wrong,
even if it hasn't.&nbsp;
(Yes, this overlaps greatly with **U**{:class="acrumen"}sability.)&nbsp;
For instance, if the system wants the user to
type a filename,
the user could type it wrong,
or type the name of a file they don't have access to.&nbsp;
The system should not say
ENOENT (short for "Error: No [Such Directory] Entry", meaning "File Not Found"),
or "HTTP ERROR 500" (meaning "something went wrong on the server"),
let alone abort the whole program
and show a stack trace!&nbsp;
(Which is also information they are probably not supposed to have,
and which could probably be very useful to an attacker.)&nbsp;
Instead, it should show a user-friendly error message,
to the effect of "Sorry, I can't open that file",
and _let the user try again!_&nbsp;
(In case _they_ are an attacker,
there are many ways to deal with _that_.)

So how do we make sure that our software is **R**{:class="acrumen"}obust?

Again, we can hire the experts,
and in this case that would be
[penetration testers](https://en.wikipedia.org/wiki/Penetration_test){:rel="nofollow" target="_new"}.&nbsp;
However, they're usually
rather expensive,
and disruptive,
because they _need_ to test the
[_production_ system](https://en.wikipedia.org/wiki/Deployment_environment#Production){:rel="nofollow" target="_new"},
not a
[_testing_](https://en.wikipedia.org/wiki/Deployment_environment#Testing){:rel="nofollow" target="_new"} or
[_staging_](https://en.wikipedia.org/wiki/Deployment_environment#Staging){:rel="nofollow" target="_new"}
environment.

But we can get pretty far by using some of their _tools_, such as:
- [static analyzers](https://en.wikipedia.org/wiki/Static_program_analysis){:rel="nofollow" target="_new"},
which _simulate_ the execution of our program;
- [fuzzers](https://en.wikipedia.org/wiki/Fuzzing){:rel="nofollow" target="_new"},
which test our program's reaction to invalid inputs; and
- [scanners and probes](https://www.intruder.io/guides/the-ultimate-guide-to-vulnerability-scanning){:rel="nofollow" target="_new"},
which test our systems' defenses against specific known attacks.

Many of these are available as Open Source.

But even without their _tools_,
we can go a long way with just their _mindset_.&nbsp;
The main part of this is to always look for _what can go wrong_.&nbsp;
This includes not just innocent mistakes like a typo in a filename,
or external circumstantial mishaps like losing a network connection,
but also what an attacker can _make_ go wrong
in such a way as to get closer to their goal.&nbsp;
For instance, in what unusual ways is it possible to
get information out of our system &mdash;
or _into_ it?&nbsp;
(Don't forget about not _altering_ information!)

Once we've brainstormed and figured out lots of stuff that could go wrong
(perhaps with the aid of the security technique of
[Threat Modeling](https://en.wikipedia.org/wiki/Threat_model){:rel="nofollow" target="_new"}),
we can figure out appropriate responses.&nbsp;
This isn't always to completely prevent it, though;
some alternatives include:
- preventing the _situation_ in which the mistake/attack is even _possible_,
- _mitigating_ the negative effects,
- _recovering_ from the negative effects, perhaps with the help of _insurance_, or
- just accepting it, if the negative effects are mild enough.
