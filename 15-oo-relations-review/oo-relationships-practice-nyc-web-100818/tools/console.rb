require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

Movie.new("m1")
Movie.new("m2")
Movie.new("m3")


p1 = Passenger.new("p1")
p2 = Passenger.new("a2")
p3 = Passenger.new("53")

d1 = Driver.new("d1")
d2 = Driver.new("d2")
d3 = Driver.new("d3")

r1 = Ride.new(100.0, p1, d1)
r2 = Ride.new(100.0, p2, d2)
r3 = Ride.new(200.0, p3, d3)
r4 = Ride.new(200.0, p1, d3)

Pry.start
