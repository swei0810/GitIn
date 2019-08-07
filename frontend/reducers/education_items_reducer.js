import merge from 'lodash/merge';

import {
    RECEIVE_EDUCATION_ITEM,
    REMOVE_EDUCATION_ITEM, 
    RECEIVE_USER_EDUCATION_ITEMS
} from '../actions/education_item_actions';

import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const educationItemsReducer = (state={}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_EDUCATION_ITEM: 
            return merge({}, state, {[action.educationItem.id]: action.educationItem});
        case REMOVE_EDUCATION_ITEM:
            let newState = merge({}, state); 
            delete newState[action.educationItemId]; 
            return newState; 
        case RECEIVE_USER_EDUCATION_ITEMS: 
            return merge({}, action.educationItems)
        case RECEIVE_USER:
            return merge({}, state, action.payload.educationItems)  
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, action.payload.educationItems)
        default: 
            return state; 
    }
};

export default educationItemsReducer; 
