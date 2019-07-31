import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (

      <div className="login-form-container">
        <h2 className="login-header"> Make the most of your professional life </h2>

        <form onSubmit={this.handleSubmit} className="login-form-box">

          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Email <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password(6 or more characters) <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <p>You agree to the LinkedIn User Agreement,<br /> Privacy Policy, and Cookie Policy. </p>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <p>Already on LinkedIn ? {this.props.navLink} </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);