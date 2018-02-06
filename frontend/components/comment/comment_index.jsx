import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }
  render() {
    return (
      <div className="comment-index">
        {
          this.props.comments.map(comment => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
              />
          ))
        }
      </div>
    );
  }
}

export default CommentIndex;
