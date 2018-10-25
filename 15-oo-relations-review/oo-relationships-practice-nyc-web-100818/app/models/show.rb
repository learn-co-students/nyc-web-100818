class Show
  attr_reader :title

  @@all = []

  def initialize(title)
    @title = title

    @@all << self
  end

  def self.all
    @@all
  end
end # end of Show class
