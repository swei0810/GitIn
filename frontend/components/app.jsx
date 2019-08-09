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
import DashBoard from './feed/dashboard_container';
import Modal from './modal/modal';
import Network from './network/network_container';
import Company from './companies/company_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (

  <div className = 'splash'>
       <Modal/>

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
      <Route exact path='/git/:userId' component={Profile} />
      <ProtectedRoute exact path='/feed' component={DashBoard} />
      <ProtectedRoute exact path='/network' component={Network} />
      <Route exact path='/git/:userId' component={Profile} />
      <Route exact path='/companies' component={Company} />

      



    </Switch>
  </div>
);

export default App;
