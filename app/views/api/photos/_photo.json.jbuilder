json.extract! photo, :id, :img_url, :title, :description, :owner_id, :created_at
json.ownerOwns (photo.owner_id == current_user.id)
