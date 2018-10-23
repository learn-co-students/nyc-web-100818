class User
  attr_reader :name

  @@all = []

  # should return all of the recipe instances
  def self.all
    @@all
  end

  def initialize(name)
    @name = name

    @@all << self
  end

  # TODO: has duplicates
  def recipes
    # should return all of the recipes this user has recipe cards for
    # grab my recipe cards
    # then grab the recipes out of those recipe cards
    recipe_cards.map do |recipe_card|
      recipe_card.recipe
    end
  end

  def add_recipe_card(recipe, date, rating)
    # should accept a recipe instance as an argument,
    # as well as a date and rating,
    # and creates a new recipe card for this user and the given recipe
    RecipeCard.new(self, recipe, rating, date)
  end

  def declare_allergen
    # should accept an ingredient instance as an argument, and create a new allergen instance for this user and the given ingredient
  end

  def allergens
    # should return all of the ingredients this user is allergic to
  end

  def top_three_recipes
    # should return the top three highest rated recipes for this user.

    # need to be able to sort the recipes (for this user) by rating => sort the RecipeCards
    sorted_recipe_cards = recipe_cards.sort_by do |recipe_card|
      recipe_card.rating
    end

    # return the top three
    top_three_recipe_cards = [sorted_recipe_cards[-1], sorted_recipe_cards[-2], sorted_recipe_cards[-3]]
    # sorted_recipe_cards.reverse.slice(0..2)

    top_three_recipe_cards.map do |recipe_card|
      recipe_card.recipe
    end
  end

  def most_recent_recipe
    # should return the recipe most recently added to the user's cookbook ==> RecipeCards
    # sort by the date
    sorted_recipe_cards = recipe_cards.sort_by do |recipe_card|
      recipe_card.date
    end

    # then return the top one, the most recent one
    sorted_recipe_cards.last.recipe
    # binding.pry
  end

  private

  def recipe_cards
    RecipeCard.all.select do |recipe_card|
      # compare something
      recipe_card.user == self
    end
  end

end # end of User class
