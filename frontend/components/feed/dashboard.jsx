    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ProfileNavbar from '../user/profile_nav';

class Dashboard extends React.Component {

    // componentDidMount() {
    //     debugger
    //     this.props.fetchUser(this.props.match.params.userId);
    // }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.match.params.userId  != this.props.match.params.userId) {
    //         this.props.fetchUser(this.props.match.params.userId);
    //     }

    // }

    render() {        
        if (!this.props.users) {
            return null;
        }

        // let isCurrentUser = true; 
        // if(this.props.user.id != this.props.currentUserId) {
        //     isCurrentUser = false; 
        // }

        return (
            <div> 
                <div> 
                    <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId}/>


                </div>

                <div className='feed-container'> 
                    <div className='mini-profile'> 
                        mini profile goes here
                    </div>

                    <div className='posts'>
                        posts go here 
                    </div>
                    
                    <div className='tips' >
                        <img className='tips-img' src={window.tips} alt=""/>
                        
                    </div>
                </div> 
            </div> 



        )
    }
}
export default withRouter(Dashboard)