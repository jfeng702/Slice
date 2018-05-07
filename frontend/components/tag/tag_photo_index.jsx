import React from 'react';

class TagPhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTagPhotos(this.props.tagBody);
  }

  render() {
    console.warn(this.props, 'props tag photo');
    console.warn(this.state, 'state');
    return (
      <div>
        <h2>Recently Tagged: {this.props.tagBody}</h2>
        {this.props.photos.map(photo =>
          <img src={`${photo.img_url}`}/>
        )}
      </div>
    );
  }
}

export default TagPhotoIndex;
