import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'album show');
  return {
    album: state.entities.albums[ownProps.match.params.id]

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
