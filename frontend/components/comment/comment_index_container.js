import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state, 'state reporting in');
  // console.log(ownProps, 'commentindexcontainer reporting in');
  return {
    comments: Object.values(state.entities.comments),
    photo: ownProps.photo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: id => dispatch(fetchComments(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
