import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';


const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
