class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.boolean :genius
      t.string :personality

      t.timestamps
    end
  end
end
