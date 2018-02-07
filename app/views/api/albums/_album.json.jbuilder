json.extract! album, :id, :owner_id, :title, :updated_at
json.ownerOwns (album.owner_id === current_user.id)
