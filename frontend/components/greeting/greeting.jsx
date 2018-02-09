
import React from 'react';
import { Link } from 'react-router-dom';
import UploadButton from './upload_button';

const sessionLinks = () => (
  <nav className="login-signup">
    <img src='https://i.imgur.com/T1xSEOK.png'></img>
    <Link to="/login">Login</Link>
    {<br></br>}
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout, createPhoto) => {
    return <hgroup className="header-group">
      <UploadButton
        logout={logout}
        createPhoto={createPhoto}
        currentUser={currentUser} />

      <Link to="/">
        <h2 className="header-logo">slice</h2>
      </Link>
      <Link className="album-link" to="/albums">
        Albums
      </Link>
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <Link to="/">
        <button className="header-button" onClick={logout}>Log Out</button>
      </Link>
  </hgroup>;

};



// const Greeting = ({currentUser, logout}) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

const Greeting = ({currentUser, logout, createPhoto}) => (
  currentUser ? personalGreeting(currentUser, logout, createPhoto) : null
);


export default Greeting;
