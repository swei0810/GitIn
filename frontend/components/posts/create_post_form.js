import React from 'react'; 
import { connect } from 'react-redux'; 
import { createPost } from '../../actions/post_action';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const post = {body: ''};
    const user = ownProps.user;
    return {
        post, 
        user,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createPost: post => dispatch(createPost(post))
    }
}

class createPostForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.post; 
        // this.validateSubmit = this.validateSubmit.bind(this); 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createPost(this.state).then(()=> this.props.closeModal());

    } 


    render() {
        return (
            <div>
                 <div onClick={this.props.closeModal} className="close-x">X</div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        className = 'create-post-form'
                        type='text'
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder='What do you want to talk about?'/>
                    <input className='post-modal-submit' type='submit' value='Post' /> 
                </form>
            </div>
        )
    }





}

export default connect(mapStateToProps, mapDispatchToProps)(createPostForm);