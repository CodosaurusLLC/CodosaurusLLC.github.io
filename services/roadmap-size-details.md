---
layout: default
style: roadmap-size-details
title: Roadmap Sizes
---

## Small

In a _Small_ Roadmap:

  - You get a writeup of the overall project
    goals, value, constraints, alternatives,
    and whatever other high level useful information I can think of.

  - You get your project broken down into as many
    "big chunks" as I can.&nbsp;
    (These are what large features, or coherent sets of features.&nbsp;
    A Big-A Agile software development process
    would call them Epics.)

  - For each chunk, you get a
    title,
    description, 
    list of any other chunks it depends upon,
    list of any other chunks that depend upon it,
    and triage by:

    - Urgency: does this need to be in your MVP (Minimum Viable Product),
      or should it wait for another release
      (after the MVP has validated your idea),
      or should it be treated as a Wish-List item?

    - Business Value: low, medium, or high, relative to the others?

    - Level of Effort: ditto

    This lets you determine what should be worked on first,
    not only because it needs to be in a sooner release,
    but also what gets you the best "bang for the buck".

  - You get your top three chunks broken down
    into as many individual features as I can.&nbsp;

    (What is "top" is determined first by the Urgency,
    and then by "bang for the buck",
    determined by dividing the value by effort,
    each on a scale of 1 to 3.)

    (Note: I may not bother to break down common or trivial chunks,
    such as "Users may sign up, in, and out, and manage a basic profile".)

  - For each feature, you get the same kind of analysis
    as I outlined above for the chunks.

  - You get "test narratives" for
    the top six features
    (determined the same way)
    from those top chunks.&nbsp;

    These will be in
    ["Given, When, Then" format](https://www.agilealliance.org/glossary/gwt){:rel="nofollow" target="_new"},
    and may include:

    - The "main happy path",
      testing that it works when used as intended,
      under normal circumstances.

    - An "alternate happy path",
      testing that it works
      when used in ways other than what might be "standard".

    - A "sad path", testing an error case,
      whether user error, "technical difficulties", or other.

    Generally I will do all three for your most important features,
    only the "main happy path" for the least important ones,
    and "main happy" plus one of the others for the things in between.&nbsp;
    On average there will usually be about two test narratives per feature,
    _for a Small roadmap_.

## Medium

In a _Medium_ Roadmap:

  - You get everything that's in a Small roadmap.

  - Since we spent more time talking about it,
    there will probably be _more_ chunks,
    but even more likely is that each chunk will be _bigger_,
    at least in the sense of being more detailed.

  - The project writeup also includes
    likely pitfalls, possible shortcuts,
    and whatever other _medium_ level useful information I can think of.

  - You get your top _six_ chunks broken down into analyzed features.

  - You get test narratives for your top _twenty-four_ features,
    and more _per feature_, averaging about two and a half,
    for a total of about _sixty_.

  - You also get,
    as part of the further analysis of those _top_ chunks and features,
    a list of any
    likely implementation challenges, and some possible solutions.

## Large

In a _Large_ Roadmap:

  - You get everything that's in a Medium roadmap.

  - Since we spent even _more_ time talking about it,
    there will probably be even _more_ and/or _bigger_ chunks.
    
  - The project writeup also includes recommendations about the
    technology stack, architecture, skills needed, timeline, etc.,
    and whatever other _low_ level useful information I can think of
    &mdash;
    in short, everything,
    taking into consideration
    any constraints you specify,
    such as a
    budget
    or
    current technology.

  - You get your top _nine_ chunks broken down into analyzed features.

  - You get test narratives for your top _seventy-two_ features,
    and even _more_ of them _per feature_,
    averaging about _three_,
    for a total of about _two hundred sixteen!_

  - You also get,
    as part of the further analysis of those _top_ chunks and features,
    some suggestions about alternative approaches.

### _I'm not sure I caught all that.&nbsp; Can you give me a summary?_

<table class="roadmap-size-table">
  <tbody>
    <tr>
      <th>Size</th>
      <th class="numeric">Small</th>
      <th class="numeric">Medium</th>
      <th class="numeric">Large</th>
    </tr>
    <tr>
      <td>Hours of talk or travel</td>
      <td class="numeric">1</td>
      <td class="numeric">6</td>
      <td class="numeric">30</td>
    </tr>
    <tr>
      <td>Maximum additional people</td>
      <td class="numeric">0</td>
      <td class="numeric">2</td>
      <td class="numeric">4</td>
    </tr>
    <tr>
      <td>Chunks broken down</td>
      <td class="numeric">3</td>
      <td class="numeric">6</td>
      <td class="numeric">9</td>
    </tr>
    <tr>
      <td>Features tested</td>
      <td class="numeric">6</td>
      <td class="numeric">24</td>
      <td class="numeric">72</td>
    </tr>
    <tr>
      <td>Test narratives</td>
      <td class="numeric">12</td>
      <td class="numeric">60</td>
      <td class="numeric">216</td>
    </tr>
    <tr>
      <td>Price</td>
      <td class="numeric">$998</td>
      <td class="numeric">$4,998</td>
      <td class="numeric">$19,998</td>
    </tr>
  </tbody>
</table>

Plus:

- For a _Small_ roadmap, each chunk or feature gets
  a title, description, dependency list,
  and triaged by urgency, value, and effort.

- For a _Medium_ roadmap, they (and the project itself) _also_ get
  a list of likely challenges and possible solutions.

- For a _Large_ roadmap, you get all of the above, _plus_
  the project itself gets recommendations about
  technologies, architecture, etc.,
  and the chunks and features get suggestions about alternative approaches.
