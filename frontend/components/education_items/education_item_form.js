import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

class EducationItemForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.educationItem; 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDeafult(); 
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    render () {
        return (
            <div> 
                <div className='modal-header'> 
                    <h2>{this.props.formType}</h2> 
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div> 
                <form onSubmit={this.handleSubmit}> 
                    <label>School <br/>
                        <input
                           className='modal-input'
                            type='text'
                            value={this.state.school}
                            onChange={this.update('school')}
                            placeholder='Ex: Boston University'/>
                    </label> 
                    <br/>
                    <br/>

                    <label>Degree <br/>
                        <input
                           className='modal-input'                        
                            type='text'
                            value={this.state.degree}
                            onChange={this.update('degree')}
                            placeholder="Ex: Bachelor's"/>
                    </label> 
                    <br/>
                    <br/>

                    <label>Field of Study <br/>
                        <input
                           className='modal-input'
                            type='text'
                            value={this.state.field}
                            onChange={this.update('field')}
                            placeholder="Ex: Buisness"/>
                    </label> 
                    <br/>
                    <br/>
                    <div className='modal-yr'> 
                        <div>
                        <label>Start Year <br/>
                            <select> 
                                <option>2019</option>
                                <option>1900</option>
                            </select> 
                        </label>   
                        </div> 

                        {/* HOW DO I UPDATE THESE YEARS */}
                        <div> 
                        <label>End Year (or expected) <br/>
                            <select> 
                                <option>2026</option>
                                <option>1900</option>
                            </select> 
                        </label> 
                        </div> 
                    </div> 
                    <br/>
                    <br/>
                    <label>Activities and societies <br/>
                        <textarea 
                                rows="4" cols="99"
                                onChange={this.update('activities')}
                            >{this.state.activities}</textarea>
                        {/* <input
                            type='text'
                            value={this.state.activities}
                            onChange={this.update('activities')}/> */}
                    </label> 
                    <br/> 
                    Ex: Alpha Phi Omega, Marching Band, Volleyball
                    <br/> 
                    <br/>


                    <input className='modal-submit' type='submit' value='Save' /> 
                </form>


            </div>
        )

    }

}

export default withRouter(EducationItemForm); 