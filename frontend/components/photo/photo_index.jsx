import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

var masonryOptions = {
    // transitionDuration: '0.8s',
    fitWidth: true,
    // horizontalOrder: true,
    // stagger: 90,
    itemSelector: '.photo-index-child',
    gutter: 1,
    // columnWidth: '.grid-sizer'
};

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    var childElements = this.props.photos.map(function(photo){
       return (
            <Link key={photo.id} to={`/photos/${photo.id}`}>
                <img className="photo-index-child" src={photo.img_url}/>
            </Link>
        );
    });

    return (
      <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        <div className="grid-sizer"></div>
          {childElements}
      </Masonry>
    );
  }
}

// <div className="photo-index">
//     {
//       this.props.photos.map(photo => (
//         <PhotoIndexItem
//           key={photo.id}
//           photo={photo}
//           />
//       ))
//     }
// </div>

export default PhotoIndex;
