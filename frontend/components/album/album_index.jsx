import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }


  render() {
    return (
      <div>
        {
          this.props.albums.map(album =>
          <li>
            <Link to={`albums/${album.id}`}>
              <img src={`${album.cover_url}`}/>
            </Link>
            {album.title}
          </li>
          )
        }
      </div>
    );
  }
}

export default AlbumIndex;
