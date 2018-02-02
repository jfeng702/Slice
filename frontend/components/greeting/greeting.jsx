
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <img src='https://www.graphicsprings.com/filestorage/stencils/93228689ce11d950ebe07a89b12ecfbe.svg'></img>
    <Link to="/login">Login</Link>
    {<br></br>}
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

// const Greeting = ({currentUser, logout}) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

const Greeting = ({currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);


export default Greeting;
