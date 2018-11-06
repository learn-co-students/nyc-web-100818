# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Party.destroy_all
Kid.destroy_all

p 'MAKING THOSE PARTIES!'
Party.create(fun: false, theme: 'garbage pale kids', gbags: 8765)
Party.create(fun: true, theme: 'Caddilacs and Dinosaurs', gbags: 0)
Party.create(fun: true, theme: 'Toga', gbags: 5000)
p 'partying donezo.'


p 'seeding the database'
Kid.create(name: 'roger', age: '22', present: true, party_id: Party.all.sample.id)
Kid.create(name: 'chef-its-ya-boi-arrr-dee', age: '80', present: true, party_id: Party.all.sample.id)
Kid.create(name: 'sarah', age: '28', present: false, party_id: Party.all.sample.id)
p 'done.'
