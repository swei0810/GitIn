import React from 'react';
import ExperienceItemShow from './experience_item_show';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {fetchAllExperienceItems} from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state) => {
  return { 
      experienceItems:  Object.values(state.entities.users.undefined.experienceItems) //HAVE TO CHANGE THE STATE
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
    const {experienceItems} = this.props
    // debugger
    // let experienceItemsDetail; 
    // if (experienceItems) {
    //      experienceItemsDetail = experienceItems.map( experienceItem => {
    //       return (
    //           <ExperienceItemShow 
    //               expeirenceItem = {experienceItem}/> //////////
    //       );
    //   });
    // }

    return (
      <div>
          {/* is this right  */}
          <p className='section-heading'>Experience</p>
         <Modal />  
         <button onClick={() => this.props.openModal('create experience')}>Add Experience</button>
         {/* <i class="fas fa-pen"></i> */}
        <ul>
          {experienceItems.map(experienceItem => <ExperienceItemShow key={experienceItem.id} experienceItem={experienceItem}/>)}
        </ul>
      </div>
    );
  }
}

// export default withRouter(ExperienceItemIndex);
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemIndex); 
