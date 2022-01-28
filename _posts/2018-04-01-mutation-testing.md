---
last_updated: 2022-01-18
layout: blog-post
permalink: blog/mutation-testing
section: Blog
tags: mutation-testing software-quality 
title: Mutation Testing
---

Another interesting software quality technique
I've run across lately is
[Mutation Testing](https://en.wikipedia.org/wiki/Mutation_testing){:rel="nofollow" target="_new"}.&nbsp;
Long story short,
it makes slightly altered copies of your code,
called "mutants" (because it's _mutated_ them).&nbsp;
Then it runs your tests against each mutant.&nbsp;
The idea is that each mutant should make at least one test fail.&nbsp;
If that doesn't happen, then there are three main possibilities.
1.  You have a gap in your test suite,
and should add a test to distinguish between
what happened with the "real" and "mutated" code.

1.  You have code that doesn't really do anything.&nbsp;
Maybe it's unreachable, maybe it's redundant,
maybe it just doesn't do what you think it does.

1.  It's a false alarm, which happens annoyingly often.

Changes it can make include things like:
- changing a mathematical, logical, or comparison operator to another one,
like + to -, * to /, &lt; to &gt;, and to or, and so on.
- changing strings to empty or some constant.
- changing numbers up or down by one,
or to zero or plus or minus infinity or some other constant,
or negating them.
- removing an entire statement.
- removing the control of a condition, including the one that controls a loop.
- removing an argument from a function, or a function call.
- and many more, though not all _tools_ will implement all _mutations_.

This is available for lots of languages,
and was actually invented in 1971!&nbsp;
So why wasn't it popular until very recently?&nbsp;
Mainly because it's rather CPU intensive,
and only recently have consumer-grade machines been
powerful enough to get the job done fast enough.&nbsp;
To do a decent job of mutation testing on a 1980's-era PC,
let alone a 1970's micro/mini,
would have been much too slow,
and doing it on a larger machine
would likely have made the _machine_ too slow
for the rest of the _timesharing_ users.

UPDATED TO ADD:&nbsp;
I now have given several conference talks about this
(and a few about [**ACRUMEN**{:class="acrumen"}](/acrumen)),
so I've put up a [Speaking](/speaking) page.&nbsp;
You can see there,
where and when I've spoken about what,
with links to recordings when available.&nbsp;
To just go straight to my mutation testing talks, see
[my Mutation Testing YouTube playlist](https://www.youtube.com/playlist?list=PLMrm16n64Bub8urB-bsyMyHiNPMLG7FAS){:target="_new"}.

