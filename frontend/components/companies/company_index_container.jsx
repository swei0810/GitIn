import React from 'react'; 
import { connect } from 'react-redux'; 
import { fetchAllCompanies, fetchCompany} from '../../actions/company_actions';
import CompanyIndex from './company_index';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';


const mapStateToProps = state => {

    return {
        companies: Object.values(state.entities.companies),
        users: Object.values(state.entities.users),
        currentUserId: state.session.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllCompanies: () => dispatch(fetchAllCompanies()), 
        fetchCompany: (id) => dispatch(fetchCompany(id)), 
        fetchAllUsers: () => dispatch(fetchAllUsers()), 
        fetchUser: (id) => dispatch(fetchUser(id)), 
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CompanyIndex)