import merge from 'lodash/merge';

import {
    RECEIVE_EXPERIENCE_ITEM,
    REMOVE_EXPERIENCE_ITEM, 
    RECEIVE_ALL_EXPERIENCE_ITEMS
} from '../actions/experience_item_actions'; 


import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const experienceItemsReducer = (state={}, action) => {
    debugger
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_ALL_EXPERIENCE_ITEMS: 
            return merge({}, action.experienceItems)
        case RECEIVE_EXPERIENCE_ITEM: 
            debugger
            return merge({}, state, {[action.experienceItem.id]: action.experienceItem});
        case REMOVE_EXPERIENCE_ITEM:
            let newState = merge({}, state); 
            delete newState[action.experienceItemId]; 
            return newState; 
        case RECEIVE_USER:
            return merge({}, state, action.payload.experienceItems ) 
        case RECEIVE_CURRENT_USER: 
            return merge({},state, action.payload.experienceItems )
        default: 
            return state; 
    }
};

export default experienceItemsReducer; 