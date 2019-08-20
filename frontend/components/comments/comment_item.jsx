import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteComment } from '../../actions/comment_actions';


const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

class CommentItem extends React.Component {
    render() {
        const {comment} = this.props; 
        if (!comment) {
            return null; 
        }

        return (
            <div>
                 {comment.body}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentItem);