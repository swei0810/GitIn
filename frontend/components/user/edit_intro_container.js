import React from 'react'; 
import { connect } from 'react-redux'; 
import { updateUser } from '../../actions/user_actions'
import {receiveProfileErrors, clearProfileErrors} from '../../actions/user_actions';

import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const user = ownProps.user;
    const formType = 'Edit intro'; 
    return {user, formType,  errors: state.errors.profile,};
}; 


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        updateUser: user => dispatch(updateUser(user)), 
        receiveProfileErrors: (error) => dispatch(receiveProfileErrors(error)), 
        clearProfileErrors: () => dispatch(clearProfileErrors())
    };
}


class EditIntro extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.user; 
        this.validateSubmit = this.validateSubmit.bind(this); 
    }

    componentWillUnmount() {
        this.props.clearProfileErrors(); 
      }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit() {
        // e.preventDefault(); 
        this.props.updateUser(this.state).then(()=> this.props.closeModal());

    } 

    validateSubmit(e) {

        e.preventDefault();
        let newErrors; 

        if (this.state.first_name == ''){
            this.props.receiveProfileErrors('first');
            newErrors = true; 

        }
        if (this.state.last_name == '') {
            this.props.receiveProfileErrors('last');
            newErrors = true; 

        }
        if (this.state.headline == '') {
            this.props.receiveProfileErrors('headline');
            newErrors = true; 

        }
        if (this.state.location == '') {
            this.props.receiveProfileErrors('location');
            newErrors = true; 

        }

 

        if (!newErrors){
            this.handleSubmit(); 
        } 
    
    }








    render () {
        let firstNameError; 
        let lastNameError;
        let headlineError; 
        let locationError; 
        if (this.props.errors) {
            if (this.props.errors.includes('first')){
                firstNameError = 'Please enter your first name';
            }
            if (this.props.errors.includes('last')){
                lastNameError = 'Please enter your last name';
            }
            if (this.props.errors.includes('headline')){
                headlineError = 'Please enter a headline';

            }
            if (this.props.errors.includes('location')){
                locationError = 'Please enter a location';
            }
        }





        return (
            <div> 
                <div className='modal-header'>
                    <h2>{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>

                <form onSubmit={this.validateSubmit}>
                    <div className='modal-name'> 
                         <div className='modal-first-name'> 
                        <label>First name * <br/>
                                <input 
                                    className='modal-input-name'
                                    type='text'
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}/>
                        </label> 
                        <div className='education-errors'> {firstNameError} </div>

                

                        </div>
                            <br/>
                            <br/>

                        <div className='modal-last-name'> 
 
                        <label>Last name * <br/>
                                <input className='modal-input-name'
                                    type='text'
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}/>
                        </label> 
                        <div className='education-errors'> {lastNameError} </div>

                        </div>
                    </div> 
                    <br/>
                    <br/>

                    <label>Headline * <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.state.headline}
                                onChange={this.update('headline')}/>
                    </label> 
                    <div className='education-errors'> {headlineError} </div>

                        <br/>
                        <br/>

                    <label>Location * <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.state.location}
                                onChange={this.update('location')}/>
                    </label> 
                    <div className='education-errors'> {locationError} </div>

                        <br/>
                        <br/>

                    <label>Github Url <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.state.github_url}
                                onChange={this.update('github_url')}/>
                    </label> 
                        <br/>
                        <br/>
                    <input className='modal-submit' type='submit' value='Save' /> 
                    <br/> 
                    <br/> 
                    <br/> 

                </form>
            </div> 

        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIntro)