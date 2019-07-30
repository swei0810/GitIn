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
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className = 'splash'>
    <header>
      <Link to="/" className="header-link">
        <h1>GitIn</h1>
      </Link>
      <p> Welcome to your professional community
        <img className='splash-img' src="https://static-exp2.licdn.com/sc/h/d80ave0ov78t6vlt7maud1pwd" alt="" align='right'/>
      </p>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
