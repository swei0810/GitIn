import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';

//1st degree connection is hardcoded right now 

const mapStateToProps = (state, ownProps) => {
    return {
        endorser: state.entities.users[ownProps.userId]
    }
}



const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

class EndorserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { endorser } = this.props;
        if (!endorser) {
            return null;
        }

        let profilePhoto = '';
        if (endorser.photoUrl) {
            profilePhoto = (<img className='mini-profile-photo' src={endorser.photoUrl} />);
        } else {
            profilePhoto = (<img className='mini-profile-photo' src={window.default_prof} />);
        }

        return (
            <div className='endorser-profile'>
                <div className='endorser-img'>{profilePhoto}</div>

                <div className='endorser-profile-info'>
                    <Link to={`/git/${endorser.id}`} className='endorser-link'> <div className='endorser-name'>{endorser.first_name + ' ' + endorser.last_name} </div> </Link>
                    <div className='connected-title'>{endorser.headline}</div>
                    <br />
                </div>


            </div>

        )

    }



}

export default connect(mapStateToProps, mapDispatchToProps)(EndorserShow);