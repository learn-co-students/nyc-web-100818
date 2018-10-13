class User
  attr_reader :user

  def initialize(user)
    @user = user
  end

  # should this be for only that user?
  def tweets
    # check all the tweets
    # find the ones that are mine?? how?
    Tweet.all.select do |tweet|
      # what information do i have access to?
      # would self refer to the username?
      tweet.user == self
      binding.pry

      self.user
    end
  end
end # end of User class
