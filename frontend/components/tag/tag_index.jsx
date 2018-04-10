import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/tags/${tag.body}`}>
              {tag.body}
            </Link>
          ))
        }
      </div>
    );
  }
}

export default TagIndex;
