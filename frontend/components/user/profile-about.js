
import React from "react";
import { connect } from 'react-redux'; 
import { fetchUser }  from '../../actions/user_actions';


class ProfileAbout extends React.Component {
    render() {
        
        const {user} = this.props;
        if (!user.summary) {
            return null; 
        }
        return (
            <div > 
                <p className='section-header'>About</p>
                <h4>{user.summary}</h4>
            </div>

        )
    }
}

// export default ProfileAbout
export default ProfileAbout; 