class Driver
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def passengers
    # returns all passengers a driver has had
    rides.map do |r|
      r.passenger
    end
  end

  def rides
    # returns all rides a driver has made
    Ride.all.select do |ride|
      ride.driver == self
    end
  end

  def self.all
    # returns an array of all drivers
    @@all
  end

  def total_distance
    # how do I get total distance?
    # look at my rides
    # add up the distances
    total = 0
    rides.each do |ride|
      total = total + ride.distance # total += ride.distance
    end # <-== distance is inside of it # add up those distances
    total
  end

  def self.mileage_cap(distance) # be nice with your tests, make it a float
    # takes an argument of a distance (float)
    # and returns all drivers who have exceeded that distance (arguemnt)
    Driver.all.select do |driver|
      # I want to compare and see who went over distance
      driver.total_distance > distance # this is PSEUDOCODE
    end
  end

end
