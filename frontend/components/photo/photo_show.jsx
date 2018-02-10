import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';

class PhotoShow extends React.Component {
  constructor(props) {
    // console.log(props, 'photoshow');
    super(props);
    this.state = {
      showModal: !!this.props.location.search,
      loading: true,
      photo: {
        title: '',
        description: ''
      },
      comment: {
        photo_id: props.match.params.photoId,
        body: '',
        author_id: props.currentUser.id
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.update = this.update.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  update(field) {
    const newState = Object.assign(this.state);
    return e => {
      newState.photo[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  updateComment(field) {
    const newState = Object.assign(this.state);
    return e => {
      newState.comment[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, 'nextprops');
    if (nextProps.match.params.photoId !== this.props.match.params.photoId) {
      nextProps.fetchPhoto(nextProps.match.params.photoId).then(() => {
        this.setState({showModal: !!this.props.location.search});
      });
    }
    this.setState({photo: nextProps.photo});
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment)
      .then( () => window.scrollTo(0, document.body.scrollHeight));
    this.setState({comment:
      {body:'',
      photo_id: this.props.match.params.photoId,
      author_id: this.props.currentUser.id,
    }
});
  }

  render() {
    const photo = this.props.photo;
    if (!photo) {
      return <div>Loading...</div>;
    }
    let ownerButtons;
    if (this.props.photo.ownerOwns) {
      ownerButtons = (
        <div className="owner-btns">
          <button className="photo-edit-btn" onClick={this.handleOpenModal}>Edit</button>
          <Link to="/">
            <button className="photo-del-btn" onClick={()=>this.props.deletePhoto(photo.id)}>Delete
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="show">
        <div className="show-image">
          <img src={`${photo.img_url}`}/>
        </div>
        <div className="show-bot-half">
          <div className="show-image-info">
            <div className="photo-show-top-row">
              <h1 className="photo-show-title">{photo.title}</h1>
              <div className="date-and-btns">
                <h2 className="photo-date">Posted on {new Date(photo.created_at).toDateString()}</h2>
                {ownerButtons}
              </div>

            </div>

          </div>
            <h3 className="photo-show-description">{photo.description}</h3>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose"
            onRequestClose={this.handleCloseModal}
            className="photo-show-modal"
            ariaHideApp={false}
            overlayClassName="photo-show-overlay">
            <form className="photo-edit-modal-form">
              <label>Title:
                <input
                  type="text"
                  value={this.state.photo.title}
                  onChange={this.update('title')}
                  className="photo-edit-title"
                  maxLength=""/>
              </label>
              <label>Description:
                <textarea
                  type="text"
                  value={this.state.photo.description}
                  onChange={this.update('description')}
                  className="photo-edit-description"/>
              </label>
              <button className="photo-modal-edit-btn"
                onClick={()=>this.props.updatePhoto(this.state.photo)
                  .then(this.handleCloseModal())}>Edit</button>
            </form>
          </ReactModal>

          {/*<div className="comment-form">        </div>*/}
          <div className="comments">
            <form onSubmit={this.handleCommentSubmit}>
              <textarea
                placeholder="Add a comment"
                onChange={this.updateComment('body')}
                value={this.state.comment.body}
                className="comment-textarea"/>
              <button className="comment-btn">Comment</button>
            </form>


          {/*<div className="comment-index">        </div>*/}
            <CommentIndexContainer photo={photo} deleteComment={this.props.deleteComment}/>
          </div>
        </div>


      </div>
    );
  }
}
export default PhotoShow;
