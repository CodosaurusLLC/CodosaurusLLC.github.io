---
author: Dave Aronson
date: 2023-03-05
layout: blog-post
permalink: blog/become-software-engineer
section: Blog
tags: career-advice
title: How to Become a Software Engineer 
---

Another one that started as a long Quora answer.&nbsp;
Someone asked me:

> I am from Sri Lanka. I am a teenager. My future ambition is to be a software engineer. How can I become a software engineering fastly and easily?

First,
make sure you understand what software engineering _is_,
and what a software engineer _does_.&nbsp;
People toss around a lot of terms without understanding what they really mean,
like "software quality" or “assault rifle”.&nbsp;
There is widespread disagreement on what software engineering is,
but in my semi-humble opinion it is the _attempt_ (so far generally unsuccessful) to bring the type of predictability,
repeatability,
efficiency,
quality of results,
etc. typical of "real engineering" disciplines such as electrical,
chemical,
civil,
etc.,
to the field of software development.&nbsp;
In some schools of thought,
this attempt is ultimately doomed never to succeed,
but is still the _direction_ in which we need to go,
given the horrible state of software development today.&nbsp;
Being a "software engineer" is then a much loftier goal than being a “software _developer_”.&nbsp;
The latter just means you develop software — preferably,
but _not necessarily_,
with high predictability,
repeatability,
quality,
etc.&nbsp;
The former generally requires many years of experience as a software _developer_,
and _also_ looking into related things such as team dynamics,
the tradeoffs between different software development approaches,
how to achieve high quality (and what that even means in the first place),
etc.

So,
I’m going to ass-u-me you really mean you want to become a software _developer_,
and maybe decide later you want to be a software _engineer_.

The first thing to do is learn how to develop software.

The first task within that is to make sure you understand what software is.&nbsp;
Yes,
you surely know it’s the stuff that makes your computer (or phone or tablet or whatever,
they’re all really just different kinds of computers) do stuff.&nbsp;
But you must realize that it boils down to a list of detailed instructions,
to tell a machine what to do.&nbsp;
This machine can calculate very quickly,
read the voltage on some electrical wires and set the voltage on some others,
but is otherwise totally ignorant,
especially when it comes to subjective things like what a person wants.&nbsp;
Fortunately,
these calculations can be grouped together to become something like a recipe,
and you can build further recipes upon those.&nbsp;
For instance,
it can can read voltages on the wires from the keyboard or touch-screen or Bluetooth antenna,
to see what you typed.&nbsp;
It can set various voltages to turn a particular pixel on the screen to a particular color.&nbsp;
And that can be built up into displaying a character,
or a shape.&nbsp;
And those can be built up into displaying an entire screen,
and making images on the screen seem to move and change.

These instructions are written in various "languages".&nbsp;
At first they were written in the language of those very "low level" basic calculations and voltage reading and setting.&nbsp;
Then a brilliant lady by the name of
[Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper){:rel="nofollow" target="_new"}
came up with the idea that we could write a program to "translate" a much more human-readable language into that low-level language the machine can understand.&nbsp;
Today we call that a "compiler",
and we can use a compiler to write further compilers in human-readable languages,
building a tower of ever-higher level languages,
leading from the lowest level of raw "machine instructions" to the abstraction of “assembly” and from there to low-level languages like C and FORTRAN up to high-level languages like Python,
Ruby,
Java,
Elixir,
and so on.

So your next task is to pick a language and learn how to program in it.&nbsp;
You probably have some kind of software in mind that you’d like to make,
such as web applications,
operating systems,
mobile phone apps,
or whatever.&nbsp;
Look up what languages are commonly used to make that kind of software,
and learn one.&nbsp;
But how to do that?&nbsp;
There are bazillions of free resources online to learn just about anything.&nbsp;
Suppose you want to learn Kotlin.&nbsp;
Google something like:

>kotlin (tutorial OR intro OR introduction OR "for dummies" OR 101)

and you will probably find some good free resources (and if you’re lucky,
a community).&nbsp;
Such a tutorial will probably tell you what tools you need to download,
and from where.&nbsp;
Do so,
get familiar with them,
and work your way through the tutorial.

But retaining this learning will be very difficult without _practice_.&nbsp;
For that,
once you’re done with the tutorial,
I recommend [Exercism.org](https://exercism.org/){:rel="nofollow" target="_new"},
a site where you can solve small problems.&nbsp;
Further advantages of Exercism include that you can get _mentoring_ there,
and your progress is based heavily on your software passing _tests_,
which are absolutely critical to get to know.&nbsp;
The approach I usually recommend is:

Download an exercise,
but _don’t look at their test suite yet._&nbsp;
Think about what would need to be tested about _any_ solution to the exercise.&nbsp;
Make a list.&nbsp;
Turn those items into tests.&nbsp;
(If you don’t already understand what I mean,
you will by then.)&nbsp;
Compare to the test suite that Exercism supplied.&nbsp;
See what you missed.&nbsp;
See what _they_ missed.&nbsp;
Include tests other than the "happy path",
i.e.,
the input being absolutely normal; being able to handle unexpected input is critical to software being _reliable_.&nbsp;
Finally write the code for the exercise,
in such a way that _both_ your test suite _and_ Exercism’s pass in full.

This will ensure that your code is _correct_,
but there’s much more to software quality.&nbsp;
See [ACRUMEN](https://www.codosaur.us/acrumen){:rel="nofollow" target="_new"}
for my definition.&nbsp;
At this point you’ll probably want to focus mainly on Correctness and Maintainability,
but the others will rise in importance as you complete your journey to being a Software _Engineer_.&nbsp;
As they do,
look into what can be done to ensure that your software meets those criteria.

When you feel you’ve gotten a good handle on that one language… learn another.&nbsp;
But which?&nbsp;
Learn a popular one that is _the most different_ from the one you now know,
and repeat that at least once a year.&nbsp;
Different in what way?&nbsp;
There are many ways languages can differ,
such as being high or low level as I’ve mentioned above; there are styles such as Object-Oriented,
Functional,
Declarative,
Imperative,
and so on; some are compiled while some are "interpreted"; and many more ways to divide them up.&nbsp;
Try to learn at least one language with each setting.&nbsp;
See what are the tradeoffs,
ideally in different situations.&nbsp;
One type may be better for quick throwaway "Proof of Concept" programs,
while another is better for long-lived enterprise-level software.

But as I’ve also mentioned,
there is much more to it than just cranking out code,
even high-quality code.&nbsp;
There are many different _ways_ to write programs,
like just diving right in,
Test Driven Development,
and many more,
and then there’s the whole question of writing it in a _team_,
as you will probably do most of the time these days.&nbsp;
Look into the various Agile methodologies like Scrum and XP,
and the Lean approaches like Kanban,
and classic Waterfall,
and their tradeoffs and how to combine them.&nbsp;
Try them if you can,
though many cannot be done alone.&nbsp;
You may be able to convince your company (by this point you may be employed as a developer) to try some,
or join an Open Source project.&nbsp;
See what new ideas you can come up with,
how they compare to these,
and what works well _for you_,
which may well differ when you’re in different teams.&nbsp;
One approach may be better for small personal projects,
and another for large teams.

Lastly,
never stop learning.&nbsp;
New languages,
approaches,
etc. crop up all the time.&nbsp;
When I was in school,
most of today’s languages and development approaches had not yet been invented.&nbsp;
Subscribe to newsletters,
visit sites,
join communities,
and actually _read_ the stuff.&nbsp;
You don’t have to actually _know_ everything,
but you should know _about_ everything in common use.&nbsp;
For instance,
there are lots of languages and tools I don’t know… but I know what _kind_ of languages/tools they are,
what they’re generally _used_ for,
and so on,
so I can tell when they might be appropriate,
and "spin up" on them quickly if need be.

