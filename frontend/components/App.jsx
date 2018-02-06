import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoShowContainer from './photo/photo_show_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer/>
    </header>
    <Switch>
      <Route path="/photos/:photoId" component={PhotoShowContainer}/>
      <ProtectedRoute path="/home" component={ PhotoIndexContainer } />
      <AuthRoute path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
