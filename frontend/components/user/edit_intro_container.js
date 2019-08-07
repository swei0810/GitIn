import React from 'react'; 
import { connect } from 'react-redux'; 
import { updateUser } from '../../actions/user_actions'
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const user = ownProps.user;
    const formType = 'Edit intro'; 
    return {user, formType};
}; 


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        updateUser: id => dispatch(updateUser(id))

    };
}


class EditIntro extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.updateUser(this.state.id);
        this.props.closeModal();
    } 

    render () {

        return (
            <div> 
                <div className='modal-header'>
                    <h2>{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className='modal-name'> 
                         <div className='modal-first-name'> 
                        <label>First name <br/>
                                <input className='modal-input-name'
                                    type='text'
                                    value={this.props.user.first_name}
                                    onChange={this.update('first_name')}/>
                        </label> 
                            <br/>
                            <br/>
                        </div>

                        <div className='modal-last-name'> 
 
                        <label>Last name <br/>
                                <input className='modal-input-name'
                                    type='text'
                                    value={this.props.user.last_name}
                                    onChange={this.update('last_name')}/>
                        </label> 
                            <br/>
                            <br/>

                        </div>
                    </div> 

                    <label>Headline <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.props.user.headline}
                                onChange={this.update('headline')}/>
                    </label> 
                        <br/>
                        <br/>

                    <label>Location <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.props.user.location}
                                onChange={this.update('location')}/>
                    </label> 
                        <br/>
                        <br/>

                    <label>Github Url <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.props.user.github_url}
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