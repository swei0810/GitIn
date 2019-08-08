
import React from "react";
import { connect } from 'react-redux'; 
import { fetchUser }  from '../../actions/user_actions';
import Dashboard from './dashboard'; 
import { fetchAllPosts } from '../../actions/post_action';

const mapStateToProps = (state, ownProps) => {    
    const posts = state.entities.posts;
    const users = state.entities.users; 
    const user = state.entities.users[ownProps.match.params.userId];
    const currentUserId = state.session.id;
    return {
        users,
        user,
        currentUserId, 
        posts
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)), 
    fetchAllPosts: () => dispatch(fetchAllPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
