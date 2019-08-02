import { connect } from 'react-redux';
import ExperienceItemShow from './experience_item_show'; 
import { fetchExperienceItem } from '../../actions/experience_item_actions'; 

const mapStateToProps = (state, ownProps) => ({
    experienceItem: state.experienceItems[ownProps.match.params.experienceItemId]
});

const mapDispatchToProps = dispatch => ({
    fetchExperienceItem: id => dispatch(fetchExperienceItem(id)), 
    openModal: modal => dispatch(openModal(modal))

})

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceItemShow); 