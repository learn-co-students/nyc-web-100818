class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp

    # tweet = Tweet.new({'username' => username, 'message' => message})
    # tweet.save # save it to the database
    tweet = Tweet.create({'username' => username, 'message' => message})

    tweets = Tweet.all # pull out all the tweets from the database
    render(tweets)
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. [#{tweet.id}] #{tweet.username} says: #{tweet.message}"
    end
  end
end
