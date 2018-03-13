import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { createAlbumPhoto } from '../../actions/photo_actions';
import { fetchAlbums, fetchAlbum, fetchAlbumPhotos, updateAlbum, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, 'album show');
  // console.log(state, 'album show state');

  return {
    album: state.entities.albums[ownProps.match.params.id],
    photos: Object.values(state.entities.photos),
    albumId: ownProps.match.params.id,
    currentUser: state.session.currentUser
  };
};

const albumPhotos = (state, photo) => {

};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumPhotos: (id) => dispatch(fetchAlbumPhotos(id)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    updateAlbum: album => dispatch(updateAlbum(album)),
    deleteAlbum: id => dispatch(deleteAlbum(id)),
    createAlbumPhoto: photo => dispatch(createAlbumPhoto(photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
