import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    // transitionDuration: '0.8s',
    fitWidth: true,
    // horizontalOrder: true,
    // stagger: 90,
    // itemSelector: '.album-show-child',
    gutter: 1,
    // columnWidth: '.grid-show-sizer',
    // percentPosition: true
};

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbumPhotos(this.props.albumId);
  }




  render() {

    var childElements = this.props.photos.map(function(photo){
       return (
            <Link key={photo.id} to={`/photos/${photo.id}`}>
              <img className="album-show-child" src={photo.img_url}/>
            </Link>
        );
    });

    console.warn(this.props);
    return (
      <Masonry
        className={'album-show-gallery'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}>
    <div className="grid-show-sizer"></div>
        {childElements}
    </Masonry>
    );
  }
}

// <div className="album-show-container">
//   {
//   this.props.photos.map(photo=>
//     <li className="li-test">
//       { photo.title }
//       <Link to={`/photos/${photo.id}`}>
//         <img className="img-test" src={`${photo.img_url}`}/>
//       </Link>
//     </li>
//   )
// }
// </div>

export default AlbumShow;
