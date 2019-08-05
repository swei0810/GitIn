import React from 'react'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import { fetchEducationItem } from '../../actions/education_item_actions'; 
import {openModal} from '../../actions/modal_actions'

// const mapStateToProps = (state, ownProps) => {
//     debugger 
//     return {
//         // experienceItem: state.entities.users.undefined.experienceItems[ownProps.match.params.experienceItemId]
//         experienceItem:  Object.values(state.entities.users.undefined.experienceItem)
//     }
// };

const mapDispatchToProps = dispatch => ({
    fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
    openModal: modal => dispatch(openModal(modal))

})






class EducationItemShow extends React.Component {
    componentDidMount() {
        this.props.educationItem;
        // this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
    //         this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    //     }
    // }


    render() {
        const {educationItem} = this.props; 
        return (
            <div>
                <Modal />
               <button onClick={() => this.props.openModal('edit education')}>Edit Education</button>
                <h2>{educationItem.school}</h2>
                <h4>{educationItem.degree}</h4>
                <h5>{educationItem.start_yr} ~ {educationItem.end_yr} </h5>
                <p>{educationItem.activities}</p> 
            </div> 
        )
    }



}

// export default ExperienceItemShow
export default connect(null, mapDispatchToProps)(EducationItemShow); 