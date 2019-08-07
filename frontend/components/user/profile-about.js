
import React from "react";
import Modal from '../modal/modal';
import { connect } from 'react-redux'; 
import {openModal} from '../../actions/modal_actions'

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal,info) => dispatch(openModal(modal, info))
    };
  };
  


class ProfileAbout extends React.Component {
    render() {
        
        const {user} = this.props;
        if (!user.summary) {
            return null; 
        }

        let editIcon ='';
        if (this.props.isCurrentUser) {
            editIcon = (<div className='icon'>
            <i  className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit summary', {user: user})}></i>
            </div> );
        }

        return (
            <div > 
                <div className='section-heading'> 
                <p className='section-header'>About</p>
                {/* <Modal />   */}
                {editIcon}


                 </div> 

                 

                <div className='profile-summary'>{user.summary}</div>
            </div>

        )
    }
}

// export default ProfileAbout
// export default ProfileAbout; 

export default connect(null, mapDispatchToProps)(ProfileAbout);