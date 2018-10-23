class Recipe < ActiveRecord::Base
  has_many :recipe_cards
  has_many :users, through: :recipe_cards
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  # attr_reader :title
  #
  # @@all = []
  #
  # def self.all
  #   @@all
  # end

  def self.most_popular
  end

  # def initialize(title)
  #   @title = title
  #
  #   @@all << self
  # end

  # def users
  #   recipe_cards.map do |recipe_card|
  #     recipe_card.user
  #   end
  # end
  #
  # def ingredients
  # end
  #
  # def allergens
  # end
  #
  # def add_ingredients(ingredients)
  # end

  # private
  #
  # def recipe_cards
  #   RecipeCard.all.select do |recipe_card|
  #     recipe_card.recipe == self
  #   end
  # end

end
