import React from 'react';
import { withRouter, Link } from 'react-router-dom';

//flow of rendering error 
//email as @
//password long enough 
//email real
//password matches 


function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors(); 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  validateSubmit(e) {
    e.preventDefault();
    if (this.state.email === "" && this.state.password === "") {
      this.props.receiveErrors('Please enter a valid email address');
    } else if (!emailIsValid(this.state.email)){
      this.props.receiveErrors('Please enter a valid email address')
    }else if (this.state.password.length < 6) {
      this.props.receiveErrors('The password you provided have at least 6 characters')
    } else {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const user = { email: this.state.email, password: this.state.password };
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  render() {
    let emailError = '';
    let passwordError = ''; 
    let errorStyleEmail = '';
    let errorStylePassword = '';

    if (this.props.errors){
      if (this.props.errors.includes('email')) {
        emailError = this.props.errors;
        errorStyleEmail = 'error-border';
      } else if (this.props.errors.includes('password')) {
        passwordError = this.props.errors;
        errorStylePassword = 'error-border';
      }
    }



    return (
      
      <div className="login-form-container">
        <div>
          <Link to='/'><div className='logo'><img className='logo-login' src={window.logo} /></div></Link> 
          <h2 className="login-header"> Welcome Back </h2>
          <p>Don't miss your next opportunity. Sign in to stay updated on your professional world. </p> 
          
        </div> 
      


        <form onSubmit={this.validateSubmit} className="login-form-box">

          <div className="login-form">
            <br />
            <label>
              <input type="text"
                value={this.state.email}
                placeholder='Email'
                onChange={this.update('email')}
                className={`login-input ${errorStyleEmail}`} 
              />
            </label>
            <p className='login-errors'>{emailError}</p>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update('password')}
                className={`login-input ${errorStylePassword}`} 
              />
            </label>
            <p className='login-errors'>{passwordError}</p>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <p>New to GitIn ? {this.props.navLink} </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);