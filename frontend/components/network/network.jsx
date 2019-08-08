import React from 'react'; 
import { connect } from 'react-redux'; 
import UserMiniProfile from './user_mini_profile';
import { fetchAllUsers } from '../../actions/user_actions';


// const mapStateToProps = (state, ownProps) => {
//     debugger
//     return {
//         users: Object.values(ownProps.users)
//     }
// }

const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

class Network extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchAllUsers();
    }

    render() {
        debugger
        const {users} = this.props; 
        if (!users){
            return null;
        }


        return (
            <div> 
                <ul className='all-posts'>
                    {users.map(user => <UserMiniProfile key={user.id} user={user}/>)}
                </ul>
            </div>
        )

    }
}

export default connect(null, mapDispatchToProps)(Network)