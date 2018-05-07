import React from 'react';
import { Link } from 'react-router-dom';

class TagIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTaggings(this.props.photo.id);
  }


  render() {
    console.warn(this.props, 'props');
    // Tags link to a photo index of photos with that tag.
    return (
      <div>
        {
          this.props.tags.map((tag,id) => (
            <Link to={`/tags/${tag.body}/photos`}>
              {tag.body}
            </Link>
          ))
        }
      </div>
    );
  }
}

export default TagIndex;
