import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateExperienceItemFormContainer from '../experience_items/create_experience_item_form_container'; 
import EditExperienceItemFormContainer from '../experience_items/edit_experience_item_form_container'; 
import CreateEducationItemFormContainer from '../education_items/create_education_item_form_container'; 
import EditEducationItemFormContainer from '../education_items/edit_education_item_form_container'; 


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit experience':
      component = <EditExperienceItemFormContainer />;
      break;
    case 'create experience': 
      component = <CreateExperienceItemFormContainer />;
      break; 
    case 'create education':
       component = <CreateEducationItemFormContainer />;
       break; 
    case 'edit education':
       component = <EditEducationItemFormContainer />; 
       break; 

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    modal: state.entities.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
