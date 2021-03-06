    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ProfileNavbar from '../user/profile_nav';
import PostIndex from '../feed/post_index';


class Dashboard extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.currentUserId);
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.match.params.userId  != this.props.match.params.userId) {
    //         this.props.fetchUser(this.props.match.params.userId);
    //     }

    // }

    render() {        
        // if (!this.props.users) {
        //     return null;
        // }

        // let isCurrentUser = true; 
        // if(this.props.user.id != this.props.currentUserId) {
        //     isCurrentUser = false; 
        // }


        let profilePhoto = '';
        if (this.props.currentUser.photoUrl) {
            profilePhoto = (<img className='mini-profile-photo' src={this.props.currentUser.photoUrl}/>);
        }else {
            profilePhoto = (<img className='mini-profile-photo' src={window.default_prof}/>);
        }

        

        return (
            <div> 
                <div> 
                    <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId}/>
                    {/* refactor this */}


                </div>

                <div className='feed-container'> 
                    <div className='mini-profile'> 
                        <img className='mini-background' src={window.profile_background}/>
                        <div className='mini-profile-bottom'>
                        <div className='mini-img'>{profilePhoto}</div>
                        <div className='mini-name'>{this.props.currentUser.first_name + ' '+this.props.currentUser.last_name}</div>
                        <div className='mini-title'>{this.props.currentUser.headline}</div>
                        <div className='mini-git'><i className="fab fa-github-square" onClick={e => alert("No github url yet")}></i></div>
                        </div> 
                        <div className='mini-bottom'>
                            <div className='mini-num-container'>
                                <div className='mini-num-text'>Number of Connections</div>  
                                <div className='mini-num'>0</div>
                            </div>
                            <div className='mini-num-container'>
                            <div className='mini-num-text'>Number of Interests</div>
                            <div className='mini-num'>0</div>
                            </div>

                        </div>

                    </div>



{/* openModal pass currentUser */}

                    <div className='posts-container'>
                        <div className='post-create'>
                            <div className='post-create-container'>
                               <div className='icon-create' onClick={() => this.props.openModal('create post', {educationItem: this.props.currentUser})}>
                                  <div className='icon-post' ><i className="far fa-edit"></i></div> 
                                  <div className='icon-text'>&nbsp; Start a post</div>
                                </div> 
                                <div className='icon-post'><i className="fas fa-camera" onClick={e => alert("click on start a post to attach img")} ></i></div>
                                <div className='icon-post'><i className="fas fa-video" onClick={e => alert("not implemented yet")} ></i></div>
                                <div className='icon-post'><i className="fas fa-file-alt" onClick={e => alert("not implemented yet")}></i></div>
                            </div>
                           <div className='article' onClick={e => alert("not implemented yet")}>Write an article on GitIn</div>

                        </div> 





                        <div className='post-index'>
                            <PostIndex posts={this.props.posts}/>
                        </div>
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