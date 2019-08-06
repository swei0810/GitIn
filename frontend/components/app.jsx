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
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash';
import Profile from './user/profile_container'; 
// import PostContainer from './feed/post_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className = 'splash'>
    <header>
        {/* <Link to="/" className="header-link"> */}
          {/* <h1 className="header-link">GitIn</h1> */}
          <div>
          {/* <img className='logo' src={logo} alt=""/> */}

          </div>
          

        {/* </Link> */}
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      {/* <Route path="/users/:userId" component={Profile}/> */}
      <Route exact path='/git/:userId' component={Profile} />
      {/* <Route exact path='/feed' component={PostContainer} /> */}



    </Switch>
  </div>
);

export default App;
