
import React from "react";
import Modal from '../modal/modal';
import { connect } from 'react-redux'; 
import {openModal} from '../../actions/modal_actions'

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
         {/* <Modal />  
                        <div className='icon'>
                        <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit intro', {user: user})}></i>
                        </div>  */}

            <div className='profile-image-container'> 
         {/* PHOTO */}
            <img className='profile-background' src={window.profile_background}/>
            <div className="profile-image-circle">
                {profilePhoto}
                {/* <img className="profile-image" src={user.photoUrl}/> */}
            </div>
            </div>

                <div className='summary'> 
                    <div className='section-heading'> 
                        <div className='section-head'><p className='user-name'>{user.first_name} {user.last_name}</p>
                        <div className='github-icon'> <i className="fab fa-github"></i>
                        </div>
                        </div> 
                        {/* <Modal />  
                        
                        <div className='icon'>
                        <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit intro', {user: user})}></i>
                        </div>  */}
                            {/* <div className='icon-edit'>
                            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit intro', {user: user})}></i>
                            </div> */}
                            {/* <Modal /> */}
                            {editIcon}
                    </div>

                    <div className='section-header'>{user.headline}</div>
                    <div className='summary-location' >{user.location} </div>
                </div>

                {/* <div className='summary-photo'>
                    <img className="profile-image" src={user.photoUrl}/>
                    <img className="profile-image" src={user.photoUrl}/>

                </div>  */}
           

        </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ProfileSummary)