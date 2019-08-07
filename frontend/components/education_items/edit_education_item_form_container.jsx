import React from 'react'; 
import { connect } from 'react-redux'; 
import EducationItemForm from './education_item_form'; 
import { updateEducationItem, fetchEducationItem,deleteEducationItem } from '../../actions/education_item_actions'; 
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultEducationItem = {school:'', degree:'', field:'', start_yr: null, end_yr: null, activities: '' }; 
    const educationItem = ownProps.educationItem || defaultEducationItem; 
    const formType = 'Edit education'; 
    return {educationItem, formType};
}; 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
        processForm: educationItem => dispatch(updateEducationItem(educationItem)), 
        deleteForm: id => dispatch(deleteEducationItem(id)),
        closeModal: () => dispatch(closeModal())
    }; 
}; 


class EditEducationItemForm extends React.Component {

    render() {
        const {processForm, formType, educationItem, closeModal, deleteForm} = this.props; 
        return (
            <EducationItemForm 
               closeModal={closeModal}
                processForm= {processForm}
                formType={formType}
                educationItem={educationItem} 
                deleteForm={deleteForm} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEducationItemForm); 