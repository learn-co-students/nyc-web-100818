require 'pry'

instructors = [
    { name: 'Mike', cats: true, age: 9001 },
    { name: 'Laura', cats: false, age: 1 },
    { name: 'Steven', cats: true, age: 2 },
    { name: 'Jeff', cats: false, age: 26 }
  ]

# select
# pick out all the cat people
# return an array of two objects (the cat people)
def cat_people(instructors)
  instructors.select do |instructor|
    instructor[:cats] # == true
  end

  cat_people_array = []
  instructors.each do |instructor|
    if instructor[:cats] # == true
      cat_people_array << instructor
    end
  end
  cat_people_array
end

# map / collect
# get everyone's names in an array (so an array of strings)
def instructor_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end

  new_array = []
  instructors.each do |instructor|
    new_array.push(instructor[:name])
  end
  new_array
end

# each
# get the average age of your instructors
def average_age(instructors)
  total_age = 0
  instructors.each do |instructor|
    total_age += instructor[:age]
  end
  total_age.to_f / instructors.size

  # reduce vs inject better practice to use inject in ruby for Rubyists
  # use reduce because everyone else does
  # javascript, python, java, C, C#
end

# find / detect
# look up your instructor by name
def find_instructor(instructors, instructor_name)
  instructors.find do |instructor|
    instructor[:name] == instructor_name
  end

  instructors.each do |instructor|
    if instructor[:name] == instructor_name
      return instructor
    end
  end
  nil

  all_players.each do |x| #uhhhgg
    if players_name == x[:player_name][players_name]
      return x
    end
  end
end

binding.pry
