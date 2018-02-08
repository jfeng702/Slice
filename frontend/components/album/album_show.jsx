import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbumPhotos(this.props.albumId);

  }


  render() {
    console.log(this.props);
    return (
      <div>
        { console.warn(this.props.photos)}
        {
        this.props.photos.map(photo=>
          <li>
            { photo.title }
            <img src={`${photo.img_url}`}/>
          </li>
        )
        }
      </div>
    );
  }
}



export default AlbumShow;
