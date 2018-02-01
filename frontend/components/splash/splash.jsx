import React from 'react';
import { Link } from 'react-router-dom';
//has a nav bar, Sign Up button, and text in the center.
//no need for state right? just links

const Splash = () => (
  <div className="splash">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
);

export default Splash;
