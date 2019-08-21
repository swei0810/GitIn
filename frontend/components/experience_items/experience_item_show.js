import React from 'react'; 
import Modal from '../modal/modal';
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'



const mapDispatchToProps = dispatch => ({
    openModal: (modal,info) => dispatch(openModal(modal, info))

})






class ExperienceItemShow extends React.Component {

    calculateDuration() {

        const start = this.props.experienceItem.start_date; 
        const end =  this.props.experienceItem.end_date;
        // let end=''
        // const end = this.props.experienceItem.end_date;

        //HARD CODE CURRENT DATE FOR NOW
        // if (!this.props.experienceItem.end_date) {
        //     end = 'August 2019';
        // } else {
        //     end = this.props.experienceItem.end_date;
        // }

        // if (!end) {
        //     end = 'August 2019'
        // }
        

        const startYr = start.slice(start.length-4);
        const endYr = end.slice(end.length-4);


        const ds = Date.parse(start.slice(0,start.length-5) + "1, 2012");
        const de = Date.parse(end.slice(0,end.length-5) + "1, 2012");

        const startM =  new Date(ds).getMonth() + 1; 
        const endM = new Date(de).getMonth() + 1;

        const yr = parseInt(endYr)-parseInt(startYr); 
  
        let dur=''; 

        if (yr!=0 && !Number.isNaN(yr)) {
            dur += yr + ' yr  '
        }; 



        let mos; 
        if (endM < startM) {
            mos = endM - startM + 12 
        } else {
            mos = endM - startM 
        }

        if (mos!=0 && !Number.isNaN(mos)) {
            dur += mos + ' mos'
        }

        return dur; 
    }

    render() {
        const {experienceItem} = this.props; 
        if (!experienceItem) {
            return null; 
        }

        let editIcon = ''; 
        if (this.props.isCurrentUser) {
            editIcon = (<div className='icon-edit'>
            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal('edit experience', {experienceItem: experienceItem})}></i>
            </div>);
        }

        let companyPhoto = '';
        if (experienceItem.photoUrl) {
            companyPhoto =(<img className='item-img' src={experienceItem.photoUrl}/> );
        }else {
            companyPhoto = (<img className='item-img' src={window.default_comp}/>);
        }

        // let endDate = '';
        // if (!experienceItem.end_date) {
        //     endDate = 'Present';
        // }

        const duration = this.calculateDuration();

        return (






            <div > 
                {/* <div> 
                <img className='experience-img' src={window.gate}/> 
                </div>  */}
                <div className='item'>
                    <div> 
                    {/* <img className='item-img' src={experienceItem.photoUrl}/>  */}
                    {companyPhoto}
                    </div> 

                    <div className='item-info'>
                        <div className='item-title'>
                            {/* <Modal /> */}
                            <div className='item-title'>{experienceItem.title}</div>
                            {editIcon}
                        </div>
                        <div className='item-sub'>{experienceItem.company.name}</div>
                        <div className='item-sub-2'>{experienceItem.start_date} - {experienceItem.end_date} &nbsp;· &nbsp; {duration}</div>
                        <div className='item-sub-2'>{experienceItem.location}</div>
                        <br/>
                        <div className='item-description'>{experienceItem.description}</div>
                        <br/>

                    </div> 

                </div> 
            </div>
        )
    }



}

// export default ExperienceItemShow
export default connect(null, mapDispatchToProps)(ExperienceItemShow); 