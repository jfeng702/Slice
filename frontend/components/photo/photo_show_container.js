import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto, updatePhoto } from '../../actions/photo_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { createTagging } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state, 'photo show state');
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    currentUser: state.session.currentUser,
    comments: state.entities.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    deletePhoto: id => dispatch(deletePhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    createTagging: (photoId, body) => dispatch(createTagging(photoId, body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
