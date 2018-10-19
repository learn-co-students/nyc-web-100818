class Treater < ActiveRecord::Base
  has_many :treater_costumes
  has_many :costumes, through: :treater_costumes

  # def costumes
  #   treater_costumes = TreaterCostume.all.select do |tc|
  #     tc.treater_id == self.id
  #   end
  #
  #   treater_costumes.map do |tc|
  #     tc.costume
  #   end
  # end
end
