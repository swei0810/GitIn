import React from 'react';
import ExperienceItemShow from './experience_item_show';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {fetchAllExperienceItems} from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state, ownProps) => {
  return { 
      // experienceItems:  Object.values(state.entities.users.undefined.experienceItems) //HAVE TO CHANGE THE STATE
  }

}; 

const mapDispatchToProps = dispatch => {
  return {
      fetchAllExperienceItems: () => dispatch(fetchAllExperienceItems()),
      openModal: modal => dispatch(openModal(modal))
  };
};


class ExperienceItemIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchAllExperienceItems();
  }

  render() {
    const {experienceIds} = this.props; 
    if (!experienceIds) {
      return null; 
    }

    return (
      <div>
          <div className='section-heading'>
             <p className='section-header'>Experience</p>
            <Modal />  
            <div className='icon'>
            <i  className="fas fa-plus" onClick={() => this.props.openModal('create experience')}></i>
            </div> 
          </div> 
        <ul>
          {/* {experienceItems.map(experienceItem => <ExperienceItemShow key={experienceItem.id} experienceItem={experienceItem}/>)} */}
          {experienceIds.map(id=> <ExperienceItemShow key={id} experienceId={id} />    )}
        </ul>
      </div>
    );
  }
}

// export default withRouter(ExperienceItemIndex);
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemIndex); 
