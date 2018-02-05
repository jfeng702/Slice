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
      {/*
      <Link to="/" className="header-link">
        <h1>Slice</h1>
      </Link>*/}
      <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={Splash} />
      <AuthRoute exact path="/signup" component={Splash} />
      <Route exact path="/photos/:photoId" component={PhotoShowContainer}/>
      <AuthRoute path="/" component={Splash} />
    </Switch>
      <ProtectedRoute exact path="/homepage" component={ PhotoIndexContainer } />
  </div>
);

export default App;
