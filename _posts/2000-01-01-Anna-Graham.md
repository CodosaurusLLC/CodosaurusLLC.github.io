---
last_updated: 2019-02-18
layout: blog-post
permalink: blog/anna-graham
section: Blog
tags: coding functional-programming has-code katas ruby tests
title: Anna Graham?  No, ANAGRAM Kata!
---

No,
[kata number six](http://codekata.pragprog.com/2007/01/kata_six_anagra.html){:
  rel="nofollow" target="_new"}
is about _anagrams_, not some lady named Anna Graham.&nbsp;
Follow the link for more details, but briefly:
the objective is to load in a bunch of words,
say which ones were anagrams of which,
what the longest anagrammed word is,
and what the largest set of anagrams
(i.e., words using the same letters) is.&nbsp;
My solution hinges around the `load_words` method.&nbsp;
The implementation, in Ruby, complete with tests of course, is:

```ruby
#! /usr/bin/ruby

# Dave Thomas Code Kata #6: Anagrams
# See http://codekata.pragprog.com/2007/01/kata_six_anagra.html
# for problem -- but not data, he's taken down the word list.
# Solution by Dave Aronson.
# Note, some of the things that are recalculated upon demand,
# could have been figured out up front once and for all and cached,
# and vice-versa.  Meant to show mix of options.  Real-world choice
# would depend on intended use.


class Anagram_Detector

  def initialize
    @sets = {}
    @longest_word = ''
    @longest_set = []
  end

  attr :sets
  attr :longest_set
  attr :longest_word

  def bad_sets
    @sets.reject { |key, val| val.length > 1 }
  end

  def canonicalize word
    word.split(//).sort.join
  end

  # TODO MAYBE: let user specify whether to
  # show anagrams of longest anagrammed word
  def dump
    puts 'Anagrams:'
    good_sets.each_pair { |key, val| puts "  #{key}: #{val.join ' '}" }
    puts "#{num_words} words in #{num_sets} sets"
    # note that the longest_word will always be the *first* of its set,
    # *in order of insertion*; whether that's alphabetical depends on use.
    # also it may not be the first one of its size, but the first one
    # with a second arrangement (i.e., an anagram) inserted.
    # further words of that same size will not replace it.
    puts "Longest word is #{@longest_word} (and its anagrams)"
    puts "Longest set is #{@longest_set.join ' '}"
    puts 'Others:'
    bad_sets.each_pair { |key, val| puts "  #{key}: #{val}" }
  end

  def good_sets
    @sets.reject { |key, val| val.length == 1 }
  end

  # TODO MAYBE: let user specify options, such as:
  # whether to fold case
  # whether to dump dupes
  # how to handle spaces
  def load_words words
    words.each do |word|
      letters = canonicalize word
      # could alternately use "sets.key? letters" but
      # we need to retrieve what's there (if any) anyway.
      so_far = @sets[letters]
      if so_far == nil
        so_far = []
      # only bother checking length upon finding 1st anagram
      elsif so_far.length == 1 and word.length > @longest_word.length:
        @longest_word = so_far[0] 
      end
      so_far << word
      @longest_set = so_far if so_far.length > @longest_set.length
      @sets[letters] = so_far
    end
  end

  def num_sets
    good_sets.length
  end

  def num_words
    good_sets.inject(0) { |count, set| count += set[1].length }
  end

end



# TESTS

Words = [ 'foo', 'bar', 'baz', 'clang', 'honk', 'tweet',
          'post', 'pots', 'spot', 'stop', 'tops',
          'dog', 'god', 'waster', 'waters', 'rawest' ]

require 'test/unit'

class TC_MyTest < Test::Unit::TestCase

  # WARNING: done by hand, so possibly wrong;
  # must be correct for tests to work correctly!
  # Should be the result for Words, below.
  Anagrammed_By_Hand = {
    'abr'      => [ 'bar' ],
    'abz'      => [ 'baz' ],
    'acgln'    => [ 'clang' ],
    'dgo'      => [ 'dog', 'god' ],
    'eettw'    => [ 'tweet' ],
    'foo'      => [ 'foo' ],
    'hkno'     => [ 'honk' ],
    'opst'     => [ 'post', 'pots', 'spot', 'stop', 'tops' ],
    'aerstw'   => [ 'rawest', 'waster', 'waters' ]
  }

  def setup
    @detector = Anagram_Detector.new
    @detector.load_words Words
  end

  def test_number_of_sets_match
    # beware magic numbers in tests... should find a way around this....
    assert_equal 3, @detector.num_sets
  end

  def test_number_of_words_match
    # beware magic numbers in tests... should find a way around this....
    assert_equal 10, @detector.num_words
  end

  # sort results just in case things got switched around;
  # it's set membership that's important, not order

  def test_keys_match
    assert_equal Anagrammed_By_Hand.keys.sort,
                 @detector.sets.keys.sort
  end

  def test_results_match
    @detector.sets.each_key do |key|
      assert_equal Anagrammed_By_Hand[key].sort,
                   @detector.sets[key].sort
    end
  end

  def test_got_right_longest_set
    assert_equal Anagrammed_By_Hand['opst'].sort,
                 @detector.longest_set.sort
  end

  def test_got_right_longest_word
    assert Anagrammed_By_Hand['aerstw'].include? @detector.longest_word
  end

  # TODO MAYBE: test erroneous conditions

end

detector = Anagram_Detector.new
detector.load_words Words
puts "Dump:"
detector.dump
puts "\nTests:"
# Test::Unit will run the tests AFTER this
```

Another thing a bit unusual about this one is that
I tried to make more use of Ruby's _functional_-style methods,
like inject and reject.&nbsp;
(Sorry, Alice's Restaurant fans, I used inspect during informal testing,
and select in a previous version, but couldn't find a decent excuse
to use detect, and AFAIK there are no common Ruby classes with methods
infect or neglect.)&nbsp;
Having "grown up" mostly with C, the imperative/procedural style
is most intuitive to me.&nbsp;
However, IMNSHO, one should always strive to at least _consider_,
or better yet _understand_,
alternatives to The Way We've Always Done It &mdash;
and maybe even think up more.

So now, as always, it's your turn.&nbsp;
Comments?&nbsp; Questions?&nbsp; Concerns?&nbsp;
Character assassinations?&nbsp; Compliments even?
