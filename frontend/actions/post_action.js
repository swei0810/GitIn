import * as APIUtil from '../util/post_api_utl';


export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST'; 

export const receiveAllPosts = (posts)  => ({
    type: RECEIVE_ALL_POSTS, 
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST, 
    post
})

export const fetchAllPosts = () => dispatch => (
    APIUtil.fetchAllPosts().then(posts => dispatch(receiveAllPosts(posts)))
)

export const fetchPost = (id) => dispatch => (
    APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
)

