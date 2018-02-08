import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state, 'state reporting in');
  // console.log(ownProps, 'commentindexcontainer reporting in');
  return {
    comments: photoComments(state, ownProps.photo),
    photo: ownProps.photo
  };
};

const photoComments = (state, photo) => {
  return Object.values(state.entities.comments).filter(comment => comment.photo_id === photo.id);
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: id => dispatch(fetchComments(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
