
import React from "react";


class ProfileAbout extends React.Component {
    render() {
        
        const {user} = this.props;
        if (!user.summary) {
            return null; 
        }
        return (
            <div > 
                <p className='section-header'>About</p>
                <div className='profile-summary'>{user.summary}</div>
            </div>

        )
    }
}

// export default ProfileAbout
export default ProfileAbout; 