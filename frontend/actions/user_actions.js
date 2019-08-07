import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'; 


export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'; 
export const CLEAR_PROFILE_ERRORS = 'CLEAR_PROFILE_ERRORS';

export const receiveProfileErrors = errors => ({
    type: RECEIVE_PROFILE_ERRORS, 
    errors
})

export const clearProfileErrors = () => ({
    type: CLEAR_PROFILE_ERRORS
})


export const fetchAllUsers = () => dispatch => (
    APIUtil.fetchAllUsers().then(users =>(dispatch(receiveAllUsers(users))))
)

export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(user => (dispatch(receiveUser(user))))
);

export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveUser(user))))
)

const receiveUser = payload => ({
    type: RECEIVE_USER, 
    payload  
})

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS, 
    users, 
})