import React from 'react'; 
import { connect } from 'react-redux'; 
import { createSkill } from '../../actions/skill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const skill = {title: ''}; 
    return {
        skill
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createSkill: skill => dispatch(createSkill(skill))
    }
}


class CreateSkillForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = this.props.skill; 
        this.handleSubmit = this.handleSubmit.bind(this); 

    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createSkill(this.state).then(()=> this.props.closeModal()); 

    }

    render() {
        return (
            <div> 
                <div className='modal-header'>
                    <h2>Add skills</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div> 
                <form onSubmit={this.handleSubmit}>
                    <label> Skill * <br/>
                        <input
                            className='modal-input'
                            type='text'
                            onChange={this.update('title')}
                            placeholder='ex: Data Analysis'/>
                    </label>
                    <br/>
                    <p className='ed-footer'> You can add up to 50 skills</p>
                    <input className='modal-submit' type='submit' value='Add' />        
                </form>
                <br/> 
                <br/>
            </div>
        )
   

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSkillForm);