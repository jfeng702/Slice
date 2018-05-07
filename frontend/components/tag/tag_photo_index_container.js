import { connect } from 'react-redux';
import TagPhotoIndex from './tag_photo_index';
import { fetchTagPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tagBody: ownProps.match.params.tagBody,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  // need to pass a fetchTagPhotos action here that takes in the tag body.
  return {
    fetchTagPhotos: body => dispatch(fetchTagPhotos(body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagPhotoIndex);
