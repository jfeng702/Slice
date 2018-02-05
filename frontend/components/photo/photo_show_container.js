import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
