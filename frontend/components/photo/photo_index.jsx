import React from 'react';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.photos.map(photo => (
              <PhotoIndexItem
                key={photo.id}
                photo={photo}
                />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
