class Tweet
  attr_reader :message, :user # <== for now, it's just a variable that we can store anything in
  # you can make the instance on the spot and assign it to @user
  # get the instance from somewhere else and assign it to @user <===

  @@all = []

  def self.all
    @@all
  end

  def initialize(user, message) # this is a user instance
    # we have access to: User, Tweet, pry, self, @@all, @message, @user, puts
    @user = user
    @message = message
    @@all << self
  end
end # end of Tweet class
