export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    error: (err) => console.log(err)
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
    error: (err) => console.log(err)
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo },
    error: (err) => console.log(err)
  })
);

export const updatePhoto = photo => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`
  });
};

export const deletePhoto = id => {
  return $.ajax({
    method: 'DESTROY',
    url: `api/photos/${id}`
  });
};
