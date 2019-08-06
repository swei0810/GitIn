import React from 'react'; 
import { withRouter } from 'react-router-dom'; 



class EducationItemForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.educationItem; 
    }

    componentDidUpdate() {
        
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state);
        debugger
        this.props.closeModal();
        this.props.history.push(`/git/${this.state.user_id}`);
        
        // this.props.processForm(this.state).then(() => this.props.history.push(`/git/${this.state.user_id}`)); //this has to change 
        // this.props.processForm(this.state);




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


            </div>
        )

    }

}

export default withRouter(EducationItemForm); 