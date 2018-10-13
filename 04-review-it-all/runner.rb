require 'pry'

require_relative 'tweet'
require_relative 'user'

# test my code here

u1 = User.new("Mike")
u2 = User.new("Cheng")

t1 = Tweet.new(u1, "a")
t2 = Tweet.new(u2, "b")

binding.pry
