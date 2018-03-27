export const createTag = tag => (
  $.ajax({
    url: `api/photos/${tag.photo_id}/tags`,
    method: 'POST',
    data: { tag }
  })
);
export const fetchTags = photoId => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/tags`
  });
};

export const deleteTag = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  });
};
