
import React from "react";
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    const currentUser = ownProps.users[ownProps.currentUserId];
    return {
        currentUser
    }
}

class ProfileNav extends React.Component {


    render() {

        return (
        <div className="nav">
                <div className='nav-logo'><img className='logo-img' src={window.logo} /></div>

                <div className='nav-right'>
                <div className='nav-icon'><i className="fas fa-home"></i><br/>Home</div>
                <div className='nav-icon'><i className="fas fa-users"></i><br/>My network</div>
                <div className='nav-icon'><i className="fas fa-briefcase"></i><br/>Jobs</div>
                <div className='nav-icon'><i className="fas fa-comment-alt"></i><br/>Messaging</div>
                <div className='nav-icon'><i className="fas fa-bell"></i><br/>Notifications</div>


                
               
                
                <div className='nav-icon-p'> 
                 <div className="profile-image-circle">
                <img className="profile-icon" src={this.props.currentUser.photoUrl}/>

                </div>
                <br/><br/> &nbsp; Me</div> 
              

                </div> 

        </div>
        )
    }
}

export default connect(mapStateToProps, null)(ProfileNav)
// export default ProfileNav