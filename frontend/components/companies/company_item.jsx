import React from 'react';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import {fetchCompany} from '../../actions/company_actions';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    fetchCompany: id => dispatch(fetchCompany(id))
})


class CompanyItem extends React.Component {
    render() {
        const {company} = this.props;

        return (
            <div className='company'>

            <img className='company-item-img' src={company.photoUrl}/>
            <br/>
            <div className='company-name'>{company.name}</div>
            </div>
        )
    }


}


export default connect(null,mapDispatchToProps)(CompanyItem);