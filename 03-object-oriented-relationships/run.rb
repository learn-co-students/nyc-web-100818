require 'pry'
require_relative './lib/tweet'
require_relative 'user'
require_relative 'tree'
require_relative 'squirrel'
require_relative 'nest'

# how does one class know about the instance of the other class?
# do they need to?

u1 = User.new("Who?")
u2 = User.new("Mike Cheng")
u3 = User.new("Mike Cheng")

t1 = Tweet.new("coffee dad, are you ok?", u1)
t2 = Tweet.new("cofffeeee", u2)
t3 = Tweet.new("cccccoooooffffeeee", "Mike Cheng")

# color, name, breed
s1 = Squirrel.new("black", "Tim", "NY")
s2 = Squirrel.new("brown", "Timmy", "NY")
s3 = Squirrel.new("grey", "Timothy", "NJ")

# height, type
t1 = Tree.new(10, "oak")
t2 = Tree.new(20, "mohagany")
t3 = Tree.new(30, "maple")

# squirrel, tree, material
n1 = Nest.new(s1, t1, "feathers")
n2 = Nest.new(s1, t2, "gold")
n3 = Nest.new(s2, t1, "silver")
n4 = Nest.new(s2, t3, "bronze")



binding.pry

puts "something"

# executable file in a bin folder <===
