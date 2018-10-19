class CreateCandyBags < ActiveRecord::Migration[5.2]
  # one to many
  # candy bag has many candies
  # candy belongs to a candy bag <-- needs a candy_bag_id
  def change
    create_table :candy_bags do |t|
      t.integer :size
      t.string :color # text
    end
  end
end
