import React from 'react'; 
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'



const mapDispatchToProps = dispatch => ({
    openModal: (modal,info) => dispatch(openModal(modal, info))
})

class SkillItemShow extends React.Component {
    addEndorsement() {
        $(`.plus-${this.props.skill.id}`).replaceWith("<div class='minus'> ✓ </div>"); 
        //put it in the state, createEndorsement 
        //doesnt stay when I refresh 
        //can't click on the minus button yet
    }


    render() {
        const {skill} = this.props; 
        if (!skill) {
            return null; 
        }



        let plusIcon = '';
        if (!this.props.isCurrentUser) {
            plusIcon = (<div className={`plus-${this.props.skill.id}`} onClick={()=>this.addEndorsement()}>
                +
            </div>)
        }


        let numEndorsements = ''; 
        if (skill.endorsementIds) {
            debugger
            numEndorsements = skill.endorsementIds.length; 
        }
  
        return (
            <div className='skill-endorse'>
                <div className='skill-button' onClick={() => this.props.openModal('see endorsements', { skill: skill })}>{skill.title} &nbsp;· &nbsp; {numEndorsements} </div>
                {plusIcon}
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(SkillItemShow); 