export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo }
  })
);

export const createAlbumPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: `api/photos/1/create_album_photo`,
    data: { photo }
  })
);

export const fetchTagPhotos = tagBody => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${tagBody}/tag_photos`
  })
);

export const updatePhoto = photo => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  });
};

export const deletePhoto = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};
