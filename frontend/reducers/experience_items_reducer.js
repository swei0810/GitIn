import merge from 'lodash/merge';

import {
    RECEIVE_EXPERIENCE_ITEM,
    REMOVE_EXPERIENCE_ITEM
} from '../actions/experience_item_actions'; 


//search action.payload 
const experienceItemsReducer = (state={}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_EXPERIENCE_ITEM: 
            return merge({}, state, {[action.experienceItem.id]: action.experienceItem});
        case REMOVE_EXPERIENCE_ITEM:
            let newState = merge({}, state); 
            delete newState[action.experienceItemId]; 
            return newState; 
        case RECEIVE_USER:
            return merge({}, state, action.experienceItems) 
        default: 
            return state; 
    }
};

export default experienceItemsReducer; 