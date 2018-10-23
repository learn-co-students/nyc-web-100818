require_relative '../config/environment.rb'

10.times do
  Recipe.new(Faker::Food.dish)
end

10.times do
  User.new(Faker::HarryPotter.character)
end

User.all.each_with_index do |user, index|
  (0..index).each do |number|
    RecipeCard.new(user, Recipe.all[number], (1..5).to_a.sample, Time.now + number)
  end
end

binding.pry
