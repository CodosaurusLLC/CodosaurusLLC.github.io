---
author: Dave Aronson
date: 2023-03-28
layout: blog-post
permalink: blog/who-writes-unit-tests-for-good-architecture
section: Blog
tags: appropriateness correctness tests
title: Who Writes the Unit Tests to Ensure the Health of Application Architecture?
---

Another one in response to a question on Quora,
actually _two_ questions
that I've combined into one
for the "headline" of this blog post:

> [How can I write unit test cases to ensure the good health of my application architecture? Should these testcases be written by an architect or a lead developer?](https://gauravgaur.quora.com/How-to-write-unit-test-cases-to-ensure-the-good-health-of-my-application-architecture-Should-these-testcases-be-written){:target="_new"}

This is really two questions.

First is:
*"How can I write unit test cases to ensure the good health of my application architecture?"*

The short and snarky answer is: "you don’t".&nbsp;
Why not?&nbsp;
Because you’re mixing levels here.&nbsp;
Think of "architecture" as a diagram with boxes
(possibly containing other boxes) and arrows and such.&nbsp;
Unit tests test functionality —
one piece of what a given box *does*.&nbsp;
The "unit" part implies that it’s a small piece,
and is usually taken to mean one indivisible piece,
analogous to an atom.&nbsp;
"Architecture" is how the boxes fit together —
think more of the *arrows*.&nbsp;
At the very least, you’re probably thinking more of *integration* tests,
which test mainly a particular *arrow*,
or maybe *feature* or *end-to-end* tests.

The second is:
*"Should these testcases be written by an architect or a lead developer?"*

That depends on whether you really mean unit tests after all,
or some other kind.&nbsp;
Generally speaking, unit tests per se
(i.e., the actual runnable tests)
should be written by the developer implementing them.&nbsp;
Otherwise, it’s forcing a particular API on that developer,
and that’s an implementation detail that nobody else should be dictating.&nbsp;
(Unless the whole task in question is
to develop a function with that specific API.)&nbsp;
Unit test *cases*,
in the sense of test *descriptions*
(like "if I give the fizzbuzz function
a number that’s a multiple of three but not five,
it should pass back the string ‘fizz’"),
*may* be written by someone overseeing that dev.&nbsp;
In both cases, though,
unless that dev is very junior and needs such handholding,
that borders on micromanagement.

On the other claw, if you really mean integration or end-to-end tests,
yes, those might be written by an architect or lead dev,
depending how "down in the weeds" they are
(both the tests and the people).&nbsp;
Someone even higher away from the weeds
might write some end-to-end tests.&nbsp;
Frex, if the system is a geolocation name lookup system
they might specify something like
"if I give the system the lat/long coordinates for my house,
it should return my address",
or maybe substitute some well-known landmark like
10 Downing Street, London.&nbsp;
That *might* be in code,
or something actually interpreted by a test-runner
such as Cucumber and its Gherkin language,
but more likely it will be in plain human-language,
to be interpreted by the developers.

This is actually why I advocate
developers writing such test cases themselves,
especially in the "Given/When/Then" format,
for approval by the stakeholders,
to ensure that we understand their needs correctly.&nbsp;
Having a test case rejected/corrected
can save us *hours* of
implementing code that *does the wrong thing* (and a test for it).

UPDATE:

I have just been informed that Part 1 is no longer true!&nbsp;
Check out
[https://www.archunit.org/](https://www.archunit.org/){:rel="nofollow" target="_new"} —
okay, it still doesn’t seem to be
what I would call "unit tests",
so much as "environment tests",
but it’s a step in that direction.&nbsp;
Currently meant for Java,
with ports already working for C#/.NET.&nbsp;
Credit to [Sayf Jawad](https://www.linkedin.com/in/sayf-jawad-218364a/){:rel="nofollow" target="_new"}.
