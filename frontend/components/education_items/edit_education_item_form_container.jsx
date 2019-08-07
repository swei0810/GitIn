import React from 'react'; 
import { connect } from 'react-redux'; 
import EducationItemForm from './education_item_form'; 
import { updateEducationItem, fetchEducationItem,deleteEducationItem } from '../../actions/education_item_actions'; 
import { closeModal } from '../../actions/modal_actions';
import {receiveProfileErrors, clearProfileErrors} from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultEducationItem = {school:'', degree:'', field:'', start_yr: null, end_yr: null, activities: '' }; 
    const educationItem = ownProps.educationItem || defaultEducationItem; 
    const formType = 'Edit education'; 
    return {
        educationItem, 
        errors: state.errors.profile,
        formType
    };
}; 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
        processForm: educationItem => dispatch(updateEducationItem(educationItem)), 
        deleteForm: id => dispatch(deleteEducationItem(id)),
        closeModal: () => dispatch(closeModal()), 
        receiveProfileErrors: (error) => dispatch(receiveProfileErrors(error)), 
        clearProfileErrors: () => dispatch(clearProfileErrors())
    }; 
}; 


class EditEducationItemForm extends React.Component {

    render() {
        const {processForm, formType, educationItem, closeModal, deleteForm, clearProfileErrors} = this.props; 
        return (
            <EducationItemForm 
               closeModal={closeModal}
                processForm= {processForm}
                formType={formType}
                educationItem={educationItem} 
                deleteForm={deleteForm}
                clearProfileErrors = {clearProfileErrors} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEducationItemForm); 