import React from 'react'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import { fetchEducationItem } from '../../actions/education_item_actions'; 
import {openModal} from '../../actions/modal_actions'

// const mapStateToProps = (state, ownProps) => {
//     return {
//         // experienceItem: state.entities.users.undefined.experienceItems[ownProps.match.params.experienceItemId]
//         educationItem:  state.entities.educationItems[ownProps.educationId]
//     }
// };

const mapDispatchToProps = dispatch => ({
    fetchEducationItem: id => dispatch(fetchEducationItem(id)), 
    openModal: (modal,info) => dispatch(openModal(modal, info))

})






class EducationItemShow extends React.Component {



    // componentDidMount() {
    //     this.props.fetchEducationItem(this.props.educationId);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
    //         this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.educationId!= this.props.educationId) {
    //         this.props.fetchEducationItem(this.props.educationId);
    //     }
    // }

    render() {
        const {educationItem} = this.props; 
        if (!educationItem) {
            return null; 
        }


        let editIcon = ''
        if (this.props.isCurrentUser) {
            editIcon = (<div className='icon-edit'>
            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit education', {educationItem: educationItem})}></i>
            </div>)
        }

        let companyPhoto = '';
        if (educationItem.photoUrl) {
            companyPhoto =(<img className='item-img' src={educationItem.photoUrl}/> );
        }else {
            companyPhoto = (<img className='item-img' src={window.default_comp}/>);
        }
        

        let itemSub ='';
        if (educationItem.degree && educationItem.field){
            itemSub = educationItem.degree + ', ' +educationItem.field;
        } else if (educationItem.degree) {
            itemSub = educationItem.degree
        }else if (educationItem.field){
            itemSub = educationItem.field;
        }

        let duration ='';
        if (educationItem.start_yr && educationItem.end_yr) {
            duration = educationItem.start_yr + ' - ' + educationItem.end_yr;
        }else if (educationItem.start_yr) {
            duration = educationItem.start_yr;
        } else if (educationItem.end_yr) {
            duration = educationItem.end_yr;
        }


        return (
            <div>
            <div className='item'>
                {/* change this when i have actual img */}
                    <div> 
                        {companyPhoto}
                    {/* <img className='item-img' src={educationItem.photoUrl}/>  */}
                    </div> 

                    <div className='item-info'>
                        <div className='item-title'> 
                            {/* <Modal /> */}
                            <div className='item-title'>{educationItem.school.name}</div>
                            {editIcon}
                        </div> 
                        {/* {educationItem.degree}, {educationItem.field} */}
                        <div className='item-sub'>{itemSub}</div>
                        <div className='item-sub-2'>{duration} </div>
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