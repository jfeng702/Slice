import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: id => dispatch(fetchComments(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
