import merge from 'lodash/merge';

import {
    RECEIVE_EDUCATION_ITEM,
    REMOVE_EDUCATION_ITEM
} from '../actions/education_item_actions';

import { RECEIVE_USER } from '../actions/user_actions'; 


const educationItemsReducer = (state={}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_EDUCATION_ITEM: 
            return merge({}, state, {[action.educationItem.id]: action.educationItem});
        case REMOVE_EDUCATION_ITEM:
            let newState = merge({}, state); 
            delete newState[action.educationItemId]; 
            return newState; 
        case RECEIVE_USER:
            return merge({}, state, action.educationItems)  
        default: 
            return state; 
    }
};

export default educationItemsReducer; 