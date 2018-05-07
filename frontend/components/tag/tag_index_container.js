import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { createTagging, fetchTaggings, deleteTagging } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
  console.warn(state, 'state');
  return {
    tags: photoTags(state, ownProps.photo)
  };
};

const photoTags = (state, photo) => {
  return Object.values(state.entities.tags).filter(tag => tag.photo_id === photo.id);
};

const mapDispatchToProps = dispatch => {
  return {
    createTagging: tag => dispatch(createTagging(tag)),
    fetchTaggings: id => dispatch(fetchTaggings(id)),
    deleteTagging: id => dispatch(deleteTagging(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
