import React from 'react';

const CommentIndexItem = ({comment, deleteComment}) => {
  // console.log(deleteComment, 'this is delete comment');
  // console.log(fetchComments, 'this is fetch comments');
  return (
    <div className="comment-index-item">
      <div className="cmt-username-row">
        {comment.username}
        <span>Posted {comment.updated} ago</span>
        <button onClick={()=> deleteComment(comment.id)} className="delete-comment-btn">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cmt-body">
        {comment.body}
      </div>

    </div>
  );
};

export default CommentIndexItem;
