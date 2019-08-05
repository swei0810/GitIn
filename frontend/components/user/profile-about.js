
import React from "react";
import { connect } from 'react-redux'; 

const mapStateToProps = (state, ownProps) => {
    
    // const user = state.entities.users[ownProps.match.params.userId];
    const user = state.entities.users.undefined
    return {
        user
    }
}

class ProfileAbout extends React.Component {
    render() {
        const {user} = this.props;
        // debugger doesn't work?
        return (
            <div > 
                <p className='section-header'>About</p>
                <h4>{user.summary}</h4>
            </div>

        )
    }
}

// export default ProfileAbout
export default connect(mapStateToProps, null)(ProfileAbout); 