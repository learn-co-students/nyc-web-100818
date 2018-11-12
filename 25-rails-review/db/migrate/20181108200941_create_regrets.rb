class CreateRegrets < ActiveRecord::Migration[5.2]
  def change
    create_table :regrets do |t|
      t.string :name
      t.integer :level
      t.boolean :painful
      t.integer :user_id

      t.timestamps
    end
  end
end
