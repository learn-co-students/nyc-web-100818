class Nest
  attr_accessor :squirrel, :tree, :material # size, empty, occupoied, neighbors

  @@all = []

  def self.all
    @@all
  end
  #
  # def squirrel
  #   @squirrel
  # end
  #
  # def squirrel=(squirrel)
  #   @squirrel = squirrel
  # end

  def initialize(squirrel, tree, material)
    @squirrel = squirrel
    @tree = tree
    @material = material

    @@all << self
  end

end # end of Nest class
