---
author: Dave Aronson
date: 2022-01-12
layout: blog-post
permalink: blog/acrumen-appropriateness
section: Blog
tags: ACRUMEN software-quality appropriateness
title: ACRUMEN Appropriateness
---

**A**{:class="acrumen"}ppropriateness is _always_ the most important aspect
about a piece of software.&nbsp;
If we don't have this, then _nothing else matters_.

So what does it _mean_, in **ACRUMEN**{:class="acrumen"} terms,
for a piece of software to be "**A**{:class="acrumen"}ppropriate"?

The short explanation is that it's
doing what the stakeholders need,
or to put it even more briefly,
it's doing the _right job_.&nbsp;
(Contrast this with
[**C**{:class="acrumen"}orrectness](/blog/acrumen-correctness),
which is about doing the _job right_.)

But what do I mean by _stakeholders_?&nbsp;
Most people might think something like:

- the users,
- the customers (if that's not the same people),
- the "product owner" and maybe the "Scrum Master"
(or equivalents under other processes),
- the development team's _manager_ and so on up the "chain of command",
- and _maybe_ another category or two.

But that's not all.&nbsp;
I like the
[Project Management Institute](https://www.pmi.org/){:rel="nofollow" target="_new"}'s
definition,
which is basically
everybody involved in or otherwise affected by the project,
including by its results,
which in this case would be the software.&nbsp;
(Let's leave aside for now their definition of "project".)

To use the example of a Facebook game,
that would include, in addition to the above:

- The _developers, designers, testers, etc._ themselves!
- The people responsible for _deploying_ and otherwise _operating_ the game.
- Facebook.
- If it's anything like most Facebook apps,
the people gathering, analyzing, and acting on
the assorted data that
the "game" is merrily slurping up about the players.
- And many more.

So how do we figure out what's "the right job"?

- Ideally we'd have direct frequent face-to-face contact
with each category of stakeholders,
so we can _ask_ them about it.&nbsp;
But in reality, that rarely happens.

- In huge companies,
especially government contracting firms,
we _may_ get
"requirements analysts".&nbsp;
They're helpful, but it means that the information is second-hand,
and often restricted to a particular format
such as a
["requirements traceability matrix"](https://en.wikipedia.org/wiki/Traceability_matrix){:rel="nofollow" target="_new"}.

- Usually, at best,
we manage to get _occasional indirect_ contact with
a _representative_ of, or _stand-in_ for,
_some_ of the _major_ stakeholders,
such as a
["product owner"](https://www.scrum.org/resources/what-is-a-product-owner){:rel="nofollow" target="_new"}
in
[Scrum](https://www.scrum.org/resources/what-is-scrum){:rel="nofollow" target="_new"}.&nbsp;
But even that isn't terribly common.

- All too often,
the [PHB](https://en.wikipedia.org/wiki/Pointy-haired_Boss){:rel="nofollow" target="_new"}
drops by with some vague mumblings about
it needing to do something or other,
and scuttles off before you can ask questions.

But all is not lost!&nbsp;
In addition to emails they won't answer,
or dry documents that they'll skim and misunderstand,
we can show them demos of what we _have_ done,
and prototypes of what we _intend_ to do next.&nbsp;
Even easier than prototypes, though,
we can propose concise _tests_.&nbsp;
In particular, I recommend the Given-When-Then format:

- _Given_ some preconditions,
such as data being in a particular state,
- _When_ this happens,
such as input from a user or another program,
- _Then_ this is the result,
such as something the user sees or data being in a new state.

This makes a great link
between the business and technology sides,
because the _business_ people can _understand_ it
(assuming we write it reasonably clearly, in _their_ language),
and _we_ can turn it into a runnable test.&nbsp;
For instance, when adding a search feature to a
widget collection management system:

- _Given_ I have three red widgets and two blue widgets;
- _When_ I search for my widgets, specifying the color as red;
- _Then_ I see all my red widgets and none of my blue ones.

We can show them these demos, prototypes, and tests,
as often as practical,
as a sort of continuous course-correction
so we don't go too far down the _wrong_ rabbit-hole.
