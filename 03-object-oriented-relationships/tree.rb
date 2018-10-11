class Tree
  attr_accessor :height, :type

  @@all = []

  def self.all
    @@all
  end

  def initialize(height, type)
    @height = height
    @type = type

    @@all << self
  end
end # end of Tree class
