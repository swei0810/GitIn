import React from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../../actions/post_action';

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id))
})

class PostItem extends React.Component {
    render() {
        const {post} = this.props; 

        if (!post) {
            return null; 
        }

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
                    <div className='num-comments'> 10 comments </div>
                    {/* HARDCODED NUM COMMENTS */}
                    {/* <br/> */}
                    <div className='post-buttons'>
                        <div className='post-like' onClick={e => alert("not implemented yet")}><i className="far fa-thumbs-up"></i>Like &nbsp; &nbsp; </div>
                        <div className='post-comment' onClick={e => alert("not implemented yet")}><i className="far fa-comment-alt"></i> Comment &nbsp;</div>

                    </div>
                </div>   
                <br/>
                <br/>   
            </div>      
        )
    }
}

export default connect(null, mapDispatchToProps)(PostItem);