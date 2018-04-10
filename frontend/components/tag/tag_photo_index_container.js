import { connect } from 'react-redux';
import TagPhotoIndex from './tag_photo_index';

const mapStateToProps = (state, ownProps) => {
  console.warn(ownProps);
  console.warn(state);
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagPhotoIndex);
