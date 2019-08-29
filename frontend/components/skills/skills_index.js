import React from 'react'; 
import SkillItemShow from './skill_item'; 
import { connect } from 'react-redux'; 
import {fetchUserSkills} from '../../actions/skill_actions'; 
import {openModal} from '../../actions/modal_actions'; 
import {withRouter} from 'react-router-dom'; 

const mapStateToProps = (state, ownProps) => {
    return {
        skills: Object.values(state.entities.skills),
    }
}; 

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)), 
        fetchUserSkills: (userId) => dispatch(fetchUserSkills(userId))
    }
};

class SkillsIndex extends React.Component {
    componentDidMount(){
        this.props.fetchUserSkills(this.props.userId)
    }


    //IMPORTANT, try to redo others
    componentDidUpdate(prevProps){
        const userId = this.props.match.params.userId;
        if (userId !== prevProps.match.params.userId) {
            this.props.fetchUserSkills(this.props.userId)
        } 
    }



    render() {
        const {skills} = this.props; 
        if (!skills) {
            return null; 
        }

        let addIcon = ''; 
        if (this.props.isCurrentUser) {
          addIcon = (<div className='icon'>
          <i className="fas fa-plus"  onClick={() => this.props.openModal('create skill')} ></i>
         </div>);
        }

        //do different things based on whether it is currentUser or not 
        return (
            <div> 
                <div className='section-heading'>
                    <p className='section-header'>Skills &amp; Endorsement</p>
                    {addIcon}
                </div>
                <div className='skill-container'>
                    {skills.map(skill => <SkillItemShow key={skill.id} skill={skill} isCurrentUser={this.props.isCurrentUser}/>)}
                    {/* also pass in isCurrentUser */}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SkillsIndex))