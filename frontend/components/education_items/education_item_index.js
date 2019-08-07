import React from 'react';
// import ExperienceItemShow from './experience_item_show';
import EducationItemShow from './education_item_show';
import Modal from '../modal/modal';
// import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {fetchUserEducationItems} from '../../actions/education_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state) => {
  return { 
    //  educationItems: Object.values(state.entities.users.undefined.educationItems) //THIS HAS TO CHANGE 
      educationItems: Object.values(state.entities.educationItems) //change THIS
  }

}; 

const mapDispatchToProps = dispatch => {
  return {
      // fetchAllEducationItems: () => dispatch(fetchAllEducationItems()),
      openModal: modal => dispatch(openModal(modal)), 
      fetchUserEducationItems: (userId) => dispatch(fetchUserEducationItems(userId))
  };
};


class EducationItemIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchUserEducationItems(this.props.userId)
  }


  render() {
    const {educationItems} = this.props;
    if (!educationItems) {
      return null; 
    }

    let addIcon = ''; 
    if (this.props.isCurrentUser) {
      addIcon = (<div className='icon'>
      <i className="fas fa-plus"  onClick={() => this.props.openModal('create education')} ></i>
     </div>);
    }

    return (
      <div>
          <div className='section-heading'>
            <p className='section-header'>Education</p>
            <Modal /> 
            {addIcon}
          </div>
        <ul>
           {educationItems.map(educationItem=> <EducationItemShow key={educationItem.id} educationItem={educationItem} isCurrentUser={this.props.isCurrentUser}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationItemIndex); 