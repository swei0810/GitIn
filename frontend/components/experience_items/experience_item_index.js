import React from 'react';
import ExperienceItemShow from './experience_item_show';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { fetchUserExperienceItems} from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state, ownProps) => {
  return { 
      experienceItems:  Object.values(state.entities.experienceItems)
  }

}; 

const mapDispatchToProps = dispatch => {
  return {
      openModal: modal => dispatch(openModal(modal)), 
      fetchUserExperienceItems: (userId) => dispatch(fetchUserExperienceItems(userId))
  };
};


class ExperienceItemIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchUserExperienceItems(this.props.userId);
  }

  render() {
    const {experienceItems} = this.props; 
    if (!experienceItems) {
      return null; 
    }

    let addIcon = ''; 
    if (this.props.isCurrentUser) {
      addIcon = (<div className='icon'>
      <i  className="fas fa-plus" onClick={() => this.props.openModal('create experience')}></i>
      </div>);
    }


    return (
      <div>
          <div className='section-heading'>
             <p className='section-header'>Experience</p>
            {/* <Modal />   */}
            {addIcon}
          </div> 
        <ul>
          {/* {experienceItems.map(experienceItem => <ExperienceItemShow key={experienceItem.id} experienceItem={experienceItem}/>)} */}
          {experienceItems.map(experienceItem=> <ExperienceItemShow key={experienceItem.id} experienceItem={experienceItem} isCurrentUser={this.props.isCurrentUser}/>    )}
        </ul>
      </div>
    );
  }
}

// export default withRouter(ExperienceItemIndex);
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemIndex); 