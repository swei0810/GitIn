import React from 'react'; 
import { withRouter } from 'react-router-dom'; 


class ExperienceItemForm extends React.Component { 
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.formatDate = this.formatDate.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);

        this.state = this.props.experienceItem; 
        this.state.startMonth = ''; 
        this.state.startYear = '';
        this.state.endMonth = '';
        this.state.endYear ='';
        this.state.start_date = '';
        this.state.end_date = '';
    }

    componentWillUnmount() {
        this.props.clearProfileErrors(); 
      }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    //onSubmit calls formatDate, formatDate should call validateSubmit, validateSubmit calls handleSubmit 
    validateSubmit() {
        let newErrors; 
        if (this.state.title =='') {
            this.props.receiveProfileErrors('title');
            newErrors = true; 
        }
        if (this.state.location =='') {
            this.props.receiveProfileErrors('location');
            newErrors = true; 

        } 
        if (this.state.start_date==' ') {
            this.props.receiveProfileErrors('start');
            newErrors = true; 
        } 
        if (this.state.company =='') {
            this.props.receiveProfileErrors('company')
            newErrors = true; 

        }

        if(!newErrors) {
            this.handleSubmit();
        }
    }

    formatDate(e) {
        e.preventDefault();
        const startDate = this.state.startMonth + ' ' + this.state.startYear;
        let endDate = this.state.endMonth + ' ' + this.state.endYear;
        if(endDate === " ") {
            endDate = 'Present'; 
        }
        this.setState({start_date:startDate, end_date:endDate}, ()=>{
            this.validateSubmit()});
    }

    handleSubmit() {
        
        this.props.processForm(this.state).then(()=> this.props.closeModal());

    }

    handleDelete(e){
        e.preventDefault(); 
        this.props.deleteForm(this.state.id);
        this.props.closeModal();

    }

    getDropList () {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(60), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
      );
    };

    render () {
        let deleteButton; 

        if (this.props.formType.includes('Edit')) {
            deleteButton = (<button className="delete-button" onClick={this.handleDelete}>Delete</button>)

        }

        let titleError; 
        let locationError; 
        let startDateError; 
        let companyNameError; 
        if (this.props.errors) {
 
            if (this.props.errors.includes('title')) {
                titleError = 'Please enter your title';
            }
            if (this.props.errors.includes('location')){
                locationError = 'Please enter a location';
            }
            if(this.props.errors.includes('start')){
                startDateError ='Please enter a start date';
            }
            if (this.props.errors.includes('company')){
                companyNameError = 'Please enter a company name';
            }
        };
        
        
        return (
            <div> 
                <div className='modal-header'> 
                    <h2>{this.props.formType}</h2> 
                    <div onClick={this.props.closeModal} className="close-x"> X </div>
                </div> 

                <form onSubmit={this.formatDate}> 
                    <label>Title * <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder='Ex: Manager'/>

                    </label> 
                    <div className='education-errors'> {titleError} </div>

                    <br/>
                    <br/>

                    <label>Company * <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.company.name}
                            onChange={this.update('company')}
                            placeholder='Ex: Microsoft'/>
                    </label> 
                    <div className='education-errors'> {companyNameError} </div>

                    <br/>
                    <br/>
                    <label>Location * <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}
                            placeholder='Ex: London, United Kingdom'/>
                    </label> 
                    <div className='education-errors'> {locationError} </div>

                    <br/>
                    <br/>
                    <input type="checkbox" onClick={()=>$('.select-yr-2').toggle()}/>I am currently working in this role
                    <br/>
                    <br/>

                    <div className='modal-yr'> 

                            <div className='select-yr'>
                            <label>Start Date * <br/>
                                <select className='start-yr'
                                    onChange={this.update('startMonth')}> 
                                        <option selected>Month</option> 
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                </select> 
                                <br/>
                                <br/>


                                <select className='start-yr'
                                    onChange={this.update('startYear')}> 
                                    <option selected>Year</option> 

                                    {this.getDropList()}
                                </select> 
                                {/* <div className='education-errors'> {startDateError} </div> */}

                            </label> 
                            </div> 


                            <div className='select-yr-2'> 
                            <label>End Date <br/>
                                <select className='end-yr'
                                    onChange={this.update('endMonth')}> 
                                <option selected>Month</option> 
                                <option>January</option>
                                <option>March</option>
                                <option>February</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                                </select> 
                                <br/>
                                <br/>

                                
                                <select className='end-yr'
                                        onChange={this.update('endYear')}> 
                                    <option selected>Year</option> 

                                    {this.getDropList()}

                                </select> 
                            </label>
                            </div> 

                    </div> 


                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='education-errors'> {startDateError} </div>


                    {/* <label>Headline <br/>
                        <input
                            className='modal-input'
                            type='text'
                            // value={this.state.location}
                            // onChange={this.update('location')}
                         />
                    </label>  */}
                    <br/>
                    <br/>
                    <label>Description <br/>
                        <textarea 
                            rows="4" cols="99"
                            onChange={this.update('description')}
                            value={this.state.description}
                        />
                    </label> 
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

export default withRouter(ExperienceItemForm); 
