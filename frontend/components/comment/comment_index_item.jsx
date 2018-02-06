import React from 'react';

const CommentIndexItem = ({comment}) => {
  return (
    <div className="comment-index-item">
      <li>
        {comment.body}
      </li>
    </div>
  );
};

export default CommentIndexItem;
