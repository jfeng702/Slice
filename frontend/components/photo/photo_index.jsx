import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

var masonryOptions = {
    // transitionDuration: '0.8s',
    fitWidth: false,
    // horizontalOrder: true,
    // stagger: 90,
    itemSelector: '.photo-index-container',
    gutter:0,
    // columnWidth: '.grid-sizer'
};

class PhotoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }



  render() {
    var childElements = this.props.photos.map(function(photo){
       return (
            <Link className="photo-index-link" key={photo.id} to={`/photos/${photo.id}`}>
              <div className="photo-index-container">
                <img className="photo-index-child" src={photo.img_url}/>
                <div className="caption-overlay">
                  <h1>{photo.title} by {photo.ownerName}</h1>
                </div>
              </div>
            </Link>
        );
    });
  return (
    <Masonry
      className={'my-gallery-class'}
      elementType={'div'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      <div className="grid-sizer"></div>
        {childElements}
    </Masonry>
  );
    //
    // render() {
    //   var elem = document.querySelector('.my-gallery-class');
    //   var msnry = new Masonry( elem, {
    //     // options
    //     itemSelector: '.photo-index-container',
    //     // columnWidth: 200
    //   });
    //
    //   var childElements = this.props.photos.map(function(photo){
    //      return (
    //           <Link className="photo-index-link" key={photo.id} to={`/photos/${photo.id}`}>
    //             <div className="photo-index-container">
    //               <img className="photo-index-child" src={photo.img_url}/>
    //               <div className="caption-overlay">
    //                 <h1>{photo.title} by {photo.ownerName}</h1>
    //               </div>
    //             </div>
    //           </Link>
    //       );
    //   });
    // return(
    //   <div className="my-gallery-class">
    //     <div className="grid-sizer"></div>
    //       {childElements}
    //   </div>
    // );


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
