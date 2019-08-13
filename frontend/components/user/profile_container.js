
import React from "react";
import { connect } from 'react-redux'; 
import { fetchUser }  from '../../actions/user_actions';
import {receiveConnection} from '../../actions/connection_actions';
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
    fetchUser: (id) => dispatch(fetchUser(id)), 
    // receiveConnection: (connection) => dispatch(receiveConnection(connection))
    
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
