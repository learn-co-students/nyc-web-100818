# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
HoneyBadger.create!([
  { name: 'badgie the badger', weight: rand(50) },
  { name: 'jimmy', weight: rand(50) },
  { name: "Chef it's ya boi-r-dee", weight: rand(50) },
  { name: "JEFF, it's ya boi-r-dee", weight: rand(50) },
  { name: "GEOFF, it's ya boi-r-dee", weight: rand(50) },
  { name: 'M❤️m', weight: rand(50) },
])
