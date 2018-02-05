import React from 'react';


class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.fetchPhoto(nextProps.match.params.photoId);
  }

  render() {
    const photo = this.props.photo;
    if (!photo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img src={`${photo.img_url}`}/>
      </div>
    );
  }
}
export default PhotoShow;
