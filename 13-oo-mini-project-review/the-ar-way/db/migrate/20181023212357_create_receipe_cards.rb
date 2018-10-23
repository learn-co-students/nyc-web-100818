class CreateReceipeCards < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_cards do |t|
      t.timestamp :date
      t.integer :rating
      t.integer :user_id
      t.integer :recipe_id
    end
  end
end
