@user_albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :owner_id
    if !album.photos.empty?
      json.cover_url album.photos[-1].img_url
    else
      json.cover_url 'https://res.cloudinary.com/slicecloud/image/upload/q_auto/v1518196108/pexels-photo-326055_tclf23.jpg'
    end
    json.user_id current_user.id
    json.has_photos? album.photos.length != 0
  end
end
