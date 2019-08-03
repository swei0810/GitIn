import React from 'react'; 
import { withRouter } from 'react-router-dom'; 


class ExperienceItemForm extends React.Component { 
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



}

export default withRouter(ExperienceItemForm); 
