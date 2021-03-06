import React from 'react'; 
import { connect } from 'react-redux'; 
import { updateUser } from '../../actions/user_actions'
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const user = ownProps.user;
    const formType = 'Edit about'; 
    return {user, formType};
}; 


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        updateUser: user => dispatch(updateUser(user))

    };
}


class EditSummary extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.user; 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.updateUser(this.state);
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
                    <label> Summary <br/> <br/> 
                        <textarea 
                                    rows="8" cols="99"
                                    value={this.state.summary}
                                    onChange={this.update('summary')}
                                />
                    </label> 
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

export default connect(mapStateToProps, mapDispatchToProps)(EditSummary)