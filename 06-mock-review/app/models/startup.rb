class Startup
  
  attr_accessor :name
  attr_reader :founder, :domain
  
  @@all = []

  def initialize(name, founder, domain)
    @name = name
    @founder = founder
    @domain = domain

    @@all << self
  end

  def self.all
    @@all
  end

  def pivot(domain, name)
    @domain = domain
    @name = name
  end

  def self.find_by_founder(founder)
    self.all.find do |startup|
      startup.founder == founder
    end

    # v1 = Startup.all.select do |startup|
    #   startup.founder == founder

    # end
    # v1.first
  end

  def self.domains
    self.all.map {|startup| startup.domain}
  end

  def sign_contract(venture_capitalist, type, investment)
    FundingRound.new(self, venture_capitalist, type, investment)

    # @number += 1
  end

  def funding_rounds
    FundingRound.all.select { |round| round.startup == self }
  end

  def num_funding_round
    self.funding_rounds.count
  end

  def total_funds
    # funds = 0
    # self.funding_rounds.each { |round| funds += round.investment}
    # funds

    funds_array = self.funding_rounds.map do |round|
      round.investment
    end

    funds_array.reduce(:+)
  end

  def investors
    unique_vc_array = self.funding_rounds.uniq do |round|
      round.venture_capitalist
    end

    unique_vc_array.map do |round|
      round.venture_capitalist
    end
  end

  def big_investors
    self.investors.select do |investor|
      investor.tres_commas
    end
  end

end
