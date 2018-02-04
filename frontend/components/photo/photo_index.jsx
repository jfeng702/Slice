import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="photo-index">
          {
            this.props.photos.map(photo => (
              <PhotoIndexItem
                key={photo.id}
                photo={photo}
                />
            ))
          }
      </div>
    );
  }
}

export default PhotoIndex;
