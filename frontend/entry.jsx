import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { } from './actions/photo_actions';
import { updatePhoto, deletePhoto, fetchPhotos, fetchPhoto, createPhoto  } from './actions/photo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  console.log(window.currentUser);
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchPhoto = fetchPhoto;
  window.fetchPhotos = fetchPhotos;
  window.updatePhoto = updatePhoto;
  window.deletePhoto = deletePhoto;
  window.createPhoto = createPhoto;


// TESTING END

  ReactDOM.render(<Root store={store}/>, root);

});
