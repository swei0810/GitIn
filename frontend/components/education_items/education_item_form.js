import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

class EducationItemForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.educationItem; 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDeafult(); 
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    render () {
        return (
            <div> 
                <h2>{this.props.formType}</h2> 
                <form onSubmit={this.handleSubmit}> 
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <label>School
                        <input
                            type='text'
                            value={this.state.school}
                            onChange={this.update('school')}/>
                    </label> 
                    <br/>
                    <label>Degree
                        <input
                            type='text'
                            value={this.state.degree}
                            onChange={this.update('degree')}/>
                    </label> 
                    <br/>
                    <label>Field of Study 
                        <input
                            type='text'
                            value={this.state.field}
                            onChange={this.update('field')}/>
                    </label> 
                    <br/>
                    <label>Activities
                        <input
                            type='text'
                            value={this.state.activities}
                            onChange={this.update('activities')}/>
                    </label> 
                    {/* add start_yr and end_yr */}
                    <input type='submit' value={this.props.formType} /> 
                </form>


            </div>
        )

    }

}

export default withRouter(EducationItemForm); 