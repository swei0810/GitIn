import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_ENDORSER } from '../actions/user_actions'; 


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS: 
      return merge({}, action.users)
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.payload.user.id]: action.payload.user });
    case RECEIVE_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user} ); //////state?
    case RECEIVE_ENDORSER: 
      return merge({}, state, { [action.payload.user.id]: action.payload.user })

    default:
      return state;
  }
};

export default usersReducer;