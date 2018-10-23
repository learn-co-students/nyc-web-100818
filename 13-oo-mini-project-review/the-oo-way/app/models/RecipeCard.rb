class RecipeCard
  attr_reader :date, :rating, :user, :recipe

  @@all = []

  # should return all of the recipe instances
  def self.all
    @@all
  end

  def initialize(user, recipe, rating, date)
    @user = user
    @recipe = recipe
    @rating = rating
    @date = date

    @@all << self
  end

  # def date
  #   @date
  #   # should return the date of the entry
  # end

  # def rating
  #   @rating
  #   # should return the rating (an integer)
      #     that a user has given their RecipeCard ==> noun => RecipeCard
  # end

  # this is an instance of User
  # def user
  #   @user
  #   # should return the user to which the entry belongs
  # end

  # def recipe
  #   @recipe
  #   # should return the recipe to which the entry belongs
  # end


end # end of RecipeCard class
