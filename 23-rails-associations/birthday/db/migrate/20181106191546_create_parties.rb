class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.boolean :fun
      t.string :theme
      t.integer :gbags

      t.timestamps
    end
  end
end
