# 'Student' class:
#
# should initialize with first_name
# Student.all should return all of the student instances

class Student
  attr_reader :first_name

  @@all = []

  def self.all
    @@all
  end

  def initialize(first_name)
    @first_name = first_name

    @@all << self
  end
end
