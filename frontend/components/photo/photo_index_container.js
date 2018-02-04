import PhotoIndex from './photo_index';
import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => {
  return {

  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: () => dispatch(fetchPhoto()),
    fetchPhotos: photos => dispatch(fetchPhotos(photos))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
