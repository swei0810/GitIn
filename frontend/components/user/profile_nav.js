
import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const currentUser = ownProps.users[ownProps.currentUserId];
    return {
        currentUser
    }
}

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
                <Link to='/connection'><div className='nav-icon'><i className="fas fa-users"></i><br/>My network</div></Link>
                <div className='nav-icon'><i className="fas fa-briefcase" onClick={e => alert("not implemented yet")} ></i><br/>Jobs</div>
                <div className='nav-icon'><i className="fas fa-comment-alt" onClick={e => alert("not implemented yet")} ></i><br/>Messaging</div>
                <div className='nav-icon'><i className="fas fa-bell" onClick={e => alert("not implemented yet")} ></i><br/>Notifications</div>


                
               
                <Link to={`/git/${this.props.currentUser.id}`}>
                        <div className='nav-icon-p'> 
                        <div className="profile-image-circle">
                        {/* <img className="profile-icon" src={this.props.currentUser.photoUrl}/> */}
                            {profilePhoto}
                        </div>
                        <br/><br/> &nbsp; Me</div> 
                </Link>

              

                </div> 

        </div>
        )
    }
}

export default connect(mapStateToProps, null)(ProfileNav)
// export default ProfileNav