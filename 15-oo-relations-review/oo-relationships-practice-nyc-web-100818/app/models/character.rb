class Character
  attr_reader :name, :actor

  @@all = []

  def initialize(name, actor)
    @name = name
    @actor = actor

    @@all << self
  end

  def self.all
    @@all
  end
end # end of Character class
