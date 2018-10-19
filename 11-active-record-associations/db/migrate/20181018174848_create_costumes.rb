class CreateCostumes < ActiveRecord::Migration[5.2]
  def change
    # in here, you tell ActiveRecord what to change
    # up, down
    create_table :costumes do |t|
      t.string :name
      t.integer :size
    end
  end
end
