import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      album: {
        title: ''
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserAlbums();
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchUserAlbums();
    // console.log(nextProps);
    // if (nextProps.albums !== this.props.albums) {
    //   this.props.fetchUserAlbums();
    // }
  }

  handleAlbumSubmit(e) {
    e.preventDefault();
    this.props.createAlbum(this.state.album);
    this.setState({
      album: {
        title:''
      }
    });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  update(field) {
    const newState = Object.assign(this.state);
    return e => {
      newState.album[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  albumRender(album) {
    if (album.cover_url) {
      return (
        <div>
          <img className="album-index-image" src={`${album.cover_url}`}/>
        </div>
      );
    } else {
      let divStyle = {
        backgroundColor: 'gray'
      };
      return (
        <div className="showme">
        </div>
      );
    }
  }

  render() {
    // console.warn(this.props);
    let stuffToRender;
    let newAlbumBtn = (
      <div className="new-album-container">
        <button className="new-album-btn" onClick={this.handleOpenModal}>
          New Album
        </button>
      </div>

    );

    let albumModal = (
      <ReactModal
       isOpen={this.state.showModal}
       ariaHideApp={false}
       contentLabel="onRequestClose"
       onRequestClose={this.handleCloseModal}
       className="album-show-modal"
       overlayClassName="album-show-overlay">
       <form className="album-edit-modal-form">
         <label>Album Title:
           <input
             type="text"
             value={this.state.album.title}
             className="album-edit-title"
             onChange={this.update('title')}/>
         </label>
        <button className="album-modal-edit-btn" onClick={()=> this.props.createAlbum(this.state.album)
            .then(this.handleCloseModal)}>Submit</button>
      </form>
    </ReactModal>
    );

    if(this.props.albums === {}) {
      stuffToRender = (
        <Link to={''}>
          <img className="album-tile-img"/>
        </Link>
      );
    } else {
      stuffToRender = (
        this.props.albums.map(album =>
        <div className="album-tile" key={`${album.id}`}>
          <Link to={`albums/${album.id}`}>
            <div className="album-container-container">
              {this.albumRender(album)}
              <div className="album-index-overlay">
                <h3 className="text">{album.title}</h3>
              </div>
            </div>
          </Link>
        </div>)
      );
    }

    return (
      <div className="album-index">
        { albumModal }
        { newAlbumBtn }
        <div className="album-index-container">
          { stuffToRender }
        </div>

      </div>
    );
  }
}

export default AlbumIndex;
