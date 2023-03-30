---
author: Dave Aronson
date: 2023-03-30
layout: blog-post
permalink: blog/mutation-test-to-find-untested-code
section: Blog
tags: coding testing tools
title: Mutation Test to Find Untested Code
---

Another Quora question:
> [What are some ways to know if your unit tests are covering all of your application's code, or if they're missing some pieces?&nbsp; What tools can be used to determine this?](https://www.quora.com/What-are-some-ways-to-know-if-your-unit-tests-are-covering-all-of-your-applications-code-or-if-theyre-missing-some-pieces-What-tools-can-be-used-to-determine-this/answer/Dave-Aronson){:target="_new"}

The usual answer is a coverage tool.&nbsp;
(But this is wrong.&nbsp;
Hear me out.)&nbsp;
This will tell you what parts of your code
(usually lines, sometimes branches or expressions)
were _executed_ by at least one test.

<center>
<img src="/assets/img/inigo-montoya-test-coverage-meme-better.jpg"
     alt="Inigo Montoya telling Vizzini 'You keep using test coverage.  I do not think it means what you think it means.  Try mutation testing.'">
</center>

Test coverage is nearly useless.&nbsp;
It is much better as a negative indicator.&nbsp;
The code that _wasn't_ excuted,
you know definitely _isn't_ tested.&nbsp;
But what about the code that _was_ executed?&nbsp;
Was it really _tested_, or only _executed?_&nbsp;
What's the difference, you may ask?&nbsp;
The key question is,
_did the correctness of that code
make any difference to whether any test passed or failed?_&nbsp;
(That's what we really mean when we ask if code is "tested", right?)&nbsp;
Simple coverage _doesn't tell us!_

So how can we know?&nbsp;
Maybe you make a change to that code,
and see if any test fails
(in your otherwise perfectly passing test suite).&nbsp;
If it does, great!&nbsp;
If not, you have either a hole in your test suite
(at least regarding the new code),
or ineffective meaningless code
(such as if it's unreachable or redundant).

But that's a royal PITA to do manually.&nbsp;
We're certainly not going to do that for every
constant, expression, function call, etc.
in our code.&nbsp;
So what do we do when we have something
relatively simple, but tedious?&nbsp;
Automate it!

Enter "mutation testing" tools.&nbsp;
These make lots of copies of your code,
with one tiny little change (or "mutation") each,
and see if the mutated copies still let your tests all pass.&nbsp;
They are available for all major programming languages,
and are generally easy to set up &mdash;
but they can be slow to run,
and difficult to figure out what to do about the results.&nbsp;
For more information,
I have a conference talk on the matter!&nbsp;
My latest recording is:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/AUS_G6yCpP0" title="YouTube video player" frameborder="0" allowfullscreen></iframe></center>
