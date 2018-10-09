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
end

# map
# get everyone's names in an array (so an array of strings)
def instructor_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end
end

# each
# get the average age of your instructors
def average_age(instructors)
  total_age = 0
  instructors.each do |instructor|
    total_age += instructor[:age]
  end
  total_age.to_f / instructors.size
end

# find
# look up your instructor by name
def find_instructor(instructors, instructor_name)
  instructors.find do |instructor|
    instructor[:name] == instructor_name
  end
end

binding.pry
