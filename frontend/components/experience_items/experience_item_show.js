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
        const current = new Date(); 


        const startYr = start.slice(start.length-4);
        let endYr = end.slice(end.length-4);

        if (endYr==="" || this.props.experienceItem.end_date === 'Present'){
            endYr = current.getFullYear(); 
        }

        const ds = Date.parse(start.slice(0,start.length-5) + "1, 2012");
        const de = Date.parse(end.slice(0,end.length-5) + "1, 2012");

        const startM =  new Date(ds).getMonth() + 1; 
        let endM = new Date(de).getMonth() + 1;


        if (!endM) {
            endM = current.getMonth() + 1; 
        }

        let yr = parseInt(endYr)-parseInt(startYr); 
  
        let dur=''; 

       


        let mos; 
        if (endM < startM) {
            mos = endM - startM + 13
            yr -= 1 
        } else {
            mos = endM - startM +1
        }


        if (yr!=0 && !Number.isNaN(yr)) {
            dur += yr + ' yr  '
        }; 

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

        let endDate = '';
        if (experienceItem.end_date === '') {
            endDate = 'Present';
        } else {
            endDate = experienceItem.end_date; 
        }

        const duration = this.calculateDuration();

        return (
            <div > 
                <div className='item'>
                    <div> 
                    {companyPhoto}
                    </div> 

                    <div className='item-info'>
                        <div className='item-title'>
                            <div className='item-title'>{experienceItem.title}</div>
                            {editIcon}
                        </div>
                        <div className='item-sub'>{experienceItem.company.name}</div>
                        <div className='item-sub-2'>{experienceItem.start_date} - {endDate} &nbsp;· &nbsp; {duration}</div>
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