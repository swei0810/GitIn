import { connect } from 'react-redux'; 
import ExperienceItemIndex from './experience_item_index'; 
import { fetchAllExperienceItems } from '../../actions/experience_item_actions'; 

const mapStateToProps = (state) => ({
    experienceItems: Object.keys(state.experienceItems).map(id => state.experienceItems[id]);

}); 

const mapDispatchToProps = dispatch => ({
   fetchAllExperienceItems: () => dispatch(fetchAllExperienceItems()),
   openModal: modal => dispatch(oepnModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemIndex); 



