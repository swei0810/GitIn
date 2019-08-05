
import React from "react";

class ProfileNav extends React.Component {


    render() {

        return (
        <div className="nav">
                <div className='nav-logo'><img className='logo-img' src={window.logo} /></div>
                <div className='nav-icon'><i className="fas fa-home"></i></div>
                <div className='nav-icon'><i className="fas fa-users"></i></div>
                <div>profile icon</div> 

        </div>
        )
    }
}

export default ProfileNav