@user_albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :owner_id
    if !album.photos.empty?
      json.cover_url album.photos[-1].img_url
    else
      json.cover_url 'https://www.askideas.com/media/79/Lazy-Australian-Shepherd-Dog-Picture.jpg'
    end
    json.user_id current_user.id
  end
end
