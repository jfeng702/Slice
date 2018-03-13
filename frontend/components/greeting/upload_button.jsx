import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      owner_id: props.currentUser.id
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createPhoto(this.state);
    // this.setState({
    //     img_url: ''
    //   });
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  postImage(img_url) {
    this.setState({ img_url });
  }

  uploadImage(e) {
    // console.log(e);
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (errors, result) => {
        if(!errors){
          this.postImage(result[0].url);
          this.props.createPhoto(this.state).then(photo => this.props.history.push(`/photos/${photo.id}?new=true`));
          this.setState({
              img_url: ''
            });
        }
      }
    );
  }

  render() {
    return(
      <div>
        <form>
          <button className="header-cloud-button" onClick={(e) => this.uploadImage(e)}>
            <i className="fas fa-cloud-upload-alt"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(UploadButton);
