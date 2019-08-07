
import React from "react";
import { connect } from 'react-redux'; 
import { fetchUser }  from '../../actions/user_actions';
import Profile from './profile'; 

const mapStateToProps = (state, ownProps) => {    
    const users = state.entities.users 
    const user = state.entities.users[ownProps.match.params.userId];
    const currentUserId = state.session.id;
    return {
        users,
        user,
        currentUserId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
