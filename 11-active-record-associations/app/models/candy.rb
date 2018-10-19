class Candy < ActiveRecord::Base
  belongs_to :candy_bag
  # def self.find(name)
  #   Candy.all.find do |candy|
  #     candy.name == name
  #   end
  # end

  # def save
  #   DB[:conn].execute("sadfsdfsadfasdf")
  # end
end
