import { merge } from 'lodash'; 

import {
    RECEIVE_ALL_ENDORSEMENTS,
    RECEIVE_ENDORSEMENT,
    DELETE_ENDORSEMENT
}  from '../actions/endorsement_actions'; 

import { RECEIVE_ALL_SKILLS } from '../actions/skill_actions'; 

import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_CURRENT_USER, logoutCurrentUser } from '../actions/session_actions';



const endorsementsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_ALL_ENDORSEMENTS: 
            return merge({}, action.endorsements)
        case RECEIVE_ENDORSEMENT:
            return merge({}, state, {[action.endorsement.id]: action.endorsement})
        // case DELETE_ENDORSEMENT: 
        
        //     // let newState = merge({}, state);
        //     // delete newState[currentUser.id]; //should fix this later
        //     return newState; 
        case RECEIVE_ALL_SKILLS: 
            return merge({}, state, action.skills.endorsements)
        case RECEIVE_USER:
            return merge({}, state, action.payload.endorsements)
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, action.payload.endorsements)
        default: 
            return state 
    }

}

export default endorsementsReducer; 