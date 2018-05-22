import React from 'react';
import { Link } from 'react-router-dom';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    this.props.fetchTaggings(this.props.photo.id);
  }

  buttonHandler(e) {
    const width = e.target.getBoundingClientRect().width;
    console.log(width);
    console.log(e.target);
    e.target.style.width = `${width * 2}px`;
    console.log(e.target.style.width);
  }

  render() {
    console.warn(this.props, 'props');
    // Tags link to a photo index of photos with that tag.
    return (
      <div className="tag-index-wrapper">
        {this.props.tags.map((tag, id) => (
          <div>
            <Link className="tag-index-link" to={`/tags/${tag.body}/photos`}>
              <button
                className="tag-btn"
                onMouseEnter={this.buttonHandler}
              >
                {tag.body}
              </button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default TagIndex;
