---
layout: default
style: roadmap-size-details
title: Roadmap Sizes
---

## Small

In a _Small_ Roadmap:

  - You get a writeup of the overall project
    goals, value, constraints, alternatives,
    likely pitfalls, promising shortcuts,
    and whatever other high level useful information I can think of.

  - You get your project broken down into up to three "big chunks".&nbsp;
    (These are large features, or coherent sets of features.&nbsp;
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

  - You get the top chunk broken down into up to five
    individual features.

    (What is "top" is determined first by the Urgency,
    and then by "bang for the buck",
    determined by dividing the value by effort,
    each on a scale of 1 to 3,
    representing simple triage into low, medium, and high.&nbsp;
    I may not bother to break down common or trivial chunks,
    such as "Users may sign up, in, and out, and manage a basic profile".)

  - For each feature,
    just like with the chunks,
    you get 
    a title, description, dependencies,
    and triage of urgency, value, and effort,
    _plus_ a listing of:

    - The "main happy path".&nbsp;
      This is what happens when the feature is used as intended,
      under normal circumstances.

    - Any "alternate happy paths" I can think of.&nbsp;
      These are what happen when the feature is used
      in ways other than what might be "standard".

    - Any reasonable "sad paths" I can think of.&nbsp;
      These are error cases,
      whether user error, "technical difficulties", or other.

  - You get "test narratives",
    in ["Given, When, Then" format](https://www.agilealliance.org/glossary/gwt){:rel="nofollow" target="_new"},
    for the top three features
    of the top chunk.&nbsp;
    This will include at least the main happy path,
    and the single most important (in my opinion)
    alternate and sad paths (if any).&nbsp;

    <!-- one chunk * 3 features * 3 narratives = 9 -->

## Medium

In a _Medium_ Roadmap:

  - You get everything that's in a Small roadmap.

  - You get your project broken down into up to _five_ big chunks.

  - You get a writeup of likely pitfalls, promising shortcuts, etc.
    for the top three _chunks_.

  - You get your top _three_ chunks broken down into analyzed features.

  - You get test narratives for the top three features
    of your top _two_ chunks,
    including the main happy path and
    _two_ top alternate and sad paths (if there are that many).

    <!-- two chunks * 3 features * 5 narratives = 30 -->

## Large

In a _Large_ Roadmap:

  - You get everything that's in a Medium roadmap.

  - You get your project broken down into up to _ten_ big chunks.

  - You get a writeup of likely pitfalls, promising shortcuts, etc.
    for the top _five_ chunks.

  - You get a writeup of likely pitfalls, promising shortcuts, etc.
    for the top _feature_ of your top three chunks.

  - You get your top _five_ chunks broken down into analyzed features.

  - You get test narratives for the top three features
    of your top _three_ chunks,
    including the main happy path and
    _three_ alternate and sad paths (if there are that many).

    <!-- three chunks * 3 features * 7 narratives = 63 -->

<!--
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
-->

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
      <td>Hours of talk<!-- or travel--></td>
      <td class="numeric">1</td>
      <td class="numeric">2</td>
      <td class="numeric">6</td>
    </tr>
    <tr>
      <td>Maximum additional people</td>
      <td class="numeric">0</td>
      <td class="numeric">1</td>
      <td class="numeric">2</td>
    </tr>
    <tr>
      <td>Maximum chunks the project is broken down into</td>
      <td class="numeric">3</td>
      <td class="numeric">5</td>
      <td class="numeric">10</td>
    </tr>
    <tr>
      <td>Chunks broken down into features</td>
      <td class="numeric">1</td>
      <td class="numeric">3</td>
      <td class="numeric">5</td>
    </tr>
    <tr>
      <td>Chunks getting pitfalls/shortcuts analyzed</td>
      <td class="numeric">0</td>
      <td class="numeric">3</td>
      <td class="numeric">5</td>
    </tr>
    <tr>
      <td>Features getting pitfalls/shortcuts analyzed</td>
      <td class="numeric">0</td>
      <td class="numeric">0</td>
      <td class="numeric">3</td>
    </tr>
    <tr>
      <td>Chunks getting test narratives for top three features</td>
      <td class="numeric">1</td>
      <td class="numeric">2</td>
      <td class="numeric">3</td>
    </tr>
    <!--
    <tr>
      <td>Maximum test narratives per feature</td>
      <td class="numeric">3</td>
      <td class="numeric">5</td>
      <td class="numeric">7</td>
    </tr>
    -->
    <tr>
      <td>Maximum test narratives total</td>
      <td class="numeric">9</td>
      <td class="numeric">30</td>
      <td class="numeric">63</td>
    </tr>
    <tr>
      <td>Price</td>
      <td class="numeric">$998</td>
      <td class="numeric">$2,998</td>
      <td class="numeric">$4,998</td>
    </tr>
  </tbody>
</table>

Plus:

- For a _Small_ roadmap, each chunk or feature gets
  a title, description, dependency list,
  and triaged by urgency, value, and effort,
  and you get a list of likely challenges and possible solutions,
  at the project level.

- For a _Medium_ roadmap, you get all of the above, _plus_
  a list of likely challenges and possible solutions,
  for your top three _chunks_.

- For a _Large_ roadmap, you get all of the above, _plus_
  <!--
  the project itself gets recommendations about
  technologies, architecture, etc.,
  and the chunks and features get suggestions about alternative approaches.
  -->
  a list of likely challenges and possible solutions,
  for your top _five_ chunks.
  _and_ the top _feature_ of your top chunk.
