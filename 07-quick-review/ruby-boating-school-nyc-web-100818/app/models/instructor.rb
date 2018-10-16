# 'Instructor' class:
#
# init with name
# return all instructors
require 'pry'

class Instructor
  attr_reader :name

  @@all = []

  def self.all
    @@all
  end

  # Instructor.student_grade_percentage should take in
  # a student first name and output the percentage of tests
  # that they have passed

  def instance_method
    # self.name
    # name = "hi"
    binding.pry
  end


  def self.student_grade_percentage(first_name)

    # # name
    # binding.pry


    # found the student
    student = Student.all.find do |student|
      student.first_name == first_name
    end

    # binding.pry

    # find that student's tests
    students_tests = BoatingTest.all.select do |test|
      test.student == student # who is this student??
    end

    # binding.pry
    total_number_of_tests = students_tests.size # count, length

    pass_tests = students_tests.select do |test|
      test.status == "Pass"
    end

    # binding.pry
    total_passing_tests = pass_tests.size

    # output the percentage of tests that they have passed
    total_passing_tests.to_f / total_number_of_tests * 100
  end

  def initialize(name)
    @name = name

    @@all << self
  end
end
