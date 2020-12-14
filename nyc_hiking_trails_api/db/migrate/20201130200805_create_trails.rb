class CreateTrails < ActiveRecord::Migration[6.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :location
      t.string :park_name
      t.string :length
      t.string :difficulty
      t.integer :borough_id

      t.timestamps
    end
  end
end
