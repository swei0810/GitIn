
import React from "react";

class ProfileSummary extends React.Component {


    render() {
        const {user} = this.props;
        debugger
        if (!user) {
            return null; 
        }

        return (
        <div className="profile-summary-container">
            <div className='profile-image-container'> 
            <img className='profile-background' src={window.profile_background}/>
            <div className="profile-image-circle">
                <img className="profile-image" src={window.profile_img}/>
            </div>
            </div>

                <div className='summary'> 
                    <p className='user-name'>{user.first_name} {user.last_name}</p>
                    <div className='section-header'>{user.headline}</div>
                    <div className='summary-location' >{user.location} </div>
                </div>
           

        </div>
        )
    }
}

export default ProfileSummary