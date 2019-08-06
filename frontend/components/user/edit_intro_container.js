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
        // this.state = this.props.user; 
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
        // this.props.history.push(`/git/${this.state.user_id}`);
    } 

    render () {

        return (
            <div> 
                <div className='modal-header'>
                    <h2>{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>First name <br/>
                            <input
                                className='modal-input'
                                type='text'
                                value={this.props.user.first_name}
                                onChange={this.update('first_name')}/>
                    </label> 
                        <br/>
                        <br/>
                    <input className='modal-submit' type='submit' value='Save' /> 

                </form>
            </div> 

        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIntro)