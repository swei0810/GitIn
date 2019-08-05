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
     educationItems: Object.values(state.entities.users.undefined.educationItems)
      // educationItems:  state.entities.users.undefined.educationItems //change THIS
  }

}; 

const mapDispatchToProps = dispatch => {
  return {
      fetchAllEducationItems: () => dispatch(fetchAllEducationItems()),
      openModal: modal => dispatch(openModal(modal))
  };
};


class EducationItemIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchAllEducationItems();
  }

  render() {
    const {educationItems} = this.props;

    return (
      <div>
          <div className='section-heading'>
            <p className='section-header'>Education</p>
            <Modal /> 
            <div className='icon'>
              <i class="fas fa-plus"  onClick={() => this.props.openModal('create education')} ></i>
            </div> 
          </div>
        <ul>
           {educationItems.map(educationItem => <EducationItemShow key={educationItem.id} educationItem={educationItem} />)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationItemIndex); 