import React from 'react'; 
import { withRouter } from 'react-router-dom'; 



class EducationItemForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.state = this.props.educationItem; 
        this.validateSubmit = this.validateSubmit.bind(this);
        debugger 

    }

    componentWillUnmount() {
        debugger 
        this.props.clearProfileErrors(); 
      }
    

    validateSubmit(e) {
        debugger
        e.preventDefault(); 
        if (this.state.school==''){
            debugger
            this.props.receiveProfileErrors('Please enter a school name');
        } else {
            this.handleSubmit();
        }

    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit() {
        debugger
        this.props.processForm(this.state).then(()=> this.props.closeModal());
        // this.props.closeModal();
        // this.props.history.push(`/git/${this.state.user_id}`);
        
        // this.props.processForm(this.state).then(() => this.props.history.push(`/git/${this.state.user_id}`)); //this has to change 
        // this.props.processForm(this.state);
    }

    handleDelete(e){
        e.preventDefault(); 
        this.props.deleteForm(this.state.id);
        this.props.closeModal();

    }

    getDropList () {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(120), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
      );
    };

    getDropListEnd () {
        const year = new Date().getFullYear() + 7;
      return (
          Array.from( new Array(127), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
      );
    };


    render () {
        let deleteButton; 

        if (this.props.formType.includes('Edit')) {
            deleteButton = (<button className="delete-button" onClick={this.handleDelete}>Delete</button>)
        }

        // debugger
        let schoolError; 
        if (this.props.errors){
            schoolError = this.props.errors; 
        }

        return (
            <div> 
                <div className='modal-header'> 
                    <h2>{this.props.formType}</h2> 
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div> 
                <form onSubmit={this.validateSubmit}> 
                    <label>School <br/>
                        <input
                           className='modal-input'
                            type='text'
                            value={this.state.school.name}
                            onChange={this.update('school')}
                            placeholder='Ex: Boston University'/>
                    </label> 
                    <div className='education-errors'> {schoolError} </div>
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
                        <div className='select-yr'>
                        <label>Start Year <br/>
                        
                            <select className='start-yr'
                                onChange={this.update('start_yr')}> 
                                 <option selected>Year</option> 
                                 {this.getDropList()}
                            </select> 

                            
                        </label>   
                        </div> 

                        {/* HOW DO I UPDATE THESE YEARS */}
                        <div className='select-yr-2'> 
                        <label>End Year (or expected) <br/>
                            <select className='end-yr'
                                onChange={this.update('end_yr')}> 
                                <option selected>Year</option> 
                                {this.getDropListEnd()}
                            </select> 
                        </label> 
                        </div> 
                    </div> 
                    <br/>
                    <br/>
                    <label>Activities and societies <br/>
                        <textarea 
                                rows="8" cols="99"
                                value={this.state.activities}
                                onChange={this.update('activities')}
                            />
                    </label> 
                    <br/> 
                    <p className='ed-footer'> Ex: Alpha Phi Omega, Marching Band, Volleyball</p>
                    <br/> 
                    <br/>


                    <input className='modal-submit' type='submit' value='Save' /> 
                </form>
                {deleteButton}

                <br/>
                <br/>

            </div>
        )

    }

}

export default withRouter(EducationItemForm); 