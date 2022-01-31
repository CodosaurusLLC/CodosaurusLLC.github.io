---
author: Dave Aronson
date: 2022-01-13
layout: blog-post
permalink: blog/acrumen-correctness
section: Blog
tags: ACRUMEN software-quality correctness
title: ACRUMEN Correctness
---

This is usually (though not always)
the _second_ most important thing about a piece of software.&nbsp;
So what does it mean, in **ACRUMEN**{:class="acrumen"} terms,
for a piece of software to be **C**{:class="acrumen"}orrect?

This one is pretty much just what it sounds like.&nbsp;
Whatever the job of the software is,
it should be doing that job correctly,
in other words, doing the _job right_.&nbsp;
(Contrast this with
[**A**{:class="acrumen"}ppropriateness](/blog/acrumen-appropriateness),
which is about doing the _right job_.)

So how do we ensure that our software is
**C**{:class="acrumen"}orrect?&nbsp;
Mainly, we _test_ it!&nbsp;
We should have enough coverage to be confident in the correctness, from:
- unit tests
- integration tests
- feature tests
- end-to-end tests

But that's not all.&nbsp;
These sorts of tests, usually done as "example-based" tests,
only cover the cases that _we thought_ to test.&nbsp;
However, there are some more _advanced_ techniques that help find
edge cases and other holes in our test suite.

[Property-based testing](https://www.leadingagile.com/2018/04/step-by-step-toward-property-based-testing/){:rel="nofollow" target="_new"}
lets you specify some "properties" of your functions,
what formal computer scientists would call "invariants".&nbsp;
The tool makes up lots of semi-random test data,
based on what types of data you've told it your function takes,
trying to find cases where the property does not hold.&nbsp;
If it finds any, that signifies an edge case you didn't take into account.

[Mutation testing](https://en.wikipedia.org/wiki/Mutation_testing){:rel="nofollow" target="_new"}
makes a bunch of slightly changed versions of your function,
called "mutants".&nbsp;
Then it runs the relevant tests,
using the mutants in place of the original function.&nbsp;
Each mutant should cause at least one test to _fail_.&nbsp;
If it doesn't, then there are three main possibilities:

- The code that got mutated might be what I call "meaningless".&nbsp;
This means that it is unreachable, redundant,
or otherwise without any noticeable effect.

- The test suite might have a hole in it,
where there should be a test that would account for
the difference in behavior that the mutation made.&nbsp;
(If the mutation _didn't_ make a noticeable difference,
see above and below.)

- Or maybe it's just a false alarm.&nbsp;
The state of the art of mutation testing tools
is that _many_ of the mutants that wind up being
semantically equivalent to the original code
are not used,
but it still can't quite catch them all.

Mutation testing is one of my usual topics for
[conference speaking](/speaking).

So, I usually set a rather high bar,
at least 80%,
for statement coverage with the
regular "example-based" kinds of tests.&nbsp;
(This may _sound_ difficult,
but if you're doing
[TDD](https://en.wikipedia.org/wiki/Test-driven_development){:rel="nofollow" target="_new"},
you should get nearly 100% quite easily.)&nbsp;
Then I often do mutation testing
to see if there are holes to plug or meaningless code to eliminate.&nbsp;
