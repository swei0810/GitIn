import React from "react";
import { connect } from 'react-redux'; 
import { fetchUserConnections } from '../../actions/connection_actions'; 
import { fetchUser } from '../../actions/user_actions'; 
import ConnectionsItem from './connections_item'; 
import ProfileNavbar from '../user/profile_nav';

//fetchUserConnection is actually just fetchAllConnections 

const mapStateToProps = (state, ownProps) => {
    return {
        sent: state.entities.connections.sent, 
        received: state.entities.connections.received,
        users: state.entities.users,
        profileUserId: parseInt(ownProps.match.params.userId), 
        currentUserId: state.session.id
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUserConnections: (userId) => dispatch(fetchUserConnections(userId)), 
        fetchUser: (id) => dispatch(fetchUser(id)), 
    }
}
  

class ConnectionIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserConnections(this.props.profileUserId);
    }

    render() {
        let {sent} = this.props; 
        let {received} = this.props; 

        if (!sent || !received ){
            return null;
        }        

        sent = Object.values(sent).filter(connection=>connection.requester_id === (this.props.profileUserId) &&connection.status==='accepted'); 
        received = Object.values(received).filter(connection =>connection.requestee_id === (this.props.profileUserId) &&  connection.status === 'accepted'); 


        let header =''; 
        if (this.props.profileUserId === this.props.currentUserId) {
            header = 'Your connections'
        } else {
            header = "View connections"
        }
        return (
            <div className='connection-container'> 
                <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId}/>

                <h2 className='connection-header'>{header}</h2>

                <div className='connected-profiles'> 
                        {sent.map(user =>  <ConnectionsItem key={user.id} userId={user.requestee_id}/>)}
                        {received.map(user =>  <ConnectionsItem key={user.id} userId={user.requester_id}/>)}
                </div>
            </div>


        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectionIndex);