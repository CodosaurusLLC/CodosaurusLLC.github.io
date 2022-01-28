---
last_updated: 2018-12-26
layout: blog-post
permalink: blog/code-katas
section: Blog
tags: coding functional-programming has-code iteration katas recursion ruby tests
title: Code Katas
---

Some of you may be familiar with the term _kata_.&nbsp;
It comes from martial arts, mainly karate,
and means a practice exercise,
especially one done over and over to train your "muscle memory".

After enough years programming, you build up similar semi-automatic approaches,
like how to organize a program,
or thinking imperatively or functionally,
or iteratively or recursively.&nbsp;
Code katas help you practice such things,
with deliberate emphasis on a particular aspect.&nbsp;
(Actually, IMHO this makes them more like
[Toastmasters](http://www.toastmasters.org/){:rel="nofollow" target="_new"}
speech projects, but that's another story.)

There are many sources of lists of code katas out there.&nbsp;
Recently, to sharpen my Ruby-fu, I began working through the ones that
[Dave Thomas](http://pragdave.pragprog.com){:rel="nofollow" target="_new"},
of
[Pragmatic Programmer](http://www.pragprog.com/){:rel="nofollow" target="_new"}
fame, put up at
[codekata.pragprog.com](http://codekata.pragprog.com/){:
  rel="nofollow" target="_new"}.&nbsp;
The first kata does not involve code.&nbsp;
So, here is my solution to
[the second one](http://codekata.pragprog.com/2007/01/kata_two_karate.html){:
  rel="nofollow" target="_new"}:

```ruby
#! /usr/bin/ruby

# Dave Thomas Code Kata #2, Karate Chop
# See http://codekata.pragprog.com/2007/01/kata_two_karate.html
# Solution by Dave Aronson

# TODO MAYBE: see if I can do the helper funcs as lambdas or some such....


# version 1: iterative

def chop1 tgt, arr
  # TODO: check arg types
  # TODO: check for empty array
  hi = arr.length - 1
  lo = 0
  while hi >= lo do
     mid = (hi + lo) / 2
     test = arr[mid]
     if test < tgt: lo = mid + 1
     elsif test > tgt: hi = mid - 1
     else return mid
     end
  end
  -1
end



# version 2: recursive and not functional

def chop2 tgt, arr
  chop2_helper tgt, arr, 0, arr.length - 1
end

def chop2_helper tgt, arr, min, max
  slot = (min + max) / 2
  test = arr[slot]
  if test == tgt: slot
  elsif min == max: -1
  elsif test < tgt: chop2_helper tgt, arr, slot + 1, max
  else chop2_helper tgt, arr, min, slot - 1
  end
end



# version 3: recursive and functional, passing array slice.

def chop3 tgt, arr
  # use another func to stop having to calc middle slot over and over
  chop3_pass_mid tgt, arr, arr.length / 2
end

def chop3_pass_mid tgt, arr, mid
  # use another func to stop having to retrieve middle value over and over
  chop3_pass_test tgt, arr, mid, arr[mid]
end

def chop3_pass_test tgt, arr, mid, test
  if test == tgt: mid
  elsif mid == 0: -1
  elsif test < tgt
    chop3_fix_offset mid + 1, chop3(tgt, arr[mid + 1 .. arr.length])
  else chop3 tgt, arr[0 .. mid - 1]
  end
end

# kind of a kluge; TODO MAYBE: do something cleaner with this problem!
def chop3_fix_offset offset, result
  result == -1 ? -1 : result + offset
end



# version 4: recursive and functional, passing whole array.

def chop4 tgt, arr
  chop4_helper tgt, arr, 0, arr.length - 1
end

def chop4_helper tgt, arr, min, max
  # use another func to not have to calc midpoint over and over
  chop4_pass_midpoint tgt, arr, min, max, (min + max) / 2
end

def chop4_pass_midpoint tgt, arr, min, max, midpt
  # use another func to not have to retrieve middle value over and over
  chop4_pass_midval tgt, arr, min, max, midpt, arr[midpt]
end

def chop4_pass_midval tgt, arr, min, max, midpt, midval
  if midval == tgt: midpt
  elsif min == max: -1
  elsif midval < tgt: chop4_helper tgt, arr, midpt + 1, max
  else chop4_helper tgt, arr, min, midpt - 1
  end
end



# TESTS

require 'test/unit'

class TC_MyTest < Test::Unit::TestCase

  def setup
    @arr = [ 0, 1, 2, 3, 5, 8, 13, 21, 34 ]  # fibonacci, btw
  end

  def test_chops
    [:chop1, :chop2, :chop3, :chop4].each do |func|

      # test that each thing in there, is found
      @arr.length.times do |slot|
        tgt = @arr[slot]
        assert_equal slot, send(func, tgt, @arr), "testing #{func.to_s}(#{tgt})"
      end

      # test that a bunch of things that should NOT be in there, are not found
      [@arr[0]-1, @arr[0]-0.1, 4, 33, @arr.last+0.1, @arr.last+1].each do |tgt|
        assert_equal -1, send(func, tgt, @arr), "testing #{func.to_s}(#{tgt})"
      end

    end

  end

end
```

Note, I'm not saying that this is the best solution,
let alone the One True Solution.&nbsp;
Your mileage is practically guaranteed to vary, especially on matters of style.

In fact, I'd _like_ to hear how you would have done it differently &mdash;
feedback is how one improves.&nbsp;
What would you have done differently, and why?&nbsp;
Would it be faster, clearer, more canonically Rubyish, or what?&nbsp;
Inquiring minds want to know!
