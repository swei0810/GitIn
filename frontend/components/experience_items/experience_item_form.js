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
                <div className='modal-header'> 
                    <h2>{this.props.formType}</h2> 
                    <div onClick={this.props.closeModal} className="close-x"> X </div>
                </div> 

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
                    <br/>

                    <label>Company <br/>
                        <input
                            className='modal-input'
                            type='text'
                            // value={this.state.company}
                            // onChange={this.update('company')}
                            placeholder='Ex: Microsoft'/>
                    </label> 
                    <br/>
                    <br/>
                    <label>Location <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}
                            placeholder='Ex: London, United Kingdom'/>
                    </label> 
                    <br/>
                    <br/>
                    <label>Headline <br/>
                        <input
                            className='modal-input'
                            type='text'
                            // value={this.state.location}
                            // onChange={this.update('location')}
                         />
                    </label> 
                    <br/>
                    <br/>
                    <label>Description <br/>
                        <textarea 
                            rows="4" cols="99"
                            onChange={this.update('description')}
                        >{this.state.description}</textarea>
                        {/* <input
                            className='modal-input-description'

                            type='text'
                            value={this.state.description}
                            onChange={this.update('description')}/> */}
                    </label> 
                    <br/>
                    <br/>

                    <input className='modal-submit' type='submit' value='Save' /> 
                </form>


            </div>
        )
    }



}

export default withRouter(ExperienceItemForm); 
