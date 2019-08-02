import React from 'react'; 
import { withRouter } from 'react-router-dom'; 


class ExperienceItemForm extends React.component { 
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.experienceItem; 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    //renderErrors

    handleSubmit(e) {
        e.preventDeafult(); 
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    //have to change the type for dates 

    render () {
        return (
            <div> 
                <h2>{this.props.formType}</h2> 
                <form onSubmit={this.handleSubmit}> 
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <label>Title
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}/>
                    </label> 
                    <br/>
                    <label>Location
                        <input
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}/>
                    </label> 
                    <br/>
                    <label>Description
                        <input
                            type='text'
                            value={this.state.description}
                            onChange={this.update('description')}/>
                    </label> 
                    <br/>
                    <input type='submit' value={this.props.formType} /> 
                </form>


            </div>
        )
    }


    //open modal, go back to modal.jsx



    // return (
    //     <div className="login-form-container">
    //       <form onSubmit={this.handleSubmit} className="login-form-box">
    //         Welcome to BenchBnB!
    //         <br/>
    //         Please {this.props.formType} or {this.props.otherForm}
    //         <div onClick={this.props.closeModal} className="close-x">X</div>
    //         {this.renderErrors()}
    //         <div className="login-form">
    //           <br/>
    //           <label>Username:
    //             <input type="text"
    //               value={this.state.username}
    //               onChange={this.update('username')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <label>Password:
    //             <input type="password"
    //               value={this.state.password}
    //               onChange={this.update('password')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <input className="session-submit" type="submit" value={this.props.formType} />
    //         </div>
    //       </form>
    //     </div>
    //   );



}

export default withRouter(ExperienceItemForm); 