class Movie
  attr_reader :title

  @@all = []

  def initialize(title)
    @title = title

    @@all << self
  end

  def self.all
    @@all
  end

  # stubbing
  def self.most_actors
    # should return the movie which has the most actors in it
    # most => count up actors per movie
      # find out characters/actors per movie
      # then find out actors from those characters
      array = MovieCharacter.all.map do |mc|
        { movie: mc.movie, actor: mc.character.actor }
      end

      binding.pry


    # sort those counts
      # [{Movie, rank}, {Movie, rank}, {Movie, rank}]
    # find the #1 most thing <==
      # # Think of the ideal end data structure
      # Movie.title <==
  end
end # end of Movie class
