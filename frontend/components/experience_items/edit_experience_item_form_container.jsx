import React from 'react'; 
import { connect } from 'react-redux'; 
import ExperienceItemForm from './experience_item_form'; 
import { updateExperienceItem, fetchExperienceItem } from '../../actions/experience_item_actions'; 
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    //FIX THIS 
    const defaultExperienceItem = {title:'', company:'', location:'', start_date: null, end_date: null, description: '' }; 
    const experienceItem =ownProps.experienceItem || defaultExperienceItem; 
    debugger
    const formType = 'Edit experience'; 
    return {experienceItem, formType};
}; 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchExperienceItem: id => dispatch(fetchExperienceItem(id)), 
        processForm: experienceItem => dispatch(updateExperienceItem(experienceItem)), 
        closeModal: () => dispatch(closeModal())
    }; 
}; 


class EditExpeienceItemForm extends React.Component {
    // componentDidMount() {
    //     debugger
    //     //fetching the experience item wrong 
    //     this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
    //         this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    //     }
    // }

    render() {
        const {processForm, formType, experienceItem, closeModal} = this.props; 
        return (
            <ExperienceItemForm 
                closeModal={closeModal}
                processForm= {processForm}
                formType={formType}
                experienceItem={experienceItem}  />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpeienceItemForm); 