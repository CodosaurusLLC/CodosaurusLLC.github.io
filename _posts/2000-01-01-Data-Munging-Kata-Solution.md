---
date: 2019-02-05
layout: blog-post
permalink: blog/data-munging-kata-solution
section: Blog
tags: coding dry has-code iteration katas ruby tests NEEDS-UPDATE
title: Data Munging Kata
---
Kata number three isn't a coding exercise,
so let's move on to
[number four](http://codekata.pragprog.com/2007/01/kata_four_data_.html){:
rel="nofollow" target="_new"}:

> find the minimum temperature spread in a file of weather data,
find the minumum win-loss spread in a file of soccer league results...
and then refactor the two together, to remove duplication.

This is an example of the Agile principle of DRY:
Don't Repeat Yourself.&nbsp;
If you have the same objective being done in multiple places,
there are multiple places where code needs to be changed
if a bug is found or the objective is changed.&nbsp;
Likewise, if you suspect from the symptoms,
that some particular algorithm is being done wrong,
you know exactly where to change it _if_ your code is dry,
i.e., it adheres to the DRY principle.&nbsp;
If it isn't... then you're all wet.&nbsp; (Badum-pum.)

Actually, it's not so much an _Agile_ principle,
as a good basic software development principle
that the Agile movement has chosen to emphasize.&nbsp;
Somewhat like how so much of so-called Object Oriented programming
(what's usually _taught_ under that name,
not what Alan Kay _meant_ when he coined the term)
is really just good old encapsulation,
which was a well-known and commonly-taught software development principle
long before OOP got so popular.&nbsp;
Just about the only thing OOP added,
other than _convenient shorthand_ for such encapsulation,
was polymorphism.&nbsp;
But don't get me started &mdash; I'm a self-starter.&nbsp; ;-)

Anyway, here's my Ruby solution to #4,
including of course tests,
as
[Bryan "TATFT" Liles](http://smartic.us/){:rel="nofollow" target="_new"}
will be happy to see.&nbsp;
(What's TATFT stand for?&nbsp;
"Test All The Time".&nbsp;
At least on a G-rated blog it does....)

```ruby
#! /usr/bin/ruby

# Dave Thomas Code Kata 4, Data Munging.
# See http://codekata.pragprog.com/2007/01/kata_four_data_.html
# for purpose, and data files.
# Solution by Dave Aronson.

# Note: Could do these with File.readlines(file).each, but then
# I'd have to keep track of whether we'd read the header yet.


# Part 1: Weather Data

def min_weather_spread
  file = File.open 'weather.dat', 'r'
  first = file.gets.split[0] until first == 'Dy'
  min_spread = 9999  # unrealistically high value for this application
  while not file.eof?
    parts = file.gets.split
    next if parts.length == 0
    day = parts[0].to_i
    # to_i returns 0 on non-numeric; no exceptions thrown;
    # maybe there should be a String#is_numeric? method....
    break if day == 0
    spread = (parts[1].to_i - parts[2].to_i).abs
    if spread < min_spread
      min_spread = spread
      min_day = day
    end
  end
  puts "Min spread is #{min_spread}, on day #{min_day}"
  min_spread
end


# Part 2: Soccer League Table
# Soccer, football, whatever.  Most of the people reading this will be
# my fellow 'Murrikens, so I'll call it what we call it.

def min_soccer_spread
  file = File.open 'football.dat', 'r'
  first = file.gets.split[0] until first == 'Team'
  min_spread = 9999  # unrealistically high value for this application
  while not file.eof?
    parts = file.gets.split
    # data format is more consistent than weather one, so we can do this;
    # just be aware that in other applications, # of line parts may stay same.
    next if parts.length != 10
    spread = (parts[6].to_i - parts[8].to_i).abs
    if spread < min_spread
      min_spread = spread
      min_team = parts[1]
    end
  end
  puts "Min spread is #{min_spread}, for #{min_team}"
  min_spread
end


# Part 3: DRY Fusion.  Dry up the weather, and dry out the drunken football
# hooligans, er, I mean, soccer fans.  ;-)
#
# Note that the 9999 init, and skipping any where the first column evaluates to
# zero, works fine in THESE specific two cases, but may be problematic in other
# applications.  So why didn't I go ahead and make it fully generalized, such
# as by using the maximum supported number, or a parameter?  Another agile
# acronym: YAGNI.  If you don't grok it, Google it.

def min_spread filename, first_header, name_col, data_col_1, data_col_2
  file = File.open filename, 'r'
  first = file.gets.split[0] until first == first_header
  min_spread = 9999
  while not file.eof?
    parts = file.gets.split
    next if parts[0].to_i == 0
    spread = (parts[data_col_1].to_i - parts[data_col_2].to_i).abs
    if spread < min_spread
      min_spread = spread
      min_item = parts[name_col]
    end
  end
  # Could also have passed in a descriptor here, like 'day' or 'team'....
  puts "Min spread is #{min_spread}, for #{min_item}"
  min_spread
end


# TESTS


require 'test/unit'

class TC_MyTest < Test::Unit::TestCase

  def test_weather_case
    assert_equal min_spread('weather.dat', 'Dy', 0, 1, 2), min_weather_spread,
                 'Error: DRY equivalent does not work same as weather case'
  end

  def test_soccer_case
    assert_equal min_spread('football.dat', 'Team', 1, 6, 8), min_soccer_spread,
                 'Error: DRY equivalent does not work same as soccer case'

  end

end
```

So why am I not including the data files?&nbsp;
I want you to go read Dave Thomas'
[CodeKata blog](http://codekata.pragprog.com/){:rel="nofollow" target="_new"}
too, plus
[his regular blog](http://pragdave.pragprog.com/){:
 rel="nofollow" target="_new"}.&nbsp;
Yes, the first hasn't been updated in years and the second in months,
but if you're the kind of person who'd read this blog,
you'd want to see that one too, and the comments.

EDIT 2019-02-05: Yes, this code is Not Optimal.&nbsp;
It reflects my understanding of Ruby in mid-2010.&nbsp;
I've come a long way [baby] since then.&nbsp;
Eventually I'll update it.&nbsp;
Maybe.&nbsp;
Possibly when I also fix the now-broken links.
