import React from 'react'; 
import { connect } from 'react-redux'; 
import { createPost } from '../../actions/post_action';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const post = {body: ''};
    // state.users is current user 
    const user = state.entities.users; 
    //ownProps.user is undefined 
    // const user = ownProps.user;
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
        //createPost should also take a authorId, type  

    } 


    render() {
        return (
            <div>
                <div className='create-post-header'>
                    <div onClick={this.props.closeModal} className="close-post-x">X</div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input className='post-input'
                        className = 'create-post-form'
                        type='text'
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder='What do you want to talk about?'/>
                    <br/>
                    <br/>

                    <div className='create-post-bottom'>
                        <div className='post-form-icons'> 
                            <div className='icon-post-form'><i className="fas fa-camera"></i></div>
                            <div className='icon-post-form'><i className="fas fa-video"></i></div>
                            <div className='icon-post-form'><i className="fas fa-file-alt"></i></div>
                        </div>
                 
                    <input className='post-modal-submit' type='submit' value='Post' /> 
                    </div> 

                </form>
            </div>
        )
    }





}

export default connect(mapStateToProps, mapDispatchToProps)(createPostForm);