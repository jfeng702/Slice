import React from 'react';

class TagIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTags(this.props.photo.id);
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    console.warn(this.state, 'state');
    console.warn(this.props, 'props');
    return (
      <div>

      </div>
    );
  }
}

export default TagIndex;
