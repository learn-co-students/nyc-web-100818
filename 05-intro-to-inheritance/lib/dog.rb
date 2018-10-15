class Dog < Animal
  include ModuleName::InstanceMethods # will pull in those methods as instance methods
  extend ModuleName::ClassMethods # will pull in those methods as class methods
  # def jump
  #   puts "JUMP!!"
  # end
end
