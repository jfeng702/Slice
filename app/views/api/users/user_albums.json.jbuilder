@user_albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :owner_id
    if !album.photos.empty?
      json.cover_url album.photos[-1].img_url
    else
      json.cover_url 'http://primusdatabase.com/images/4/49/Not_Available.png'
    end
    json.user_id current_user.id
    json.has_photos? album.photos.length != 0
  end
end
