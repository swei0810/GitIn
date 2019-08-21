//modal for endorsement show 
import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteSkill } from '../../actions/skill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const skill = ownProps.skill;  
    return {
        skill
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteSkill: id => dispatch(deleteSkill(id))
    }
}

class EndorsementShow extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.skill;
    }

    render() {
        let deleteIcon=''; 
        if (currentUser.id === this.props.skill.user_id) {
            deleteIcon = ( <div className='icon-delete' onClick={()=>this.props.deleteSkill(this.props.skill.id).then(()=>this.props.closeModal())}> <i className="far fa-trash-alt"></i></div>)
        }

        return (
            <div>
                <div className='modal-header'>
                    <h2>{this.props.skill.title} (#) </h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
                <div>This skill is endorsed by ... </div>
                {/* trasncan icon on click delette */}
                <br/>
                <br/>
                <br/>
                <br/>
                {deleteIcon}


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndorsementShow)