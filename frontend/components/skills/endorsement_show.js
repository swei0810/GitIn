//modal for endorsement show 
import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteSkill } from '../../actions/skill_actions';
import { closeModal } from '../../actions/modal_actions';
import {fetchAllEndorsements} from '../../actions/endorsement_actions'; 
import EndorserShow from './endorser_show'; 

const mapStateToProps = (state, ownProps) => {

    const skill = ownProps.skill;  
    const endorsements = Object.values(state.entities.endorsements)
    return {
        skill, 
        endorsements: endorsements.filter(endorsement => endorsement.skill_id === skill.id ), 
        currentUser: state.entities.users[state.session.id],
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteSkill: id => dispatch(deleteSkill(id)), 
        fetchAllEndorsements: skillId => dispatch(fetchAllEndorsements(skillId))
    }
}

class EndorsementShow extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.skill;
    }

    componentDidMount() {
        this.props.fetchAllEndorsements(this.props.skill.id);
    }

    render() {
        let deleteIcon=''; 
        if (this.props.currentUser.id === this.props.skill.user_id) {
            deleteIcon = (<div className='icon-delete-skill' onClick={() => this.props.deleteSkill(this.props.skill.id).then(() => this.props.closeModal())}> <i className="far fa-trash-alt"></i></div>)
        }
       

        return (
            <div>
                <div className='modal-header'>
                    <h2>{this.props.skill.title} ({this.props.skill.endorsementIds.length}) </h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
                <div>This skill is endorsed by ... </div>
                    {/* endorser picture just like connections page  */}
                <br/>
                <div className='endorser-profiles'>
                    {this.props.endorsements.map(endorsement => <EndorserShow key={endorsement.id} userId={endorsement.user_id} />)}
                </div>


                {deleteIcon}


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndorsementShow)