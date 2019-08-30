import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import { Link } from 'react-router-dom';

//1st degree connection is hardcoded right now 

const mapStateToProps = (state, ownProps) => {
    return {
       user: state.entities.users[ownProps.userId]
    }
}



const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

class ConnectionsItems extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId); 
    }

    render() {
        const {user} = this.props; 
        if (!user) {
            return null; 
        }

        let profilePhoto = '';
        if (user.photoUrl) {
            profilePhoto = (<img className='mini-profile-photo' src={user.photoUrl}/>);
        }else {
            profilePhoto = (<img className='mini-profile-photo' src={window.default_prof}/>);
        }

        return (
            <div className='connected-profile'> 
                <div className='mini-img'>{profilePhoto}</div>

                    <div className='connected-profile-info'> 
                        <Link to={`/git/${user.id}`}> <div className='connected-name'>{user.first_name + ' '+user.last_name} <div className='degree'>&nbsp;• 1st</div></div> </Link>
                        <div className='connected-title'>{user.headline}</div>
                        <div className='connected-location'>{user.location}</div>
                        <br/>
                    </div>
                    <div className='mini-index-2' ><button className='message' onClick={()=> alert("Can't message yet")}> Message</button></div> 

               
            </div>
    
        )

    }
        


}

export default connect(mapStateToProps,mapDispatchToProps)(ConnectionsItems);