import React from 'react';
import ReactModal from 'react-modal';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.photoId !== this.props.match.params.photoId) {
      nextProps.fetchPhoto(nextProps.match.params.photoId);
    }
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
        <div className="show-image-info">
          <h1>{photo.title}</h1>
          <h1>{photo.description}</h1>
        </div>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleCloseModal}
          className="photo-show-modal"
          overlayClassName="photo-show-overlay">
          <form>
            <label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="photo-edit-title"/>
            </label>
            <label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="photo-edit-description"/>
            </label>
          </form>
        </ReactModal>


      </div>
    );
  }
}
export default PhotoShow;
