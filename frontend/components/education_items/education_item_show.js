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
            <div className='item'>
                {/* change this when i have actual img */}
                    <div> 
                    <img className='item-img' src={window.gate}/> 
                    </div> 
                    <div className='item-info'>
                        <div className='item-title'> 
                            <Modal />
                            <div classname='item-title'>{educationItem.school}</div>
                            <i class="fas fa-pencil-alt" onClick={() => this.props.openModal('edit education')}></i>
                        </div> 
                        <div className='item-sub'>{educationItem.degree}, {educationItem.field}</div>
                        <div className='item-sub-2'>{educationItem.start_yr} - {educationItem.end_yr} </div>
                        <div className='item-sub-2'>Activities and societies: {educationItem.activities}</div> 
                        <br/>
                    </div> 
            </div> 
            </div>
        )
    }



}

// export default ExperienceItemShow
export default connect(null, mapDispatchToProps)(EducationItemShow); 