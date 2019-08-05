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
            <div > 
                {/* <div> 
                <img className='experience-img' src={window.gate}/> 
                </div>  */}
                <div className='item'>
                    <div> 
                    <img className='item-img' src={window.gate}/> 
                    </div> 

                    <div className='item-info'>
                        <div className='item-title'>
                            <Modal />
                            <div className='item-title'>{experienceItem.title}</div>
                            <i class="fas fa-pencil-alt" onClick={() => this.props.openModal('edit experience')}></i>
                        </div>
                        <div className='item-sub'>Company name goes here</div>
                        <div className='item-sub-2'>Date goes here</div>
                        <div className='item-sub-2'>{experienceItem.location}</div>
                        <br/>
                        <div>{experienceItem.description}</div>
                        <br/>

                    </div> 

                </div> 
            </div>
        )
    }



}

// export default ExperienceItemShow
export default connect(null, mapDispatchToProps)(ExperienceItemShow); 