
import React from "react";
import { connect } from 'react-redux'; 
import {openModal} from '../../actions/modal_actions'
import { Link } from 'react-router-dom';


const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal,info) => dispatch(openModal(modal, info))
    };
  };
  

class ProfileSummary extends React.Component {


    render() {
        const {user} = this.props;
        if (!user) {
            return null; 
        }

        let editIcon = '';
         if (this.props.isCurrentUser) {
             editIcon = (<div className='icon-edit'>
             <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit intro', {user: user})}></i>
             </div>);
         }


         let profilePhoto = '';
         if (this.props.user.photoUrl) {
             profilePhoto = (<img className="profile-image" src={this.props.user.photoUrl}/>);
         }else {
             profilePhoto = (<img className='profile-image' src={window.default_prof}/>);
         }

        return (
        <div className="profile-summary-container">

            <div className='profile-image-container'> 
            <img className='profile-background' src={window.profile_background}/>
            <div className="profile-image-circle">
                {profilePhoto}
            </div>
            </div>

                <div className='summary'> 
                    <div className='section-heading'> 
                        <div className='section-head'><p className='user-name'>{user.first_name} {user.last_name}</p>
                        <div className='github-icon'> <i className="fab fa-github"></i>
                        </div>
                        </div> 
                
                            {editIcon}
                    </div>

                    <div className='section-header'>{user.headline}</div>
                    <div className='location-connection'>
                        <div className='summary-location' >{user.location} &nbsp; · &nbsp;  </div>
                        <Link to= {`/git/${user.id}/connections`} className='num-connection'># connections</Link>
                       
                    </div>
          
                </div>

              
           

        </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ProfileSummary)