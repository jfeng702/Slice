import React from 'react';
import { Link } from 'react-router-dom';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.state = {
      width: null
    };
  }
  componentDidMount() {
    this.props.fetchTaggings(this.props.photo.id);
    debugger;
    this.setState({
      width: this.buttonRef.getBoundingClientRect().width
    });
  }

  buttonHandler(e) {
    const width = e.target.getBoundingClientRect().width;
    setTimeout(() => (e.target.style.width = `${width * 2}px`), 200);
    e.target.style.width = `${width}px`;
    // e.target.style.width = `${width * 2}px`;
    console.log(e.target.style.width);

  }

  getWidth() {
    const buttons = document.querySelectorAll('.tag-btn');
    for (let btn of buttons) {
      console.log(btn.getBoundingClientRect().width);
      btn.style.width = btn.getBoundingClientRect().width;
    }
    console.log(buttons);
  }

  render() {
    this.getWidth();
    console.warn(this.props, 'props');
    // Tags link to a photo index of photos with that tag.
    return (
      <div className="tag-index-wrapper">
        {this.props.tags.map((tag, id) => (
          <div>
            <Link className="tag-index-link" to={`/tags/${tag.body}/photos`}>
              <button
                className="tag-btn"
                style={{width: this.getWidth()}}
                onMouseEnter={this.buttonHandler}
                ref={this.buttonRef}
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
