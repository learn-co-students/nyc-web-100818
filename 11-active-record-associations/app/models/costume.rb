class Costume < ActiveRecord::Base
  has_many :treater_costumes
  has_many :treaters, through: :treater_costumes
end
