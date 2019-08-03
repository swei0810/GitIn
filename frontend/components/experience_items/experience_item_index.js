import React from 'react';
import ExperienceItemShow from './experience_item_show';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom'; 




class ExperienceItemIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllExperienceItems();
  }

  render() {
    const experienceItems = this.props.experienceItems.map( experienceItem => {
        return (
            <ExperienceItemShow 
                expeirenceItem = {experienceItem}/> //////////
        );
    });

    return (
      <div>
          {/* is this right  */}
         <Modal />  
         <button onClick={() => openModal('create experience')}>Add Experience</button>
        <ul>
          {experienceItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(ExperienceItemIndex);
