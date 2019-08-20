import React from 'react'; 
import {connect} from 'react-redux'; 
import {createComment} from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
    const comment = {body:'', post_id: ownProps.postId  }; 
    return {
        comment, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}


class createCommentForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.comment 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        };
    }


    handleInput(e) {
        this.setState({body: e.currentTarget.value});
    }
 
    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createComment(this.state);
    }


    render() {
        return (
            <div>
                <div className='create-comment-form'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className='comment-input' 
                                type='text'
                                value={this.state.body}
                                onChange={this.handleInput.bind(this)}
                                placeholder="Add a comment ..."/>
                        <input className='comment-submit' type='submit'/>
                    </form>
                </div>

            </div>
        )
    }



}


export default connect(mapStateToProps, mapDispatchToProps)(createCommentForm)