class RecipeCard < ActiveRecord::Base
  belongs_to :user
  belongs_to :recipe
  # attr_reader :date, :rating, :user, :recipe
  #
  # @@all = []
  #
  # def self.all
  #   @@all
  # end
  #
  # def initialize(user, recipe, rating, date)
  #   @user = user
  #   @recipe = recipe
  #   @rating = rating
  #   @date = date
  #
  #   @@all << self
  # end
end
