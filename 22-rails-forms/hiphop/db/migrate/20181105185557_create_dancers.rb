class CreateDancers < ActiveRecord::Migration[5.2]
  def change
    create_table :dancers do |t|
      t.boolean :dope
      t.string :name
      t.integer :height

      t.timestamps
    end
  end
end
