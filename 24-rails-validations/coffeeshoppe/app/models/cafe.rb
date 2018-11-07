class Cafe < ApplicationRecord
  validates :name, presence: true
  validates :price, numericality: { less_than_or_equal_to: 5 }
  validate :caffine?

  def caffine?
    if caffy != "true"
      errors.add(:caffy, "MUST HAVE CAFFINE")
    end
  end

end
