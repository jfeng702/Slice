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
    this.state = {
      img_url: '',
      owner_id: props.currentUser.id,
      album_id: props.albumId
    };
  }

  componentDidMount() {
    this.props.fetchAlbumPhotos(this.props.albumId);
    // this.props.fetchAlbum(this.props.albumId);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, 'nextprops');
  }

  postImage(img_url) {
    this.setState({ img_url });
  }

  uploadImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (errors, result) => {
        if (!errors) {
          this.setState({
            photo : {
              albumId: this.props.albumId
            }
          });
          this.postImage(result[0].url);
          this.props.createAlbumPhoto(this.state).then(photo => this.props.history.push(`/photos/${photo.id}?new=true`));
          this.setState({
            img_url: ''
          });
        }
      }
    );
  }

  render() {
    // console.warn(this.props);
    let albumButtons = (
      <div className="album-btns">
        <button className="album-upload-btn" onClick={(e)=> this.uploadImage(e)}>Upload</button>
        <Link to="/albums">
          <button className="album-delete-btn" onClick={()=>this.props.deleteAlbum(this.props.albumId)}>
            Delete
          </button>
        </Link>
      </div>
    );

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
        {albumButtons}
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
