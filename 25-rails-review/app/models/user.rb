class User < ApplicationRecord
  has_many :regrets, dependent: :destroy

  validates :name, presence: true
end
