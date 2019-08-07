import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS
  } from '../../actions/session_actions';
  
  export default (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return null;
      case CLEAR_ERRORS: 
         return null; 
      default:
        return state;
    }
  };
  