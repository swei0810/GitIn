
import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[ownProps.currentUserId]
    return {
        currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

class ProfileNav extends React.Component {


    render() {
        let profilePhoto = '';
        if (this.props.currentUser.photoUrl) {
            profilePhoto =(<img className="profile-icon" src={this.props.currentUser.photoUrl}/>);
        }else {
            profilePhoto = (<img className='profile-icon' src={window.default_prof}/>);
        }

        return (
        <div className="nav">
                <div className='nav-logo'><img className='logo-img' src={window.logo} /></div>

                <div className='nav-right'>

                <Link to='/feed'><div className='nav-icon'><i className="fas fa-home"></i><br/>Home</div></Link>
                <Link to='/mynetwork'><div className='nav-icon'><i className="fas fa-users"></i><br/>My network</div></Link>
                <Link to='/companies'><div className='nav-icon'><i className="fas fa-briefcase"  ></i><br/>Jobs</div></Link>
                <div className='nav-icon'><i className="fas fa-comment-alt" onClick={e => alert("not implemented yet")} ></i><br/>Messaging</div>
                <div className='nav-icon'><i className="fas fa-bell" onClick={e => alert("not implemented yet")} ></i><br/>Notifications</div>


                
               
                {/* <Link to={`/git/${this.props.currentUser.id}`}> */}
                        <div className='nav-icon-p'> 
                        <div className="profile-image-circle">
                        {/* <img className="profile-icon" src={this.props.currentUser.photoUrl}/> */}
                            {profilePhoto}
                        </div>

                        <div className='dropdown'> Me &nbsp;<i className='fa fa-caret-down'></i> 
                            <div className='dropdown-content'>
                                <Link to={`/git/${this.props.currentUser.id}`}>View Profile</Link>
                                {/* <Link to='/'> <div onClick={()=>this.props.logout()}>Sign Out</div></Link> */}
                                <Link to='/'>  <div onClick={()=>this.props.logout()} >Sign Out</div> </Link>
                                
                            </div>
                        
                        </div>


                         </div> 
                {/* </Link> */}

              

                </div> 

        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav)
// export default ProfileNav