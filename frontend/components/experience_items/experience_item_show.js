import React from 'react'; 
// import { Link } from 'react-router-dom'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
// import ExperienceItemShow from './experience_item_show'; 
import { fetchExperienceItem } from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'

// const mapStateToProps = (state, ownProps) => {
//     debugger 
//     return {
//         // experienceItem: state.entities.users.undefined.experienceItems[ownProps.match.params.experienceItemId]
//         experienceItem:  Object.values(state.entities.users.undefined.experienceItem)
//     }
// };

const mapDispatchToProps = dispatch => ({
    fetchExperienceItem: id => dispatch(fetchExperienceItem(id)), 
    openModal: modal => dispatch(openModal(modal))

})






class ExperienceItemShow extends React.Component {
    componentDidMount() {
        this.props.experienceItem;
        // this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
    //         this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    //     }
    // }


    render() {
        const {experienceItem} = this.props; 
        return (
            <div>
                <Modal />
               <button onClick={() => this.props.openModal('edit experience')}>Edit Experience</button>
                <h2>{experienceItem.title}</h2>
                {/* <h3>{experienceItem.company}</h3> */}
                {/* add more here */}
                <h4>{experienceItem.location}</h4>
                <p>{experienceItem.description}</p> 
            </div> 
        )
    }



}

// export default ExperienceItemShow
export default connect(null, mapDispatchToProps)(ExperienceItemShow); 