
import React from "react";
import { connect } from 'react-redux'; 
import { fetchUser }  from '../../actions/user_actions';
import Profile from './profile'; 

const mapStateToProps = (state, ownProps) => {
    debugger 
    
    const user = state.entities.users[ownProps.match.params.userId];
    return {
        user
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
