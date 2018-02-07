import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.photo.id);
  }



  render() {
    // console.log(this.props, 'props reporting');
    return (
      <div className="">
          <div className="comment-index">
            {
              this.props.comments.map((comment,id) => (
                <CommentIndexItem
                  key={id}
                  comment={comment}
                  />
              ))
            }
          </div>
        </div>
    );
  }
}

export default CommentIndex;
