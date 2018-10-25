class ShowCharacter
  attr_reader :show, :character

  @@all = []

  def initialize(show, character)
    @show = show
    @character = character

    @@all << self
  end

  def self.all
    @@all
  end
end # end of ShowCharacter class
