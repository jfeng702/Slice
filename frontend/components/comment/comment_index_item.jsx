import React from 'react';

const CommentIndexItem = ({comment}) => {
  return (
    <div className="comment-index-item">
      <li>
        {comment.body}
      </li>
      <div>{comment.username}</div>
      Posted {comment.updated} ago
    </div>
  );
};

export default CommentIndexItem;
