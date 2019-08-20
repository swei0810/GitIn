import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions'; 

//have to fetch the user? or mapStateToProps check what's in there 
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.comment.user_id]
    }
}


const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)), 
    fetchUser: (id) => dispatch(fetchUser(id))
})

class CommentItem extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.comment.user_id)
    }
    render() {
        const {comment} = this.props; 
        const {user} = this.props;

        if (!comment || !user) {
            return null; 
        }
        //grad default photo if photo does not exist for user 

        let profilePhoto = '';
        if (user.photoUrl) {
            profilePhoto = (<img className='comment-user-photo' src={user.photoUrl}/>);
        }else {
            profilePhoto = (<img className='comment-user-photo' src={window.default_prof}/>);
        }

        return (
            <div className='comment-container'>
                {profilePhoto}
                <div> 
                    <div className='tail'></div>

                    <div className='comment-bubble'>
                        <div className='comment-user-name'>{user.first_name}&nbsp;{user.last_name}</div>
                        <div className='comment-user-title'>{user.headline}</div>
                        <div>{comment.body}</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);