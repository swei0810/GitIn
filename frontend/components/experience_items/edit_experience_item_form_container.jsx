import React from 'react'; 
import { connect } from 'react-redux'; 
import ExperienceItemForm from './experience_item_form'; 
import { updateExperienceItem, fetchExperienceItem, deleteExperienceItem } from '../../actions/experience_item_actions'; 
import { closeModal } from '../../actions/modal_actions';
import {receiveProfileErrors, clearProfileErrors} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    const defaultExperienceItem = {title:'', company:'', location:'', start_date: null, end_date: null, description: '' }; 
    const experienceItem =ownProps.experienceItem || defaultExperienceItem; 
    const formType = 'Edit experience'; 
    return {
        experienceItem, 
        formType,
        errors: state.errors.profile,};
}; 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchExperienceItem: id => dispatch(fetchExperienceItem(id)), 
        processForm: experienceItem => dispatch(updateExperienceItem(experienceItem)), 
        deleteForm: id => dispatch(deleteExperienceItem(id)),
        closeModal: () => dispatch(closeModal()),
        receiveProfileErrors: (error) => dispatch(receiveProfileErrors(error)), 
        clearProfileErrors: () => dispatch(clearProfileErrors())
    }; 
}; 


class EditExpeienceItemForm extends React.Component {

    render() {
        const {processForm, errors, formType, experienceItem, closeModal, deleteForm, receiveProfileErrors,clearProfileErrors} = this.props; 
        return (
            <ExperienceItemForm 
                closeModal={closeModal}
                processForm= {processForm}
                formType={formType}
                experienceItem={experienceItem}
                deleteForm = {deleteForm}
                clearProfileErrors={clearProfileErrors}
                receiveProfileErrors = {receiveProfileErrors}
                errors = {errors} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpeienceItemForm); 