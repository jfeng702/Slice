import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbum, fetchUserAlbums, createAlbum } from '../../actions/album_actions';


const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchUserAlbums: () => dispatch(fetchUserAlbums()),
    createAlbum: album => dispatch(createAlbum(album))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
