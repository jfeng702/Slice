import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      owner_id: props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
    this.setState({
        img_url: ''
      });
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
        }
      }
    );
  }
  render() {
    return(
      <div>
        <form>
          <button onClick={(e) => this.uploadImage(e)}>Upload Photo</button>
          <img src={this.state.url}/>
          <button onClick={this.handleSubmit}>Post</button>
        </form>

      </div>
    );
  }
}

export default UploadButton;
