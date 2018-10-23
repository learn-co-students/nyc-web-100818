10.times do
  Recipe.create(title: Faker::Food.dish)
end

10.times do
  User.create(name: Faker::HarryPotter.character)
end

10.times do
  Ingredient.create(name: Faker::Food.ingredient)
end

User.all.each_with_index do |user, index|
  (0..index).each do |number|
    # binding.pry
    puts "User: #{user.id} | Recipe: #{Recipe.all[number].id} | index: #{index} | number: #{number}"
    # RecipeCard.create(user_id: user.id, recipe_id: Recipe.all[number].id, rating: (1..5).to_a.sample, date: Time.now + number)
    RecipeCard.create(user: user, recipe: Recipe.all[number], rating: (1..5).to_a.sample, date: Time.now + number)
  end
end

RecipeIngredient.create(recipe: Recipe.first, ingredient: Ingredient.first)
RecipeIngredient.create(recipe: Recipe.second, ingredient: Ingredient.second)
RecipeIngredient.create(recipe: Recipe.third, ingredient: Ingredient.third)

Allergen.create(user: User.first, ingredient: Ingredient.first)
Allergen.create(user: User.second, ingredient: Ingredient.second)
Allergen.create(user: User.third, ingredient: Ingredient.third)
