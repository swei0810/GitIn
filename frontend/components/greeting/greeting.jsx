import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup">
      <Link to="/signup"><button className='signup-button'>Join now</button></Link>
      &nbsp;  &nbsp;
      <Link to="/login"><button className='signin-button'>Sign in</button></Link>
      {/* &nbsp;  &nbsp;
      <Link to="/"><button className='demo-login'>Demo User</button></Link> */}

    </div>
    
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {currentUser.email}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  return sessionLinks();
  // return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
