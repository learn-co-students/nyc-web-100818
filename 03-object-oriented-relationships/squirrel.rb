class Squirrel
  attr_accessor :color, :name, :breed

  @@all = []

  def self.all
    @@all
  end

  def initialize(color, name, breed)
    @color = color
    @name = name
    @breed = breed

    @@all << self
  end

  def my_trees
    # look at all the nests that are mine
    my_nests = Nest.all.select do |nest|
      nest.squirrel == self
    end

    # get that tree information from my nests
    my_trees = my_nests.map do |nest|
      nest.tree
    end

    # so i can return my trees
    my_trees
  end

end # end of Squirrel class
