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

  componentDidMount(){
    ReactModal.setAppElement('#root');
  }

  componentWillReceiveProps(newProps) {
    // console log state here to check
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState( { showModal: true, type: newProps.location.pathname.slice(1)});
    }
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
          {/*<img src='https://i.imgur.com/T1xSEOK.png'></img>*/}
          <h2 className="splash-logo">slice</h2>
          <button onClick={this.handleOpenModal('login')}>Log In</button>
          &nbsp;
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

        <div className="splash-title">
          <h1>Capture moments in life, one slice at a time.</h1>

        </div>
      </div>

    );
  }
}



export default Splash;