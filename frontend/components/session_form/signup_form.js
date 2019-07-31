import React from 'react';
import { withRouter } from 'react-router-dom';

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

  //sign up errors 
  //Password must be 6 characters or more 
  //Please enter a valid email address 

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


 //will be onSubmit callback to the form 
  validateSubmit(e) {
    e.preventDefault();
    if (this.state.email === "" && this.state.password === "") {
      this.props.receiveErrors('Please enter a valid email address');
    } else if (!emailIsValid(this.state.email)) {
      this.props.receiveErrors('Please enter a valid email address')
    } else if (this.state.password.length < 6) {
      this.props.receiveErrors('Password must be 6 characters or more')
    } else {
      this.handleSubmit();
    }
  }
  handleSubmit() {
    const user ={email: this.state.email, password: this.state.password};
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }


  render() {
    return (

      <div className="login-form-container">
        <h2 className="login-header"> Make the most of your professional life </h2>

        <form onSubmit={this.validateSubmit} className="signup-form-box">
          <div className='signup-errors'>
            {this.props.errors}
          </div> 
          <div className="login-form">
            <br />
            <label>Email <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Password(6 or more characters) <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br />
            <p>You agree to the GitIn User Agreement, Privacy Policy, <br />and Cookie Policy. </p>
            <input className="session-submit" type="submit" value={this.props.formType}/>
            <p>Already on GitIn ? {this.props.navLink} </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);