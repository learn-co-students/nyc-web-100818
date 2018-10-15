class Animal
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    puts "in Animal"
    @name = name
    @mood = "nervous"
    puts "Leaving Animal"
  end

  def mate
    puts "Oh wow!"
  end
end
