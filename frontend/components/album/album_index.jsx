import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserAlbums();
  }

  render() {
    // console.warn(this.props);
    let stuffToRender;
    let newAlbumBtn = (
      <button>
        New Album
      </button>
    );


    if(this.props.albums === {}) {
      stuffToRender = (
        <Link to={''}>
          <img className="album-tile-img" src={`http://primusdatabase.com/images/4/49/Not_Available.png`}/>
        </Link>
      );
    } else {
      stuffToRender = (
        this.props.albums.map(album =>
        <div className="album-tile" key={`${album.id}`}>
          <Link to={`albums/${album.id}`}>
            <img className="album-tile-img" src={`${album.cover_url}`}/>
          </Link>
          <h3>{album.title}</h3>
        </div>)
      );
    }

    return (
      <div className="album-index">
        { newAlbumBtn }
        { stuffToRender }
      </div>
    );
  }
}

export default AlbumIndex;
