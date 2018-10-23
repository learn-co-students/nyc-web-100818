class Recipe
  attr_reader :title

  @@all = []

  # should return all of the recipe instances
  def self.all
    @@all
  end

  # should return the recipe instance with the highest number of users
  # (the recipe that has the most recipe cards)
  # Uses the JOIN TABLE RecipeCard
  def self.most_popular
  end

  def initialize(title)
    @title = title

    @@all << self
  end

  def users
    # should return the user instances who have recipe cards with this recipe
    # Uses the JOIN TABLE RecipeCard

    # grab all of my recipe cards because I have to go through the join table
    # binding.pry
    # recipe_cards = RecipeCard.all.select do |recipe_card|
    #   # compare something
    #   recipe_card.recipe == self
    # end

    # I can get the users out of the recipe cards
    recipe_cards.map do |recipe_card|
      recipe_card.user
    end
  end

  def ingredients
    # should return all of the ingredients in this recipe
    # Uses multiple JOIN TABLEs
  end

  def allergens
    # should return all of the ingredients in this recipe that are allergens
  end

  def add_ingredients(ingredients)
    # should take an array of ingredient instances as an argument,
    # and associate each of those ingredients with this recipe
  end

  private

  def recipe_cards
    RecipeCard.all.select do |recipe_card|
      # compare something
      recipe_card.recipe == self
    end
  end

end # end of Recipe class
