import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_ENDORSER = 'RECEIVE_ENDORSER';
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

export const fetchEndorser = id => dispatch => (
    APIUtil.fetchEndorser(id).then(user => (dispatch(receiveEndorser(user))))
);


export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveUser(user)))
    , err => dispatch(receiveProfileErrors(err.responseJSON)))
)


const receiveUser = payload => ({
    type: RECEIVE_USER, 
    payload  
})

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS, 
        users, 
    }
}

const receiveEndorser = payload => ({
    type: RECEIVE_ENDORSER,
    payload
})


