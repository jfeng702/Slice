import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import ReactModal from 'react-modal';

var masonryOptions = {
    // transitionDuration: '0.8s',
    fitWidth: true,
    // horizontalOrder: true,
    // stagger: 90,
    // itemSelector: '.album-show-child',
    gutter: 2,
    // columnWidth: '.grid-show-sizer',
    // percentPosition: true
};

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAlbumPhotos(this.props.albumId);
    this.props.fetchAlbum(this.props.albumId);
  }

  render() {
    console.warn(this.props);

    var childElements = this.props.photos.map(function(photo){
       return (
            <Link key={photo.id} to={`/photos/${photo.id}`}>
              <img className="album-show-child" src={photo.img_url}/>
            </Link>
        );
    });
    let title;
    if (this.props.album){
      title = this.props.album.title;
    }

    return (
      <div className="album-show-container">

        <h1 className="album-show-title">{title}</h1>
        <Masonry
          className={'album-show-gallery'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
      <div className="grid-show-sizer"></div>
          {childElements}
      </Masonry>
      </div>

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
