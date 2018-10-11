class Tweet
  attr_accessor :message, :user

  def initialize(message, user)
    @message = message
    # if user.class != User
    @user = user
  end


end # end of Tweet class
