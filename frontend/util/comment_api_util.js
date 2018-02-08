export const createComment = comment => (
  $.ajax({
    url: `api/photos/${comment.photo_id}/comments`,
    method: 'POST',
    data: { comment }
  })
);

export const fetchComments = (photoId) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/comments`
  });
};

export const deleteComment = id => {
  return $.ajax({
      method: 'DELETE',
      url: `api/comments/${id}`
  });
};
