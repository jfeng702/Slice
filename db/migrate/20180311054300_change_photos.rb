class ChangePhotos < ActiveRecord::Migration[5.1]
  def change
    change_table :photos do |t|
      t.integer :album_id
    end
  end
end
