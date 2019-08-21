import * as APIUtil from '../util/education_item_api_util';
import {receiveProfileErrors} from './user_actions';


export const RECEIVE_ALL_EDUCATION_ITEMS = 'RECEIVE_ALL_EDUCATION_ITEMS'
export const RECEIVE_EDUCATION_ITEM = 'RECEIVE_EDUCATION_ITEM'; 
export const REMOVE_EDUCATION_ITEM = 'REMOVE_EDUCATION_ITEM'; 
export const RECEIVE_USER_EDUCATION_ITEMS = 'RECEIVE_USER_EDUCATION_ITEMS'



export const fetchUserEducationItems = (userId) => dispatch => (
    APIUtil.fetchUserEducationItems(userId).then(educationItems => dispatch(receiveUserEducationItems(educationItems)))
)

export const createEducationItem = educationItem => dispatch => (
    APIUtil.createEducationItem(educationItem)
        .then(educationItem => (dispatch(receiveEducationItem(educationItem))), 
        err => dispatch(receiveProfileErrors(err.responseJSON)))
);

export const updateEducationItem = educationItem => dispatch => (
    APIUtil.updateEducationItem(educationItem)
        .then(educationItem=>(dispatch(receiveEducationItem(educationItem)), 
        err => (dispatch(receiveProfileErrors(err.responseJSON)))))
)



export const deleteEducationItem = educationItemId => dispatch => {
    return APIUtil.deleteEducationItem(educationItemId)
        .then(educationItem => {
             return dispatch(removeEducationItem(educationItemId));
    });
};

const receiveEducationItem = educationItem => ({
    type: RECEIVE_EDUCATION_ITEM, 
    educationItem, 
})

const removeEducationItem = educationItemId => ({
    type: REMOVE_EDUCATION_ITEM, 
    educationItemId, 
})

const receiveUserEducationItems = educationItems => ({
    type: RECEIVE_USER_EDUCATION_ITEMS, 
    educationItems
})