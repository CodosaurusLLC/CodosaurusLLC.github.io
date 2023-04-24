---
author: Dave Aronson
date: 2023-04-24
layout: blog-post
permalink: blog/why-not-automatically-translate
section: Blog
tags: dev-life
title: 
---

I answered on Quora:

> [Why don't all Western software develop a feature that automatically translates into the language of the user's device, which doesn't require a lot of technology?](https://www.quora.com/Why-dont-all-Western-software-develop-a-feature-that-automatically-translates-into-the-language-of-the-users-device-which-doesnt-require-a-lot-of-technology/answer/Dave-Aronson){:target="_new"}

Before you ask “why”, always ask (maybe somewhere else) “whether”.&nbsp;
Your declaration that this doesn’t require a lot of technology
is absolutely false, by a very large margin.&nbsp;
(Question therefore downvoted.)

Automatic translation just isn’t there yet.&nbsp;
Things like Google Translate,
and the equivalent from other companies,
are generally used just to
get a rough idea what a document is _about_,
to see if it’s _worth_ bothering with a human translator.&nbsp;
Pre-stocked translations could be much more accurate,
but that would bloat the size of the software
(including accompanying data),
and be extremely expensive &mdash;
the software creator would need to
pay several professional translators
to have any hope of
covering
even a significant fraction
of the world’s most popular languages.

Either way would also
drastically increase
the _effort_ needed
to create the software,
when it’s very often
not necessary,
or at least much lower priority
than relevant features.&nbsp;
That would
drive up the prices of commercial software,
put people off of writing open source,
delay features and bugfixes,
and introduce much more opportunity for bugs,
including security vulnerabilities.&nbsp;
A part of this you might not realize
is the need to accommodate strings that
may be much longer or shorter than in English,
or written in a different direction &mdash;
not just right-to-left such as Semitic languages
but some also top-to-bottom,
and THEN either left-to-right or right-to-left,
such as some Asian languages.
