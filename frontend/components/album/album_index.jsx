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

  render() {
    // console.warn(this.props);
    let stuffToRender;
    let newAlbumBtn = (
      <button onClick={this.handleOpenModal}>
        New Album
      </button>
    );

    let albumModal = (
      <ReactModal
       isOpen={this.state.showModal}
       ariaHideApp={false}
       contentLabel="onRequestClose"
       onRequestClose={this.handleCloseModal}
       className="albumModal"
       overlayClassName="albumOverlay">
       <form className="album-edit-modal-form">
         <label>Title
           <input
             type="text"
             value={this.state.album.title}
             onChange={this.update('title')}/>
         </label>
        <p>Modal text!</p>
        <button onClick={()=> this.props.createAlbum(this.state.album)
            .then(this.handleCloseModal)}>Submit</button>
      </form>
    </ReactModal>
    );

    let divStyle = {
      // backgroundImage: `url(http://primusdatabase.com/images/4/49/Not_Available.png)`,
      backgroundColor: 'gray'
    };

    if(this.props.albums === {}) {
      stuffToRender = (
        <Link to={''}>
          <img className="album-tile-img" src={`http://primusdatabase.com/images/4/49/Not_Available.png`}/>
        </Link>
      );
    } else {
      stuffToRender = (
        this.props.albums.map(album =>
        <div className="album-tile" key={`${album.id}`}>
          <Link to={`albums/${album.id}`}>
            <div className="album-tile-img" style={divStyle}>

            </div>
          </Link>
          <h3>{album.title}</h3>
        </div>)
      );
    }
    // <img className="album-tile-img" src={`${album.cover_url}`}/>

    return (
      <div className="album-index">
        { albumModal }
        { newAlbumBtn }
        { stuffToRender }
      </div>
    );
  }
}

export default AlbumIndex;
