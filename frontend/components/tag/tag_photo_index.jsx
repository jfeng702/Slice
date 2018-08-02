import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import { Link } from 'react-router-dom';

class TagPhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTagPhotos(this.props.tagBody);
  }

  render() {
    // console.warn(this.props, 'props tag photo');
    // console.warn(this.state, 'state');
    return (
      <div className="tag-photo-wrapper">
        <h2>Recently Tagged: {this.props.tagBody}</h2>
        <div className="tag-photo-index">
          {this.props.photos.map(photo => (
            <Link className="" to={`/photos/${photo.id}`}>
              <img className="tag-photo-item" src={`${photo.img_url}`}/>
            </Link>)
          )}
        </div>
      </div>
    );
  }
}

export default TagPhotoIndex;
