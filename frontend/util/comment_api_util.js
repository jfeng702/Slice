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
