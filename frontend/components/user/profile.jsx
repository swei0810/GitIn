    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ExperienceItemIndex from "../experience_items/experience_item_index";
import EducationItemIndex from '../education_items/education_item_index';
import SkillsIndex from '../skills/skills_index';
import ProfileSummary from './profile_summary';
import ProfileAbout from './profile-about';
import ProfileNavbar from './profile_nav';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userId  != this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }

    }

    render() {        
        if (!this.props.user) {
            return null;
        }

        let isCurrentUser = true; 
        if(this.props.user.id != this.props.currentUserId) {
            isCurrentUser = false; 
        }


        return (
            <div> 
                <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId}/>

            <div className='profile'>
                

                <div className='profile-summary'> 
                    <ProfileSummary user={this.props.user} isCurrentUser={isCurrentUser}/>
                </div>

                <div className='profile-about'> 
                    <ProfileAbout user={this.props.user} isCurrentUser={isCurrentUser}/>
                </div>

                <div className='experience-item-container'>
                    <ExperienceItemIndex userId={this.props.user.id} isCurrentUser={isCurrentUser}/>
                </div> 

                <div className='education-item-container'>
                    <EducationItemIndex userId={this.props.user.id} isCurrentUser={isCurrentUser}/>
                </div> 

                <div className='education-item-container'>
                    <SkillsIndex userId={this.props.user.id} isCurrentUser={isCurrentUser} />
                </div>


            </div>
            </div>

        )
    }
}
export default withRouter(Profile)