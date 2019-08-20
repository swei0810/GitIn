import React from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../../actions/post_action';
import {fetchAllComments} from '../../actions/comment_actions';
import CommentIndex from '../comments/comment_index';
import CreateCommentForm from '../comments/create_comment_form'; 

const mapStateToProps = (state, ownProps) => {
    const comments = Object.values(state.entities.comments)
    //grab state.entities.comments

    return {
        comments: comments.filter(comment => comment.post_id === ownProps.post.id)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    // fetchAllComments: () => dispatch(fetchAllComments())
})

class PostItem extends React.Component {
    // componentDidMount() {
    //     this.props.fetchAllComments();
    // }

    // constructor(props){
    //     super(props); 
    //     const postComments = this.state.comments.filter(comment => comment.post_id === this.props.post.id);
    // }

    render() {
        const {post} = this.props; 
        if (!post) {
            return null; 
        }

        debugger
   

        let postPhoto=''; 
        if (post.photoUrl){
            postPhoto = (<img className='post-photo' src={post.photoUrl}/>);
        }

        let authorName;
        let photoClass;
        let authorTitle;
        if (post.author_type == 'Company') {
            authorName = <div className='author-name'>{post.author.name}</div>;
            photoClass='company-photo'
        }else if (post.author_type =='User'){
            authorName = <div className='author-name'>{post.author.first_name + ' '+ post.author.last_name}</div>;
            photoClass='user-photo'
            authorTitle = <div className='author-title'>{post.author.headline}</div>

        }

        let authorPhoto = '';
        if (this.props.post.authorPhotoUrl) {
            authorPhoto = (<img className={photoClass} src={post.authorPhotoUrl}/>);
        }else {
            authorPhoto = (<img className={photoClass} src={window.default_prof}/>);
        }


        let numComments = ''; 
        const length = this.props.comments.length; 
        if (length === 0 ) {
            numComments = 'Be the first to comment on this'
        } else if (length === 1) {
            numComments = '1 comment'
        } else {
            numComments = length + ' comments'
        }
        
     
    
        return (
            <div> 

                <div className='post-container'>
                    <div className='post-extra'>
                        <div className='post-more'><i className="fas fa-angle-double-down" onClick={e => alert("not implemented yet")}></i></div>
                    </div>
                    <div className='post-author'>
                        {/* <img className={photoClass} src={post.authorPhotoUrl}/>  */}
                        {authorPhoto}


                        <div className='post-author-info'>
                            {authorName}
                            {authorTitle}
                        </div>

                    </div>

                    <p className='post-body'>
                        {post.body}
                    </p>
                    {/* <div>  */}
                        {/* <img className='post-photo' src={post.photoUrl}/>  */}
                        {postPhoto}
                    {/* </div> */}
                    <div className='num-comments'> {numComments} </div>
                    <div className='post-buttons'>
                        <div className='post-like' onClick={e => alert("not implemented yet")}><i className="far fa-thumbs-up"></i>Like &nbsp; &nbsp; </div>
                        {/* <div className='post-comment' onClick={()=> alert("not implemented yet")}><i className="far fa-comment-alt"></i> Comment &nbsp;</div> */}
                        <div className='post-comment' onClick={()=>$('.comment-index').toggle()}><i className="far fa-comment-alt"></i> Comment &nbsp;</div>

                    </div>
                    <div className='comment-index'>
                            <CreateCommentForm postId={this.props.post.id} currentUserId={currentUser.id} />
                            <br/>
                            <CommentIndex comments={this.props.comments} postId={this.props.post.id}/>
                    </div>
                    
                </div>   
                <br/>
                <br/>   
            </div>      
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);