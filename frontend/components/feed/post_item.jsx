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

        let authorName;
        if (post.author_type == 'Company') {
            debugger
            authorName=post.author.name;
        }else if (post.author_type =='User'){
            authorName = post.author.first_name + ' '+ post.author.last_name
        }

        return (
            <div> 

                <div className='post-container'>
                    <div className='post-author'>
                        {authorName}
                        <img className='author-photo' src={post.author.photoUrl}/> 

                    </div>
                    <p className='post-body'>
                        {post.body}
                    </p>
                    {/* <div>  */}
                        <img className='post-photo' src={post.photoUrl}/> 
                    {/* </div> */}

                    <div className='post-buttons'>

                    </div>
                </div>   
                <br/>
                <br/>   
            </div>      
        )
    }
}

export default connect(null, mapDispatchToProps)(PostItem);