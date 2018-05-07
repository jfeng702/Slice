import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { updatePhoto, deletePhoto, fetchPhotos, fetchPhoto, createPhoto  } from './actions/photo_actions';
import { createComment, fetchComments, deleteComment } from './actions/comment_actions';
import { fetchUserAlbums, fetchAlbumPhotos, fetchAlbums, fetchAlbum, createAlbum, updateAlbum, deleteAlbum } from './actions/album_actions';
// import { createTag, fetchTags, deleteTag } from './actions/tag_actions';
import { fetchTagPhotos } from './actions/photo_actions';
import { receiveTagging, receiveTaggings, removeTagging, createTagging, fetchTaggings, deleteTagging, fetchAllTags } from './actions/tag_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  // console.log(window.currentUser);
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.receiveTagging = receiveTagging;
  window.receiveTaggings = receiveTaggings;
  window.createTagging = createTagging;
  window.fetchTaggings = fetchTaggings;
  window.deleteTagging = deleteTagging;
  window.fetchAllTags = fetchAllTags;
  window.fetchTagPhotos = fetchTagPhotos;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;


// TESTING END

  ReactDOM.render(<Root store={store}/>, root);

});
