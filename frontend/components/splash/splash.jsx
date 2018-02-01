import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
//has a nav bar, Sign Up button, and text in the center.
//no need for state right? just links

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="splash">
        <div className="splash-nav">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}



export default Splash;
