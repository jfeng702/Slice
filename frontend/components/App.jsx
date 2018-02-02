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
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      {/*
      <Link to="/" className="header-link">
        <h1>Slice</h1>
      </Link>
      <GreetingContainer/> */}
    </header>
    <Switch>
      {/*<AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />*/}
      <AuthRoute exact path="/" component={SplashContainer} />

    </Switch>
  </div>
);

export default App;
