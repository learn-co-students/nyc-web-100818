class CandyBag < ActiveRecord::Base
  has_many :candies
  # one to many
  # candy bag has many candies
  # candies belong to candy_bag

  # def candies
  #   Candy.all.select do |candy|
  #     candy.candy_bag_id == self.id
  #   end
  # end

  def number_of_candies
    10
  end

  def candy_names
    # ITERALTE pick out yours => select
    # and then pull out the names => map
    self.candies.map do |candy|
      candy.name
    end.uniq
  end
end
