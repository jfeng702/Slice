import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import PhotoIndexContainer from './photo/photo_index_container';

import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;
