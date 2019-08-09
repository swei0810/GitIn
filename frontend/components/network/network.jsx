import React from 'react'; 
import { connect } from 'react-redux'; 
import UserMiniProfile from './user_mini_profile';
import { fetchAllUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom'; 
import ProfileNavbar from '../user/profile_nav';






class Network extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();

    }

    render() {
        const {users} = this.props; 
        if (!users){
            return null;
        }


        return (
            <div>

                <ProfileNavbar users={users} currentUserId={this.props.currentUserId}/>


            <div className='profiles'> 
                    {users.map(user =>  <UserMiniProfile key={user.id} user={user}/>)}
            </div>
            </div> 

        )

    }
}

export default withRouter(Network)