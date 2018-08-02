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
    // this.setState({
    //   width: this.buttonRef.getBoundingClientRect().width
    // });
  }

  buttonHandler(e) {
    // setTimeout(() => (e.target.style.width = `${width * 2}px`), 200);
    //
    // const width = e.target.getBoundingClientRect().width;
    // var elementTransition = e.target.style.transition;
    // e.target.style.transition = '';
    // requestAnimationFrame(function() {
    //   e.target.style.width = width + 'px';
    //   e.target.style.transition = elementTransition;
    // });
    // e.target.style.width = `${width}px`;
    // e.target.style.width = `${width * 2}px`;
    // console.log(e.target.style.width);

  }

  getWidth() {
    const buttons = document.querySelectorAll('.tag-btn');
    for (let btn of buttons) {
      btn.style.width = btn.getBoundingClientRect().width;
    }
  }

  render() {
    // this.getWidth();
    return (
      <div className="tag-index-wrapper">
        {this.props.tags.map((tag, id) => (
          <div key={id}>
            <Link className="tag-index-link" to={`/tags/${tag.body}/photos`}>
              <button
                className="tag-btn"
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
