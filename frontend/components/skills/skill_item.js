import React from 'react'; 
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'
import { createEndorsement, deleteEndorsement} from '../../actions/endorsement_actions'; 
import { fetchAllEndorsements } from '../../actions/endorsement_actions'; 


const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
    }
}; 


const mapDispatchToProps = dispatch => ({
    openModal: (modal,info) => dispatch(openModal(modal, info)), 
    createEndorsement: (endorsement) => dispatch(createEndorsement(endorsement)), 
    // deleteEndorsement: (skill) => dispatch(deleteEndorsement(skill)),
    fetchAllEndorsements: skillId => dispatch(fetchAllEndorsements(skillId))


})

class SkillItemShow extends React.Component {

    componentDidMount() {
        this.props.fetchAllEndorsements(this.props.skill.id);        
    }

    constructor(props) {
        super(props); 
    }


    render() {
        const {skill} = this.props; 
        
        if (!skill.endorsementIds) {
            return null; 
        }


        let plusIcon = ''; 
        if (!this.props.isCurrentUser) {
            if(this.props.skill.endorsementIds.includes(this.props.currentUserId)) {
                plusIcon = (<div className={`checked-${this.props.skill.id}`} onClick={() => alert("You already gave an endorsement!")}>
                    ✓ 
                </div>)
            } else {
                plusIcon = (<div className={`plus-${this.props.skill.id}`} onClick={() => this.props.createEndorsement(this.props.skill).then(location.reload())}>
                    +
                </div>)
            }
        }

        let numEndorsements = ''; 
        if (skill.endorsementIds) {
            numEndorsements = skill.endorsementIds.length; 
        }
  
        return (
            <div className='skill-endorse'>
                <div className='skill-button' onClick={() => this.props.openModal('see endorsements', { skill: skill })}>{skill.title} &nbsp;· &nbsp; {numEndorsements ? numEndorsements : '0'} </div>
                {plusIcon}
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SkillItemShow); 