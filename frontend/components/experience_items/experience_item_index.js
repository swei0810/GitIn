import React from 'react';
import ExperienceItemShow from './experience_item_show';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {fetchAllExperienceItems} from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state) => {
  debugger 
  return { 
      experienceItems:  state.entities.experienceItems
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
    debugger
    super(props); 
  }

  componentDidMount() {
    // debugger
    this.props.fetchAllExperienceItems();
  }

  render() {
    // const {experienceItems} = this.props
    // let experienceItemsDetail; 
    // if (experienceItems) {
    //      experienceItemsDetail = experienceItems.map( experienceItem => {
    //       return (
    //           <ExperienceItemShow 
    //               expeirenceItem = {experienceItem}/> //////////
    //       );
    //   });
    // }

    debugger 
    return (
      <div>
          {/* is this right  */}
         <Modal />  
         <button onClick={() => this.props.openModal('create experience')}>Add Experience</button>
         {/* <button onClick={this.props.openModal('create experience')}>Add Experience </button> */}
        <ul>
          {/* {experienceItemsDetail} */}
        </ul>
      </div>
    );
  }
}

// export default withRouter(ExperienceItemIndex);
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemIndex); 
