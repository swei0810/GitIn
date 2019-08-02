import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER'; 

export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
)

const receiveUser = user => ({
    type: RECEIVE_USER, 
    user  
})