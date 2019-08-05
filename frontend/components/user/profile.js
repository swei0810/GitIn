    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ExperienceItemIndex from "../experience_items/experience_item_index";
import EducationItemIndex from '../education_items/education_item_index';
import ProfileSummary from '../user/profile_summary';
import ProfileAbout from '../user/profile-about';

class Profile extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='profile'>
                <div className='profile-summary'> 
                    <ProfileSummary />
                </div>

                <div className='profile-about'> 
                    <ProfileAbout />
                </div>

                <div className='experience-item-container'>
                    <ExperienceItemIndex />
                </div> 

                <div className='education-item-container'>
                    <EducationItemIndex />
                </div> 
            </div>
        )
    }
}
export default withRouter(Profile)