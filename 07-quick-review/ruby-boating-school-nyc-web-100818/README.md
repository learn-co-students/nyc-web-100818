# mod1-code-review-boating-school

Welcome to Boating School!  A Spongebob activity that simulates a system that tracks Boating Tests.  We have three models - 'Student', 'Instructor', and 'BoatingTest'.

Associations:

![alt text][chart]

[chart]: https://i.imgur.com/eiFqjJe.png

'Student' class:
* should initialize with first_name
* Student.all should return all of the student instances
* Student#add_boating_test should initialize a new boating test with a student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
* Student.find_student will take in a student first name and output that student (Object)


'BoatingTest' class:
* should initialize with student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
* BoatingTest.all returns an array of all boating tests

'Instructor' class:
* init with name
* return all instructors
* Instructor.pass_student should take in a student name and test name and return status passed
* Instructor.fail_student should take in a student name and test name and return status failed
* Instructor.student_grade_percentage should take in a student first name and output the percentage of tests that they have passed


Run ruby tools/console.rb in console to seed

Here is some example seed data:

spongebob= Student.new("Spongebob")
 patrick= Student.new("Patrick")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")

test1= spongebob.add_boating_test("Don't Crash 101", "pending", puff)


![](https://media.giphy.com/media/GwYxLtDaB3Wso/giphy.gif)
