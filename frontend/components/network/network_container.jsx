import React from 'react'; 
import { connect } from 'react-redux'; 
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import {fetchConnection} from '../../actions/connection_actions';

import Network from './network';


const mapStateToProps = state => {
    const currentUserId = state.session.id;
    debugger
    
    return {
        users: Object.values(state.entities.users),
        currentUserId, 
        sent: Object.values(state.entities.connections.sent), 
        received: Object.values(state.entities.connections.received),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()), 
        fetchUser: (id) => dispatch(fetchUser(id)), 
        fetchConnection: () => dispatch(fetchConnection())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Network)