import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  // debugger;
  // This slices "login" from "/login"
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    // this replaces processForm with login or signup actions.
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
