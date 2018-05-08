import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';

class TagPhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTagPhotos(this.props.tagBody);
  }

  render() {
    console.warn(this.props, 'props tag photo');
    console.warn(this.state, 'state');
    return (
      <div className="tag-photo-wrapper">
        <h2>Recently Tagged: {this.props.tagBody}</h2>
        <div className="masonry">
          {this.props.photos.map(photo =>
            <img className="masonry-item" src={`${photo.img_url}`}/>
          )}
        </div>
      </div>
    );
  }
}

export default TagPhotoIndex;
