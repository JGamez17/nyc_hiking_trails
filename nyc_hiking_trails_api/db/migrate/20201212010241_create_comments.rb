class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :trail_id

      t.timestamps
    end
  end
end
