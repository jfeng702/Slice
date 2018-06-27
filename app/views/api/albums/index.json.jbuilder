@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
    if !album.photos.empty?

      json.cover_url album.photos[-1].img_url
    else
      json.cover_url 'https://res.cloudinary.com/slicecloud/image/upload/q_auto:best/v1518196108/pexels-photo-326055_tclf23.jpg'

      # json.cover_url 'http://primusdatabase.com/images/4/49/Not_Available.png'
      # json.cover_url "//:0"
    end
    json.has_photos? album.photos.length != 0
  end
end
