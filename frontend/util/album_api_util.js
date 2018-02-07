export const fetchAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: `api/albums`
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`
  });
};

export const createAlbum = album => {
  return $.ajax({
    method: 'POST',
    url: `api/albums`,
    data: { album }
  });
};

export const updateAlbum = album => {
  return $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: { album }
  });
};

export const deleteAlbum = (albumId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumId}`
  });
};
