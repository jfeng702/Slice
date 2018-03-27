import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { createTag, fetchTags, deleteTag } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state, 'state');
  // console.log(ownProps, 'ownprops');
  return {
    tags: ownProps.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTag: tag => dispatch(createTag(tag)),
    fetchTags: id => dispatch(fetchTags(id)),
    deleteTag: id => dispatch(deleteTag(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
