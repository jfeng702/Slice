json.extract! photo, :id, :img_url, :title, :description, :owner_id
json.ownerOwns (photo.owner_id === current_user.id)
