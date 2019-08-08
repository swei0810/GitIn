import merge from 'lodash/merge';

import {
    RECEIVE_PROFILE_ERRORS, 
    CLEAR_PROFILE_ERRORS
} from '../../actions/user_actions';

export default (state = [], action) => {
    Object.freeze(state); 

    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            const newState = merge([], state); 
            newState.push(action.errors)
            // action.errors; 
            return newState;
        case CLEAR_PROFILE_ERRORS:
            return []; 
        default: 
            return state;
    }
}