json.extract! photo, :id, :img_url, :title, :description, :owner_id, :created_at
json.ownerOwns (photo.owner_id == current_user.id)
json.title '' if !photo.title
json.description '' if !photo.description
json.ownerName photo.owner.username
