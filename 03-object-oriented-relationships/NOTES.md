
# one to many

# a school _has many_ students
class School
  # learn in a school
  name = "Flatiron School"
  students = [Student.new("Sydney"), Student.new("Ali"), Student.new("Eric")] # string, numbers, booleans, arrays, hashes
  students = [s1, s2, s3] # will work because memory references, pointers

# a student _belongs to_ a school
class Student
  name = ""
  addresses =
  grades =
  age =

# students are within a school

s1 = Student.new("Sydney")
s2 = Student.new("Ali")
s3 = Student.new("Eric")

# yes - changing the instance of the object, so it doesn't matter where it's at
# no - because an instance is unique, so they all have separate information
s2.age = 9001
# Single Source of Truth
