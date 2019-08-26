import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash';
import Profile from './user/profile_container'; 
import DashBoard from './feed/dashboard_container';
import Modal from './modal/modal';
import Network from './network/network_container';
import Company from './companies/company_index_container';
import Connection from './connections/connections_index'; 

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (

  <div className = 'splash'>
       <Modal/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Route exact path='/git/:userId' component={Profile} />
      <ProtectedRoute exact path='/feed' component={DashBoard} />
      <ProtectedRoute exact path='/mynetwork' component={Network} />
      <Route exact path='/git/:userId' component={Profile} />
      <ProtectedRoute exact path='/companies' component={Company} />
      <ProtectedRoute exact path='/git/:userId/connections' component={Connection} />

      



    </Switch>
  </div>
);

export default App;
