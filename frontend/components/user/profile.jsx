    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ExperienceItemIndex from "../experience_items/experience_item_index";
import EducationItemIndex from '../education_items/education_item_index';
import ProfileSummary from './profile_summary';
import ProfileAbout from './profile-about';
import ProfileNavbar from './profile_nav';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        return (
            <div> 
                <ProfileNavbar />
            <div className='profile'>
                

                <div className='profile-summary'> 
                    <ProfileSummary user={this.props.user} />
                </div>

                <div className='profile-about'> 
                    <ProfileAbout user={this.props.user} />
                </div>

                <div className='experience-item-container'>
                    <ExperienceItemIndex experienceIds={this.props.user.experienceIds} />
                </div> 

                <div className='education-item-container'>
                    <EducationItemIndex educationIds={this.props.user.educationIds} />
                </div> 
            </div>
            </div>

        )
    }
}
export default withRouter(Profile)