import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment: comment
  };
};

export const receiveComments = comments => {
  // console.log(comments);
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment)
    .then(serverComment => dispatch(receiveComment(serverComment)));
};


export const fetchComments = photoId => dispatch => {
  return CommentApiUtil.fetchComments(photoId)
    .then(serverComments => dispatch(receiveComments(serverComments)));
};

export const deleteComment = id => dispatch => {
  return CommentApiUtil.deleteComment(id)
    .then(serverComment => dispatch(removeComment(serverComment)));
};
