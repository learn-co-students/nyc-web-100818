class Passenger
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end


  # select => is for eliminating things from an array
  # map => is for transforming data into a new array (same size)
  def drivers
    # returns all drivers a passenger has ridden with
    # 1) find my rides
    # my_rides = Ride.all.select do |ride|
    #   ride.passenger == self
    # end

    # 2) then find my drivers for those rides
    my_drivers = rides.map do |ride|
      ride.driver
    end

    my_drivers.uniq
  end

  def rides
    # returns all rides a passenger has been on
    Ride.all.select do |ride|
      ride.passenger == self
    end
  end

  def self.all
    # returns an array of all passengers
    @@all
  end

  def total_distance
    # should calculate the total distance the passenger has
    # travelled with the service
    total = 0
    rides.each do |ride|
      total = total + ride.distance # total += ride.distance
    end # <-== distance is inside of it # add up those distances
    total

    your_distances = rides.map do |ride|
      ride.distance
    end
    your_distances.reduce(:+)

  end

  def self.premium_members
    # should find all passengers who have travelled over
    # 100 miles with the service

    # look at all passengers
    # select the ones that have travelled over 100 miles
    Passenger.all.select do |p|
      # the ones that have travelled over 100 miles
      p.total_distance > 100
    end
  end

end
