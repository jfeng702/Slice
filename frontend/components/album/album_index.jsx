import React from 'react';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }


  render() {
    return (
      <div>
        this.props.albums.map(album => (
          album.
        ))
      </div>
    );
  }
}

export default AlbumIndex;
