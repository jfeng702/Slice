import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { createTag, fetchTags, deleteTag } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    tags: photoTags(state, ownProps.photo)
  };
};

const photoTags = (state, photo) => {
  return Object.values(state.entities.tags).filter(tag => tag.photo_id === photo.id);
};

const mapDispatchToProps = dispatch => {
  return {
    createTag: tag => dispatch(createTag(tag)),
    fetchTags: id => dispatch(fetchTags(id)),
    deleteTag: id => dispatch(deleteTag(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
