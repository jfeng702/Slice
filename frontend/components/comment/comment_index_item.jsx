import React from 'react';

const CommentIndexItem = ({comment}) => {
  return (
    <div className="comment-index-item">
      <div className="cmt-username-row">
        {comment.username}
        <span>Posted {comment.updated} ago</span>
      </div>

      <div className="cmt-body">
        {comment.body}
      </div>

    </div>
  );
};

export default CommentIndexItem;
