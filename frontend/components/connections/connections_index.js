import React from "react";
import { connect } from 'react-redux'; 
import { fetchUserConnections } from '../../actions/connection_actions'; 
import { fetchUser } from '../../actions/user_actions'; 
import ConnectionsItem from './connections_item'; 
import ProfileNavbar from '../user/profile_nav';


//Connections is currently grabbing the connection of a currentUser, it should be grabbing all connections of the user for the profile you are in 

const mapStateToProps = state => {
    return {
        sent: state.entities.connections.sent, 
        received: state.entities.connections.received,
        users: state.entities.users,
        currentUserId: state.session.id
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUserConnections: () => dispatch(fetchUserConnections()), 
        fetchUser: (id) => dispatch(fetchUser(id)), 

    }
}
  

class ConnectionIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserConnections();
    }

    render() {
        let {sent} = this.props; 
        let {received} = this.props; 

        if (!sent || !received ){
            return null;
        }

        sent = Object.values(sent).filter(connection=>connection.status=='accepted'); 
        received = Object.values(received).filter(connection => connection.status == 'accepted'); 

      

        return (
            <div className='connection-container'> 
                <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId}/>

                <h2 className='connection-header'>Your connections</h2>

                <div className='connected-profiles'> 
                        {sent.map(user =>  <ConnectionsItem key={user.id} userId={user.requestee_id}/>)}
                        {received.map(user =>  <ConnectionsItem key={user.id} userId={user.requester_id}/>)}
                </div>
            </div>


        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectionIndex);