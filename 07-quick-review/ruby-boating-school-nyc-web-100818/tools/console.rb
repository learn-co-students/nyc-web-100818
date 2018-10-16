require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

s1 = Student.new("a")
s2 = Student.new("b")
s3 = Student.new("c")

i1 = Instructor.new("a c")
i2 = Instructor.new("b c")
i3 = Instructor.new("c c")

bt1 = BoatingTest.new(s1, "a 1", "Pass", i1)
bt4 = BoatingTest.new(s1, "b 1", "Pass", i2)
bt5 = BoatingTest.new(s1, "c 1", "Fail", i3)

bt2 = BoatingTest.new(s2, "a 2", "Fail", i2)
bt3 = BoatingTest.new(s3, "a 3", "Pass", i3)

Instructor.student_grade_percentage("a")

binding.pry
0 #leave this here to ensure binding.pry isn't the last line
