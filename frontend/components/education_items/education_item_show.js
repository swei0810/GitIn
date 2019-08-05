import React from 'react'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import { fetchEducationItem } from '../../actions/education_item_actions'; 
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        // experienceItem: state.entities.users.undefined.experienceItems[ownProps.match.params.experienceItemId]
        educationItem:  state.entities.educationItems[ownProps.educationId]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
    openModal: (modal,info) => dispatch(openModal(modal, info))

})






class EducationItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchEducationItem(this.props.educationId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
    //         this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    //     }
    // }


    render() {
        const {educationItem} = this.props; 
        if (!educationItem) {
            return null; 
        }
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
                            <div className='item-title'>{educationItem.school}</div>
                            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit education', educationItem)}></i>
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
export default connect(mapStateToProps, mapDispatchToProps)(EducationItemShow); 