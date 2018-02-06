import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      photo: {
        title: '',
        description: ''
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    const newState = Object.assign(this.state);
    return e => {
      newState.photo[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.photoId !== this.props.match.params.photoId) {
      nextProps.fetchPhoto(nextProps.match.params.photoId);
    }
    this.setState({photo: nextProps.photo});
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  render() {
    const photo = this.props.photo;
    if (!photo) {
      return <div>Loading...</div>;
    }

    return (
      <div className="show">
        <div className="show-image">
          <img src={`${photo.img_url}`}/>
        </div>
        <div className="comment-index">
          <CommentIndexContainer photo={photo}/>
        </div>
        <div className="show-image-info">
          <h1>{photo.title}</h1>
          <h1>{photo.description}</h1>
        </div>
        <button onClick={this.handleOpenModal}>Edit</button>

        {
          (this.props.photo.ownerOwns) ?
          <Link to="/">
            <button onClick={()=>this.props.deletePhoto(photo.id)}>Delete
            </button>
          </Link> : null
        }

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleCloseModal}
          className="photo-show-modal"
          ariaHideApp={false}
          overlayClassName="photo-show-overlay">

          <form onSubmit={() => this.props.updatePhoto(this.state.photo)}>
            <label>
              <input
                type="text"
                value={this.state.photo.title}
                onChange={this.update('title')}
                className="photo-edit-title"/>
            </label>
            <label>
              <input
                type="text"
                value={this.state.photo.description}
                onChange={this.update('description')}
                className="photo-edit-description"/>
            </label>
            <button>Edit</button>
          </form>
        </ReactModal>
      </div>
    );
  }
}
export default PhotoShow;
