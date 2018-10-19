
puts "start creating candy bags"
# rand, range
10.times do
  CandyBag.create({ 'size' => [1, 2, 3].sample, 'color' => Faker::Color.color_name })
end
puts "finished creating candy bags"

puts "start creating candy"
100.times do
  Candy.create({ 'name' => Faker::Dessert.topping, 'quantity' => Faker::Number.number(2), 'candy_bag_id' => CandyBag.all.sample.id })
end

10.times do
  Treater.create(name: Faker::Name.name)
end

10.times do
  Costume.create(name: Faker::MichaelScott.quote, size: Faker::Number.number(2))
end

10.times do
  TreaterCostume.create(treater_id: Treater.all.sample.id, costume_id: Costume.all.sample.id)
end

# cb1 = CandyBag.first
#
# c1 = Candy.create({ 'name' => Faker::Dessert.topping, 'quantity' => Faker::Number.number(2) })
#
# cb1.candies << c1

puts "finished creating candy"

# puts "NoMethodError: undefined method `id' for nil:NilClass"
# puts "db/seeds.rb:9:in `block in <top (required)>'"
# puts "db/seeds.rb:8:in `times'"
