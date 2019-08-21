import React from 'react'; 
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'


const mapDispatchToProps = dispatch => ({
    openModal: (modal,info) => dispatch(openModal(modal, info))
})

class SkillItemShow extends React.Component {
    render() {
        const {skill} = this.props; 
        if (!skill) {
            return null; 
        }

        return (
            <div>
                <div className='skill-button' onClick={()=> this.props.openModal('see endorsements', {skill: skill})}>{skill.title } &nbsp;· &nbsp; # </div>
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(SkillItemShow); 