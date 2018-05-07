class ChangeTags < ActiveRecord::Migration[5.1]
  def change
    remove_column :tags, :photo_id
  end
end
