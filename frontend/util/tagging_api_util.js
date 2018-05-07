export const createTagging = (photoId, body) => (
  $.ajax({
    url: `api/photos/${photoId}/taggings`,
    method: 'POST',
    data: {
      tagging: {
        photo_id: photoId,
        body
      }
     }
  })
);

export const fetchTaggings = photoId => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/taggings`
  });
};

export const deleteTagging = (photoId, taggingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}/taggings/${taggingId}`
  });
};

// may not be necessary. controller action not built out
export const fetchAllTags = body => (
  $.ajax({
    url: '/api/tags',
    data: {
      tag: { body }
    }
  })
);
