class CreateTreaters < ActiveRecord::Migration[5.2]
  def change
    create_table :treaters do |t|
      t.string :name
    end
  end
end
