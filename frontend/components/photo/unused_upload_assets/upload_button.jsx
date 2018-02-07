var React = require('react');
var PropTypes = require('prop-types');

var UploadButton = React.createClass({
  upload: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          //upload successful
          this.props.postImage(images[0].url);
        }
    }.bind(this));
  },

  render: function() {
    return (
      <div className="upload">
        <button onClick={this.upload}>Upload Image</button>
      </div>
    );
  }

});

module.exports = UploadButton;
