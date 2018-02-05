import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // debugger;
  // This slices "login" from "/login"
  // const formType = location.pathname.slice(1);
  const processForm = ownProps.location.pathname === '/login' ? login : signup;

  return {
    // this replaces processForm with login or signup actions.
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sessionForm));
