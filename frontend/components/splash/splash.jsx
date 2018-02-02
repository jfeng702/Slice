import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
//has a nav bar, Sign Up button, and text in the center.
//no need for state right? just links

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      type: 'login'
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }



  handleOpenModal (type) {
    return () =>  this.setState({ showModal: true, type });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="splash">
        <div className="splash-nav">
          <button onClick={this.handleOpenModal('login')}>Log In</button>
          <button onClick={this.handleOpenModal('signup')}>Sign Up</button>
        </div>
        <ReactModal
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <SessionFormContainer formType={this.state.type}/>
          </ReactModal>
      </div>

    );
  }
}



export default Splash;
