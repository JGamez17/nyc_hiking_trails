class AddBoroughIdToTrails < ActiveRecord::Migration[6.0]
  def change
    add_column :trails, :borough_id, :integer
  end
end
