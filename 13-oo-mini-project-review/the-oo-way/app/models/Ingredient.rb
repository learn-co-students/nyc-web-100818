class Ingredient
  attr_reader :name

  @@all = []

  def self.all
    @@all
  end

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.most_common_allergen
    # should return the ingredient instance that the highest number of users are allergic to
  end

end
