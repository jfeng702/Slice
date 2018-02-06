
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <img src='https://i.imgur.com/T1xSEOK.png'></img>
    <Link to="/login">Login</Link>
    {<br></br>}
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <Link to="/">
      <h2 className="header-logo">slice</h2>
    </Link>
    <h2 className="header-name">Welcome, {currentUser.username}!</h2>
    <Link to="/">
      <button className="header-button" onClick={logout}>Log Out</button>
    </Link>
  </hgroup>
);

// const Greeting = ({currentUser, logout}) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

const Greeting = ({currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);


export default Greeting;
