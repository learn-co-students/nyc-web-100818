class Ingredient < ActiveRecord::Base
  has_many :recipe_ingredients
  has_many :recipes, through: :recipe_ingredients
  has_many :allergens
  has_many :users, through: :allergens
  # attr_reader :name
  #
  # @@all = []
  #
  # def self.all
  #   @@all
  # end
  #
  # def initialize(name)
  #   @name = name
  #
  #   @@all << self
  # end

  def self.most_common_allergen

  end

end
