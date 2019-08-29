import React from 'react'; 
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'
import { createEndorsement} from '../../actions/endorsement_actions'; 

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
    }
}; 


const mapDispatchToProps = dispatch => ({
    openModal: (modal,info) => dispatch(openModal(modal, info)), 
    createEndorsement: (endorsement) => dispatch(createEndorsement(endorsement))
})

class SkillItemShow extends React.Component {

    constructor(props) {
        super(props); 
        this.state = this.props.skill; 
    }


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
            debugger
            if(this.props.skill.endorsementIds.includes(this.props.currentUserId)) {
                plusIcon = (<div className={`checked-${this.props.skill.id}`} onClick={() => this.props.createEndorsement(this.state)}>
                    ✓ 
                </div>)
            } else {
                plusIcon = (<div className={`plus-${this.props.skill.id}`} onClick={() => this.props.createEndorsement(this.state)}>
                    +
                </div>)
            }
        }


        // let plusIcon = '';
        // if (!this.props.isCurrentUser) {
        //     debugger
            // plusIcon = (<div className={`plus-${this.props.skill.id}`} onClick={()=> this.props.createEndorsement(this.state)}>
            //     +
            // </div>)
        // } 


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