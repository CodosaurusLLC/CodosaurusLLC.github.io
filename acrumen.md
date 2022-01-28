---
layout: default
title: ACRUMEN
style: acrumen
---

The
<span class="acrumen">ACRUMEN</span>
software quality definition
is a simple list of
briefly-named and easily-understood aspects
that more or less completely cover the subject of
software quality,
to the level that five-nines of us will ever need.&nbsp;
The acronym **ACRUMEN**{:class="acrumen"}
(try saying that ten times fast)
stands for the idea that software should be:

<div class="acrumen-table-marker"></div>

| Appropriate: || doing the right job (what the stakeholders need) |
| Correct: || doing the job right (i.e., correctly) |
| Robust: || hard to make it malfunction, or even _seem_ to |
| Usable: || easy for the intended users to use |
| Maintainable: || easy for the developers to change |
| Efficient: || easy on resources (technical _and other_) |

So what does the <span class="acrumen">**N**</span> stand for?&nbsp;
**N**othing, I just tacked it on to make a real word!&nbsp; ;-)

And why all this <span class="acrumen">yellow</span>?!&nbsp;
I said "acrumen" was a real word, but I didn't say it was English!&nbsp;
It's Latin for sour fruit,
such as grapefruit, limes, and of course especially lemons.&nbsp;
So, lemon yellow is the official color of
<span class="acrumen">ACRUMEN</span>.

So why do we need another definition?&nbsp;
Most of the ones I found,
when I was looking for one several years ago,
have one or more serious problems:

- Many are long lists of abstruse terms,
so they're nearly impossible to remember
(never mind teach to juniors)
and very difficult to apply.

- Many are proprietary, so we need to buy
expensive software tools,
and/or
expensive documents.&nbsp;
(Yeah, I'm lookin' straight at _you_, ITU!&nbsp;
And don't think I don't see you sneakin' around there, ISO!)

- Many are only applicable to certain kinds of software,
such as
Object-Oriented programming
or
a web application.

- Many are more focused on the _process_ or some _byproducts_,
saying you must
hold some particular meetings
or write some particular documents.&nbsp;
Those things might be useful,
but to make them part of the _definition_
entirely misses the point.&nbsp;
It's certainly possibly to hold the meetings and produce the documents
yet produce low-quality software,
or produce high-quality software without them.

But I did find some good things.&nbsp;
In particular,
[Phil Nash](https://levelofindirection.com/){:rel="nofollow" target="_new"}'s
"CAREER" system is very good . . .
and almost the same as **ACRUMEN**{:class="acrumen"}.&nbsp;
(That's how I _know_ it's good,
he said ever so humbly.)&nbsp;
You can get some explanation from
[this YouTube video of his presentation to the Munich C++ Meetup](https://www.youtube.com/watch?v=ipHIw3xfoUM){:rel="nofollow" target="_new"},
including some interesting exploration of
the _interplay_ between some pairs of aspects.&nbsp;
To compare and contrast a bit:

<div class="acrumen-to-career-table-marker"></div>

| ACRUMEN || **CAREER** |
|--|--|--|
| Appropriate | &nbsp;=>&nbsp; | **A**pplicable |
| Correct | &nbsp;=>&nbsp; | **C**orrect |
| Robust | &nbsp;=>&nbsp; | **R**esilient |
| Usable | &nbsp;=>&nbsp; | Left out, or maybe part of **A**pplicable |
| Maintainable | &nbsp;=>&nbsp; | **E**volvable and **R**easonable |
| Efficient | &nbsp;=>&nbsp; | **E**fficient |

or to go the other way,

<div class="career-to-acrumen-table-marker"></div>

| **CAREER** || ACRUMEN |
|--|--|--|
| Correct | &nbsp;=>&nbsp; | **C**{:class="acrumen"}orrect |
| Applicable | &nbsp;=>&nbsp; | **A**{:class="acrumen"}ppropriate, and maybe **U**{:class="acrumen"}sable |
| Resilient | &nbsp;=>&nbsp; | **R**{:class="acrumen"}obust |
| Efficient | &nbsp;=>&nbsp; | **E**{:class="acrumen"}fficient |
| Evolvable | &nbsp;=>&nbsp; | Part of **M**{:class="acrumen"}aintainable |
| Reasonable | &nbsp;=>&nbsp; | Part of **M**{:class="acrumen"}aintainable |

Unfortunately I didn't discover CAREER until I had been
working/writing on **ACRUMEN**{:class="acrumen"}
for several years.&nbsp;
Oh well.&nbsp;
Maybe we can work on unifying our ideas.&nbsp;
We've already been discussing our systems.

In 2021,
[Margaret-Anne Storey](https://www.margaretstorey.com/){:rel="nofollow" target="_new"},
[Brian Houck](https://www.linkedin.com/in/brian-houck-b4123132){:rel="nofollow" target="_new"}, and
[Thomas Zimmermann](https://thomas-zimmermann.com/){:rel="nofollow" target="_new"}
wrote
[a paper on
"How Developers and Managers Define and Trade Productivity for Quality"](https://arxiv.org/abs/2111.04302){:rel="nofollow" target="_new"}.&nbsp;
It included some fascinating insights into
what each group thought the _other_ would say,
but more relevantly,
also ways to boil _both_ of those ideas down to a short list of aspects!&nbsp;
What they wound up for for quality was a set forming the acronym **TRUCE**:

<div class="truce-list-marker"></div>

- Timeliness of features delivered
- Robustness of features
- User delight
- Collaboration needs (of the developers) met
- Evolution needs (of the developers) met

While I can't fault their methodology,
it was pretty clear to me that
they were aiming for something quite a bit different,
and thus wound up with aspects that were
mostly not well suited for
the kind of definition _I_ was after.&nbsp;
The Collaboration and Evolution needs of the developers
could possibly be counted among the "stakeholder needs"
that software needs to meet in order to be Appropriate,
though that's in the _past_ once the software is released.&nbsp;
User Delight could be considered part of Usability.&nbsp;
We both had the idea of Robustness.&nbsp;
However, only the Robustness and User Delight
would be at all visible to end users,
or almost _anyone_ other than the dev team.&nbsp;
I emailed Dr. Storey about it,
and she confirmed
that they were looking at it mainly from the point of view
of the developers and their management.&nbsp;
So, while we're not at all on the same page,
that seems to be because
she and Brian and Tom are reading a different book &mdash;
still a good one, but different.

For further explanation, see these blog posts:

- [ACRUMEN](/blog/acrumen)
- [ACRUMEN: Appropriateness](/blog/acrumen-appropriateness)
- [ACRUMEN: Correctness](/blog/acrumen-correctness)
- [ACRUMEN: Robustness](/blog/acrumen-robustness)
- [ACRUMEN: Usability](/blog/acrumen-usability)
- [ACRUMEN: Maintainability](/blog/acrumen-maintainability)
- [ACRUMEN: Efficiency](/blog/acrumen-efficiency)

More explanation of **ACRUMEN**{:class="acrumen"}
might be coming here eventually.&nbsp;
For now, see
[my ACRUMEN YouTube playlist](https://www.youtube.com/playlist?list=PLMrm16n64BuaRo9N8xY8OnTOWZ5K2aFG1){:target="_new"}.
