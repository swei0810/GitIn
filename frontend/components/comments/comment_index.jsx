import React from 'react'; 
import CommentItem from './comment_item';
import { connect } from 'react-redux'; 


const mapStateToProps = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments)
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllComments: () => dispatch(fetchAllComments())
//     }
// }

class CommentIndex extends React.Component {
    // componentDidMount() {
    //     this.props.fetchAllComments();
    // }

    render() {

        
        const {comments} = this.props; 
        const postComments = comments.filter(comment => comment.post_id === this.props.postId)
 

        return (
            <div> 
                {/* <ul className='all-posts'> */}
                    {postComments.reverse().map(comment => <CommentItem key={comment.id} comment={comment}/>)}
                {/* </ul> */}
            </div>
        )

    }
}

export default connect(mapStateToProps, null)(CommentIndex)