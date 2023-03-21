---
author: Dave Aronson
date: 2023-03-21
layout: blog-post
permalink: blog/experience-without-employment
section: Blog
tags: career-advice dev-life getting-started
title: How to Get Experience Without Employment
---

Another response to a (rather verbose) question on Quora:

> [Backend developer jobs require work experience or portfolio which included by production-ready software products, and to build those products you should be employed somewhere, What should I do? Should I make projects first or try to get employed?](https://www.quora.com/Backend-developer-jobs-require-work-experience-or-portfolio-which-included-by-production-ready-software-products-and-to-build-those-products-you-should-be-employed-somewhere-What-should-I-do-Should-I-make-projects/answer/Dave-Aronson){:target="_new"}

The trick is that
experience no longer needs to
come from employment.&nbsp;
Thanks to the rise of
the Open Source movement
and the World Wide Web,
you can build and deploy,
very cheaply,
something that the world can actually use,
and you can show them the source code.&nbsp;
You can even
learn the skills to build the project with,
on the Web
for free or at least very cheap.

So to answer your question,
assuming you already have the skills,
you can contribute to an open source project,
ideally a very visible one,
with a “crew” that will give you good feedback
to help you create the best code you can
and learn better techniques.&nbsp;
Or, you can create one yourself:

1. Build some non-trivial project
that uses the skills you want to showcase.&nbsp;
Use linters, static analyzers, etc.&nbsp;
to make sure the code and architecture are good
(or at least have no obvious problems).

2. Host the code on some publicly accessible place,
like Github or of course your own website.&nbsp;
(Which can in turn be on Github, thanks to Github Pages.)

3. Find somewhere to host the actual running software.&nbsp;
In the past I would have recommended Heroku
but they’ve dropped their free tier.&nbsp;
So you may need to pay something for this,
depending on the nature of the project,
especially the specific tech stack.&nbsp;
(On the upside, setting up a virtual server on
AWS, Azure, Digital Ocean, Linode, or whatever,
will give you the chance to show off those skills!)&nbsp;
Since you say “backend”
I ass-u-me you want to write web applications,
or maybe the backends of mobile applications,
as opposed to desktop or CLI.&nbsp;
Unfortunately most people will
judge it quite a lot by the look and feel of the front end,
so make sure that that is at least not too ugly,
and make it clear that what they should really be paying attention to is
the features, and their correctness, robustness, efficiency,
and the maintainability of the code itself.

4. Apply for jobs,
and when they ask about experience,
admit you don’t have anything paid,
but you can point them to your project
as an example of your skills.&nbsp;
They may ask you to
explain the code at the interview,
including the tradeoffs you considered when writing it,
and what you’ve learned better since then.
