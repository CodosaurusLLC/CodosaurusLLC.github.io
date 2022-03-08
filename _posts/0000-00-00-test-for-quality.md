---
author: Dave Aronson
date: 2022-03-07
layout: blog-post
permalink: blog/testing-strategy-for-software-quality
section: Blog
tags: software-quality tests
title: Testing Strategy for Software Quality
---

Over at
https://www.quora.com/How-can-we-design-our-testing-strategy-to-achieve-maximum-software-quality
someone asked me,
> How can we design our testing strategy to achieve maximum software quality?

I felt that I shouldn't let Quora have the only copy of this long answer,
so here it is preserved for your posterior, or something like that:

`===8<---cut-here---`

First you need to define just what you mean by “software quality”.&nbsp;
People have been tossing this term around for decades, with very little definition.&nbsp;
There are in fact several definitions claiming to be authoritative,
but all have serious problems,
like being long lists of complicated terms so that nobody is going to remember it in full,
being proprietary so you have to buy at least moderately expensive documents,
or both (yeah I’m lookin’ straight at *you*, [ITU](https://www.itu.int/)!),
or have to buy very expensive tools,
or they’re only applicable within the context of certain tools or approaches.

So in the spirit of XKCD:

![](https://imgs.xkcd.com/comics/standards.png)
{:style="text-align:center"}

I’ve decided to make One Definition To Rule Them All:
[**ACRUMEN**](https://www.codosaur.us/acrumen).&nbsp;
But this one is different: it’s just a list of six aspects,
with one-word names and (fairly) simple explanations.&nbsp;
Go see the web page I linked above for more detail.

I give conference presentations about this, and one of the FAQs I answer is,
how do we *use* this thing?&nbsp;
Mainly, use it as a checklist, in various ways, including,
to finally get back to your question, assessing software,
which is what tests try to do to some extent.

So, what you can do is try to formulate a testing strategy about
*all* of the [**ACRUMEN**](https://www.codosaur.us/acrumen) aspects.&nbsp;
(And anything else you feel rises to the level of being
something that should be considered,
about the quality of a piece of software —
and please tell me so I can consider it for inclusion in
[**ACRUMEN**](https://www.codosaur.us/acrumen).)&nbsp;
Most testing is about whether the software is **C**orrect,
but that’s only one of six aspects, and not even the most important.&nbsp;
([**ACRUMEN**](https://www.codosaur.us/acrumen) is in priority order,
so **A** is the most important.)

So first, go backwards from there, and see what you can do about
making your test strategy include something about whether the software is
**A**ppropriate, fit for purpose, doing what the stakeholders need.&nbsp;
That means digging into *who* your software’s stakeholders even *are*
(it’s *not* just the users and customers),
and what they *need*
(it’s *not* what they *say* they *want*,
which is at least two steps removed).&nbsp;
How often, and how, do you check that what you intend to build,
or even what you *have built*, does what they need?&nbsp;
You *could* do a lot of acceptance tests based directly on English
(or whatever language) narratives that the stakeholders approve.&nbsp;
In particular I recommend
[the “Given-When-Then” format](https://martinfowler.com/bliki/GivenWhenThen.html).

Now as for **C**orrectness,
your devs and testers probably do a decent job of testing that,
as it’s the usual...
but even then they could probably use some help in figuring out
that their tests really mean what they think they mean,
and all the more so for your test code coverage stats &mdash;
this is *meaningless* without something like
[mutation testing](https://en.wikipedia.org/wiki/Mutation_testing)
to back it up.&nbsp;
IMHO you need 100% of the code to be either “covered” by a test
(in quotes because of the above)
or *explicitly exempted* for a darn good reason
that is documented there and defended in a code review,
and *zero surviving mutants!*

Moving on to **R**obustness,
that’s harder because you can’t exhaustively check
all the ways a user can do the wrong thing,
or an attacker can attack it...
but you can certainly try to cover the well-known holes,
like the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) and so on,
and use assorted tools like fuzzers and static analyzers
to try to catch edge cases.&nbsp;
If it’s important enough,
you could even hire penetration testers to try to break into it.

**U**sability is less my area of expertise... but suffice it to say,
you can test it out on potential users,
get the advice of usability/UI/UX experts,
and at least apply some of their general principles,
like KISS, as exemplified in this classic comic:

![](https://pbs.twimg.com/media/ByZGmtiCIAEXJBr?format=jpg)
{:style="text-align:center"}

Next up is **M**aintainability.&nbsp;
I’ll grant you this one is difficult to *test* per se,
but the vast majority of software engineering advice and a lot of tools
(like linters, style checkers, OO-ness checkers,
and the warnings from your compiler), are aimed squarely at this.&nbsp;
You could include gates in your CI/CD/whatever pipeline
so that code with too many “smells” detected by such tools, are blocked.

And last, *dead last* despite what a pedestal we devs tend to put this on,
is **E**fficiency.&nbsp;
With most testing frameworks you can at least somehow test that
a given function call, or whatever, executes within some amount of time.&nbsp;
You can make other tests for the various other *technical* kinds of efficiency.

If you need more help . . . 
[I’m available for consultations](https://www.codosaur.us/).&nbsp;
:-)
