import * as APIUtil from '../util/education_item_api_util';

export const RECEIVE_ALL_EDUCATION_ITEMS = 'RECEIVE_ALL_EDUCATION_ITEMS'
export const RECEIVE_EDUCATION_ITEM = 'RECEIVE_EDUCATION_ITEM'; 
export const REMOVE_EDUCATION_ITEM = 'REMOVE_EDUCATION_ITEM'; 


export const fetchAllEducationItems = () => dispatch => (
    APIUtil.fetchAllEducationItems().then(educationItems => dispatch(receiveAllEducationItems(educationItems)))
);

export const fetchEducationItem = id => dispatch => {
    return APIUtil.fetchEducationItem(id)
        .then(educationItem => dispatch(receiveEducationItem(educationItem))); 
}

export const createEducationItem = educationItem => dispatch => {
    return APIUtil.createEducationItem(educationItem)
        .then(educationItem => {
             return dispatch(receiveEducationItem(educationItem));
    });
};

export const updateEducationItem = educationItem => dispatch => {
    return APIUtil.updateEducationItem(educationItem)
        .then(educationItem => {
            return dispatch(receiveEducationItem(educationItem));
        });
};

export const deleteEducationItem = educationItemId => dispatch => {
    return APIUtil.deleteEducationItem(educationItemId)
        .then(educationItem => {
             return dispatch(removeEducationItem(educationItemId));
    });
};

const receiveAllEducationItems = (educationItems) => ({
    type: RECEIVE_ALL_EDUCATION_ITEMS, 
    educationItems
})

const receiveEducationItem = educationItem => ({
    type: RECEIVE_EDUCATION_ITEM, 
    educationItem, 
})

const removeEducationItem = educationItemId => ({
    type: REMOVE_EDUCATION_ITEM, 
    educationItemId, 
})