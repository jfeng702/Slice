import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Slice</h1>, root);
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
