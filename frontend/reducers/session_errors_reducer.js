import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    case CLEAR_SESSION_ERRORS:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
