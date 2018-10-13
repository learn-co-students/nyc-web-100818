require 'pry'

# computers are dumb
# they do what we tell them to

# top

class Car
  attr_accessor :name, :passengers, :make

  # the getter method given to us by attr_accessor :name
  # def name
  #   @name
  # end

  # the setter method given to use by attr_accessor :name
  # def name=(new_name)
  #   @name = new_name
  # end

  @@class_variable = []

  def initialize(name)
    puts "Do I really run?"
    @name = name
    # @make = "Lambo"
    @passengers = []
    @passengers << @make # nil
    @@class_variable << @make
  end

  def self.class_variable
    @@class_variable
  end # foo bar

  def question? # <= this is a naming convention in ruby
    binding.pry # at this point, what data do i have?
    # Car
    # self
    # @:name, :passengers, :make
    # self.:name, :passengers, :make
    # Car.class_variable => @@class_variable
    # make anything, any object, any method

    puts "My make is #{self.make}."
    true
  end
end # end of Car class

def test_method(name)
  puts "I am #{name}."
  make = "Lambo"
  puts "My make is #{make}."

  c1 = Car.new("Honda")
  c1.question?

  # self => main
  binding.pry
end


binding.pry

# bottom
