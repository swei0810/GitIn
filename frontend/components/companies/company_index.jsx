import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import ProfileNavbar from '../user/profile_nav';
import CompanyItem from '../companies/company_item';

class CompanyIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllCompanies();
    }

    render() {
        const {companies} =this.props;
        const {users} = this.props; 
        if (!users){
            return null;
        }

        return (
            
            <div>

                <ProfileNavbar users={users} currentUserId={this.props.currentUserId}/>
                <br/>

                <div className ='companies-header'>Companies trending in your network </div>
                <br/>
                <br/>

                <div className='companies'>
                    {companies.map(company=> <CompanyItem key={company.id} company={company} />)}
                </div>
            </div>
        )
    }

    
}
export default withRouter(CompanyIndex);