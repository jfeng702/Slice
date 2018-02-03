class RemovePhotoIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :photos, :owner_id
  end
end
