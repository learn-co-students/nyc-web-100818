class CreateGratitudes < ActiveRecord::Migration[5.2]
  def change
    create_table :gratitudes do |t|
      t.boolean :sincere
      t.string :message
      t.integer :level
      t.string :whomst

      t.timestamps
    end
  end
end
