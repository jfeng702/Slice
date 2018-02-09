import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserAlbums();
  }


  render() {
    console.warn(this.props);
    return (
      <div className="album-index">
        {
          this.props.albums.map(album =>
          <div className="album-tile" key={`${album.id}`} >
            <Link to={`albums/${album.id}`}>
              <img className="album-tile-img" src={`${album.cover_url}`}/>
            </Link>
            <h3>{album.title}</h3>
          </div>
          )
        }
      </div>
    );
  }
}

export default AlbumIndex;
