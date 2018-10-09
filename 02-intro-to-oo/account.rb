require 'pry'

$global_dont_use_me = "string"

# blueprint
# {:name=>"Cinnamon", :breed=>"tabby", age, owner, location}
class Cat
  attr_accessor :name # will create your Getter and Setter methods for you
  attr_reader :breed # will create your Getter method for your
  # attr_writer :name, :breed # will create your Setter method for you

  @@all = []

  # tied to .new
  def initialize(name, breed)
    @name = name
    @breed = breed

    @@all << self
  end

  # binding.pry

  # class method
  def self.all
    @@all
  end

  # instance method
  def meow
    # inside of the instance method, self is who called the method
    binding.pry
    # self.name 5
    # @name 11
    "Meow Meow I'm a cat named #{self.name}."
  end

  # # getters
  # # it gets a value
  # def name
  #   @name
  # end

  # setters
  # it sets a value
  # def name=(name)
  #   @name = name
  # end

  # def breed
  #   @breed
  # end

  # def breed=(breed)
  #   @breed = breed
  # end
end # end of Cat class

# all_cats = []

binding.pry
# an instance is an occurance => instances are unique
c1 = Cat.new("Cinnamon", "tabby")
# all_cats << c1
# c1.name = "Cinnamon"
# c2.breed = "tabby"
c2 = Cat.new("Sugar", "tabby")
# all_cats << c2
# c2.name = "Sugar"
c3 = Cat.new("Simba", "mane coon")
# c3.name = "Simba"
c4 = Cat.new("Truffle", "ragdoll")
# c4.name = "Truffle"



binding.pry
