import React from 'react'; 
import UserMiniProfile from './user_mini_profile';
import { withRouter } from 'react-router-dom'; 
import ProfileNavbar from '../user/profile_nav';






class Network extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        // this.props.fetchConnection();

    }


    render() {
        // const {sent} = this.props; 
        // const {received} = this.props; 
        const {users} = this.props; 

        debugger
       
    
        if (!users){
            return null;
        }


        return (
            <div>

                <ProfileNavbar users={users} currentUserId={this.props.currentUserId}/>

                <div className ='companies-header'>People who you may know </div>

            <div className='profiles'> 
                    {/* {sent.map(sent => <UserMiniProfile key={sent.id} user={users[sent.requester_id]}/>) } */}
                    
                    {users.map(user =>  <UserMiniProfile key={user.id} user={user}/>)}
                    {/* take in user id, status whether it is accepted or pending, if accepted show 1st connection, if pending say pending */}
            </div>
            </div> 

        )

    }
}

export default withRouter(Network)