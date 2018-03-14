json.extract! album, :id, :owner_id, :title, :updated_at
# default cover url
json.cover_url 'https://res.cloudinary.com/slicecloud/image/upload/q_auto:best/v1518196108/pexels-photo-326055_tclf23.jpg'
json.ownerOwns (album.owner_id === current_user.id)
