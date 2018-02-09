import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbums, fetchAlbum, fetchAlbumPhotos, updateAlbum, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, 'album show');
  // console.log(state, 'album show state');
  return {
    album: state.entities.albums[ownProps.match.params.id],
    photos: Object.values(state.entities.photos),
    albumId: ownProps.match.params.id
  };
};

const albumPhotos = (state, photo) => {

};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumPhotos: (id) => dispatch(fetchAlbumPhotos(id)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    updateAlbum: album => dispatch(updateAlbum(album)),
    deleteAlbum: id => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
