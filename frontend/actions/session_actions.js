import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};
export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};
export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};
