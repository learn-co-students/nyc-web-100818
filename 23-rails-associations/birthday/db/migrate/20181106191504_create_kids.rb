class CreateKids < ActiveRecord::Migration[5.2]
  def change
    create_table :kids do |t|
      t.string :name
      t.integer :age
      t.boolean :present
      t.integer :party_id

      t.timestamps
    end
  end
end
