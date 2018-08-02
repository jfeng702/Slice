import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoShowContainer from './photo/photo_show_container';
import AlbumIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';
import TagPhotoIndexContainer from './tag/tag_photo_index_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer/>
    </header>
    <Switch>
      <Route path="/albums/:id" component={AlbumShowContainer} />
      <Route path="/albums" component={AlbumIndexContainer} />
      <Route path="/photos/:photoId" component={PhotoShowContainer}/>
      <ProtectedRoute path="/home" component={ PhotoIndexContainer } />
      <Route path="/tags/:tagBody/photos" component={ TagPhotoIndexContainer } />
      <AuthRoute path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
