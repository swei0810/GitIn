import React from 'react'; 
import { withRouter } from 'react-router-dom'; 


class ExperienceItemForm extends React.Component { 
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = this.props.experienceItem; 
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    //renderErrors

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    getDropList () {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(60), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
      );
    };

    //have to change the type for dates 

    render () {
        return (
            <div> 
                <div className='modal-header'> 
                    <h2>{this.props.formType}</h2> 
                    <div onClick={this.props.closeModal} className="close-x"> X </div>
                </div> 

                <form onSubmit={this.handleSubmit}> 
                    {/* <div onClick={this.props.closeModal} className="close-x"> X </div> */}
                    <label>Title <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder='Ex: Manager'/>

                    </label> 
                    <br/>
                    <br/>

                    <label>Company <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.company}
                            onChange={this.update('company')}
                            placeholder='Ex: Microsoft'/>
                    </label> 
                    <br/>
                    <br/>
                    <label>Location <br/>
                        <input
                            className='modal-input'
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}
                            placeholder='Ex: London, United Kingdom'/>
                    </label> 
                    <br/>
                    <br/>
                    <input type="checkbox" />I am currently working in this role
                    <br/>
                    <br/>

                    <div className='modal-yr'> 

                            <div className='select-yr'>
                            <label>Start Date <br/>
                                <select className='start-yr'> 
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

                                <select className='start-yr'> 
                                    {this.getDropList()}
                                </select> 
     


                            </label> 
                            </div> 

                            <div className='select-yr-2'> 
                            <label>End Date <br/>
                                <select className='end-yr'> 
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
                                

                                <select className='end-yr'> 
                                    {this.getDropList()}

                                </select> 
                            </label>
                            </div> 
                    </div> 

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <label>Headline <br/>
                        <input
                            className='modal-input'
                            type='text'
                            // value={this.state.location}
                            // onChange={this.update('location')}
                         />
                    </label> 
                    <br/>
                    <br/>
                    <label>Description <br/>
                        <textarea 
                            rows="4" cols="99"
                            onChange={this.update('description')}
                            value={this.state.description}
                        />
                        {/* <input
                            className='modal-input-description'

                            type='text'
                            value={this.state.description}
                            onChange={this.update('description')}/> */}
                    </label> 
                    <br/>
                    <br/>

                    <input className='modal-submit' type='submit' value='Save' /> 
                </form>


            </div>
        )
    }



}

export default withRouter(ExperienceItemForm); 
