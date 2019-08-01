import React, { Component } from 'react';

class Error extends Component {
  constructor() {
    super();
    
    this.state = {
      showError: false,
    };
    
    this.showError = this.showError.bind(this);
    this.closeError = this.closeError.bind(this);
  }
  
  showError(event) {
    event.preventDefault();
    
    this.setState({ showError: true }, () => {
      document.addEventListener('click', this.closeError);
    });
  }
  
  closeError() {
    this.setState({ showError: false }, () => {
      document.removeEventListener('click', this.closeError);
    });
  }

  render() {
    return (
      <div>
        
        {
          this.state.showError
            ? (
                <button onClick={this.showError}>
                Show menusdsdsdsdsd
                 </button>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Error; 