import React from 'react'; 
import { connect } from 'react-redux'; 
import EducationItemForm from './education_item_form'; 
import { updateEducationItem, fetchEducationItem } from '../../actions/education_item_actions'; 
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultEducationItem = {school:'', degree:'', field:'', start_yr: null, end_yr: null, activities: '' }; 
    const educationItem = state.educationItems[ownProps.match.params.educationItemId] || defaultEducationItem; 
    const formType = 'Update Education Item'; 
    return {educationItem, formType};
}; 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
        processForm: educationItem => dispatch(updateEducationItem(educationItem)), 
        closeModal: () => dispatch(closeModal())
    }; 
}; 


class EditEducationItemForm extends React.Component {
    componentDidMount() {
        this.props.fetchEducationItem(this.props.match.params.educationItemId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.educationItem.id != this.props.match.params.educationItemId) {
            this.props.fetchEducationItem(this.props.match.params.educationItemId);
        }
    }

    render() {
        const {processForm, formType, educationItem} = this.props; 
        return (
            <EducationItemForm 
                processForm= {processForm}
                formType={formType}
                educationItem={educationItem}  />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEducationItemForm); 