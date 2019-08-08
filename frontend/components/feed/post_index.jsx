import React from 'react'; 
import PostItem from './post_item'; 
import { connect } from 'react-redux'; 
import { fetchAllPosts } from '../../actions/post_action';


const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(ownProps.posts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts())
    }
}

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        
        const {posts} = this.props; 
        if (!posts){
            return null;
        }


        return (
            <div> 
                {/* <ul className='all-posts'> */}
                    {posts.reverse().map(post => <PostItem key={post.id} post={post}/>)}
                {/* </ul> */}
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)