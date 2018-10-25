class Ride
  attr_reader :distance, :passenger, :driver

  @@all = []

  # a ride is initialized with a
  # distance (as a float) <== test data is safe
  def initialize(distance, passenger, driver)
    @distance = distance
    @passenger = passenger
    @driver = driver

    @@all << self
  end

  def self.all
    @@all
  end

  # def passenger
  #   # returns the passenger object for that ride
  # end
  #
  # def driver
  #   # returns the driver object for that ride
  # end

  def self.total
    # look at each ride,
    # add them up
    total = 0
    Ride.all.each do |ride|
      total = total + ride.distance # total += ride.distance
    end # <-== distance is inside of it # add up those distances
    total

    # your_distances = self.all.map do |ride|
    #   ride.distance
    # end
    # your_distances.reduce(:+)
  end

  def self.count
    # this would have gotten the number of things in @@all
    Ride.all.count
  end

  def self.average_distance
    #should find the average distance of all rides
    # total / number of things added == average
    self.total / self.count # pseudocode


    distance_array = self.all.map do |ride|
      ride.distance
    end

    distance_array.reduce(:+) / distance_array.size
  end

end
