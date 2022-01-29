---
date: 2019-02-08
layout: blog-post
permalink: blog/bloom-filter-kata-solution
section: Blog
tags: coding has-code iteration katas ruby tests NEEDS-UPDATE
title: Bloom Filter Kata
---

Kata number five is about Bloom Filters.&nbsp;
No, that isn't anything to do with flowers,
though of course it could be used for that purpose.&nbsp;
[Dave Thomas' description](http://codekata.pragprog.com/2007/01/kata_five_bloom.html){:rel="nofollow" target="_new"}
will quite suffice.&nbsp;
If you're not familiar with them, go read it now.&nbsp; I'll wait.

Oh, you're back.&nbsp; Good.&nbsp;
Now that you have a good understanding of what they do and how,
here's my implementation.&nbsp;
It uses each pair of bytes out of an MD5 digest, as an individual hash.&nbsp;
(For the security geeks out there,
yes I know MD5 has been declared too weak to rely on for security,
but this is just a simple demo.)

```ruby
#! /usr/bin/ruby

# Dave Thomas Code Kata #5: Bloom Filter
# See http://codekata.pragprog.com/2007/01/kata_five_bloom.html
# for problem -- but not data, he's taken down the word list.
# Solution by Dave Aronson


require 'digest/md5'


class Bloom_Filter

  FixnumSize = 32

  def initialize
    # WARNING WILL ROBINSON, DANGER, DANGER!
    # There's probably some way to tell Ruby "give me this size chunk
    # of RAM" but I haven't stumbled across it yet.  We need 2^16 bits
    # cuz we're going to take the hash 2 bytes at a time; divide by
    # FixnumSize cuz that's the storage unit for our bits.
    @bytes = Array.new((2 ** 16) / FixnumSize, 0)
  end

  def add_datum(datum)
    hash = Digest::MD5.hexdigest datum
    # could also convert hash to arbitrary-size integer en masse
    # and then take byte pairs as binary... this way seemed easier....
    (hash.length / 2).times { |pair| set_bit hash[pair*2 .. pair*2+1].hex }
  end

  def check_bit(bit_num)
    (@bytes[bit_num / FixnumSize] & (1 << (bit_num % FixnumSize))) != 0
  end

  def check_datum(datum)
    hash = Digest::MD5.hexdigest datum
    (hash.length / 2).times do |subhash|
      return false if ! check_bit hash[subhash * 2 .. subhash * 2 + 1].hex
    end
    true
  end

  def load_data(data)
    data.each { |datum| add_datum datum }
  end

  def set_bit(bit_num)
    @bytes[bit_num / FixnumSize] |= (1 << bit_num % FixnumSize)
  end

end


# TESTS

require 'test/unit'

class TC_MyTest < Test::Unit::TestCase

  def setup
    @words = [ 'zero', 'one', 'two', 'three', 'four', 'five',
                       'six', 'seven', 'eight', 'nine', 'ten' ]
    @filter = Bloom_Filter.new
    @filter.load_data @words
  end

  def helper(lang_words)
    lang_words.each do |word|
      assert_equal @words.member?(word), @filter.check_datum(word),
                   "error: checking #{word} failed!"
    end
  end

  def test_finding_same_words
    helper @words
  end

  def test_find_commonality_with_english
    helper ['zero', 'one',    'two',    'three', 'four',   'five',
                    'six',    'seven',  'eight', 'nine',   'ten',]
  end

  # given how the helper works, this is really meaningless,
  # included just for illustration
  def test_finding_nothing
    helper []
  end

  def test_finding_empty
    helper ['']
  end

  def test_finding_space
    helper [' ']
  end

  def test_find_commonality_with_french
    helper ['zero', 'un',     'deux',   'trois', 'quatre', 'cinq',
                    'six',    'sept',   'huite', 'neuf',   'dix']
  end

  def test_find_commonality_with_spanish
    helper ['zero', 'uno',   'dos',    'tres',  'cuatro', 'cinco',
                    'seis',  'siete',  'ocho',  'neuve',  'dies']
  end

  def test_find_commonality_with_german
    helper ['zero', 'eins',   'zwei',   'drei',  'fier',   'funf',
                    'sex',    'sieben', 'ocht',  'neun',   'zehn']
  end

  def test_find_commonality_with_japanese
    helper ['zero', 'ichi',   'ni',     'san',   'yon',    'go',
                    'ryoku',  'shichi', 'hachi', 'kyu',    'ju']
  end

  def test_find_commonality_with_multiple
    helper ['onetwo', 'one two three']
  end

  def test_find_commonality_with_nonsense
    helper ['ooee', 'ooahah', 'tingtang', 'wallawallabingbang',
            'flibbertygibbet', 'asdfasdf', 'qwertyuiop', '@#$%^&*!']
  end

end
```

So now, as usual, it's the Peanut Gallery's turn.&nbsp;
What would you do differently, and why?&nbsp;
Would you use a completely different algorithm?&nbsp;
A different way to allocate the memory, and set and check the bits?&nbsp;
Would you test it differently?&nbsp;
Or is it (ha!) perfect?
