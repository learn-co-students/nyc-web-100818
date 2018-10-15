class VentureCapitalist

  attr_reader :name
  attr_accessor :tres_commas

  @@all = []

  def initialize(name, tres_commas=false)
    @name = name
    @tres_commas = tres_commas

    @@all << self
  end

  def self.all 
    @@all
  end

  def self.tres_commas_club
    @@all.select { |vc| vc.tres_commas }
  end

  def offer_contract(startup, type, amount)
    round = FundingRound.new(self, startup, type, amount)
  end

  def funding_rounds
    FundingRound.all.select do |round|
      round.venture_capitalist == self
    end
  end

  def portfolio
    # unique_startups = self.funding_rounds.uniq do |round|
    #   round.startup
    # end

    # unique_startups.map do |round|
    #   round.startup
    # end
    array_of_startups = self.funding_rounds.map do |round|
      round.startup 
    end

    all_my_startsup = array_of_startups.uniq
  end

  def biggest_investment
    investments = self.funding_rounds.sort_by do |round|
      round.investment
    end

    investments.reverse.first

    self.funding_rounds.max_by {|fr| fr.investment } 
  end

  def invested(domain)
    total = 0

    rounds = self.funding_rounds.select do |rd|
      rd.startup.domain == domain
    end
    
    rounds.each do |rd|
      total += rd.investment
    end
    total
    
    # investments = rounds.map do |rd|
    #   rd.investment
    # end
    # investments.reduce(:+)
  end 

end