import React from 'react'; 
// import { Link } from 'react-router-dom'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
// import ExperienceItemShow from './experience_item_show'; 
import { fetchExperienceItem } from '../../actions/experience_item_actions'; 
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        // experienceItem: state.entities.users.undefined.experienceItems[ownProps.match.params.experienceItemId]
        experienceItem:  state.entities.experienceItems[ownProps.experienceId]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchExperienceItem: id => dispatch(fetchExperienceItem(id)), 
    openModal: (modal,info) => dispatch(openModal(modal, info))

})






class ExperienceItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchExperienceItem(this.props.experienceId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.experienceId!= this.props.experienceId) {
            this.props.fetchExperienceItem(this.props.experienceId);
        }
    }


    render() {
        const {experienceItem} = this.props; 
        if (!experienceItem) {
            return null; 
        }
        

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
                            <div className='icon-edit'>
                            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit experience', {experienceItem: experienceItem})}></i>
                            </div>
                        </div>
                        <div className='item-sub'>Company name goes here</div>
                        <div className='item-sub-2'>{experienceItem.start_date} - {experienceItem.end_date}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemShow); 