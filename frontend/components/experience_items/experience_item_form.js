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
                <div onClick={this.props.closeModal} className="close-x"> X </div>
                <form onSubmit={this.handleSubmit}> 
                    {/* <div onClick={this.props.closeModal} className="close-x"> X </div> */}
                    <label>Title <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder='Ex: Manager'/>

                    </label> 
                    <br/>
                    {/* <label>Company
                        <input
                            type='text'
                            value={this.state.company}
                            onChange={this.update('company')}
                            placeholder='Ex: Microsoft'/>
                    </label>  */}
                    <label>Location <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}
                            placeholder='Ex: London, United Kingdom'/>
                    </label> 
                    <br/>
                    <label>Description <br/>
                        <input
                            className='modal-input'

                            type='text'
                            value={this.state.description}
                            onChange={this.update('description')}/>
                    </label> 
                    <br/>
                    <input type='submit' value='Save' /> 
                </form>


            </div>
        )
    }



}

export default withRouter(ExperienceItemForm); 
