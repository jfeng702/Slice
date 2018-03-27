import React from 'react';

class TagIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTags(this.props.photo.id);
  }


  render() {
    console.warn(this.props, 'props');
    return (
      <div>
        {
          this.props.tags.map((tag,id) => (
            <h1 key={id}>
              {tag.body}
            </h1>
          ))
        }
      </div>
    );
  }
}

export default TagIndex;
