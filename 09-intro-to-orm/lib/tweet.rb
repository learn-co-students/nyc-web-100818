class ActiveRecord
    def self.all
      # this will pull all the data from our database
      result = DB[:conn].execute("SELECT * FROM tweets;")
      # throw it inside ALL
      result.each do |row|
      # loop through the results
        tweet = ALL.find do |instance|
          instance.id == row["id"]
        end

        if !tweet # lets make new instances if they're not in ALL
          # {"id"=>34,
          # "username"=>"ahhh",
          # "message"=>"blah",
          # 0=>34,
          # 1=>"ahhh",
          # 2=>"blah"}
          Tweet.new(row)
        else # update the data if we already have the instance
          tweet.username = row["username"]
          tweet.message = row["message"]
        end
      end

      ALL # instances!!!!
    end
end

class Tweet # < ActiveRecord::Base
  attr_accessor :message, :username, :id

  # class constant, because we always want this to be an array
  ALL = []

  # {"id"=>34,
  # "username"=>"ahhh",
  # "message"=>"blah",
  def initialize(props={})
    # it will also let you do interesting things like looping over k, v
    @message = props['message']
    @username = props['username']
    # each do |k, v|
    #   self.send(:k, v)
    @id = props['id']
    ALL << self
  end

  def self.all
    # this will pull all the data from our database
    result = DB[:conn].execute("SELECT * FROM tweets;")
    # throw it inside ALL
    result.each do |row|
    # loop through the results
      tweet = ALL.find do |instance|
        instance.id == row["id"]
      end

      if !tweet # lets make new instances if they're not in ALL
        # {"id"=>34,
        # "username"=>"ahhh",
        # "message"=>"blah",
        # 0=>34,
        # 1=>"ahhh",
        # 2=>"blah"}
        Tweet.new(row)
      else # update the data if we already have the instance
        tweet.username = row["username"]
        tweet.message = row["message"]
      end
    end

    ALL # instances!!!!
  end

  def self.create(props={})
    Tweet.new(props).save
  end

  # AND update the information in the database if it's already saved!
  def save
    # HEREDOCs
    sql = <<-SQL
      INSERT INTO tweets (message, username)
      VALUES (?, ?);
    SQL

    # sql = "INSERT INTO tweets (message, username) VALUES ('#{self.message}', '#{self.username}');"

    # SQL Injection
    # username = "bobby tables'); DROP TABLE tweets; --)"

    # this will save our new tweet to the database
    DB[:conn].execute(sql, self.message, self.username)
    result = DB[:conn].execute("SELECT * FROM tweets;")
    self.id = result.last["id"]
    self
  end
end
