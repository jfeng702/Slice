import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';
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

  componentDidMount(){
    ReactModal.setAppElement('#root');
    const { removeErrors } = this.props;
    removeErrors();
  }

  componentWillReceiveProps(newProps) {
    // console log state here to check
    console.log(newProps.location.pathname);
  }

  componentWillUnmount() {
    console.log('unmounted');
    this.setState( { showModal: false });
  }

  handleOpenModal () {
    return () =>  this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="splash">
        <div className="splash-nav">
          {/*<img src='https://i.imgur.com/T1xSEOK.png'></img>*/}
          <Link to="/">
            <h2 className="splash-logo">slice</h2>
          </Link>
          <Link to="login">
            <button onClick={this.handleOpenModal('login')}>Log In</button>
          </Link>
          &nbsp;
          <Link to="signup">
            <button onClick={this.handleOpenModal('signup')}>Sign Up</button>
          </Link>
        </div>

        <ReactModal
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay">
            <SessionFormContainer/>
        </ReactModal>

        <div className="splash-title">
          <h1>Capture moments in life, one slice at a time</h1>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     removeErrors: () => dispatch(clearErrors())
   };
};

export default connect(null, mapDispatchToProps)(Splash);
