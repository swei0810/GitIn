import { connect } from 'react-redux'; 
import EducationItemForm from './education_item_form'; 
import { createEducationItem } from '../../actions/education_item_actions'; 
import { closeModal } from '../../actions/modal_actions';
import {receiveProfileErrors, clearProfileErrors} from '../../actions/user_actions';



const mapStateToProps = (state, ownProps) => {
    const educationItem = {school:'', degree:'', field:'', start_yr: null, end_yr: null, activities: '' }; 
    const formType = 'Add Education'; 
    return {
        educationItem, 
        formType,
        errors: state.errors.profile,
    }; 
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: educationItem => dispatch(createEducationItem(educationItem)), 
        closeModal: () => dispatch(closeModal()),
        receiveProfileErrors: (error) => dispatch(receiveProfileErrors(error)), 
        clearProfileErrors: () => dispatch(clearProfileErrors())
    }; 
}; 

export default connect(mapStateToProps, mapDispatchToProps)(EducationItemForm); 