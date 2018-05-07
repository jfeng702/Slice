class ChangeTagIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :taggings, column: :photo_id
    remove_index :taggings, column: :tag_id
    add_index :taggings, [:photo_id, :tag_id], unique: true
  end
end
