# < will allow us to inhertit everything from Animal
class Cat < Animal
  include ModuleName::InstanceMethods

  # is overwriting the Animal's initialize
  def initialize(name)
    # do both your initialize and Animal's initialize
    # you can use super to call the Parent Class's method
    # super(name)
    puts "before num_lives"
    @num_lives = 9
    puts "after num_lives"
    # super(name)
    # if the arguments are the same between this class
    # and the parent class's initialize, then you can
    # call super without passing in arguments
    super # there is a shortcut with arguments
    puts "after super"
  end

  def mate
    super
    puts "Meow!!"
    super
  end

  # def jump
  #   puts "JUMP!!"
  # end

  # def name
  #   @name
  # end

  # def mood=(new_mood)
  #   @mood = new_mood
  # end
end
