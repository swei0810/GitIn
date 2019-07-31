import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Agree & Join',
    navLink: <Link to="/login">Log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
