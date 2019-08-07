import {
    RECEIVE_PROFILE_ERRORS, 
    CLEAR_PROFILE_ERRORS
} from '../../actions/user_actions';

export default (state = null, action) => {
    Object.freeze(state); 

    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors;
        case CLEAR_PROFILE_ERRORS:
            return null; 
        default: 
            return state;
    }
}