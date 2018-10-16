# 'BoatingTest' class:
#
# should initialize with student (Object),
#  a boating test name (String),
#  a boating test status (String), # pass or fail
# and an Instructor (Object)
# BoatingTest.all returns an array of all boating tests

class BoatingTest
  attr_reader :student, :name, :status, :instructor

  @@all = []

  def self.all
    @@all
  end

  def initialize(student, name, status, instructor)
    @student = student
    @name = name
    @status = status
    @instructor = instructor

    @@all << self
  end
end
