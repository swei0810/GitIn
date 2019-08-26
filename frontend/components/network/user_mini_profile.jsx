// like post item 
import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import { Link } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

class UserMiniProfile extends React.Component {

    render() {
        const {user} =this.props;
        let profilePhoto = '';
        if (user.photoUrl) {
            profilePhoto = (<img className='mini-profile-photo' src={user.photoUrl}/>);
        }else {
            profilePhoto = (<img className='mini-profile-photo' src={window.default_prof}/>);
        }

        return (

            <div className='mini-profile-index'> 
                <div className='mini-index-1'>

                <img className='mini-background' src={window.profile_background}/>
            {/* <div className='mini-profile-bottom'> */}
                <div className='mini-img'>{profilePhoto}</div>
                 <Link to={`git/${user.id}`}> <div className='mini-name'>{user.first_name + ' '+user.last_name}</div> </Link>
                <div className='mini-title'>{user.headline}</div>
                </div>

            <div className='mini-index-2' ><button className='connect' onClick={()=> alert("Can't connect yet")}> Connect</button></div> 
            </div> 

            // </div>

        )
        

    }

}

export default connect(null,mapDispatchToProps)(UserMiniProfile);