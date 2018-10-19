class CreateTreaterCostumes < ActiveRecord::Migration[5.2]
  def change
    create_table :treater_costumes do |t|
      t.integer :treater_id # foreign key
      t.integer :costume_id # foreign key
    end
  end
end
