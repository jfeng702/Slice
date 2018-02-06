import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { createPhoto } from '../../actions/photo_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => {
  // console.log(session.currentUser);
  return {
  currentUser: session.currentUser
};
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
