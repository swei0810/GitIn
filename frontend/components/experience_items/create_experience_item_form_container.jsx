import { connect } from 'react-redux'; 
import ExperienceItemForm from './experience_item_form'; 
import { createExperienceItem } from '../../actions/experience_item_actions'; 
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    const experienceItem = {title:'', company:'', location:'', start_date: null, end_date: null, description: '' }; 
    const formType = 'Add experience'; 
    return {experienceItem, formType}; 
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: experienceItem => dispatch(createExperienceItem(experienceItem)), 
        closeModal: () => dispatch(closeModal())
    }; 
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemForm); 