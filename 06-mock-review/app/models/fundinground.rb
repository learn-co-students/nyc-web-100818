class FundingRound

  attr_reader :startup, :venture_capitalist, :investment, :type

  @@all = []

  def initialize(startup, venture_capitalist, type, investment)
    if investment >= 0
      @startup = startup
      @venture_capitalist = venture_capitalist
      @type = type
      @investment = investment
      
      @@all << self
    else 
      nil
    end

  end

  def self.all
    @@all
  end

  def investment=(investment)
    @investment = investment if investment >= 0
  end



end
