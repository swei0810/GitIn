import merge from 'lodash/merge'; 

import {RECEIVE_CONNECTION, REMOVE_CONNECTION} from '../actions/connection_actions';

import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const connectionsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_CONNECTION: 
            return merge({}, state, {[action.connection.id]: action.connection})
        case REMOVE_CONNECTION:
            let newState = merge({}, state); 
            delete newState[action.connectionId]; 
            return newState; 
        case RECEIVE_USER: 
            return merge({}, state, action.payload.connections)
        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.payload.connections)

        default: 
            return state; 
    }
}

export default connectionsReducer; 