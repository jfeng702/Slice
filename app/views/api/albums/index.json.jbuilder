@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
    if !album.photos.empty?
      json.cover_url album.photos[-1].img_url
    else
      json.cover_url 'https://www.askideas.com/media/79/Lazy-Australian-Shepherd-Dog-Picture.jpg'
      # json.cover_url "//:0"
    end

  end
end
