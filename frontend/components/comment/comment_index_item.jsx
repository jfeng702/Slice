import React from 'react';

const CommentIndexItem = ({comment, deleteComment}) => {
  // console.log(deleteComment, 'this is delete comment');
  // console.log(fetchComments, 'this is fetch comments');
  let ownerDelete;
  if (comment.cOwnerOwns) {
    ownerDelete = (
      <button onClick={()=> deleteComment(comment.id)} className="delete-comment-btn">
        <i className="fas fa-times"></i>
      </button>
    );
  }

  return (
    <div className="comment-index-item">
      <div className="cmt-username-row">
        {comment.username}
        <span>Posted {comment.updated} ago</span>
        {ownerDelete}
      </div>

      <div className="cmt-body">
        {comment.body}
      </div>

    </div>
  );
};

export default CommentIndexItem;
