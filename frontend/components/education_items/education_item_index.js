import React from 'react';
// import ExperienceItemShow from './experience_item_show';
import EducationItemShow from './education_item_show';
import Modal from '../modal/modal';
// import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {fetchAllEducationItems} from '../../actions/education_item_actions'; 
import {openModal} from '../../actions/modal_actions'



const mapStateToProps = (state) => {
  return { 
    //  educationItems: Object.values(state.entities.users.undefined.educationItems) //THIS HAS TO CHANGE 
      // educationItems:  state.entities.users.undefined.educationItems //change THIS
  }

}; 

const mapDispatchToProps = dispatch => {
  return {
      // fetchAllEducationItems: () => dispatch(fetchAllEducationItems()),
      openModal: modal => dispatch(openModal(modal))
  };
};


class EducationItemIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    // this.props.fetchAllEducationItems();
  }

  render() {
    const {educationIds} = this.props;
    if (!educationIds) {
      return null; 
    }

    return (
      <div>
          <div className='section-heading'>
            <p className='section-header'>Education</p>
            <Modal /> 
            <div className='icon'>
              <i className="fas fa-plus"  onClick={() => this.props.openModal('create education')} ></i>
            </div> 
          </div>
        <ul>
           {educationIds.map(id => <EducationItemShow key={id} educationId={id} />)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationItemIndex); 