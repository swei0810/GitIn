import merge from 'lodash/merge'; 

import {
    RECEIVE_SKILL, 
    REMOVE_SKILL, 
    RECEIVE_USER_SKILLS
} from '../actions/skill_actions'; 

import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const skillsReducer = (state={}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_USER_SKILLS: 
            return merge({}, action.skills)
        case RECEIVE_SKILL:
            return merge({}, state, {[action.skill.id]: action.skill});
        case REMOVE_SKILL: 
            let newState = merge({}, state); 
            delete newState[action.skillId]; 
            return newState; 
        case RECEIVE_USER:
            return merge({}, state, action.payload.skills)  
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, action.payload.skills)
         default: 
            return state; 
    }
}

export default skillsReducer; 