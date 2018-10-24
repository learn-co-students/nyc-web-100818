# awesome code goes here

require 'pry'

# def is_palindrome?(word)
#   raise ArgumentError unless word.is_a?(String)
#   downcased_word = word.downcase.gsub(/\W/,"")
#   return false if downcased_word.length < 2
#   downcased_word == downcased_word.reverse
# end

# Zordon: ok, sounds good.
# same thing forwards and backwards
def is_palindrome?(word)
  if word.class == String # && word.length > 2 # invalid argument?
    return false if word.length <= 2
    # join, gsub
    condensed_word = word.split(" ").join.downcase # so don't redefine the args you got
    condensed_word == condensed_word.reverse
    # word.split(" ").join.downcase = word.split(" ").join.reverse.downcase
  else
    raise ArgumentError
  end
  # you're starting to test~!
end

# binding.pry
