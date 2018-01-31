class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.string :title
      t.text :description
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :photos, :owner_id, unique: true
  end
end
