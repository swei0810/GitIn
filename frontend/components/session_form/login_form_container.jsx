import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  debugger
  // const userId = parseInt(match.params.userId);
  debugger
  return {
    // userId: userId, 
    errors: state.errors.session,
    formType: 'Sign in',
    navLink: <Link to="/signup">Join now</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error)), 
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);