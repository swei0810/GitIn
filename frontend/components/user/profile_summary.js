
import React from "react";

class ProfileSummary extends React.Component {


    render() {

        return (
        <div className="profile-image-container">
            <img className='profile-background' src={window.profile_background}/>
            <div className="profile-image-circle">
                <img className="profile-image" src={window.profile_img}/>
            </div>
           

        </div>
        )
    }
}

export default ProfileSummary