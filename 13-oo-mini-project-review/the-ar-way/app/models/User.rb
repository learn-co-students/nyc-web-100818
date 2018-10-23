class User < ActiveRecord::Base
  has_many :recipe_cards
  has_many(:recipes, through: :recipe_cards)
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def add_recipe_card(recipe, date, rating)
    RecipeCard.create(user: self, recipe: recipe, rating: rating, date: date)
  end

  def declare_allergen
  end

  def top_three_recipes
    sorted_recipe_cards = recipe_cards.sort_by do |recipe_card|
      recipe_card.rating
    end

    top_three_recipe_cards = [sorted_recipe_cards[-1], sorted_recipe_cards[-2], sorted_recipe_cards[-3]]

    top_three_recipe_cards.map do |recipe_card|
      recipe_card.recipe
    end
  end

  def most_recent_recipe
    sorted_recipe_cards = recipe_cards.sort_by do |recipe_card|
      recipe_card.date
    end

    sorted_recipe_cards.last.recipe
  end

end
