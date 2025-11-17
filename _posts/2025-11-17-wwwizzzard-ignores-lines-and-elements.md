---
author: Dave Aronson
date: 2025-11-17
layout: blog-post
permalink: blog/wwwizzzard-ignores-lines-and-elements
section: Blog
tags: tools wwwizzzard
title: WWWizzard Ignores Lines and Elements
---

![](https://www.wwwizzzard.com/images/wizard-and-sleeper-from-bard-tweaked.jpg){:style="display: block; margin: auto; width: 50%"}

You may have seen
[my blog post announcing WWWizzzard](wwwizzzard-checks-www-while-you-zzz).&nbsp;
You may have toyed with it,
and found that many webpages
have frequent irrelevant tiny changes,
such as a carousel,
or a list in random order or made from a random selection.&nbsp;
I have now added a feature to help ignore those changes.

As of recently,
[WWWizzzard](https://www.WWWizzzard.com){:target="_new"}
will accept two blocks of text in each site description.&nbsp;
Each one is treated as a list of strings.&nbsp;
For the first one,
[WWWizzzard](https://www.WWWizzzard.com){:target="_new"}
will ignore all lines containing any of those strings.&nbsp;
(This is done case-insensitively.)&nbsp;
For the second one,
[WWWizzzard](https://www.WWWizzzard.com){:target="_new"}
will ignore all DOM elements
matching any of those CSS selectors.&nbsp;
(If you don't know what DOM elements and CSS selectors are,
just leave it blank, and it won't change anything.)

Once I figure out a decent UI for it,
I _may_ add a feature to ignore _blocks_ of text,
from some starting string to some ending string.&nbsp;
That will help ignore such pieces on pages that
don't use semantic classes or IDs on their elements.&nbsp;
:-(
