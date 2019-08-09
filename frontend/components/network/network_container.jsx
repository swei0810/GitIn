import React from 'react'; 
import { connect } from 'react-redux'; 
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import Network from './network';


const mapStateToProps = state => {
    const currentUserId = state.session.id;

    return {
        users: Object.values(state.entities.users),
        currentUserId, 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()), 
        fetchUser: (id) => dispatch(fetchUser(id)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Network)