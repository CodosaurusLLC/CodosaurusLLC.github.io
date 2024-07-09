---
author: Dave Aronson
date: 2024-07-09
layout: blog-post
permalink: blog/tests-longer-than-tested-code
section: Blog
tags: coding tests
title: Unit tests longer than the code?
---

Another one from Quora:

> [Is it typical for unit tests to have a longer length than the code they are testing?](https://priyadharshini2.quora.com/Is-it-typical-for-unit-tests-to-have-a-longer-length-than-the-code-they-are-testing-6){:target="_new"}

Oh, absolutely! Think about what a test needs to do. It needs to:

- **Arrange**: set up the proper pre-conditions, if any, typically data being in a certain state, whether in an object’s data members, or records in a database, or whatever
- **Act**: do the thing it’s testing
- **Assert**: check whether the post-conditions hold, typically some change in the arranged data

When separated out like that,
this will typically be
at least as long as the piece of code being tested,
which is often just one specific behavior of a method
under one specific set of circumstances.&nbsp;
It will usually be at least three lines,
plus a test/function declaration and closing
(if the language requires).

Even suppose each of the tests are one-liners,
like "assert my_obj.my_method(3) == 27",
needing no arranging and with trivial action and assertion.&nbsp;
When taken all together,
testing all of the method’s behaviors
under all reasonably foreseeable circumstances,
the test code will still usually wind up being
many times the length of the actual method.
