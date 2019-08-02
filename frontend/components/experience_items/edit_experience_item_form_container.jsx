import React from 'react'; 
import { connect } from 'react-redux'; 
import ExperienceItemForm from './experience_item_form'; 
import { updateExperienceItem, fetchExperienceItem } from '../../actions/experience_item_actions'; 
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultexperienceItem = {title:'', company:'', location:'', start_date: null, end_date: null, description: '' }; 
    const experienceItem = state.experienceItems[ownProps.match.params.experienceItemId] || defaultexperienceItem; 
    const formType = 'Update Experience Item'; 
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
    componentDidMount() {
        this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
            this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
        }
    }

    render() {
        const {processForm, formType, experienceItem} = this.props; 
        return (
            <ExperienceItemForm 
                processForm= {processForm}
                formType={formType}
                experienceItem={experienceItem}  />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpeienceItemForm); 